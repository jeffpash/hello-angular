import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/common/data/product.service';
import { Product } from 'src/app/common/data/product';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList : Product[];
  category : string = "divers"; //default value

  constructor(private productService : ProductService, private route : ActivatedRoute) { }

  ngOnInit() {
    //via subscriber
    this.route.params.subscribe(
      (params: Params) => {
        this.category = params['category']; this.fetchProd();
      }
    );

   
  }

  fetchProd(){
    this.productService.getProductsByCategoryObservable(this.category)
    .subscribe(
      (products) => {this.productList = products}
    );
  }

}
