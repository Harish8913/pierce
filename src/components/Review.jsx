import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import StarIcon from "@mui/icons-material/Star";

const reviews = [
  {
    text: "who came our house was very professional and properly sanitised his tools before ear piercing. He clearly answered all our queries and the job was done elegantly. Highly recommended if someone wants to do ear piercing of their child without any hassle.",
    rating: 5,
    customer: "Bhushan Supe",
  },
  {
    text: "Good service. My baby is only 25 days and her ear piercing done very easily she is not cried at all....thanku we are so happy for your service...i will recommend you for other... They are very expert and best part that they provide door step... service.\nThanks\nAll the best...",
    rating: 4,
    customer: "Pallavi Bagul",
  },
  {
    text: `I recently had a wonderful experience with Easy Piercing for my 5-month-old daughter's ear piercing. True to their name, the process was incredibly easy and effortless. They have a beautiful collection of studs and maintain the highest standards of hygiene-from wearing masks and gloves to meticulous sterilization.
    I was particularly impressed by the expertise and professionalism of the piercing specialist who came. The entire process was smooth and stress-free. Their pricing is also quite reasonable, covering both the piercing charges and the stud.
    I would highly recommend Easy Piercing for anyone seeking a hassle-free, hygienic, and expert service. It was truly a great customer experience, and I'm confident you can count on their professionalism and expertise!`,
    rating: 5,
    customer: "Manish Keshavan",
  },
];

const ReviewsSection = () => {
  return (
    <Box className="flex flex-col items-center p-6 w-full">
      {/* Title */}
      <Typography
        variant="h4"
        className="text-center font-bold mb-6 w-full"
        component={motion.h4}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Customer Reviews
      </Typography>

      {/* Review Cards Container */}
      <Box className="flex flex-col gap-6 w-full max-w-4xl mt-6">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Review Text */}
            <Typography variant="body1" className="font-medium mb-4">
              {review.text}
            </Typography>

            {/* Stars */}
            <Box className="flex justify-center mb-4">
              {Array(review.rating)
                .fill()
                .map((_, i) => (
                  <StarIcon key={i} className="text-yellow-500" />
                ))}
            </Box>

            {/* Customer Name */}
            <Typography
              variant="subtitle1"
              className="text-gray-600 font-semibold"
            >
              - {review.customer}
            </Typography>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default ReviewsSection;
