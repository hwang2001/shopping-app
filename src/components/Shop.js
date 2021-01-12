import React, {Component} from 'react'
import ShopItem from './ShopItem.js'

class Shop extends Component {
    constructor() {
        super();
        this.state = {
            price: 0,
            allData: []
        };
    }
    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    allData: [...json]
                })
            })
    }
    handleChange = (id) => {
        this.setState(prevState => {
            const selected = prevState.allData.filter(items => items.id === id);
            return {
                price: prevState.price + selected.price
            }
        })
    }
    render() {
        const shopItems = this.state.allData.map(item => <ShopItem key={item.id} item = {item} handleChange = {this.handleChange} />)
        return(
            <div >
                <h1> SHOP ALL ITEMS </h1>
                {shopItems}
            </div>
        );
    }
}

export default Shop;