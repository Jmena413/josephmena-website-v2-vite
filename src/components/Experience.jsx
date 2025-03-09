import React from "react";
import { Paper, Chip, Typography, Box, Grid2, Link } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const experienceData = [
    {
        timeframe: "AUG 2023 - PRESENT",
        position: "Software Engineer I - Full Stack Engineer",
        company: "J.P. Morgan Chase & Co.",
        description: "Developed and maintained components and backend services for an internal form based application. Worked closely with cross-functional teams, to implement new features.",
        skills: ["React.js", "Java", "AWS", "Jenkins", "Spring Boot"]
    },
    {
        timeframe: "JUN 2022 - AUG 2022",
        position: "Software Engineer Intern",
        company: "J.P. Morgan Chase & Co.",
        description: "Developed crucial components for a new, public facing internal onboarding process. Worked closely with cross-functional teams, including other interns, full-time engineers, and product managers to deliver a seamless onboarding experience.",
        skills: ["React.js", "Jest", "Enzyme"]
    }
];

const Experience = () => {
    const theme = useTheme();

    return (
        <Box>
            {experienceData.map((experience, index) => (
                <Paper key={index} elevation={0} sx={{ backgroundColor: 'transparent'}}>
                    <Grid2 container size={12} className='top-padding'>
                        <Grid2 container size={3}>
                            <Box>
                                <Typography variant="overline" className="justify-left">{experience.timeframe}</Typography>
                            </Box>
                        </Grid2>
                        <Grid2 container size={9}>
                            <Grid2 size={12}>
                                <Typography variant="body1" className="justify-left" sx={{ fontWeight: 'bold', color: theme.palette.text.white }}>{experience.position} at {experience.company}</Typography>
                            </Grid2>
                            <Grid2 size={12}>
                                <Typography variant="body1" className="justify-left" sx={{ fontSize: '0.85rem'}}>{experience.description}</Typography>
                            </Grid2>
                            <Grid2 size={12}>
                                {experience.skills.map((skill, idx) => (
                                    <Chip 
                                        key={idx} 
                                        label={skill} 
                                        style={{ margin: "5px" }} 
                                        sx={{ 
                                            color: theme.palette.primary.main, 
                                            backgroundColor: `${theme.palette.primary.main}30` //</Grid2> 80 is the hex value for 50% opacity
                                        }}
                                    />
                                ))}
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Paper>
            ))}
            <Link variant="body1" underline="false" href="/JosephMenaSoftwareEngineerResume.pdf" target="_blank" rel="noopener" sx={{ display: 'block', marginBottom: '20px', textAlign: 'left', marginTop: '3em', fontWeight: 'bold' }}>
                View My Resume
            </Link>
        </Box>
    );
}

export default Experience;