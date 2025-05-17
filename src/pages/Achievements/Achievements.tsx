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

  const [texta] = useTypewriter({
    words: ["Contact"],
    loop: true,
    typeSpeed: 150,
    deleteSpeed: 150,
  });

  return (
    <Element name="achievements">
      <Typography
        fontFamily="var(--prime-font)"
        color="var(--green-color)"
        fontSize="31px"
        textAlign="center"
        mt={2}
      >
        <HorizontalRuleIcon />
        {text}
        <Cursor />
      </Typography>
      <Stack
        direction="row"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          ml: {
            xs: 6,
            sm: 6,
            md: 0,
            lg: 0,
          },
          position: "relative",
        }}
      >
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
        <Typography
          fontFamily="var(--prime-font)"
          color="var(--green-color)"
          fontSize="31px"
          textAlign="center"
          mt={2}
          sx={{
            position: "absolute",
            bottom: "5%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <HorizontalRuleIcon />
          {texta}
          <Cursor />
        </Typography>
      </Stack>
    </Element>
  );
}

export default Achievements;
