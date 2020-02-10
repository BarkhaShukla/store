import React, { Component } from 'react';
import Product from './Product';
import {storeProducts} from '../data';
import Title from './Title';
export default class ProductList extends Component {
    state={
        products: storeProducts
    }
    
    render() {
        //console.log(this.state.products);
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Red Saree" title="with border and patch work"/>
                        <div className="row">
                        
                        </div>
                    </div>
                </div>
            </React.Fragment>
               //<Product/>   
           
        )
    }
}
