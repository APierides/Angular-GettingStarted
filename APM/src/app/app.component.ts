import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
  <div>
  <h1>{{pageTitle}}</h1>
  <nav class='navbar navbar-expand navbar-light bg-light'>
  <a class='navbar-brand'>{{pageTitle}}</a>
  <ul class='nav nav-pills'>
  <li><a [routerLink]= "['/welcome']" class="nav-link">Home</a></li>
  <li><a [routerLink]= "['/products']" class="nav-link">Products</a></li>
  </ul>
  </nav>
  </div>
  <div class="container">
  <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  pageTitle: string = "Product Management";
}