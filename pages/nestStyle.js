import React, { Component } from 'react'

export default class nestStyle extends Component {
  render() {
    return (
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
    )
  }
}
