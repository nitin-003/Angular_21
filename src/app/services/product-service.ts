import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(){}

  getProducts(){
    return [
      {id: 1, name: "Mobile", price: 10000},
      {id: 2, name: "Laptop", price: 65000},
      {id: 3, name: "Machine", price: 25000},
      {id: 4, name: "Watch", price: 5000}
    ]
  }
}

