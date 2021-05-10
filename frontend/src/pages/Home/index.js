
import React from 'react';
import './index.css'

import api from '../../api'

import NavBar from '../../components/NavBar'
import Product from '../../components/Product'
import Filter from '../../components/Filter'

import ProductImg from '../../assets/images/example-product.jpg'


class Home extends React.Component {

    state = {
        products: []
    }

    async componentDidMount() {
        const response = await api.get('/products')
        this.setState({ products: response.data })
    }

    render() {
        const { products } = this.state

        const productListItems = products.map(product => {
            return (
                <Product id={product.id} name={product.name} price={product.price}
                    image={ProductImg} />
            )
        })

        return (
            <div class="container"> 
                <NavBar />
                <div class="products">
                    <Filter />
                        <ul class="product-list mt-1">
                            {productListItems}
                        </ul>
                </div>
            </div>
        )
    }
}

export default Home