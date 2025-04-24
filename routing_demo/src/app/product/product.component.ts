import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule,RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products!:Product[];
   
   constructor(private productService:ProductService){
   }
 
   ngOnInit() {
     this.products=this.productService.getProducts();
   }

}
