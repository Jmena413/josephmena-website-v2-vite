import React from 'react';
import { Grid, Box, Grid2 } from '@mui/material';
import Sidebar from './Sidebar';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import useMediaQuery from '@mui/material/useMediaQuery';

const Layout = () => {

    const isLargeScreen = useMediaQuery("(min-width: 900px)");

    return (
        <Grid2 container spacing={2} sx={{ paddingTop: '10vh', paddingLeft: '15vw', paddingRight: '15vw'}}>
            {isLargeScreen && (
                <Grid2 container size={{md: 6}} sx={{position: 'sticky', top: '10vh', alignSelf: 'flex-start', minHeight: '80vh'}}>
                    <Sidebar/>
                </Grid2>
            )}
            <Grid2 container size={{xs: 12, md: 6}}>
                <section id="about">
                    <About/>
                </section>
                <section id="experience">
                    <Experience/>
                </section>
                <section id="projects">
                    <Projects/>
                </section>
            </Grid2>
        </Grid2>
    );
};

export default Layout;