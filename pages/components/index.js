import Layout from '../../layouts/DefaultLayout'
import Link from 'next/link'

export default function Design() {
  return (
    <Layout title="Components" description="An intro page for all components">
      <Link href="/components/breadcrumbs">
        <a className="box flex m-t-80">
          <h4>Breadcrumbs</h4>
        </a>
      </Link>
    </Layout>
  )
}