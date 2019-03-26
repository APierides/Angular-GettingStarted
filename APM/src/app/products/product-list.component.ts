import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string = "";
  filteredProducts: IProduct[];
  products: IProduct[];
  _listFilter: string;

  constructor(private productService: ProductService) {



  }
  get listFilter() {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.filterList(value) : this.products;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = "Product List :" + message;
  }

  filterList(filter: string): IProduct[] {
    filter = filter.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filter) >= 0);
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }


  ngOnInit(): void {
    console.log("step get data");
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any>error
    );

  }
}