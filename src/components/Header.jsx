import React from "react";
import { Box, Stack, Button } from "@mui/material";

export default function Header({ setCurrentPage }) {
  return (
<Box
      sx = {{
        width: "95.65%",
        maxWidth: "100%",
        height: 120,
        bgcolor: "rgb(213, 59, 128)", // 213, 59, 128
        px: 4,
        // py: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
      >
        {/* logo */}
      <Box
        component = "img"
        src = "/images/bethesdaLogo.jpg" 
        alt = "logo" 
        onClick = {() => setCurrentPage("home")}
        sx ={{ 
          width: '100px', 
          height: '100px',
          borderRadius: "50%",
          cursor: "pointer"
           }}
        
           />

        {/* Navigation Buttons */}
        <Stack direction="row" spacing={2} >
        <Button 
        size="small" 
        variant="text" 
        onClick={() => setCurrentPage("menu")}
        sx={{
            color: "white",
            fontFamily: "'Poppins', sans-serif", 
            fontWeight: 600,
            fontSize: "1rem",
            fontWeight: "bold",
            textTransform: "none", // prevents all caps
            "&:hover": {
              textDecoration: "underline",
            },
          }}>
          Menu
        </Button>
        <Button 
        size="small" 
        variant="text" 
        onClick={() => setCurrentPage("contact")}
        sx={{
            color: "white",
            fontFamily: "'Poppins', sans-serif", 
            fontWeight: 600,
            fontSize: "1rem",
            fontWeight: "bold",
            textTransform: "none", // prevents all caps
            "&:hover": {
              textDecoration: "underline",
            },
          }}>
          Contact
        </Button>
        <Button 
        size="small" 
        variant="text" 
        onClick={() => setCurrentPage("admin")}
        sx={{
            color: "white",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: "1rem",
            fontWeight: "bold",
            textTransform: "none", // prevents all caps
            "&:hover": {
              textDecoration: "underline",
            },
          }}>
          Admin
        </Button>
      </Stack>
           
          
      </Box>

  );
}