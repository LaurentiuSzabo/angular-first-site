import { Component, OnInit } from '@angular/core';
import { variable } from '@angular/compiler/src/output/output_ast';

enum ProductsType {
	ALL = 'all',
	FRUITS = 'fruits',
	VEG = 'veg',
	SNACKS = 'snacks',
	JUICES = 'juices',
	SWEETS = 'sweets' 
}

interface ProductInterface {
	id:number;
	title:string;
	image:string;
	price:number;
	productType:ProductsType;
	numberOfItems?:number
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	public products:ProductInterface[];
	public activeCategory:string;
	public cartProducts:ProductInterface[];
	public upNumber:number;
	public priceOfCart:number;

	public ngOnInit(): void {
		this.products = [
			{
				id: 1,
				title: 'Banane',
				image: 'src/images/p1.jpg',
				price: 2,
				productType:ProductsType.FRUITS
			},
			{
				id: 2,
				title: 'Mere',
				image: 'src/images/p2.jpg',
				price: 2,
				productType:ProductsType.FRUITS
			},
			{
				id: 3,
				title: 'Pere',
				image: 'src/images/p3.jpg',
				price: 2,
				productType:ProductsType.FRUITS
			},
			{
				id: 4,
				title: 'Struguri',
				image: 'src/images/p4.jpg',
				price: 3,
				productType:ProductsType.FRUITS
			},
			{
				id: 5,
				title: 'Rosii',
				image: 'src/images/p5.jpg',
				price: 2,
				productType:ProductsType.VEG
			},
			{
				id: 6,
				title: 'Ardei',
				image: 'src/images/p7.jpg',
				price: 2,
				productType:ProductsType.VEG
			},
			{
				id: 7,
				title: 'Ceapa',
				image: 'src/images/p6.jpg',
				price: 2,
				productType:ProductsType.VEG
			},
			{
				id: 8,
				title: 'Castraveti',
				image: 'src/images/p8.jpg',
				price: 2,
				productType:ProductsType.VEG
			},
			{
				id: 9,
				title: 'Coca Cola',
				image: 'src/images/p9.jpg',
				price: 2,
				productType:ProductsType.JUICES
			},
			{
				id: 10,
				title: 'Fanta',
				image: 'src/images/p11.jpg',
				price: 2,
				productType:ProductsType.JUICES
			},
			{
				id: 11,
				title: 'Sprite',
				image: 'src/images/p10.jpg',
				price: 2,
				productType:ProductsType.JUICES
			},
			{
				id: 12,
				title: 'Pepsi',
				image: 'src/images/p12.jpg',
				price: 2,
				productType:ProductsType.JUICES
			},
			{
				id: 13,
				title: 'Lays',
				image: 'src/images/p13.jpg',
				price: 2,
				productType:ProductsType.SNACKS
			},
			{
				id: 14,
				title: 'Pringles',
				image: 'src/images/p14.jpg',
				price: 2,
				productType:ProductsType.SNACKS
			},
			{
				id: 15,
				title: 'Chio',
				image: 'src/images/p15.jpg',
				price: 2,
				productType:ProductsType.SNACKS
			},
			{
				id: 16,
				title: 'Doritos',
				image: 'src/images/p16.jpg',
				price: 2,
				productType:ProductsType.SNACKS
			},
			{
				id: 17,
				title: 'Twix',
				image: 'src/images/p20.jpg',
				price: 2,
				productType:ProductsType.SWEETS
			},
			{
				id: 18,
				title: 'Kinder Bueno',
				image: 'src/images/p18.jpg',
				price: 2,
				productType:ProductsType.SWEETS
			},
			{
				id: 19,
				title: 'Milka',
				image: 'src/images/p19.jpg',
				price: 2,
				productType:ProductsType.SWEETS
			},
			{
				id: 20,
				title: '7Days',
				image: 'src/images/p17.jpg',
				price: 2,
				productType:ProductsType.SWEETS
			}
		];
		this.cartProducts = [];
		this.activeCategory = ProductsType.ALL;
		this.upNumber = 0;
		this.priceOfCart = 0;
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
	

}
