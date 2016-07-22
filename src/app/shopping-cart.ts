export class ShoppingCart {
  constructor(public name:string, public price:number, public quantity:number){
    new ShoppingCart('item1',1,1);
    new ShoppingCart('item2',2,2);
    new ShoppingCart('item3',3,3);
  }

  toString(){
    return this.name+', '+this.price+', '+this.quantity;
  }
}
