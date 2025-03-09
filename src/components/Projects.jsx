import React from "react";
import { Paper, Typography, Box, Grid2 } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const projectData = [
    {
        title: "Super Mario Land - Genetic Algorithm AI",
        description: "A genetic algorithm implementation created to learn through playing Super Mario Land. The AI agent learns to play the game by itself and can complete the first level of the game. The project was built using Python and made use of the PyBoy library for emulation.",
        image: "superMarioLand.webp"
    },
    {
        title: "Pokemon Emerald AI",
        description: "A Pokemon AI agent that learns to play Pokemon Emerald through reinforcement learning, making use of a convolutional neural network to make decisions. The project was built using Python and made use of the OpenAI Gym library for reinforcement learning.",
        image: "/pokemonEmeraldAiAnnotating.png"
    }
]

const Projects = () => {
    const theme = useTheme();

    return (
        <Box className="top-padding">
            {projectData.map((project, index) => (
                <Paper 
                    key={index} 
                    elevation={0} 
                    sx={{ 
                        backgroundColor: 'transparent', 
                        padding: theme.spacing(2), 
                        marginBottom: theme.spacing(2),
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: theme.shadows[6],
                        }
                    }}
                    className="top-padding"
                >
                    <Grid2 container>
                        <Grid2 item size={{xs:12, md:4}}>
                            <Box 
                                component="img"
                                sx={{
                                    width: '100%',
                                    maxWidth: 120,
                                    maxHeight: 80,
                                    height: 'auto',
                                    objectFit: 'cover',
                                    display: 'block',
                                    borderRadius: '8px',
                                    transition: 'transform 0.3s',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                    }
                                }} 
                                src={project.image} 
                                alt={project.title} 
                            />
                        </Grid2>
                        <Grid2 item size={{xs:12, md:8}}>
                            <Typography 
                                variant="body1" 
                                className="justify-left"
                                sx={{ 
                                    fontWeight: 'bold', 
                                    color: theme.palette.text.primary,
                                    marginBottom: theme.spacing(1),
                                }}
                            >
                                {project.title}
                            </Typography>
                            <Typography 
                                variant="body2" 
                                className="justify-left"
                                sx={{ 
                                    fontSize: '0.85rem', 
                                    color: theme.palette.text.secondary,
                                }}
                            >
                                {project.description}
                            </Typography>
                        </Grid2>
                    </Grid2>
                </Paper>
            ))}
        </Box>
    );
}

export default Projects;