import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  filteredProducts: IProduct[];
  products: IProduct[];
  // products: IProduct[] = [{
  //   "productId": 1,
  //   "productName": "Leaf Rake",
  //   "productCode": "GDN-0011",
  //   "releaseDate": "March 19, 2016",
  //   "description": "Leaf rake with 48-inch wooden handle.",
  //   "price": 19.95,
  //   "starRating": 3.2,
  //   "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
  // },
  // {
  //   "productId": 2,
  //   "productName": "Garden Cart",
  //   "productCode": "GDN-0023",
  //   "releaseDate": "March 18, 2016",
  //   "description": "15 gallon capacity rolling garden cart",
  //   "price": 32.99,
  //   "starRating": 4.2,
  //   "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
  // },
  // {
  //   "productId": 5,
  //   "productName": "Hammer",
  //   "productCode": "TBX-0048",
  //   "releaseDate": "May 21, 2016",
  //   "description": "Curved claw steel hammer",
  //   "price": 8.9,
  //   "starRating": 4.8,
  //   "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
  // }];

  _listFilter: string;

  constructor(private productService: ProductService){
   
    

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
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }
}