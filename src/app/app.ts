import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from './services/products';
import { Product } from './services/productDataType';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})

export class App {
  productData = signal<Product[] | undefined>(undefined)
  constructor(private productService:Products){

  }
  
  ngOnInit(){
    this.productService.getProducts().subscribe((data) => {
      this.productData.set(data.products)
    })
  }
}

