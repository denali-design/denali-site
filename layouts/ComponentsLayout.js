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
                <Navbar logo="white" style={{ position: "sticky", top: "0px", zIndex: "100"}}/>

                <div className="flex">
                    <div className="xs-hide sm-hide" style={{display: "block", minWidth: '300px'}}>
                        <Sidebar data={props.sidebar} style={{ position: "fixed", overflow: "auto", top: "60px", bottom: "0px"}} />
                    </div>
                    <div style={{ width: '100%', maxWidth: '1140px' }}>
                        <div className="container-full denali-markdown m-t-50" style={{ maxWidth: '1020px', margin: '0px auto 150px auto' }}>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
