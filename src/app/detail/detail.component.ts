import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from '../product.interface';
import { Products } from '../products-exemple';


@Component({
	selector: 'app-root',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit {
    public product: ProductInterface;
    constructor(private route:ActivatedRoute) {
        
    } 

    public ngOnInit(): void {
        this.route.params.subscribe((params: any) => {
           // this.clientId = params['id'];
            console.log(params['id']);
            for( let product of Products ){
                if(product.id === params.id){
                    this.product = product;
                    break;
                }

            }

        })
    }

}