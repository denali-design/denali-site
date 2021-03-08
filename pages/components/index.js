import Link from 'next/link'
import { getAllPosts } from '../../lib/api-components'
import Head from 'next/head'
import Navbar from '../../components/navbar'

export default function Index({ allPosts }) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Navbar logo="white" />
      
      {allPosts.map((allPost) => (
        <h3 key={allPost.slug}>
          <Link as={`/components/${allPost.slug}`} href="/components/[slug]">
            <a>{allPost.title}</a>
          </Link>
        </h3>
      ))}
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'slug'
  ])

  return {
    props: { allPosts },
  }
}
