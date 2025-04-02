import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <main>
      <Navigation />
      <div> 
      <h1> WELCOME TO TEAM TEACH</h1>
      </div>
      <div>
      <p>
      A website where tutorers and lecturers alike can find suitable teaching help for their classroom needs. blah blah blah blah blah blah blah blah.   
      </p>
      </div>
      <div>
      
      </div>
      
      <Footer />

    </main>
    </div>
  );
}
