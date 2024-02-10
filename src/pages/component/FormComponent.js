import React from 'react';
import { Button, TextField, Typography, FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';

const FormComponent = () => {
    return (
        <div style={{width:"auto"}}>
        <div style={{ width: '602px', height: '699px', position: 'absolute',left: '300px',marginTop:"50px", display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '31px', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <Typography variant="h1">XYZ</Typography>
            <Typography variant="h4">Welcome to Onboard</Typography>
            <TextField label="Your Name" fullWidth variant="outlined" style={{ backgroundColor: '#f0f0f0' }} />
            <TextField label="Company Name" fullWidth variant="outlined" style={{ backgroundColor: '#f0f0f0' }} />
            <FormControl fullWidth variant="outlined" >
                <InputLabel>Select Your Company</InputLabel>
                <Select style={{ backgroundColor: '#f0f0f0' }}>
                    <MenuItem value="company1">Company 1</MenuItem>
                    <MenuItem value="company2">Company 2</MenuItem>
                    {/* Add more menu items as needed */}
                </Select>
            </FormControl>
            <Typography variant="body2" marginLeft="-400px">Select the number of locations:</Typography>
            <Box display="flex" justifyContent="space-between" width="100%">
                <Button variant="outlined" style={{ backgroundColor: '#f0f0f0', color: '#444', width: 'calc(25% - 5px)' }}>1-10</Button>
                <Button variant="outlined" style={{ backgroundColor: '#f0f0f0', color: '#444', width: 'calc(25% - 5px)' }}>10-50</Button>
                <Button variant="outlined" style={{ backgroundColor: '#f0f0f0', color: '#444', width: 'calc(25% - 5px)' }}>50-100</Button>
                <Button variant="outlined" style={{ backgroundColor: '#f0f0f0', color: '#444', width: 'calc(25% - 5px)' }}>150+</Button>
            </Box>
            <Button variant="contained" style={{ backgroundColor: '#444', color: '#fff', width: '100%' }}>Continue</Button>
        </div>
        </div>
    );
};

export default FormComponent;
