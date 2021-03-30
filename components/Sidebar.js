import Link from 'next/link'

export default function Sidebar(props) {
    return (
        <div className="tabs is-primary is-vertical xs-hide sm-hide" {...props}>
            <ul>
                <li className="tabs__section-header">Components</li>
                <li><Link href="/components/breadcrumbs"><a>Breadcrumbs</a></Link></li>
            </ul>
        </div>
    )
}
