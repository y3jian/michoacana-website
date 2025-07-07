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

    </div>
  );
}