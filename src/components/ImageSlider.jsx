// src/components/ImageSlider.jsx
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Box } from "@mui/material";

const items = [
  { img: "/images/chicharron.jpg", alt: "chicharron" },
  { img: "/images/churros.jpg", alt: "churros" },
  { img: "/images/crepes.jpg", alt: "crepes" },
  { img: "/images/limon.jpg", alt: "limon" },
  { img: "/images/mangonada.jpg", alt: "mangonada" },
  { img: "/images/maruchanloca.jpg", alt: "maruchanloca" },
  { img: "/images/michelaguas.jpg", alt: "michelaguas" },
  { img: "/images/paleta.jpg", alt: "paleta" },
];

export default function ImageSlider() {
  return (
    <Carousel>
      {items.map((item, i) => (
        <Paper key={i}>
          <Box
            component="img"
            src={item.img}
            alt={item.alt}
            sx={{ width: "100%", height: 700, objectFit: "cover" }}
          />
        </Paper>
      ))}
    </Carousel>
  );
}
