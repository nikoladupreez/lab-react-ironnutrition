import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Product.css'

class Product extends Component {
    constructor(props){
        super(props)
    }

    state = {
        newProduct: {
                        name: "",
                        calories: 0,
                        image: "",
                        quantity: 0
                    }
    }

    render() {
        return (    <div>
                        <input onChange={(e) => {this.state.newProduct.image = e.target.value}} type='text' placeholder='Image URL' className='input'></input>
                        <input onChange={(e) => {this.state.newProduct.name = e.target.value}} type='text' placeholder='Product name' className='input'></input>
                        <input onChange={(e) => {this.state.newProduct.calories = e.target.value}} type='text' placeholder='Number of calories' className='input'></input>  
                        <Link to='/' exact><button onClick={() => this.props.addProduct(this.state.newProduct)}>Add</button></Link>
                    </div>
        )       
    }
};

export default Product;