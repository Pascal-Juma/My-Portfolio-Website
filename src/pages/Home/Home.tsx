import { Box, Typography, Card, Button, ButtonProps } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { useTypewriter, Cursor} from "react-simple-typewriter";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import DownloadIcon from "@mui/icons-material/Download";
import { blue } from "@mui/material/colors";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
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
    words: ['Introducing'],
    loop: true,
    typeSpeed: 150,
    deleteSpeed: 150,
  });
  const [textb] = useTypewriter({
    words: ["Pascal Juma", "a Web Developer", "an ML Enthusiast"],
    loop: true,
    typeSpeed: 150,
    deleteSpeed: 150,
  });
  return (
    <>
    <Element name="home">
      <Box
        component="section"
        sx={{
          display: "flex",
          marginLeft: 13,
          height: "84.8vh",
        }}
      >
        <Card
          sx={{
            backgroundColor: "var(--color-black)",
            border: "none",
          }}
        >
          <ThemeProvider theme={theme}>
            <Typography
              variant="h6"
              className="introducing"
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 9,
              }}
            >
              <HorizontalRuleIcon /> {texta} <Cursor />
            </Typography>
            <Typography variant="h4">I am</Typography>
            <Typography variant="h3" sx={{ marginBottom: 2, height: 50}}>
              {textb}
            </Typography>
            <Typography variant="body1" sx={{ width: 500, marginBottom: 2 }}>
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
          >
            Download CV
          </HeroCta>
        </Card>
        <div className="image-container">
          <div className="image-content">
            <img src={pascal} alt="image" />
          </div>
          <div className="circle-holder">
            <div className="circle-inner"></div>
          </div>
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
      </Box>
    </Element>
    </>
  );
}

export default Home;
