import { Container, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Working from "./components/Working";
import MasonryGallery from "./components/ImageGallery";
import Tools from "./components/Tools";
import ReviewsSection from "./components/Review";
import TextImageSection from "./components/TextImage";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/Whatsapp";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Navbar />
          <Hero />
          <Working />
          <MasonryGallery />
          <Tools />
          <ReviewsSection />
        </Container>
        <TextImageSection />
        <WhatsAppButton />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
