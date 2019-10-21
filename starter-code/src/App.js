import React, { Component } from 'react';
import Foodbox from './components/Foodbox';
import Product from './components/Product';
import Foodlist from './components/Foodlist';
import {Link, Switch, Route} from 'react-router-dom';
import './App.css';

//data
import Foods from './foods.json';

class App extends Component {
  state = {
      foodList: Foods,
      foodShown: Foods,
      foodShownList: [],
      totalCalories: 0
  }

  searchHandeler = (e) => {
    let searchQuery = e.target.value;
    let searchResult = this.state.foodList.filter((food) => {
      return (food.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1)
    });
    this.setState({foodShown: searchResult});
  }

  createProduct = (product) => {
    let foodShownNew = [...this.state.foodShown];
    foodShownNew.push(product);
    this.setState({foodShown: foodShownNew});
  }

  updateCalories = (item) => {
    let caloriesPerItem = item.calories;
    let caloriesItemTotal = item.quantity * caloriesPerItem;
    let caloriesList = this.state.totalCalories;
    let totalCalories = caloriesList + caloriesItemTotal;
    this.setState({totalCalories: totalCalories})
  }

  updateFoodList = (item) => {
    let itemQuantity = item.quantity;
  }

  addFoodToList = (name) => {
    let foods = [...this.state.foodShown];
    let list = [...this.state.foodShownList];
    let item = foods.filter((food) => {
      return (food.name === name)
    });

    if(list.indexOf(item[0]) === -1){
      list.push(item[0]);
      this.setState({foodShownList: list});
      this.updateCalories(item[0]);
    } else {
      this.updateFoodList(item[0]);
    }
  }

  countProduct = (count, productName) => {
    let foods = [...this.state.foodShown];
    let foodSelected = foods.filter((food) => {
      return (food.name === productName)
    });
    foodSelected[0].quantity = count;

    let inputBox = document.getElementById('inputBox');
    inputBox.style.display = 'none';
  }

  render() {
    return (
            <div className="app">
              <div className='appContainer'>
                <h1>IronNutrition</h1>
                <input type='text' placeholder='Search...' className='searchBar' onChange={this.searchHandeler}/>
                <div className='add-product'>
                    <Link to='/add'><button className='add-product-btn'>Add product</button></Link>
                    <div id='inputBox'>
                    <Switch>
                      <Route path='/add'>
                        <Product
                          addProduct={this.createProduct}
                        />
                      </Route>
                    </Switch>
                    </div>
                </div>
                <div className='foodInfo'>
                  <div className='foodContainer'>
                    {this.state.foodShown.map((food) => {
                      return (
                        <Foodbox
                        image={food.image}
                        name={food.name}
                        calories={food.calories}
                        addFood={this.addFoodToList}
                        changeQuantity={this.countProduct}
                        /> 
                      )
                    })
                    }
                  </div>
                  <div className='overviewContainer'>
                    <h1>Today's foods</h1>
                    <ul>
                      {this.state.foodShownList.map((item) => {
                        return (
                          <Foodlist
                            count={item.quantity}
                            food={item.name}
                            calories={item.calories}
                          />
                        )
                      })}
                    </ul>
                    <p>Total: <span>{this.state.totalCalories}</span> cal</p>
                  </div>
                </div>
              </div>
            </div>
    );
  }
};

export default App;
