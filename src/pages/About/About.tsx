import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Element } from "react-scroll";
import Box from "@mui/material/Box";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ReactPlayer from "react-player";
import { FaBriefcase } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import game from "../../assets/game.mp4";
import "./About.css";

function About() {
  const [text] = useTypewriter({
    words: ["About Me"],
    loop: true,
    typeSpeed: 150,
    deleteSpeed: 150,
  });
  return (
    <>
      <Element name="about">
        <Stack
          direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}
          sx={{
            marginInline: {
              xs: 5,
              sm: 5,
              md: 5,
              lg: 11,
            },
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
            gap: {
              xs: 6,
              sm: 6,
              md: 8,
              lg: 5,
            },
            mt: {
              xs: 13,
              sm: 10,
              md: 10,
              lg: 7,
            },
          }}
        >
          <Box pt={3} width="73%">
            <ReactPlayer
              url={game}
              height="100%"
              width="100%"
              playing={true}
              loop={true}
              volume={0}
              style={{
                objectFit: "contain",
                overflow: "hidden",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(148, 143, 143, 0.9)",
              }}
            />
            <Box
              mt={2}
              gap={7}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                color="var(--green-color)"
                fontSize="55px"
                display="flex"
                gap={1}
                width="100%"
              >
                <FaBriefcase style={{ marginTop: "5px" }} />
                <Box>
                  <Box>
                    <Typography
                      fontSize="30px"
                      color="var(--light-grey)"
                      fontFamily="var(--prime-font)"
                      fontWeight={600}
                    >
                      20+
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      fontSize="13px"
                      color="var(--light-grey)"
                      fontFamily="var(--prime-font)"
                    >
                      Completed Projects
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                color="var(--green-color)"
                fontSize="55px"
                display="flex"
                gap={1}
                width="90%"
              >
                <SlCalender style={{ marginTop: "5px" }} />
                <Box>
                  <Box>
                    <Typography
                      fontSize="30px"
                      color="var(--light-grey)"
                      fontFamily="var(--prime-font)"
                      fontWeight={600}
                    >
                      2+
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      fontSize="13px"
                      color="var(--light-grey)"
                      fontFamily="var(--prime-font)"
                    >
                      Yrs of Experience
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box color="var(--light-grey)" width="100%">
            <Typography
              fontFamily="var(--prime-font)"
              color="var(--green-color)"
              fontSize="31px"
            >
              <HorizontalRuleIcon />
              {text}
              <Cursor />
            </Typography>
            <Typography
              variant="body1"
              mb={2}
              fontFamily="var(--courier-prime)"
              fontSize="15px"
            >
              My journey began with curiosity about how digital experiences,
              from websites to games and AI systems, work. This curiosity
              evolved into a passion for creating with React, Unity, and AI.
              I've learned that coding is about solving problems and
              collaborating to bring ideas to life across different platforms.
            </Typography>
            <Typography
              variant="body1"
              mb={2}
              fontFamily="var(--courier-prime)"
              fontSize="15px"
            >
              I complement my technical expertise with strong communication and
              a collaborative mindset, ensuring smooth project execution.
              Adaptable and always eager to learn, I thrive in creative,
              fast-paced environments
            </Typography>
            <Typography
              variant="body1"
              mb={2}
              fontFamily="var(--courier-prime)"
              fontSize="15px"
            >
              I thrive in team settings—whether it’s brainstorming, debugging,
              or bringing ideas to life. Outside coding, I explore new tech,
              mentor others, and recharge through nature and creativity.
            </Typography>
          </Box>
        </Stack>
      </Element>
    </>
  );
}

export default About;
