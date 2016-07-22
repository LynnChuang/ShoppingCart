import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-shopping-cart-list',
  templateUrl: 'shopping-cart-list.component.html',
  styleUrls: ['shopping-cart-list.component.css']
})
export class ShoppingCartListComponent implements OnInit {

  title: string="購物車清單";
  constructor() {}

  ngOnInit() {
  }

}
