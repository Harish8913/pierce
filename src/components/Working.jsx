import React from "react";
import { Typography, Container, Button } from "@mui/material";
import {
  ArrowBack,
  Cloud,
  Laptop,
  MobileFriendly,
  Search,
  Shop,
} from "@mui/icons-material";

const Working = () => {
  return (
    <Container maxWidth="lg" className="py-10">
      {/* Top Section */}
      <Typography
        variant="body1"
        fontWeight={300}
        mb={3}
        className="text-gray-900"
      >
        Safe, Simple and Easy - Stay Stylish from home!
      </Typography>
      <Typography variant="h4" fontWeight={200} className="mt-4 text-gray-600">
        HOW DOES Ease WORK ?
      </Typography>

      {/* Bottom Section: Three Features */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="flex flex-col items-center border-5 border-black px-10 py-6">
          <Search sx={{ fontSize: "52px", color: "#95798A" }} />
          <Typography
            sx={{
              fontSize: "13px",
              marginTop: "18px",
              textAlign: "center",
              letterSpacing: "0.2px",
              fontWeight: "200",
            }}
            className="mt-4 font-semibold"
          >
            At home, at the office, we can pierce your ear anywhere, anytime!
          </Typography>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center border-5 border-black px-10 py-6">
          <MobileFriendly sx={{ fontSize: "52px", color: "#95798A" }} />
          <Typography
            sx={{
              fontSize: "13px",
              marginTop: "18px",
              textAlign: "center",
              letterSpacing: "0.2px",
              fontWeight: "200",
            }}
            className="mt-4 font-semibold"
          >
            Choose ear piercing from the menu on the app or the website.
          </Typography>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center border-5 border-black px-10 py-6">
          <Shop sx={{ fontSize: "52px", color: "#95798A" }} />
          <Typography
            sx={{
              fontSize: "13px",
              marginTop: "18px",
              textAlign: "center",
              letterSpacing: "0.2px",
              fontWeight: "200",
            }}
            className="mt-4 font-semibold"
          >
            Shop from a variety of earrings to complete your perfect look.
          </Typography>
        </div>
      </div>

      <div className="mt-6 flex w-full justify-center">
        <a href="https://api.whatsapp.com/send/?phone=919373550236&text&type=phone_number&app_absent=0">
          <div className="cursor-pointer bg-[#95798A] w-fit p-3 px-8 text-white text-xs tracking-widest font-light">
            <button className="cursor-pointer">BOOK NOW</button>
          </div>
        </a>
      </div>
    </Container>
  );
};

export default Working;
