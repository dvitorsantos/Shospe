import React from 'react';

import './index.css'

class Filter extends React.Component {

    render() {
        return (
            <section class="left-options">
                <form class="p-4" method="GET">
                    <label for="price" class="form-label">Preço mínimo</label>
                    <div class="input-group mb-3">
                        <span class="input-group-text">R$</span>
                        <input type="text" class="form-control" name="min-price" placeholder="0.00" />
                    </div>
                    <label for="price" class="form-label">Preço máximo</label>
                    <div class="input-group mb-3">
                        <span class="input-group-text">R$</span>
                        <input type="text" class="form-control" name="max-price" placeholder="0.00" />
                    </div>
                    <button type="submit" class="btn btn-primary mt-2">Filtrar</button>
                </form>
            </section>
        )
    }
}

export default Filter;