import React, { Component } from 'react';
import './Foodbox.css';

class Foodbox extends Component {
    constructor(props){
        super(props)
    }

    state = {
        count: 0
    }

    render() {
        return (
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                            <img src={this.props.image} alt=''/>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>{this.props.name}</strong> <br />
                                    <small>{this.props.calories} cal</small>
                                </p>
                            </div>
                        </div>
                        <div className="media-right">
                            <div className="media-box">
                                <input
                                className="input-count"
                                type="number" 
                                onChange={(e) => {this.props.changeQuantity(e.target.value, this.props.name)}}
                                />
                                <button className="button is-info" onClick={() => {this.props.addFood(this.props.name)}}>
                                +
                                </button>
      
                            </div>
                        </div>
                    </article>
                </div>
        )
    }
};

export default Foodbox;
