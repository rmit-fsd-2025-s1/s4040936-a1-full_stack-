import Link from "next/link";
import { useAuth } from "@/Context/Login";
import { useRouter } from "next/router";

export default function Navigation() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/signin");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="logo">
          TeachTeam
        </a>
        <ul className="nav-links">
          <li>
            <a href="/index">Home</a>
          </li>
          <li>
            <a href="#">How this works</a>
          </li>
          <li>
            <a href="#">Browse tutors</a>
          </li>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          {user ? (
            <>
              <li>
                <span style={{ color: "white" }}>Welcome, {user.email}</span>
              </li>
              <li>
                <a href="#" onClick={handleLogout} style={{ color: "orange" }}>Logout</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="/signin">Login</a>
              </li>
              <li>
                <a href="#">Join</a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
