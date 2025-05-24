import {
  Stack,
  Typography,
  Button,
  ButtonProps,
  Tooltip,
  IconButton,
} from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import DownloadIcon from "@mui/icons-material/Download";
import { blue } from "@mui/material/colors";
import { FaReact, FaNodeJs, FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { Element } from "react-scroll";
import "./Home.css";
import pascal from "../../assets/pascalj.png";

const theme = createTheme({
  typography: {
    h4: {
      color: "var(--primary-color)",
      fontFamily: "var(--code-font)",
      fontSize: "45px",
    },
    h3: {
      color: "var(--primary-color)",
      fontFamily: "var(--code-font)",
      fontSize: "52px",
    },
    body1: {
      color: "var(--light-grey)",
      fontFamily: "var(--code-font)",
      fontSize: "15px",
    },
    h6: {
      color: "var(--green-color)",
      fontFamily: "var(--prime-font)",
      fontWeight: 400,
    },
  },
});

const HeroCta = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(blue[500]),
  textTransform: "capitalize",
  backgroundColor: blue[500],
  "&:hover": {
    backgroundColor: blue[700],
  },
}));
function Home() {
  const [texta] = useTypewriter({
    words: ["Introducing"],
    loop: true,
    typeSpeed: 150,
    deleteSpeed: 150,
  });
  const [textb] = useTypewriter({
    words: [
      "Pascal Juma",
      "a Web Developer",
      "a Game Developer",
      "an ML Enthusiast",
    ],
    loop: true,
    typeSpeed: 150,
    deleteSpeed: 150,
  });
  return (
    <>
      <Element name="home">
        <Stack
          component="section"
          direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}
          spacing={{ xs: 4, sm: 4, md: 4 }}
          sx={{
            display: "flex",
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "center",
            },
            alignItems: {
              xs: "center",
              sm: "center",
              md: "center",
              lg: "flex-start",
            },
            marginLeft: 7,
            maxHeight: "84.8vh",
          }}
        >
          <div className="hero-content">
            <ThemeProvider theme={theme}>
              <Typography
                variant="h6"
                className="introducing"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: {
                    xs: 13,
                    sm: 2,
                    md: 2,
                    lg: 9,
                  },
                }}
              >
                <HorizontalRuleIcon /> {texta} <Cursor />
              </Typography>
              <Typography variant="h4">I am</Typography>
              <Typography
                variant="h3"
                sx={{
                  marginBottom: 2,
                  height: 50,
                  fontSize: {
                    xs: "40px",
                    sm: "52px",
                    md: "52px",
                    lg: "52px",
                  },
                }}
              >
                {textb}
              </Typography>
              <Typography
                variant="body1"
                sx={{ maxWidth: 500, marginBottom: 2 }}
              >
                I build clean, fast, and responsive websites that solve real
                problems. With hands-on experience in React and Node.js, I focus
                on creating smooth user experiences and maintaining reliable web
                solutions that grow with your needs.
              </Typography>
            </ThemeProvider>
            <HeroCta
              variant="contained"
              size="large"
              startIcon={<DownloadIcon />}
            component="a"
            href="https://drive.google.com/file/d/1xJaDtG7idQe4al9sQNfO1eRlUQNxuMBI/view?usp=sharing"
            // @ts-expect-error: target and rel are valid on anchor elements
            target="_blank"
            rel="noopener noreferrer"
            >
              Download CV
            </HeroCta>
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <Tooltip title="GitHub" arrow>
                <IconButton
                  component="a"
                  href="https://github.com/Pascal-Juma"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ fontSize: 29, color: "var(--green-color)" }}
                >
                  <FaGithub />
                </IconButton>
              </Tooltip>
              <Tooltip title="LinkedIn" arrow>
                <IconButton
                  sx={{ fontSize: 29, color: "var(--green-color)" }}
                  component="a"
                  href="https://www.linkedin.com/in/pascal-juma/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </IconButton>
              </Tooltip>
              <Tooltip title="Twitter" arrow>
                <IconButton
                  sx={{ fontSize: 29, color: "var(--green-color)" }}
                  component="a"
                  href="https://x.com/PascalJuma4747"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter />
                </IconButton>
              </Tooltip>
            </Stack>
          </div>
          <div className="image-container">
            <div className="image-content">
              <img src={pascal} alt="image" />
            </div>
            <div className="outer-circle">
              <div className="inner-circle"></div>
              <div className="icon-a">
                <FaReact />
              </div>
              <div className="icon-b">
                <FaNodeJs />
              </div>
              <div className="icon-c">
                <BiLogoPostgresql />
              </div>
              <div className="icon-d">
                <SiTypescript />
              </div>
            </div>
          </div>
        </Stack>
      </Element>
    </>
  );
}

export default Home;
