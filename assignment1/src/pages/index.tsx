import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const images = ["/banner1.png"];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <main>
        <Navigation />
        <div className="content">
          <h1>WELCOME TO TEACHTEAM</h1>
          <p className="highlights">
            
            A website where tutor applicants and lecturers alike can find suitable teaching help for their classroom needs. Applicants can apply for tutor roles, and lecturers can select the most suitable candidates.
          </p>
          <p>
            <a href="/signin" className="join-button">
              Join now
            </a>
          </p>
        </div>
        <div className="content banner-section">
  <div className="home-banner" role="img" aria-label="TeachTeam Banner" />
</div>
        <Footer />
      </main>
    </div>
  );
}

