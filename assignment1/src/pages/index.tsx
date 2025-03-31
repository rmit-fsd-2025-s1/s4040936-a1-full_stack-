
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
    <div className="Header">
      <ul className="HBAR">
        <li className="MainTitle">
          <h1>TT</h1>
        </li>

        <li className="Login">
         <button
         onClick={console.log}>

          Login

         </button>

        </li>
      </ul>
    </div>


    
    </main>
    </div>
  );
}
