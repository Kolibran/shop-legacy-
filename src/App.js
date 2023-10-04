import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            currentItems: [],
            items: [
                {
                    id: 1,
                    title: "Стілець сірий",
                    img: '5.jpg',
                    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
                    category: "chairs",
                    price: '49.99'
                },
                {
                    id: 2,
                    title: "Стіл",
                    img: '4.jpg',
                    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
                    category: "tables",
                    price: "149.99"
                },
                {
                    id: 3,
                    title: "Диван",
                    img: '2.jpg',
                    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
                    category: "sofa",
                    price: '399.99'
                },
                {
                    id: 4,
                    title: "Лампа",
                    img: '3.jpg',
                    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
                    category: "light",
                    price: '19.99'
                },
                {
                    id: 5,
                    title: "Стілець білий",
                    img: '1.jpg',
                    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
                    category: "chairs",
                    price: '69.99'
                },
                {
                    id: 6,
                    title: "Лампа подвійна",
                    img: '6.jpg',
                    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
                    category: "light",
                    price: '39.99'
                }
            ],
            showFullItem: false,
            fullItem: {}
        }
        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.choosCategory = this.choosCategory.bind(this)
        this.onShowItem = this.onShowItem.bind(this)
    }
    render() {
        return (
    <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories choosCategory={this.choosCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
    </div>
    )
}

   onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
}

choosCategory(category) {
   if(category === 'all') {
       this.setState({currentItems: this.state.items})
       return
   }

    this.setState({
        currentItems: this.state.items.filter(el => el.category === category)
    })
    
}

deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
}
addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
        if (el.id === item.id)
           isInArray = true
    })
    if (!isInArray)
    this.setState({orders: [...this.state.orders, item] })
 }
}

export default App; 
