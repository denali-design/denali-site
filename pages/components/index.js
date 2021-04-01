import Layout from '../../layouts/ComponentsLayout'
import Link from 'next/link'

export const meta = {
  title: 'Components'
}

export default function Components() {
  return (
    <Layout meta={meta} sidebar="components">
      <h1>Components</h1>
      <p>List of all components.</p>
    </Layout>
  )
}