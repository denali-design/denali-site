import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { getPostBySlug, getAllPosts } from '../../lib/api-components'
import markdownToHtml from '../../lib/markdownToHtml'
import Navbar from '../../components/navbar'

export default function Post({ post }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
    {router.isFallback ? (
          <div>Loading…</div>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title}
                </title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <Navbar />
              <h1>{post.title}</h1>
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
          </>
        )}
    </>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
