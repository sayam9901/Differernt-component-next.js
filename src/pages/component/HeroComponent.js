import React from "react";
import { Card, CardContent, CardActions, Button, Typography, IconButton } from '@mui/material';

const HeroComponent = ()=>{
    return(
    // <div style = {{ height:'1115.33px' , width : "1200px"}}>
        <div style={{width:'1200.33px'}}>
        {/* compoentn for the top bar */}
        <div style={{width:"1115.33px",height:"108px",display:"flex" , justifyContent:"space-between"}}>
           <div style={{display:"flex",flexDirection:"column"}}>
            {/* this div id for the left button and text */}
            <div style={{display:"flex"}}>
            <div style={{ display: 'flex', alignItems: 'center' ,marginTop: '8px',marginLeft:"8px",height:"45.33px",width:"45.33px"}}>
                    {/* Icon image */}
                    <img src="https://media.discordapp.net/attachments/878640088446271509/1205814641390002236/ic_baseline-arrow-back.png?ex=65d9bd65&is=65c74865&hm=982bbc1ef8441e33d2ae590345ab09c20ebee8484156a23f6961468e84b6080f&=&format=webp&quality=lossless&width=57&height=57" alt="Icon" style={{ width: '48px', height: '48px', marginRight: '10px' }} />
                    {/* Text with bold font and light gray color */}
                   
                </div>
                <div style={{display:"flex" , flexDirection:"row",marginTop:'5px',height:"42px"}}>
                <Typography variant="h9" style={{color: 'black',marginTop: '8px',marginLeft:"8px",height:"40px"}}><strong style={{fontSize:"25px", fontWeight: 'bold', }}>VMS</strong>/Cameras/CameraDetails</Typography>
                </div>
            </div>
            <Typography style={{fontWeight:"400",fontSize:"10px",height:"24px",color:"rgba(0, 0, 0, 0.47)",marginLeft:"70px"}}>Bank Entrance-front-view Camera1</Typography>
            <Typography style={{marginLeft:"70px", fontSize:"14px"}}>View and manage camera details, recordings and connection details</Typography>
           </div>
           <div style={{display:"flex" , justifyContent:"space-between",marginLeft:"30px"}}>
             {/* this div is for the right 3 buttons */}
             <Button style={{borderRadius:"8px",padding:"4px 0px 4px 0px",border:"1.4px solid black",fontSize:"14px",color:"black",width:"120px",height:"48px"}}>Edit Camera</Button>
             <Button style={{borderRadius:"8px",marginLeft:"10px",padding:"4px 0px 4px 0px",border:"1.4px solid black",fontSize:"14px",color:"black",width:"120px",height:"48px"}}>Dactivate</Button>
             <Button style={{borderRadius:"8px",marginLeft:"10px",padding:"4px 0px 4px 0px",border:"1.4px solid red",fontSize:"14px",color:"red",width:"120px",height:"48px"}}>Delete Camera</Button>
           </div>
        </div>
        {/* componnent for the second subcomponent which have cmera image on left and the description on the right*/}
        <div style={{
            width: "1102px",
            height: "1047px",
            padding: "35px, 23px, 47.33px, 23px",
            borderRadius: "4px",
            border: "1px solid rgba(229, 229, 229, 1)",
            marginTop:"30px"     
        }}>
        <div style={{margin : "12px 12px 12px 12px"}}>
            <Button style={{height:'48px',wdith:"228px",padding:"12px 22px 12px 22px",backgroundColor:'rgba(239, 239, 239, 1)',color:"black"}}>
               <div style={{marginTop:"3px",marginRight:"2px"}}>
                <img src="https://media.discordapp.net/attachments/878640088446271509/1205834938172047411/bx_video-recording.png?ex=65d9d04c&is=65c75b4c&hm=bdf75b832914e8396ce1e49bb53a73df1306c35edab6940c1418ff44b66b1b05&=&format=webp&quality=lossless&width=30&height=30"></img>
                </div>View Recorded Video
            </Button >
            <Button style={{height:'48px',wdith:"228px",padding:"12px 22px 12px 22px",backgroundColor:'rgba(239, 239, 239, 1)',color:"black",marginLeft:"12px"}}>
            <div style={{marginTop:"3px",marginRight:"2px"}}>
                <img src="https://media.discordapp.net/attachments/878640088446271509/1205834937920524328/uim_refresh.png?ex=65d9d04c&is=65c75b4c&hm=7b8fadf8a547875df7553c226eb2db9fb64d6c1b1eed2448a10c3684a16556ab&=&format=webp&quality=lossless&width=30&height=30"></img>
                </div>Refresh Camera
            </Button>
        </div>
        <div style={{display:"flex",margin : "12px 12px 12px 12px"}}>
            {/* camera card and desctoption */}
            <div style={{marginTop:"12px"}}>
                <img src="https://media.discordapp.net/attachments/878640088446271509/1205836533152616480/Group_49.png?ex=65d9d1c8&is=65c75cc8&hm=b29f824d5008530ac330ef7aab3f586371af4da271701a41f4c262b2add35437&=&format=webp&quality=lossless&width=750&height=421"
                style={{
                    width: "600px",
                    height: "336.96px",
                   borderRadius: "12px"
                }}
                ></img>
            </div>
            <div style={{marginLeft:"28px",display:"flex",flexDirection:"column" , borderRadius: "4px",
            border: "1px solid rgba(229, 229, 229, 1)" }}>
                {/* camera description */}
                <div style={{height: "22px" , width : "390px",display:"flex" , justifyContent:"space-between",marginTop:"12px"}}>
                    <Typography style={{fontSize:"20px",fontWeight:"600", marginLeft:"12px"                                                          }}>Camera Details</Typography>
                    <Button style={{width:"53px",height:"22px",borderRadius:"4px",padding:"4px 8px 4px 8px", backgroundColor:"rgba(0, 219, 74, 0.87)" , color:"white",marginRight:"12px"}}>Active</Button>
                </div>
                <div style={{display:"flex", flexDirection:"column",marginTop:"22px"}}>
                <Typography style={{marginLeft:"12px", marginTop:"10px"}}>location:<span style={{fontSize:"13px",fontWeight:"400",color:"rgba(117, 117, 117, 1)",marginLeft:"10px"}}>coimbatore</span></Typography>
                <Typography style={{marginLeft:"12px", marginTop:"10px"}}>City:<span style={{fontSize:"13px",fontWeight:"400",color:"rgba(117, 117, 117, 1)",marginLeft:"10px"}}>coimbatore</span></Typography>
                <Typography style={{marginLeft:"12px", marginTop:"10px"}}>TimeZone:<span style={{fontSize:"13px",fontWeight:"400",color:"rgba(117, 117, 117, 1)",marginLeft:"10px"}}>Delhi-India</span></Typography>
                <Typography style={{marginLeft:"12px", marginTop:"10px"}}>Date Added:<span style={{fontSize:"13px",fontWeight:"400",color:"rgba(117, 117, 117, 1)",marginLeft:"10px"}}>23feb 2023 12:30:23 am</span></Typography>
                <Typography style={{marginLeft:"12px", marginTop:"10px"}}>Last Updated:<span style={{fontSize:"13px",fontWeight:"400",color:"rgba(117, 117, 117, 1)",marginLeft:"10px"}}>23feb 2023 12:30:23 am</span></Typography>
                </div>
                <div style={{display:"flex", flexDirection:"column",marginTop:"22px"}}>
                <Typography style={{marginLeft:"12px", marginTop:"10px"}}>Manufacture Details:<span style={{fontSize:"13px",fontWeight:"400",color:"rgba(117, 117, 117, 1)",marginLeft:"10px"}}>ADI</span></Typography>
                <Typography style={{marginLeft:"12px", marginTop:"10px"}}>RTSP/HLS URL:<span style={{fontSize:"13px",fontWeight:"400",color:"rgba(117, 117, 117, 1)",marginLeft:"10px"}}>COPY URL</span></Typography>
                </div>
            </div>
        </div>
            <div style={{display:"flex",flexDirection:"column",width:"1054px",height:"204px",marginTop:"18px",marginLeft:"12px"}}>
                {/* this is the component for camera health and alerts */}
                <Typography style={{height:"24px",fontSize:"20px",fontWeight:"600"}}>Camera Health and Alert</Typography>
                <div style={{display:"flex",justifyContent:"space-between",marginLeft:"10px",marginTop:"22px"}}>
                 <Card style={{width:"338px",height:"162px",borderRadius:"6px",border:"1px solid rgba(229, 229, 229, 1)"}}>
                    <CardContent style={{display:"flex",flexDirection:"column"}}>
                       <Typography style={{fontSize:"14px",fontWeight:"600",color: "rgba(34, 34, 34, 1)"}}>Offline Alert</Typography>
                       <Typography style={{fontSize:"13px",fontWeight:"400",color:"rgba(117, 117, 117, 1)"}}>if camera is continue offline for</Typography>
                       <Typography style={{fontSize:"20px",fontWeight:"500",marginTop:"5px"}}>12 Minutes</Typography>
                       <Typography style={{fontSize:"13px",fontWeight:"400",color:"rgba(117, 117, 117, 1)",marginTop:"5px"}}>send an email to</Typography>
                       <Typography style={{fontSize:"13px",fontWeight:"600",color: "rgba(34, 34, 34, 1)"}}>email@.com</Typography>
                    </CardContent>
                 </Card>
                 <Card style={{width:"338px",height:"162px",borderRadius:"6px",border:"1px solid rgba(229, 229, 229, 1)"}}>
                    <CardContent>
                    <Typography style={{fontSize:"14px",fontWeight:"600",color: "rgba(34, 34, 34, 1)"}}>Health Grade</Typography>
                    <Typography style={{fontWeight:"500",fontSize:"28px"}}>96%</Typography>
                    <Typography style={{fontSize:"13px",fontWeight:"400",color:"rgba(117, 117, 117, 1)",marginTop:"10px"}}>cheers this camera has no offline time</Typography>
                    <Typography style={{fontSize:"13px",fontWeight:"600",color:"rgba(76, 175, 80, 1)",paddingTop:"5px"}}>Grade A</Typography>
                    </CardContent>
                 </Card>
                 <Card style={{width:"338px",height:"162px",borderRadius:"6px",border:"1px solid rgba(229, 229, 229, 1)"}}>
                    <CardContent>
                    <Typography style={{fontSize:"14px",fontWeight:"600",color: "rgba(34, 34, 34, 1)"}}>Health Logs</Typography>
                    <Typography style={{fontSize:"13px",fontWeight:"400",color:"rgba(117, 117, 117, 1)",marginTop:"5px"}}>Today at 12:30</Typography>
                    <Typography style={{fontSize:"13px",fontWeight:"400",color:"rgba(117, 117, 117, 1)"}}>23 feb at 3:34</Typography>
                    <Typography style={{fontSize:"13px",fontWeight:"400",color:"rgba(117, 117, 117, 1)"}}>12 jan at 5:49</Typography>
                    <Typography style={{fontSize:"13px",fontWeight:"400",color:"rgba(117, 117, 117, 1)"}}>4 dec at 12:45</Typography>
                    <Typography style={{fontSize:"13px",fontWeight:"400",color:"rgba(117, 117, 117, 1)"}}>7 nov at 5:45</Typography>
                    </CardContent>
                 </Card>
                </div>
            </div>
            <div style={{display:"flex",flexDirection:"column",height:"280px",width:"1052px",marginTop:"32px",marginLeft:"12px"}}>
                {/* this is the component for the recent recording */}
                <div style={{display:"flex",justifyContent:"space-between"}}>
                <Typography style={{height:"24px",fontSize:"20px",fontWeight:"600"}}>Recent Recording</Typography>
                  <Button style={{color:"black"}}>View All</Button>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"12px",marginLeft:"10px",width:"1052px"}}>
                   <Card style={{width:"230px",height:"237px",border: "1px solid rgba(229, 229, 229, 1)",borderRadius:"4px",padding:"10px"}}>
                    <CardContent style={{display:"flex",flexDirection:"column"}}>
                      <img src="https://media.discordapp.net/attachments/878640088446271509/1205905433366233088/Group_32.png?ex=65da11f3&is=65c79cf3&hm=85d085352446a9a34b19885ea7b1362d41f052f91a184a9ae698be0f75fb80d1&=&format=webp&quality=lossless&width=287&height=210" style={{width:"230px",height:"167px",marginLeft:"-15px",marginTop:"-15px"}}></img>
                      <Typography style={{fontSize:"14px",fontWeight:"600",color: "rgba(34, 34, 34, 1)",marginLeft:"-15px",marginTop:"15px"}}>Recording_1201</Typography>
                       <Typography style={{fontSize:"13px",fontWeight:"400",color:"rgba(117, 117, 117, 1)",marginLeft:"-15px",marginTop:"15px"}}>Today at 5:23 am</Typography>
                    </CardContent>
                   </Card>
                   <Card style={{width:"230px",height:"237px",border: "1px solid rgba(229, 229, 229, 1)",borderRadius:"4px",padding:"10px"}}>
                    <CardContent>
                    <img src="https://media.discordapp.net/attachments/878640088446271509/1205906765603151933/Group_38.png?ex=65da1331&is=65c79e31&hm=c27de37b306f9ab30508d054d61a833de107695079683c58e2c61d0385df0a19&=&format=webp&quality=lossless&width=287&height=210" style={{width:"230px",height:"167px",marginLeft:"-15px",marginTop:"-15px"}}></img>
                    <Typography style={{fontSize:"14px",fontWeight:"600",color: "rgba(34, 34, 34, 1)",marginLeft:"-15px",marginTop:"15px"}}>Recording_1201</Typography>
                       <Typography style={{fontSize:"13px",fontWeight:"400",color:"rgba(117, 117, 117, 1)",marginLeft:"-15px",marginTop:"15px"}}>Today at 5:23 am</Typography>
                    </CardContent>
                   </Card>
                   <Card style={{width:"230px",height:"237px",border: "1px solid rgba(229, 229, 229, 1)",borderRadius:"4px",padding:"10px"}}>
                    <CardContent>
                    <img src="https://media.discordapp.net/attachments/878640088446271509/1205906765963595807/Group_34.png?ex=65da1331&is=65c79e31&hm=4f9f54ebf593751702a2e9ed1f42dcba0ccaffd48f7f11fbd6c9d0a8569b9071&=&format=webp&quality=lossless&width=287&height=210" style={{width:"230px",height:"167px",marginLeft:"-15px",marginTop:"-15px"}}></img>
                    <Typography style={{fontSize:"14px",fontWeight:"600",color: "rgba(34, 34, 34, 1)",marginLeft:"-15px",marginTop:"15px"}}>Recording_1201</Typography>
                       <Typography style={{fontSize:"13px",fontWeight:"400",color:"rgba(117, 117, 117, 1)",marginLeft:"-15px",marginTop:"15px"}}>Today at 5:23 am</Typography>
                    </CardContent>
                   </Card>
                   <Card style={{width:"230px",height:"237px",border: "1px solid rgba(229, 229, 229, 1)",borderRadius:"4px",padding:"10px"}}>
                    <CardContent>
                    <img src="https://media.discordapp.net/attachments/878640088446271509/1205906766273970257/Group_33.png?ex=65da1331&is=65c79e31&hm=32b303005dac3e66846b112acd2169378ec78fc9fa5fcfac90ed5353c55f5836&=&format=webp&quality=lossless&width=287&height=210" style={{width:"230px",height:"167px",marginLeft:"-15px",marginTop:"-15px"}}></img>
                    <Typography style={{fontSize:"14px",fontWeight:"600",color: "rgba(34, 34, 34, 1)",marginLeft:"-15px",marginTop:"15px"}}>Recording_1201</Typography>
                       <Typography style={{fontSize:"13px",fontWeight:"400",color:"rgba(117, 117, 117, 1)",marginLeft:"-15px",marginTop:"15px"}}>Todat at 7:57 am</Typography>
                    </CardContent>
                   </Card>
                </div>
            </div>
            </div>
    </div>
    )
}
export default HeroComponent