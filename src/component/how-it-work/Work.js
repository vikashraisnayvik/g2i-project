import React from 'react'
import './style.css'
import img from '../../assets/banner-img-1.jpg'
import ceo from '../../assets/banner-img-2.jpg'
import { Grid, Skeleton, Stack, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Box } from '@mui/system';
const data = [
    {
        src: require('../../assets/banner-img-1.jpg'),
        title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
        channel: 'Don Diablo',
        views: '396k views',
        createdAt: 'a week ago',
    },
    {
        src: require('../../assets/banner-img-2.jpg'),
        title: 'Queen - Greatest Hits',
        channel: 'Queen Official',
        views: '40M views',
        createdAt: '3 years ago',
    },

];
function Work(props) {
    const { loading = false } = props;
    return (
        <>
            <div className='banner-section'>
                <div className='container'>
                    <div className='banner_inner'>
                        <div className='row'>
                            <div className='col-lg-6'>
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
                            <div className='col-lg-6'>
                                <div className='banner_right'>
                                    <div className=' row heroGrid_card'>
                                        <Grid container wrap="nowrap">
                                            {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
                                                <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 0 }}>
                                                    {item ? (
                                                        <img
                                                            style={{ width: 210, height: 118 }}
                                                            alt={item.title}
                                                            src={item.src}
                                                        />
                                                    ) : (
                                                        <Skeleton variant="rectangular" width={210} height={118} />
                                                    )}

                                                    {item ? (
                                                        <Box sx={{ pr: 2 }}>
                                                            <Typography gutterBottom variant="body2">
                                                                {item.title}
                                                            </Typography>
                                                            <Typography display="block" variant="caption" color="text.secondary">
                                                                {item.channel}
                                                            </Typography>
                                                            <Typography variant="caption" color="text.secondary">
                                                                {`${item.views} • ${item.createdAt}`}
                                                            </Typography>
                                                        </Box>
                                                    ) : (
                                                        <Box sx={{ pt: 0.5 }}>
                                                            <Skeleton />
                                                            <Skeleton width="60%" />
                                                        </Box>
                                                    )}
                                                </Box>
                                            ))}
                                        </Grid>
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

export default Work