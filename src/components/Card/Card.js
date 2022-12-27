import React, { Component } from 'react'
import DataTable from 'react-data-table-component'
const columns = [
  {
    name: 'Title',
    selector: row => row.title,
  },
  {
    name: 'Source',
    selector: row => row.source,
  },
  {
    name: 'Price',
    selector: row => row.price,
  },
  {
    name: 'Rating',
    selector: row => row.rating,
  },
  {
    name: 'Reviews',
    selector: row => row.reviews,
  },
  {
    name: 'Delivery',
    selector: row => row.delivery,
  }, 
];

const data = [
  {
    id: 1,
    title: "<button>Delete From List</button>",
    year: '1988',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
]
export default class Card extends Component {
  render() {
    return (
      <div className='card-container'>
         <DataTable
            columns={columns}
            data={data}
        />
      </div>
    )
  }
}

