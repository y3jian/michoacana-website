import { Typography, Box, Button, Stack } from "@mui/material";
import React, {useEffect, useState} from "react";
import ImageSlider from "../components/ImageSlider"
import { useInView } from "react-intersection-observer";
import { keyframes } from "@emotion/react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";


export default function Home ({setCurrentPage}) {

  const {scrollYProgress} = useScroll();
 // map scroll position (0 to 1) to horizontal movement (-50px to 150px)
 const xShift = useTransform(scrollYProgress, [0, 1], [-150, 150]);
 // add spring for smoothness
 const smoothX = useSpring(xShift, {
  stiffness: 60,
  damping: 20,
  mass: 1,
});

  return (
    <div style={{ paddingTop: 120, paddingBottom: "200vh" }}>
      {/* Hero Section */}
      <Box
      sx = {{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 3,
      px: 4, 
    }}>
      <Box
      sx = {{
        left: "0",
        pt: 8,
        pl: 5,
        color: "black",
        textAlign: "left",
      }}>
        <Typography variant = "h3">Welcome</Typography>
        <Typography variant = "h4"> fdjknafdonjga 
          <br /> fdafds af
          <br/> fdafdafdgs
          <br /> gdfagdghafh
          <br /> fgdahdhgag</Typography>
      </Box>
      
      <motion.img
          src="/images/Mangoneada-Cup.png"
          alt="storeFront"
          style={{
            position: "absolute",
            top: 80,
            right: 0,
            width: "350px",
            rotate: "-45deg",
            x: smoothX,
          }}
        />

      {/* <Box
      component = "img"
      ref = {ref}
      src = "/images/Mangoneada-Cup.png"
      alt= "storeFront"
      sx={{ 
        position: "absolute",
        top: "20px",
        right: "0",
        transform: "rotate(-45deg)",
        width: { xs: "100px", md: "350px" }, 
        opacity: 1,
        animation,
      }}
      /> */}

      </Box>

      
      
      

        {/* <Box
      sx = {{
        position: "absolute",
        top:"50%",
        left:"50%",
        transform: "translate(-50%,-50%)",
        bgcolor: "rgb(213, 59, 128)",
        borderRadius: 4,
        width: 700,
        height: 200,
        padding: 2,
      }}
        />
<Box
      sx = {{
        position: "absolute",
        top:"50%",
        left:"50%",
        transform: "translate(-50%,-50%)",
        color: "white",
        textAlign: "center",
      }}
      >
        <Typography variant = "h3">Welcome</Typography>
        </Box> */}
      
      
  
        {/* <Typography 
        variant="h1" 
        component="h2"
        fontWeight = "bold">
            🍦 Welcome to La Michoacana!
            </Typography>
            <Typography 
            variant = "h4"
            component = "h3">
                Authentic Mexican ice cream made with love. Come try our delicious flavors today!
            </Typography>
      <p className="text-gray-700 mb-6">Authentic Mexican ice cream made with love. Come try our delicious flavors today!</p> */}
      {/* <ImageSlider /> */}
      {/* <Link to="/menu" className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
        View Menu
      </Link> */}
    </div>
  );
}