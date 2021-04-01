import Layout from '../../layouts/ComponentsLayout'
import Link from 'next/link'

export const meta = {
    title: 'Colors'
}

export default function Design() {
    return (
        <Layout meta={meta} sidebar="design">
            <h1>Design</h1>
            <p>Everythng for design falls here.</p>
        </Layout>
    )
}