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
      <div className="content"> 
      <h1> WELCOME TO TEAMTEACH</h1>
      
      <p className="highlights">
            A website where tutor applicants and lecturers alike can find suitable teaching help for their classroom needs. Applicants can apply for tutor roles, and lecturers can select the most suitable candidates. 
          </p>
          <a href="/signin" className="join-button">Join now</a>
      </div>
      
      <Footer />

    </main>
    </div>
  );
}
