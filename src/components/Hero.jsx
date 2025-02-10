import React from "react";
import Slider from "react-slick";
import { Typography, Container } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import first from "../assets/images/first.png";
import second from "../assets/images/second.png";
import third from "../assets/images/third.png";
import fourth from "../assets/images/fourth.png";

const images = [first, second, third, fourth];

const Hero = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container className="flex flex-col md:flex-row items-center justify-between py-10">
      {/* Left Side: Title & Description */}
      <div className="md:w-1/2 text-center md:text-left flex flex-col justify-between gap-8 py-6">
        <div className="flex flex-col gap-8">
          <Typography variant="h4" className="font-bold text-gray-900">
            GET PIERCED
          </Typography>
          <Typography
            className="mt-4 tracking-wider text-gray-800"
            sx={{ fontSize: "12px", fontWeight: "300", letterSpacing: "1.3px" }}
          >
            Whether your little one is getting their unforgettable first
            piercing, looking for stylish new drip vibes for yourself, OR if
            you’re having a piercing party, PRIV has you covered.
          </Typography>

          <Typography
            className="mt-4 tracking-wider text-gray-800"
            sx={{ fontSize: "12px", fontWeight: "300", letterSpacing: "1.3px" }}
          >
            <b className="font-bold">Safety and Comfort comes first! </b>{" "}
            Hygienic and virtually pain-free piercing from the comfort of your
            home.
          </Typography>

          <Typography
            className="mt-4 tracking-wider text-gray-800"
            sx={{ fontSize: "12px", fontWeight: "300", letterSpacing: "1.3px" }}
          >
            <b className="font-bold">Quality is Priority! </b> With a wide
            variety of quality earrings to choose from, each selected for ear
            sensitivity and durability, all earrings are hypoallergenic
            earrings.
          </Typography>
        </div>

        <div className="mt-6 flex w-full justify-center">
          <a href="https://api.whatsapp.com/send/?phone=919373550236&text&type=phone_number&app_absent=0">
            <div className="cursor-pointer bg-[#95798A] w-fit p-3 px-8 text-white text-xs tracking-widest font-light">
              <button className="cursor-pointer">BOOK NOW</button>
            </div>
          </a>
        </div>
      </div>

      {/* Right Side: Auto-Sliding Image Carousel */}
      <div className="md:w-1/2 w-full md:mt-0">
        <Slider {...settings}>
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`slide-${i}`}
              className="w-full h-[550px] object-contain rounded-lg"
            />
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default Hero;
