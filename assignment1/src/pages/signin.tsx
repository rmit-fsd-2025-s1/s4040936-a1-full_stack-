import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/Context/Login";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const { login } = useAuth();
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const success = login(email, password);
    if (success) {
      router.push("/");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" className="join-button">Sign in</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}
