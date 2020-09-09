import Head from "next/head"
export default ({children}) => (
  <div>
    <Head>
      <title>共同头部测试-next教程</title>
      {children}
      <footer>
          版权所有，未经允许，也可以分享知识的喜悦
      </footer>
    </Head>
  </div>
)
