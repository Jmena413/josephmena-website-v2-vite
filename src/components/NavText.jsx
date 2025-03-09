import React, { useState } from 'react';
import './NavText.css';
import { Box } from '@mui/material';

const NavText = ({ text, isSelected, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Box
            className={`nav-text ${isHovered || isSelected ? 'active' : ''} justify-left padding-nav-text`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            {text}
        </Box>
    );
};

export default NavText;