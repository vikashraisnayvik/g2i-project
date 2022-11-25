import React from 'react'
import './style.css'
import img from '../../assets/banner-img-1.jpg'
import ceo from '../../assets/banner-img-2.jpg'
import { Grid, Paper, Skeleton, Stack, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Box } from '@mui/system';
const data = [
    {
        src: require('../../assets/banner-img-1.jpg'),
        title: 'andrei calazans',
        img: 'https://global-uploads.webflow.com/5f64c4e9139e4648fc773aed/5f64c4e9139e461d8d773b68_Map.svg',
        channel: 'Linhares, Brazil',
        views: '9 / 10',
        createdAt: 'SENIOR',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    },
    {
        src: require('../../assets/banner-img-2.jpg'),
        title: 'zak thompson',
        channel: 'Ontario, Canada',
        views: '9 / 10',
        img: 'https://global-uploads.webflow.com/5f64c4e9139e4648fc773aed/5f64c4e9139e461d8d773b68_Map.svg',
        createdAt: 'MID-TO-SENIOR',
        text: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here,'
    },

];
const sponser = [
    {
        src: 'https://global-uploads.webflow.com/5f64c4e9139e4648fc773aed/5f64c4e9139e46ee74773b71_Turo.svg',
    },
    {
        src: 'https://global-uploads.webflow.com/5f64c4e9139e4648fc773aed/5f64c4e9139e468bcc773b73_Lattice.svg',
    },
    {
        src: 'https://global-uploads.webflow.com/5f64c4e9139e4648fc773aed/60080cc72b3543699ffe2137_MLS_crest_logo_CMYK_gradient.svg',
    },
    {
        src: 'https://global-uploads.webflow.com/5f64c4e9139e4648fc773aed/5f64c4e9139e4660a1773b72_Vanco.svg',
    },
    {
        src: 'https://global-uploads.webflow.com/5f64c4e9139e4648fc773aed/60080cd52b35436796fe217d_Webflow_logo.svg',
    },
    {
        src: 'https://global-uploads.webflow.com/5f64c4e9139e4648fc773aed/5f64c4e9139e46d136773b7a_Youi.svg',
    },
    {
        src: ' https://global-uploads.webflow.com/5f64c4e9139e4648fc773aed/5f64c4e9139e4614ee773b74_Skyryse.svg',
    }

];
function Work(props) {

    const { loading = false } = props;
    return (
        <>
            <div className='banner-section bg-gray'>
                <div className='container'>
                    <div className='banner_inner'>
                        <div className='row pb-5'>
                            <div className='col-lg-6 align-items-center'>
                                <div className='main_div'>
                                    <div className='heading_title'>
                                        <h1 className='heading main_title'>The only marketplace for pre-vetted JavaScript developers</h1>
                                        <p className='banner-pera'>Hire React, React Native, & Node.js developers you can trust on contract or full-time basis.</p>
                                        <div className='button-box mt-5'>
                                            <Stack direction="row" spacing={3}>
                                                <button className='banner_btn' variant="contained">
                                                    hire now <FontAwesomeIcon className='upArrow' icon={faArrowRight} />
                                                </button>
                                            </Stack>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 m-0 p-0'>
                                <div className='banner_right'>
                                    <div className=' heroGrid_card'>
                                        <Grid container wrap="nowrap" style={{ gap: 20 }}>
                                            {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
                                                <Box key={index} sx={{ marginRight: 0.5, my: 0 }}>
                                                    <div className='right_banner_img'>
                                                        {item ? (
                                                            <div className='img_inner'>
                                                                <img alt={item.title} src={item.src} />
                                                            </div>

                                                        ) : (
                                                            <Skeleton variant="rectangular" width={210} height={118} />
                                                        )}

                                                        {item ? (
                                                            <Box sx={{ pr: 2 }}>
                                                                <div gutterBottom variant="body2">
                                                                    <h5 className='img-title'>{item.title}</h5>
                                                                </div>
                                                                <div display="block" variant="caption" color="text.secondary">
                                                                    <p className='img-location'>
                                                                        <span><img alt={item.title} height={20} src={item.img} /></span> {item.channel}
                                                                    </p>
                                                                </div>
                                                                <div className='exprince' variant="caption" color="text.secondary">
                                                                    <span> {item.views}</span>
                                                                    <span>{item.createdAt}</span>
                                                                </div>
                                                                <div variant="caption" color="text.secondary">
                                                                    <p className='caption'> {item.text}</p>
                                                                </div>
                                                            </Box>
                                                        ) : (
                                                            <Box sx={{ pt: 0.5 }}>
                                                                <Skeleton />
                                                                <Skeleton width="100%" />
                                                            </Box>
                                                        )}
                                                    </div>
                                                    <Paper elevation={6} />
                                                    <Paper />
                                                    <Paper elevation={6} />
                                                </Box>
                                            ))}
                                        </Grid>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='sponser'>
                            <div className='row justify-content-between'>
                                {sponser.map((properties) => (
                                    <>
                                        <div className='col-lg-1'>
                                            <img height={38} width={100} alt={properties.title} src={properties.src} />
                                            <h2>{properties.title} </h2>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/* wf-section */}
            <div className='wf-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='wf_img'>
                                <img src={require('../../assets/assessment.png')} />
                            </div>
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <div className='wf_content w-75'>
                                <h2>Transparent vetting:<br />
                                    you'll see exactly what we see</h2>
                                <p className='banner-pera'>You get a detailed technical profile that provides the developer's assessment scores in each category and a recording of their technical interview.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work