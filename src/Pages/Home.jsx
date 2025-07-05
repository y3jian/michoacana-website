import { Typography, Box, Button, Stack } from "@mui/material";
import React from "react";
import ImageSlider from "../components/ImageSlider"

export default function Home ({setCurrentPage}) {
  return (
    <div className="p-6 text-center" style={{ paddingTop: "120px" }}>
      <Box
      component = "img"
      src = "/images/storefront.jpg"
      alt= "storeFront"
      sx={{ width: "100%", height: 700, objectFit: "cover" }}
      />
  
        <Typography 
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
      <p className="text-gray-700 mb-6">Authentic Mexican ice cream made with love. Come try our delicious flavors today!</p>
      <ImageSlider />
      {/* <Link to="/menu" className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
        View Menu
      </Link> */}
    </div>
  );
}