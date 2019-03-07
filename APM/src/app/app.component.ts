import { Component } from "@angular/core";

@Component({
  selector : 'pm-root',
  template : '<h1>{{pageTitle}}</h1><div>My First Component</div>'
})
export class AppComponent {
  pageTitle : string = "Product Management";
}