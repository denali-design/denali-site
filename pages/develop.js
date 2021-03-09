import Head from 'next/head'
import Navbar from '../components/navbar'

export default function Develop() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar logo="white" />
      <h1>Develop</h1>
      <div style={{height: '2000px', width: '100%'}} className="has-bg-red-500">
        Scroll
      </div>
    </>
  )
}