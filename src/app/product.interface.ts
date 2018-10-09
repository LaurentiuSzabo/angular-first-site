import { ProductsType } from "./products-type.enum";

export interface ProductInterface {
	id:number;
	title:string;
	image:string;
	price:number;
	productType:ProductsType;
	numberOfItems?:number
}