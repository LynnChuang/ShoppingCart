import { Component } from '@angular/core';
import { ShoppingCartComponent } from './shopping-cart';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[ ShoppingCartComponent ]
})
export class AppComponent {
  title = 'ShoppingCart demo';
}
