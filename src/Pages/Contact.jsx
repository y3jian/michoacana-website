import React from "react";
import { TextField, Button, Typography, Container, Box } from "@mui/material";

export default function Contact() {
  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Typography variant="h4" component="h1" color="primary" gutterBottom>
        📍 Contact Us
      </Typography>

      <Typography variant="body1" paragraph>
        Have questions about our flavors, hours, or anything else? Reach out to us!
      </Typography>

      <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Name" variant="outlined" fullWidth />
        <TextField label="Email" type="email" variant="outlined" fullWidth />
        <TextField label="Message" multiline rows={4} variant="outlined" fullWidth />

        <Button variant="contained" color="primary" type="submit">
          Send Message
        </Button>
      </Box>
    </Container>
  );
}
