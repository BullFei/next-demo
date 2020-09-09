import React, { Component } from 'react'
import './styles/style2.css'
import './styles/style.scss'
import Layout from './components/layout'
import Router from 'next/router'

export default class list extends Component {
  state = {
    list: ["hello", 'worldxxx', '北京']
  }

  render() {
    return (
      <Layout>
      <div>
        <ul>
          {
            this.state.list.map(item => (
              <li key={item} onClick = {() => Router.push('/detail?arg=' + item)}>{item}</li>
            ))
          }
        </ul>
      </div>
      </Layout>
    )
  }
}
