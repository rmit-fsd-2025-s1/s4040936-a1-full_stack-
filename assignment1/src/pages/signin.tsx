import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/Context/Login";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    const success = login(email, password);

    if (success) {
      const storedUser = JSON.parse(localStorage.getItem("currentUser") || "null");
      setMessage("Login successful");

      setTimeout(() => {
        if (storedUser?.role === "tutor") {
          router.push("/tutor");
        } else if (storedUser?.role === "lecturer") {
          router.push("/lecturer");
        } else {
          router.push("/");
        }
      }, 1000);
    } else {
      setMessage("Invalid email or password");
    }
  };

  return (
    <>
      <Navigation />
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="join-button">
            Sign in
          </button>
          {message && <p>{message}</p>}
        </form>
      </div>
      <Footer />
    </>
  );
}
