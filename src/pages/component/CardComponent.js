import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const CardComponent = () => {
    return (
        <div style={{display : "flex", color: '#888'}}>
        <Card style={{ width: '340px', height: '430px', position: 'absolute',  left: '185px', borderRadius: '12px' }}>
            <CardContent>
                <img src="https://media.discordapp.net/attachments/878640088446271509/1205761029234237500/Screenshot_2024-02-10_114150.png?ex=65d98b77&is=65c71677&hm=09aea7d2318076c24c9a64e9b3718f3ab658b4aec2432434e63b12304602e504&=&format=webp&quality=lossless&width=972&height=593" alt="Placeholder"style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px 12px 0 0' }}  />
                <Typography variant="h6" style={{ fontWeight: 'bold', marginTop: '10px' }}>Back Entrance-front view camera 1</Typography>
                <Typography variant="body2" style={{ color: '#888', marginTop: '10px' }}>
                    <span><LocationOnIcon style={{ fontSize: '1rem', marginRight: '5px' }} /></span>
                    <span>Location: Building A, Floor 2</span>
                </Typography>
                <Typography variant="body2" style={{ color: '#888', marginTop: '5px' }}>
                    <span><EditIcon style={{ fontSize: '1rem', marginRight: '5px' }} /></span>
                    <span>Edit: 2024-02-10</span>
                </Typography>
                <Typography variant="body2" style={{ color: '#888', marginTop: '5px' }}>
                    <span><DeleteIcon style={{ fontSize: '1rem', marginRight: '5px' }} /></span>
                    <span>Delete: 2024-02-11</span>
                </Typography>
            </CardContent>
            <CardActions style={{ display: 'flex', justifyContent: 'space-between', marginTop: '-10px' }}>
                <Button size="small" style={{ backgroundColor: 'green', color: 'white' }}>Active</Button>
                <div>
                    <IconButton size="small">
                        <EditIcon />
                    </IconButton>
                    <IconButton size="small">
                        <DeleteIcon />
                    </IconButton>
                    <IconButton size="small">
                        <LocationOnIcon />
                    </IconButton>
                </div>
            </CardActions>
        </Card>
        <Card style={{ width: '348px', height: '140px', position: 'absolute', left: '558px' }}>
            <CardContent style={{ padding: '4px 2px 2px 4px' }}>
                <div style={{ display: 'flex', alignItems: 'center' ,marginTop: '8px',marginLeft:"8px"}}>
                    {/* Icon image */}
                    <img src="https://media.discordapp.net/attachments/878640088446271509/1205765767845519411/fluent_clipboard-task-add-24-regular.png?ex=65d98fe1&is=65c71ae1&hm=4705ab441efbace05c2b2e5abb791eadf35560c547f093c478299afebe321282&=&format=webp&quality=lossless&width=60&height=61" alt="Icon" style={{ width: '48px', height: '48px', marginRight: '10px' }} />
                    {/* Text with bold font and light gray color */}
                   
                </div>
                <Typography variant="h6" style={{ fontWeight: 'bold', color: '#888',marginTop: '8px',marginLeft:"8px" }}>Recipe Management</Typography>
                {/* Text at the bottom right corner */}
                <Typography variant="body2" style={{ color: '#888', marginTop: '8px',marginLeft:"260px"}}>Manage</Typography>
            </CardContent>
        </Card>
        </div>
    );
};

export default CardComponent;
