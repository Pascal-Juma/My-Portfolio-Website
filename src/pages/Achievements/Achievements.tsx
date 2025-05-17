import { Element } from "react-scroll";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import "./Achievements.css";
import Plate from "../../components/Plate/Plate";

function Achievements() {
  const [text] = useTypewriter({
    words: ["Achievements"],
    loop: true,
    typeSpeed: 150,
    deleteSpeed: 150,
  });
  return (
    <Element name="achievements">
      <Stack
        mt={4}
        direction="column"
        gap={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Typography
          fontFamily="var(--prime-font)"
          color="var(--green-color)"
          fontSize="31px"
          textAlign="center"
          mt={1}
        >
          <HorizontalRuleIcon />
          {text}
          <Cursor />
        </Typography>
        <Plate
          achievementTitle="Software Development Certification"
          company="Issued by: TEACH2GIVE • April, 2025"
          reason="Awarded in recognition of successfully completing full-stack web development program."
          link="https://drive.google.com/file/d/1UIkCPPI9PNP6sIVt48lykPm41TxdgIPA/view?usp=sharing"
        />
        <Plate
          achievementTitle="Hackathon Certification"
          company="Issued by: ORIGINFEST • October, 2024"
          reason="Awarded in recognition of participating in the OriginFest Hackathon challenge."
          link="https://drive.google.com/file/d/1pLnluSWdkD-dzCnz_njzTtbpIp5apqdF/view?usp=sharing"
        />
      </Stack>
    </Element>
  );
}

export default Achievements;
