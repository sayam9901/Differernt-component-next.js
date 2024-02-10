import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TableComponent = () => {
    // Hardcoded entries for the table
    const entries = [
        { name: 'John Doe', email: 'john@example.com', role: 'Admin', locations: 'New York', lastActive: '2024-02-10', permissions: 'All', status: 'Active' },
        { name: 'Jane Smith', email: 'jane@example.com', role: 'User', locations: 'Los Angeles', lastActive: '2024-02-09', permissions: 'Read-only', status: 'Active' },
        { name: 'Jane Smith', email: 'jane@example.com', role: 'User', locations: 'Los Angeles', lastActive: '2024-02-09', permissions: 'Read-only', status: 'Active' },
        { name: 'Jane Smith', email: 'jane@example.com', role: 'User', locations: 'Los Angeles', lastActive: '2024-02-09', permissions: 'Read-only', status: 'Active' },
        { name: 'Jane Smith', email: 'jane@example.com', role: 'User', locations: 'Los Angeles', lastActive: '2024-02-09', permissions: 'Read-only', status: 'Inactive' },
        // Add more entries as needed
    ];

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{ backgroundColor: '#f0f0f0' }}>Name</TableCell>
                        <TableCell style={{ backgroundColor: '#f0f0f0' }}>Email</TableCell>
                        <TableCell style={{ backgroundColor: '#f0f0f0' }}>Role</TableCell>
                        <TableCell style={{ backgroundColor: '#f0f0f0' }}>Locations</TableCell>
                        <TableCell style={{ backgroundColor: '#f0f0f0' }}>Last Active</TableCell>
                        <TableCell style={{ backgroundColor: '#f0f0f0' }}>Permissions</TableCell>
                        <TableCell style={{ backgroundColor: '#f0f0f0' }}>Status</TableCell>
                        <TableCell style={{ backgroundColor: '#f0f0f0' }}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {entries.map((entry, index) => (
                        <TableRow key={index}>
                            <TableCell>{entry.name}</TableCell>
                            <TableCell>{entry.email}</TableCell>
                            <TableCell>{entry.role}</TableCell>
                            <TableCell>{entry.locations}</TableCell>
                            <TableCell>{entry.lastActive}</TableCell>
                            <TableCell>{entry.permissions}</TableCell>
                            <TableCell>
                                {entry.status === 'Active' ? (
                                    <Button variant="contained" color="success">Active</Button>
                                ) : (
                                    <Button variant="contained" color="error">Inactive</Button>
                                )}
                            </TableCell>
                            <TableCell>
                                <Button size="small"><img src='https://media.discordapp.net/attachments/878640088446271509/1205919870684889138/tabler_edit.png?ex=65da1f66&is=65c7aa66&hm=b06c8fa4c1f55f861399fb4f30d8c6b8737aeee71e7e024e387ff536df0f6c05&=&format=webp&quality=lossless&width=31&height=31'></img></Button>
                                <Button size='small'><img src="https://media.discordapp.net/attachments/878640088446271509/1205919871037087825/Vector.png?ex=65da1f66&is=65c7aa66&hm=997345a4ed6ac68bf6e33e9dad58fe75109d16bb8a2037a80b2c0efa724c9ec3&=&format=webp&quality=lossless&width=20&height=23"></img></Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TableComponent;
