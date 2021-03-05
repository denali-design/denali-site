import Link from 'next/link'
import { useRouter } from "next/router";

export default function Avatar({ name, picture }) {

    const router = useRouter();

    return (
        <>
            <Link href="/">
                <a className={router.pathname == "/" ? "active" : ""}>Home</a>
            </Link>
            <br />
            <Link href="/components">
                <a className={router.pathname.includes("components") ? "active" : ""}>Components</a>
            </Link>
        </>
    )
}