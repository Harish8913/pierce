import React from "react";
import { Container, Typography } from "@mui/material";
import { Call, Instagram, WhatsApp } from "@mui/icons-material";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-16 w-screen">
      <div className="bg-black h-16"></div>

      <div className="bg-gray-900 text-white py-10 text-center">
        <h4 className="mb-4 text-gray-400 hover:text-white">
          Make a Call: +919373550236
        </h4>
        <Container>
          {/* Social Media Links */}
          <div className="flex justify-center items-center space-x-6 mb-4">
            <a
              href="https://api.whatsapp.com/send/?phone=919373550236&text&type=phone_number&app_absent=0"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <WhatsApp />
            </a>

            <a
              href="https://www.instagram.com/easy_piercing1998?igsh=MXJydm5qczk4anNrMw%3D%3D&utm_source=qr"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <Instagram />
            </a>

            <a
              href="tel:+919373550236"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <Call />
            </a>

            <a
              href="mailto:pankajsoni97910@gmail.com"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <Mail />
            </a>
          </div>

          {/* Copyright Text */}
          <Typography variant="body2" align="center" className="text-gray-500">
            © 2025 Easy Pierce. All rights reserved.
          </Typography>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
