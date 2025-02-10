import React from "react";
import { Container, Typography } from "@mui/material";
import lastImg from "../assets/images/last.jpg";

const TextImageSection = () => {
  return (
    <Container maxWidth="md" className="py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side: Text Section */}
        <div className="text-center md:text-left">
          <Typography
            variant="body1"
            mb={3}
            className="font-bold text-gray-900"
          >
            LOOKING FOR MORE SERVICES ?
          </Typography>
          <Typography variant="h5" className="mt-4 text-gray-600">
            ACCESS YOUR FULL HEALTH & WELLNESS TEAM
          </Typography>

          <div className="cursor-pointer mt-8 bg-[#95798A] w-fit p-3 px-8 text-white text-xs tracking-widest font-light">
            <a href="https://api.whatsapp.com/send/?phone=919373550236&text&type=phone_number&app_absent=0">
              <button>BOOK NOW</button>
            </a>
          </div>
        </div>

        {/* Right Side: Image Section */}
        <div className="md:w-1/2 max-w-[400px]">
          <img src={lastImg} alt="Innovation" className="w-full h-auto" />
        </div>
      </div>
    </Container>
  );
};

export default TextImageSection;
