import Head from "next/head"
import Link from 'next/link'
// import withRouter from 'next/router'
import Router from 'next/router'

Router.events.on("routeChangeStart", (url) => {
  if(url === '/list'){
    location.href = './nopermission'
  }
})

//包裹一下 函数中就可以解构出来router
export default ({children}) => (
  <div>
    <Head>
      <title>共同头部测试-next教程</title>
      <div>
        <Link href = "/" prefetch>主页</Link>|
        {/* 路由遮盖 */}
        {/* {router.prefetch("/")} */}
        {/* <Link as = 'l' href = "/list" prefetch>列表</Link>| */}
        <Link href = "/list" prefetch>列表</Link>|
        <Link href = "/nestStyle" prefetch>内联样式-sample</Link>
      </div>
      {children}
      <footer>
          版权所有，未经允许，也可以分享知识的喜悦
      </footer>
    </Head>
  </div>
)
