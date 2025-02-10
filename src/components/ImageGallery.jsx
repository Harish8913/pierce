import React from "react";
import { Container, Typography } from "@mui/material";
import g1 from "../assets/images/2first.png";
import g2 from "../assets/images/2second.webp";
import g3 from "../assets/images/2third.webp";
import g4 from "../assets/images/2fourth.png";

const images = [g1, g2, g3, g4];

const MasonryGallery = () => {
  return (
    <Container maxWidth="lg" className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* First Column - Full Height Image */}
        <div className="flex flex-col gap-4">
          <img
            src={images[0]}
            alt="Gallery 1"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Second Column - Two Images Split */}
        <div className="flex flex-col gap-4">
          <img
            src={images[1]}
            alt="Gallery 2"
            className="w-full h-[50%] object-cover rounded-lg shadow-lg"
          />
          <img
            src={images[2]}
            alt="Gallery 3"
            className="w-full h-[50%] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Third Column - Full Height Image */}
        <div className="flex flex-col gap-4">
          <img
            src={images[3]}
            alt="Gallery 4"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-3 mt-4">
        <div>
          <Typography variant="h5" className="italic">
            Shop Your Style with Ease
          </Typography>
        </div>

        <div>
          <a href="https://api.whatsapp.com/send/?phone=919373550236&text&type=phone_number&app_absent=0">
            <button className="bg-[#95798A] text-white px-4 py-2 text-base tracking-wider">
              LET'S GET PIERCED!
            </button>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default MasonryGallery;
