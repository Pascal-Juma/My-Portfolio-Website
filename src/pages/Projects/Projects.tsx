import { Element } from "react-scroll";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import type { ButtonProps } from "@mui/material/Button";
import zaphTours from "../../assets/zaphTours.png";
import mutClub from "../../assets/mut-tech-club.png";
import natoPhonetic from "../../assets/nato-phonetic.png";
import urbanHaven from "../../assets/urban-haven.png";
import blogit from "../../assets/blogit.png";
import booklyPress from "../../assets/brooklypressco.png";
import Platter from "../../components/Platter/Platter";

const ProjectsCta = styled(Button)<ButtonProps>({
  textTransform: "none",
  backgroundColor: "var(--secondary-color)",
  fontFamily: "var(--courier-prime)",
  "&:hover": {
    backgroundColor: "var(--green-color)",
    transition: "all .4s",
    color: "var(--primary-color)",
  },
});

function Projects() {
  const [text] = useTypewriter({
    words: ["Projects"],
    loop: true,
    typeSpeed: 150,
    deleteSpeed: 150,
  });
  return (
    <>
      <Element name="projects">
        <Typography
          fontFamily="var(--prime-font)"
          color="var(--green-color)"
          fontSize="31px"
          textAlign="center"
        >
          <HorizontalRuleIcon />
          {text}
          <Cursor />
        </Typography>
        <Stack
          mt={5}
          direction="row"
          gap={10}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            marginInLine: "94px",
          }}
        >
          <Platter
            screenShot={zaphTours}
            title="Zaph Tours"
            liveUrl="https://zaph-tour-safari-website-zeta.vercel.app/"
            githubLink="https://github.com/Pascal-Juma/Zaph-Tour-Safari-Website"
            description="Travel website offering safaris, adventure tours, and a smooth, user-friendly experience across African destinations."
          />
          <Platter
            screenShot={mutClub}
            title="MUT Tech Club"
            liveUrl="https://mut-tech-club-dusky.vercel.app"
            githubLink="https://github.com/Pascal-Juma/MUT-TECH-CLUB"
            description="Murang’a University Tech Club empowers students through coding, events and innovation, building a vibrant, tech-driven learning community."
          />
          <Platter
            screenShot={blogit}
            title="BlogIt Website"
            liveUrl="https://blog-it-website.vercel.app"
            githubLink="https://github.com/Pascal-Juma/BlogIt-Front-End"
            description="A sleek, responsive blogging platform with JWT authentication, blog listing, article viewer, and real-time profile editing using ReactJS."
          />
          <Platter
            screenShot={booklyPress}
            title="BooklyPress Company"
            liveUrl="https://publishing-company-kdev.vercel.app/"
            githubLink="https://github.com/Pascal-Juma/BooklyPress-Company"
            description="Bookly Press is a sleek publishing landing page offering authors editing, design, and distribution services to publish their stories."
          />
          <Platter
            screenShot={urbanHaven}
            title="Urban Haven Apartment"
            liveUrl="https://urban-haven-apartment-website-psi.vercel.app/"
            githubLink="https://github.com/Pascal-Juma/Urban-Haven_Apartment-Website"
            description="Responsive landing page for Urban Haven Apartments showcasing housing options, pricing, amenities, and contact details in Murang’a, Kiharu."
          />
          <Platter
            screenShot={natoPhonetic}
            title="Nato Phonetic Translator"
            liveUrl="https://military-alphabet-translator.vercel.app"
            githubLink="https://github.com/Pascal-Juma/Military-Alphabet-Translator"
            description="Translates English letters to NATO phonetic alphabet using React hooks for effective military-style communication practice and learning."
          />
        </Stack>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ProjectsCta
            component="a"
            variant="contained"
            href="https://github.com/Pascal-Juma?tab=repositories"
            // @ts-expect-error: target and rel are valid on anchor elements
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects
          </ProjectsCta>
        </Box>
      </Element>
    </>
  );
}

export default Projects;
