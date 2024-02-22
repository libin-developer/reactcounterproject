import { Box, Button, Container, Stack, Typography } from '@mui/material'
import pixelimg from "../assets/images/Google-Pixel-6-Pro.jpg"
import "./new.css"
import React, { useState } from 'react'
import styled from '@emotion/styled'

export default function Newapp() {
    let [count,setcount] =useState(0);

    const handleincrement =()=>{
        {setcount(++count)}

    }

    const handledecrement =()=>{
        if(count>0){
            {setcount(--count)}
            if(count<=0){
                alert("add something🤗")
            }
        }
    }
  return (
    <div>
      <Container className='con1'>
        <Typography className='heading1' variant='h4'> COUNTER APP</Typography>
       <Box className='box1'>
       <Box className='box2'>
        <img style={{width:"100%",height:"100%"}} src={pixelimg}/>
        </Box>
        <Heading>Google pixel 6 Pro (6gb ,128Gb white)</Heading>
        <Typography sx={{color:"white",textAlign:"center"}}>QTY: {count}</Typography>
        <Stack direction="row" spacing={2} sx={{justifyContent:"center",marginTop:"20px"}}>
            <item>
                <Button variant='contained' onClick={handleincrement}>+</Button>
            </item>
            <item>
                <Button variant='contained' disabled={count<=0} onClick={handledecrement}>-</Button>
            </item>
        </Stack>
        
       </Box>
      </Container>
    </div>
  )
}
const Heading =styled.h1`
    color: white;
    font-size: 16px;
    margin-top: 50px;
    text-align: center;
    cursor: pointer;

     :hover{
        color: #38a1c4;

    }
    @media (max-width: 767px) {
        margin-top: 30px;
        font-size: 7px;
    
  }
`

