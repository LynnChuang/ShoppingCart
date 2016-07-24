export class ShoppingCart {

  // public shoppingCarts: Array<ShoppingCart>;
  constructor(public name:string=null,
              public price:number=null,
              public quantity:number=null,
              public isEdit=false){


      // new ShoppingCart("BMW", 2000, 4),
      // new ShoppingCart("BMW2", 3000, 5)


  }

  toString(){
    return this.name+', '+this.price+', '+this.quantity;
  }
}
