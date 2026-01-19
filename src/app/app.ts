import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './services/product-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})

export class App {
  productData:any = signal("");
  constructor(private productService:ProductService){}
  // ngOnInit(){
  //   let data = this.productService.getProducts();
  //   this.productData.set(data);
  // }

  loadData(){
    let data = this.productService.getProducts();
    this.productData.set(data);
  }
}

