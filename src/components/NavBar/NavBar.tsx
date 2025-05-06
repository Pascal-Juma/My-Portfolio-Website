import { Typography } from "@mui/material";
import { Link } from 'react-scroll';
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav>
        <div className="logo">
        <Typography variant="h2" color="var(--blue-color)" fontSize={34} fontWeight={500} fontFamily="var(--prime-font)">Meta Labs</Typography>
        </div>
        <div className="links">
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
            <Link activeClass="active" to="education" spy={true} smooth={true} offset={-70} duration={500}>Education</Link>
            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link>
            <Link activeClass="active" to="achievements" spy={true} smooth={true} offset={-70} duration={500}>Achievements</Link>
            <Link activeClass="active" to="contacts" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
