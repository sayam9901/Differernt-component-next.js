import React from "react";
import { Card, CardContent, CardActions, Button, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DonutChart from "./DonutChart";


const ChartComponent = () => {
  return (
    <Card style={{ width: '1076px', height: '275px', position: 'absolute', left: '50px', padding: '20px 24px', borderRadius: '12px', border: '1px solid', gap: '10px' }}>
      <CardContent>
        <Typography variant="h6" align="center">Camera Health</Typography>
        <div style={{ display: 'flex' }}>
          {/* Left side - Image of pie chart */}
          <div style={{ flex: 1, position: 'relative' }}>
            <img src="https://media.discordapp.net/attachments/878640088446271509/1205775762893053962/Screenshot_2024-02-10_125109.png?ex=65d99930&is=65c72430&hm=d29ae0e50a24304189cdc45174c1112b22f39fe089333777ffdd2d348411eed2&=&format=webp&quality=lossless&width=207&height=183" alt="Pie Chart" style={{ width: '50%' }} />
            <div style={{ position: 'absolute', top: '50%', left: '25%', transform: 'translate(-50%, -50%)', background:"white", borderRadius: '100%', padding: '8px',height:"120px",width:"120px" }}>
              <Typography variant="body1" align="center" style={{ fontWeight: 'bold', marginTop:"40px"}}>125 Cameras</Typography>
            </div>
          </div>
          <div style={{ flex: 1}}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' , marginLeft:"-240px", marginTop:"-20px"}}>
              <div style={{ height: '30%', backgroundColor: 'lightgray', borderRadius: '5px',display:"flex",alignItems:"center",marginBottom:"10px"}}>
              <IconButton size="small">
                        <DeleteIcon />
                    </IconButton>
                    Totally <strong> 124 </strong> camera are in 19 NVR'a and installed in 12 locations
              </div>
              <div style={{ height: '30%', backgroundColor: 'lightcoral', borderRadius: '5px',display:"flex",alignItems:"center" , justifyContent:"space-between" }}>
                <div>
                <IconButton size="small">
                        <DeleteIcon />
                    </IconButton>
                    <strong>6 cameras</strong> were experince downtime in last <strong>30 days</strong>
                </div>
                    <Button size="small" style={{ backgroundColor: 'white', color: 'black',marginRight:"10px" }}>View Camera</Button>
              </div>
              <div style={{display : "flex" , alignItems:"center" , justifyContent:"space-evenly",marginTop:"10px",marginLeft:"-70px"}}>
                 <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '10px', height: '10px', backgroundColor: 'green', marginRight: '5px', borderRadius: '50%' }}></div>
                    <Typography>superhealthy(56)</Typography>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '10px', height: '10px', backgroundColor: 'blue', marginRight: '5px', borderRadius: '50%' }}></div>
                    <Typography>healthy(35)</Typography>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '10px', height: '10px', backgroundColor: 'yellow', marginRight: '5px', borderRadius: '50%' }}></div>
                    <Typography>warning(27)</Typography>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '10px', height: '10px', backgroundColor: 'red', marginRight: '5px', borderRadius: '50%' }}></div>
                    <Typography>danger(6)</Typography>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChartComponent;
