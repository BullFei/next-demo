import React, { Component } from 'react'
import Head from "next/head"

import Layout from './components/layout'
export default class index extends Component {
  render() {
    return (
      <Layout>
      <div>
        {/* <Head>
          <title>next教程！棒棒哒</title>
          <meta charSet = 'utf=8'/>
        </Head> */}
        <h1>hello world</h1>

      </div>
      </Layout>
    )
  }
}

// import Head from 'next/head'
//函数式组件
// export default () => {
//   <div>

//     <h1>hello world </h1>
//   </div>
// }
