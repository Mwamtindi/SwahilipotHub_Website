import "@css/animate.css";
import "@css/bootstrap.min.css";
import "@css/font-awesome.css";
import "@css/magnific-popup.css";
import "@css/main.css";
import "@css/meanmenu.css";
import "@css/nice-select.css";
import "@css/swiper-bundle.min.css";
import "./globals.css";
import Preloader from "@/layouts/Preloader";

export const metadata = {
  title: "Swahilipot Hub",
  description: "Swahilipot Hub is a community space that brings together artists, designers, technologists, and entrepreneurs to foster collaboration, innovation, and social impact.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Preloader />
      {children}
      </body>
    </html>
  );
}
