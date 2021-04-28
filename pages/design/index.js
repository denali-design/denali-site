import Head from 'next/head'
import Navbar from '../../components/navbar'
import Sidebar from '../../components/Sidebar'
import DetailCard from '../../components/DetailCard';

export const meta = {
    title: 'Colors'
}

export default function Design() {
    return (
        <>
            <Head>
                <title>Design</title>
            </Head>
            <div>
                <Navbar logo="white" style={{ position: "sticky", top: "0px", zIndex: "100" }} />

                <div className="flex">
                    <div id="sidebar" className="xs-hide sm-hide" style={{ display: "block", minWidth: '300px' }}>
                        <Sidebar data="design" style={{ position: "fixed", overflow: "auto", top: "60px", bottom: "0px" }} />
                    </div>
                    <div style={{ width: '100%' }}>
                        <div className="has-bg-grey-100" style={{ width: '100%' }}>
                            <div style={{ width: '100%', maxWidth: '1140px' }}>
                                <div className="container-full denali-markdown m-t-50" style={{ maxWidth: '960px', margin: '0px auto 100px auto' }}>
                                    <h1>Design</h1>
                                    <hr />
                                    <h2>Principles</h2>
                                    <p>From design principles on color to typography we’ve got you covered with everything you need to design with Denali.</p>
                                    <div className="row row-override m-t-25">
                                        <div className="xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-2-3 xl-col-2-3">
                                            <DetailCard
                                                title='Colors'
                                                description='Learn how to use color to create products with effective interfaces and user experiences.'
                                                link='/design/principles/colors'
                                                image='/images/design/cards/colors.png'
                                                action='Learn more'
                                                bgColor='#6DDDFA'
                                            />
                                        </div>
                                        <div className="xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-1-3 xl-col-1-3">
                                            <DetailCard
                                                title='Component Behavior'
                                                description='Learn how to fit components in our grid.'
                                                link='/design/principles/component-behavior'
                                                image='/images/design/cards/component-behavior.png'
                                                action='Learn more'
                                                bgColor='#AA89EA'
                                            />
                                        </div>
                                        <div className="xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-1-3 xl-col-1-3">
                                            <DetailCard
                                                title='Density & Spacing'
                                                description='Learn how to balance page density & spacing.'
                                                link='/design/principles/density-and-spacing'
                                                image='/images/design/cards/density-spacing.png'
                                                action='Learn more'
                                                bgColor='#FFDD1A'
                                            />
                                        </div>
                                        <div className="xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-1-3 xl-col-1-3">
                                            <DetailCard
                                                title='Iconongraphy'
                                                description='Learn how to implement icons within your products.'
                                                link='/design/principles/iconography'
                                                image='/images/design/cards/icons.png'
                                                action='Learn more'
                                                bgColor='#FF7AB8'
                                            />
                                        </div>
                                        <div className="xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-1-3 xl-col-1-3">
                                            <DetailCard
                                                title='Responsive Grid'
                                                description='Learn how to adapt to different screen sizes.'
                                                link='/design/principles/responsive-grid'
                                                image='/images/design/cards/responsive-grid.png'
                                                action='Learn more'
                                                bgColor='#9FE23E'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="has-bg-grey-200" style={{ width: '100%' }}>
                            <div style={{ width: '100%', maxWidth: '1140px' }}>
                                <div className="container-full denali-markdown p-t-50" style={{ maxWidth: '960px', margin: '0px auto', paddingBottom: '150px' }}>
                                    <h2>Tools & Downloads</h2>
                                    <p>A variety of Denali tools and downloads that allow you to create with your favorite design program. </p>
                                    <div className="row row-override m-t-25">
                                        <div className="xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-1-3 xl-col-1-3">
                                            <DetailCard
                                                title='Adobe XD'
                                                description='Build with the Adobe ecosystem in mind.'
                                                link='/design/tools-downloads/adobe-xd'
                                                image='/images/tools-downloads/xd-placeholder.png'
                                                action='View resources'
                                                bgColor='#480137'
                                            />
                                        </div>
                                        <div className="xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-1-3 xl-col-1-3">
                                            <DetailCard
                                                title='Framer'
                                                description='Bridge the gap between dev and design with Framer.'
                                                link='/design/tools-downloads/framer'
                                                image='/images/tools-downloads/framer-placeholder.png'
                                                action='View resources'
                                                bgColor='#00387C'
                                            />
                                        </div>
                                        <div className="xs-col-1-1 sm-col-1-1 md-col-1-2 lg-col-1-3 xl-col-1-3">
                                            <DetailCard
                                                title='Sketch'
                                                description='CSS support for radio toggles, addition of the.'
                                                link='/design/tools-downloads/sketch'
                                                image='/images/tools-downloads/sketch-placeholder.png'
                                                action='View resources'
                                                bgColor='#843400'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}