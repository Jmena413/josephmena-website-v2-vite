import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

const About = () => {
    return (
        <>
                <Typography variant="body1" component="p" className='justify-left'>
                    I am an early career developer that is still finding working to find their true passion in the tech industry. My favorite work that I have done so far has been in building AI agents for various tasks such as playing games or sollving other puzzles. Recently, my interest has lied more in developing analytics driven applications that can help users make better decisions.
                </Typography>
                <Typography variant="body1" component="p" className='justify-left padding-nav-text'>
                    Currently, I am a Full Stack Software Engineer at <Link href='https://www.jpmorganchase.com/'>JPMorgan Chase & Co.</Link> where I contribute to the development and maintenance of both frontend components and backend services for the firm's internal applications.
                </Typography>
                <Typography variant="body1" component="p" className='justify-left padding-nav-text'>
                    In the past, I have worked with statistical machine learning models and dabbled in game development with Unity. These experiences have been the most interesting to me and I hope to continue to work on projects that involve these technologies in the future either through my career or in my free time. 
                </Typography> 
                <Typography variant='body1' component='p' className='justify-left padding-nav-text'>
                    In my free time, I enjoy climbing, hanging out with my cats, collecting Pokemon cards, and playing through every new Pokemon entry (Black and White / Black and White 2 will forever be the greatest edition to the series).
                </Typography>
        </>
    );
};

export default About;