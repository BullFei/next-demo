import React, { Component } from 'react'
import axios from 'axios'
import Layout from './components/layout'

export default class films extends Component {
  static async getInitialProps(){
    const res = await axios.get("https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=7621750",{
      headers: {
        "X-Host": "mall.film-ticket.film.list",
        "good": 'happy'
      }
    });
    return {
      films: res.data.data.films
    }
  }
  render() {
    return (
      <Layout>
      <div>
        <h2>电影</h2>
        <ul>
          {
            this.props.films.map(item => {
            return <li key={item.filmId}>
              {item.name}
              <img src = {item.poster} />
              </li>
            })
          }
        </ul>
      </div>
      </Layout>
    )
  }
}
