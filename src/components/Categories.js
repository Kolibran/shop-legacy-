import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Categories: [
                {
                    key: 'all',
                    name: 'Всі'
                },
                {
                    key: 'chairs',
                    name: 'Стільці'
                },
                {
                    key: 'tables',
                    name: 'Столи'
                },
                {
                    key: 'sofa',
                    name: 'Дивани'
                },
                {
                    key: 'light',
                    name: 'Світло'
                }

            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.Categories.map(el => (
            <div key={el.key} onClick={() => this.props.choosCategory(el.key)}> {el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories