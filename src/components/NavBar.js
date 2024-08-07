import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const customTheme = createTheme({

    palette: {
        primary: {
            main: '#dc004e', // Custom primary color
        },
        // secondary: {
        //     main: '#dc004e', // Custom secondary color
        // },
        background: {
            default: '#f5f5f5', // Custom background color
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px', // Custom border radius for buttons
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: 'none', // Prevents uppercase text
                    // padding: '12px 16px', // Custom padding
                    color: '#000', // Default text color
                    textShadow: '0px 0px 8px white',
                    fontSize: '1rem',
                    '&.Mui-selected': {
                        color: '#dc004e', // Color when selected
                    },
                },
            },
        },
    },
}

);


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function NavBar(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const scrollToRef = (ref) => {
        ref.current.scrollIntoView({
            behavior: 'smooth', // optional: smooth scrolling
        });
    };

    return (
        <ThemeProvider theme={customTheme}>
            {/* <Box sx={{ width: '100%' }}> */}
            <Box sx={{
                width: '100%', borderBottom: 2,
                borderColor: 'divider',
                background: 'rgba(255, 255, 255, 0.5)', // White background with transparency
                backdropFilter: 'blur(8px)',
            }}>
                <Tabs sx={{ width: '100%' }} value={value} onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab onClick={() => scrollToRef(props.aboutRef)}
                        label="About" {...a11yProps(0)} />
                    <Tab onClick={() => scrollToRef(props.experienceRef)}
                        label="Work Experience" {...a11yProps(1)} />
                    {/* <Tab onClick={() => scrollToOffset(2)}
                        label="Projects" {...a11yProps(2)} />
                    <Tab onClick={() => scrollToOffset(2)}
                        label="Contact" {...a11yProps(2)} /> */}
                </Tabs>
            </Box>
            {/* </Box> */}
        </ThemeProvider>
    );
}
