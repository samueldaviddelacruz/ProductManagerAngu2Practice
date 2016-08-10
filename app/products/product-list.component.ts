import {Component, OnInit} from 'angular2/core'
import {IProduct} from './product'
import {ProductFilterPiple} from './product-filter.pipe'
import {StarComponent} from '../shared/star.component'
import {ProductService} from './product.service'
import {ROUTER_DIRECTIVES} from 'angular2/router'
@Component({
  
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    pipes: [ProductFilterPiple],
    directives: [StarComponent,ROUTER_DIRECTIVES]
})
export class ProductListComponent implements OnInit {

    pageTitle: string = 'Product List';
    products: IProduct[];

    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;


    constructor(private _productService: ProductService) {

    }
    ngOnInit(): void {
        this._productService.getProducts().subscribe(products => this.products = products, error => this.errorMessage = <any>error);
    }
    toggleImage(): void {

        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }


}