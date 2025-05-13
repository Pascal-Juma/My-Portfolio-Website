import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import ReactPlayer from "react-player";
import game from "../../assets/game.mp4";

function About() {
  return (
    <>
      <Stack
        mt={7}
        mb={7}
        gap={5}
        direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}
        sx={{
          marginInline: {
            xs: 3,
            sm: 4,
            md: 5,
            lg: 11,
          },
        }}
      >
        <Box pt={6.5}>
          <ReactPlayer
            url={game}
            height="auto"
            width="450px"
            playing={true}
            loop={true}
            volume={0}
            style={{
              objectFit: "contain",
              overflow: "hidden",
              borderRadius: "10px",
              boxShadow: "0px 0px 12px rgba(148, 143, 143, 0.9)",
            }}
          />
        </Box>
        <Box color="var(--light-grey)">
          <Typography
            fontFamily="var(--prime-font)"
            color="var(--green-color)"
            fontSize="31px"
          >
            <HorizontalRuleIcon />
            About Me
          </Typography>
          <Typography
            variant="body1"
            mb={2}
            fontFamily="var(--courier-prime)"
            fontSize="15px"
          >
            My journey began with curiosity about how digital experiences, from
            websites to games and AI systems, work. This curiosity evolved into
            a passion for creating with React, Unity, and AI. I've learned that
            coding is about solving problems and collaborating to bring ideas to
            life across different platforms.
          </Typography>
          <Typography
            variant="body1"
            mb={2}
            fontFamily="var(--courier-prime)"
            fontSize="15px"
          >
            I complement my technical expertise with strong communication and a
            collaborative mindset, ensuring smooth project execution. Adaptable
            and always eager to learn, I thrive in creative, fast-paced
            environments
          </Typography>
          <Typography
            variant="body1"
            mb={2}
            fontFamily="var(--courier-prime)"
            fontSize="15px"
          >
            I thrive in team settings—whether it’s brainstorming, debugging, or
            bringing ideas to life. Outside coding, I explore new tech, mentor
            others, and recharge through nature and creativity.
          </Typography>
        </Box>
      </Stack>
    </>
  );
}

export default About;
