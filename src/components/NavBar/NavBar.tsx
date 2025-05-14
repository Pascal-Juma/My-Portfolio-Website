import { PiHourglassSimpleFill } from "react-icons/pi";
import { useRef, useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

function NavBar() {
  const navRef = useRef<HTMLDivElement>(null);
  
  const [color, setColor] = useState(false);
useEffect(() => {
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

    return () => {
    window.removeEventListener("scroll", changeColor);
  };
}, []);

  const showNav = () => {
    if (navRef.current) {
      navRef.current.classList.toggle("responsive_nav");
    }
  };
  return (
    <>
      <nav ref={navRef} className={color ? "header-nav scroll-nav" : "header-nav"}>
        <div className="logo">
          <Typography
            variant="h2"
            color="var(--green-color)"
            fontSize={34}
            fontWeight={500}
            fontFamily="var(--prime-font)"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PiHourglassSimpleFill className="logo-icon" /> Meta Labs
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
            to="contact"
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
