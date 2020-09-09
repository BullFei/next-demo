import React, { Component } from 'react'
import Layout from './components/layout'

export default class nestStyle extends Component {
  render() {
    return (
      <Layout>
      <div>
        {/* 内联样式写法 */}
        <style jsx>{
          `
            h1{
              background: blue;
              color: white
            }
          `
        }
        </style>
        <h1>hello world</h1>
      </div>
      </Layout>
    )
  }
}
