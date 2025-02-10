import { WhatsApp } from "@mui/icons-material";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = "919373550236"; // Change this to your WhatsApp number
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
    >
      <WhatsApp size={28} />
    </motion.a>
  );
};

export default WhatsAppButton;
