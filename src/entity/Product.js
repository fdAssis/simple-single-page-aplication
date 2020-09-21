

export default class Product{
  constructor({id,name,price=0,quantity=0}){
      this.id=id;
      this.name=name;
      this.price=price;
      this.quantity=quantity;
  }

  get priceLabel(){
    return `R$ ${this.price.toLocaleString()}`;
  }

  get attributes(){
    let dict={};
    for (let key in this){
      if(this[key]){
        dict[key]=this[key];
      }
    }
    return dict;
  }

}
