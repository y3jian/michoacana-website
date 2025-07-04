import React from "react";
import { CircularProgress, Box, keyframes } from "@mui/material";

const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
`;

export default function Loading() {
    return (
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#fff", // or any background color
        }}
        >

      
      <Box
        component="img"
        src = "/images/bethesdaLogo.jpg"
        alt= "logo"
        sx={{
          width: 150,
          height: 150,
          borderRadius: "50%",
          animation: `${pulse} 1.2s ease-in-out infinite`,
        }}
      />
      </Box>
    );
  }