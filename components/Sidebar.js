import Link from 'next/link'
import { useRouter } from "next/router";
import data from "../data/navigation";

export default function Sidebar(props) {

    const router = useRouter();

    let itemList;

    if (props.data === 'design') {
        itemList = data.design.map((section, index) => {
            return (
                <>
                    {index === 0 ? "" : <hr />}
                    <li className="tabs__section-header">{section.sectionName}</li>
                    {
                        section.pages.map((page, index) => {
                            return (
                                <li
                                    className={router.pathname.includes(page.identifier) ? "is-active" : ""}
                                    key={index}
                                >
                                    <Link href={page.path}><a>{page.name}</a></Link>
                                </li>
                            );
                        })
                    }

                </>
            );
        })
    } else if (props.data === 'components') {
        itemList = data.components.map((section, index) => {
            return (
                <span key={index}>
                    {index === 0 ? "" : <hr />}
                    <li className="tabs__section-header">{section.sectionName}</li>
                    {
                        section.pages.map((page, index) => {
                            return (
                                <li
                                    className={`${page.disabled ? 'is-disabled' : ''} ${router.pathname.includes(page.identifier) ? 'is-active' : ''}`}
                                    key={index}
                                >
                                    <Link href={page.path}><a>{page.name}</a></Link>
                                </li>
                            );
                        })
                    }

                </span>
            );
        })
    }

    return (
        <div className="tabs is-primary is-vertical" {...props}>
            <ul>
                {itemList}
            </ul>
        </div>
    )
}
