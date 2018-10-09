import { Component, OnInit } from '@angular/core';
import { variable } from '@angular/compiler/src/output/output_ast';
import { ProductInterface } from '../product.interface';
import { ProductsType } from '../products-type.enum';
import { Products } from '../products-exemple';





@Component({
	selector: 'shop',
	templateUrl: './shop.component.html',
	styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
	public products:ProductInterface[];
	public activeCategory:string;
	public cartProducts:ProductInterface[];
	public upNumber:number;
	public priceOfCart:number;
	public activateList:boolean;

	public ngOnInit(): void {
		this.products = Products;
		this.cartProducts = [];
		this.activeCategory = ProductsType.ALL;
		this.upNumber = 0;
		this.priceOfCart = 0;
		this.activateList= true;
	}

	public selectCategory(category:string): void {
		this.activeCategory = category;
	
	}

	public addProductToCart(product:ProductInterface): void {
		let exist: boolean = false;
		if(this.cartProducts.length > 0) {
			for(let i=0; i < this.cartProducts.length; i++ ) {
				if(this.cartProducts[i].id === product.id) {
					this.cartProducts[i].numberOfItems ++;
					exist = true;
				}
			}
			if(!exist) {
				product.numberOfItems = 1;
				this.cartProducts.push(product);
			}
			this.updateNumber();
		} else {
			product.numberOfItems = 1;
			this.cartProducts.push(product);
			this.updateNumber();
		}

	
	}
	public updateNumberOfItems(index:number, operator:number): void {
		if(this.cartProducts[index].numberOfItems + operator >= 1) {

			this.cartProducts[index].numberOfItems = this.cartProducts[index].numberOfItems + operator;
		} else {
			this.cartProducts.splice(index, 1);
		}
		this.updateNumber();
	}

	public closeProduct(index:number): void {
		this.cartProducts.splice(index, 1);
		this.updateNumber();
	}

	public updateNumber(): void {
		this.upNumber = 0;
		this.priceOfCart = 0;
		for( let product of this.cartProducts) {

			this.upNumber = this.upNumber + product.numberOfItems;
			this.priceOfCart = this.priceOfCart + product.price * product.numberOfItems;

		}


	}
	
	public activeBar(): void {
		this.activateList = !this.activateList;
	}

}
