
import React from 'react';

import './index.css'

class Product extends React.Component {

    render() {
        return (
            <li class="mt-1 me-2" key={this.props.id}>
                <div class="card" style={{ width: 230 }}>
                    <img src={this.props.image} class="card-img-top" alt="" />
                    <div class="card-body">
                        <h5 class="card-title">R${this.props.price}</h5>
                        <p class="card-text">{this.props.name}</p>
                        <a href="#" class="btn btn-success">Adicionar ao carrinho</a>
                    </div>
                </div>
            </li>
        )
    }
}

export default Product;