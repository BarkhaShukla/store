import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

//Provider
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct
    };
    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState(() => {
            return { products: tempProducts }
        })
    }

    handleDetail = () => {
        console.log('hello form detail');
    }
    addToCart = (id) => {
        console.log('hello from add to cart.is is {id}');
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart
            }

            }>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
//Consumer
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };