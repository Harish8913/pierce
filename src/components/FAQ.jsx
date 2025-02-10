import React, { useState } from "react";
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  { question: "What services do you offer?", answer: "We offer web development, AI solutions, and cybersecurity consulting." },
  { question: "How can I contact support?", answer: "You can reach us via email or our 24/7 live chat support." },
  { question: "Do you provide custom software?", answer: "Yes, we specialize in custom software tailored to your needs." },
  { question: "What industries do you serve?", answer: "We serve healthcare, finance, e-commerce, and many other industries." },
  { question: "Is there a free trial available?", answer: "Yes, we offer a 14-day free trial for our services." },
  { question: "Do you offer cloud hosting?", answer: "Yes, we provide secure and scalable cloud hosting solutions." },
  { question: "Can I upgrade my plan later?", answer: "Absolutely! You can upgrade or downgrade at any time." },
  { question: "How secure is my data?", answer: "We use advanced encryption and comply with global security standards." },
  { question: "Do you provide SEO services?", answer: "Yes, we offer SEO and digital marketing solutions." },
  { question: "Is technical support included?", answer: "Yes, all plans come with 24/7 technical support." },
  { question: "Can I cancel my subscription anytime?", answer: "Yes, you can cancel your subscription anytime without penalties." },
  { question: "Do you offer mobile app development?", answer: "Yes, we create Android and iOS apps tailored to your business." },
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="relative w-full">
      {/* Black Background Section */}
      <div className="bg-gray-900 h-60 md:h-[550px]  w-full"></div>

      {/* White Card Section (Overlapping the Black Background) */}
      <Container
        maxWidth="md"
        className="bg-white p-10 absolute top-28 left-1/2 transform -translate-x-1/2"
      >
        {/* Centered Title */}
        <Typography variant="h4" align="center" className="font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </Typography>

        {/* Subtitle */}
        <Typography variant="body1" align="center" className="text-gray-600 mb-8">
          Find answers to common questions about our services.
        </Typography>

        {/* Accordion List */}
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={() => handleToggle(index)}
            className="mb-2"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-gray-700" />}
              className="font-semibold text-gray-900"
            >
              {faq.question}
            </AccordionSummary>
            <AccordionDetails className="text-gray-600">{faq.answer}</AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </div>
  );
};

export default FAQSection;
