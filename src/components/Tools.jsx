import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import tool1 from '../assets/images/tool1.jpg'
import tool2 from '../assets/images/tool2.png'
import tool3 from '../assets/images/tool3.jpg'
import tool4 from '../assets/images/tool4.jpg'
import tool5 from '../assets/images/tool5.jpg'

const sections = [
  {
    title: "Ear Piercing at PIERCED by PRIV",
    description: "We use the revolutionary STUDEX® System 75 sterilized FDA approved “touch free” instrument for guaranteed hygienic and gentle ear-piercing. No guns, needles or reused parts, the STUDEX® System 75 is a guaranteed hygienic and gentle ear-piercing process engineered for safety, comfort, and ease of use.",
    image: tool1,
    reverse: false,
  },
  {
    title: "Keep it Clean",
    description: "The STUDEX System 75 cartridge is designed to be loaded in the instrument while still inside its sterile package providing touch free operation. No items that touch the customer are reused.",
    image: tool2,
    reverse: true,
  },
  {
    title: "Enables ENHANCED HEALING",
    description: "Automatic positioning of the clasp ensures that the correct space is left at the front and back of the ear to enhance the healing process.",
    image: tool3,
    reverse: false,
  },
  {
    title: "Love the process",
    description: "Identification and pinpoint accuracy are a priority with the stud and point always visible inside the sealed packaging and when loaded into the instrument.",
    image: tool4,
    reverse: true,
  },
  {
    title: "Quick and Easy",
    description: "The STUDEX® System 75 we use is gentle and quiet. The process is quick and easy. Piercing guns are spring-loaded and LOUD! Piercing guns use their spring-loaded power to “shoot” the piercing earring through the earlobe or cartilage. The STUDEX® System 75 uses hand-pressure to pierce the ear quickly and accurately in one gentle, quiet motion.",
    image: tool5,
    reverse: false,
  },
];

const Tools = () => {
  return (
    <Container maxWidth="lg" className="py-10">
      {/* Block-Level Heading */}
      <Typography variant="h4" align="center" className="font-bold text-gray-900 mb-10">
        Our Services
      </Typography>

      {sections.map((section, index) => (
        <Grid
          container
          spacing={4}
          key={index}
          className="mb-10 flex items-center"
          width={'100%'}
          mt={3}
          direction={section.reverse ? "row-reverse" : "row"}
        >
          {/* Text Section */}
          <Grid item xs={12} md={8} sx={{ letterSpacing: '0.8px', py: 3}}>
            <Typography variant="h5" mb={3} className="font-semibold text-gray-800">
              {section.title}
            </Typography>
            <Typography variant="body1" className="mt-2 text-gray-600">
              {section.description}
            </Typography>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={4} >
            <img src={section.image} alt={section.title} className="w-full max-h-[250px]" />
          </Grid>
        </Grid>
      ))}
    </Container>
  );
};

export default Tools;
