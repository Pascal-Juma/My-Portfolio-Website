import { useRef } from "react";
import { Typography } from "@mui/material";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

function NavBar() {
  const navRef = useRef<HTMLDivElement>(null);

  const showNav = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
  };
  return (
    <>
      <nav ref={navRef}>
        <div className="logo">
          <Typography
            variant="h2"
            color="var(--green-color)"
            fontSize={34}
            fontWeight={500}
            fontFamily="var(--prime-font)"
          >
            Meta Labs
          </Typography>
        </div>
        <div className="links">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
          >
            Education
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="achievements"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
          >
            Achievements
          </Link>
          <Link
            activeClass="active"
            to="contacts"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
          >
            Contact
          </Link>
        </div>
        <button
          type="button"
          className="nav-btn nav-close-btn"
          onClick={showNav}
          title="Close navigation"
        >
          <FaTimes aria-label="Close navigation" />
        </button>
      </nav>
      <button
        type="button"
        className="nav-btn"
        onClick={showNav}
        title="Open navigation"
      >
        <FaBars aria-label="Open navigation" />
      </button>
    </>
  );
}

export default NavBar;
