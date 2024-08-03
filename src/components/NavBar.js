import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function NavBar() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: "#111111" }}>
                <Tabs value={value} onChange={handleChange}
                    aria-label="basic tabs example" textColor='secondary'
                    sx={{
                        ".Mui-selected": {
                            color: '#FF3C00',
                        },
                    }}>
                    <Tab label="About" {...a11yProps(0)} />
                    <Tab label="Work Experience" {...a11yProps(1)} />
                    <Tab label="Projects" {...a11yProps(2)} />
                </Tabs>
            </Box>
        </Box>
    );
}
