import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="logo">
          TeachTeam
        </a>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">How is works</a>
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
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Join</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
