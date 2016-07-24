import { Component, OnInit } from '@angular/core';
import { ShoppingCartFormComponent } from '../shopping-cart-form/';
import { ShoppingCartListComponent } from '../shopping-cart-list/';

@Component({
  moduleId: module.id,
  selector: 'app-shopping-cart',
  templateUrl: 'shopping-cart.component.html',
  styleUrls: ['shopping-cart.component.css'],
  directives:[ ShoppingCartFormComponent, ShoppingCartListComponent]
})
export class ShoppingCartComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
