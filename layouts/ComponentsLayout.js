import Head from 'next/head'
import Navbar from '../components/navbar'
import Sidebar from '../components/Sidebar'

export default function ComponentsLayout(props) {
    return (
        <>
            <Head>
                <title>{props.meta.title}</title>
            </Head>
            <div className="denali-new-age">
                <Navbar logo="white" style={{ position: "sticky", top: "0px", zIndex: "100" }}/>

                <div className="flex">
                    <Sidebar style={{height: 'calc(100vh - 60px', position: "sticky", top: "60px", zIndex: "100"}} />
                    <div style={{ width: '100%', maxWidth: '1140px' }}>
                        <div className="container-full denali-markdown m-t-50" style={{ maxWidth: '920px', margin: '0px auto 150px auto' }}>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
