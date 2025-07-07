import { Typography, Box, Button, Stack } from "@mui/material";
import React, {useEffect, useState} from "react";
import ImageSlider from "../components/ImageSlider"
import { useInView } from "react-intersection-observer";
import { keyframes } from "@emotion/react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";



export default function Home ({scrollY}) {
const offset = Math.min (scrollY / 2, 200);

  return (
    <div style={{ paddingTop: 120}}>
      {/* Hero Section */}
      <Box
      sx = {{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 3,
      px: 4,
      bgcolor: "rgba(249, 231, 239)",
      height: "70vh",
    }}>
      
      <Box
      sx = {{
       // left: "0",
       position:" absolute",
        pt: 3,
        pl:15,
        width: "50%",
        height: "40%",
        color: "Black",
        textAlign: "left",
        //bgcolor: "rgb(213, 59, 128)",
      }}>
        <Typography variant = "h1">Michoacán A Pedir de Boca</Typography>
        <Typography variant = "h4"> 
         A taste of Mexico
        <br /> Come try our delicious ice cream and treats!
        </Typography>

          {/* MOVE TO FOOTER ALONG WITH HOURS */}
          {/* <Typography variant = "body1">
          <br /> Bethesda Walk, 3059 Lawrenceville Highway, Lawrenceville, GA
          </Typography> */}

        <Button>View Menu</Button>
      </Box>
        <Box
          component = "img"
          src="/images/Mangoneada-Cup.png"
          alt="storeFront"
          sx={{
            position: "absolute",
            top: 80,
            right: 155,
            width: "350px",
            transform: `translateX(${offset}px) rotate(-45deg)`,
            transition: "transform 0.1s ease-out",
          }}
        />
        
      </Box>
      {/* ABOUT */}
      <Box
      sx = {{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        top: 0,
        left: 0,
        width: "100%",
        height: "700px",
        bgcolor: "rgba(242, 200, 218)",
      }}>
        <Box
        sx = {{
          pl: 5,
          pt: 7,
          width: "50%",
          transform: `translateX(${offset/4}px)`,
          transition: "transform 0.1s ease-out",
        }}><ImageSlider/></Box>

        <Box
        sx= {{
          position:"right",
          pt: 30,
          //pr:10,
          width: "50%",
          color: "Black",
          textAlign: "center",
        }}
        >
          <Typography variant = "h3">Delicious Treats</Typography>
          <Typography variant = "h6">Bethesda Walk, 
            3059 Lawrenceville Highway, 
            <br/>Lawrenceville, GA</Typography>
          <Typography variant = "h6">Open 11:00 am - 9:00 pm daily</Typography>
        </Box> 
        {/* <Box
        component = "img"
          src="/images/store-view.jpg"
          alt="storeFront"
          sx={{
            pt: 2,
            width: "50%",
            transform: `translateX(${offset/4}px)`,
            transition: "transform 0.1s ease-out",
          }}
          ></Box>
        <Box
        sx= {{
          position:"right",
          pt: 3,
          pr:50,
          width: "50%",
          height: "50%",
          color: "Black",
          textAlign: "right",
        }}
        >
          <Typography variant = "h5">Hello</Typography>
        </Box> */}
      </Box>
      

    </div>
  );
}