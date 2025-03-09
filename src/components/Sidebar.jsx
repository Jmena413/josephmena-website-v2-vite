import { Box, Typography, Grid2 } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import React, { useEffect, useState, useRef } from 'react';
import { animate } from 'framer-motion';
import NavText from './NavText';

const Sidebar = () => {
    const [selectedNav, setSelectedNav] = useState('About');
    const sectionsRef = useRef({});

    const handleNavClick = (navItem) => {
        setSelectedNav(navItem);
        const section = document.getElementById(navItem.toLowerCase());
        
        if (section) {
            const top = section.getBoundingClientRect().top + window.scrollY;
            animate(window.scrollY, top, {
                duration: 0.4,
                onUpdate: (latest) => window.scrollTo(0, latest),
            });
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setSelectedNav(entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1));
                    }
                });
            },
            { threshold: 0.6 }
        );

        const sections = document.querySelectorAll('section');
        sections.forEach((section) => {
            observer.observe(section);
            sectionsRef.current[section.id] = section;
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <>
            <Grid2 container size={12} sx={{alignSelf: 'flex-start'}}>
                <Grid2 size={12}>
                    <Typography variant="h1" className='justify-left'>Joseph Mena</Typography>
                </Grid2>
                <Grid2 size={12}>
                    <Typography variant='h2' className='justify-left'>Full Stack Engineer</Typography>
                </Grid2>
                <Grid2>
                    <Typography variant='body1' className='justify-left padding'>Experienced in building full-stack applications with React, Java, or Python.</Typography>
                </Grid2>
            </Grid2>
            <Grid2 container size={12} sx={{alignContent: 'flex-start'}}>
                <Grid2 size={12}>
                    <NavText text="About" isSelected={selectedNav === 'About'} onClick={() => handleNavClick('About')} />
                </Grid2>
                <Grid2 size={12}>
                    <NavText text="Experience" isSelected={selectedNav === 'Experience'} onClick={() => handleNavClick('Experience')} />
                </Grid2>
                <Grid2 size={12}>
                    <NavText text="Projects" isSelected={selectedNav === 'Projects'} onClick={() => handleNavClick('Projects')} />
                </Grid2>
            </Grid2>
            <Grid2 container size={12} sx={{marginTop: 'auto'}}>
                <Grid2>
                    <GitHubIcon/>
                </Grid2>
                <Grid2>
                    <LinkedInIcon/>
                </Grid2>
                <Grid2>
                    <EmailIcon/>
                </Grid2>
            </Grid2>
        </>
    );
};

export default Sidebar;