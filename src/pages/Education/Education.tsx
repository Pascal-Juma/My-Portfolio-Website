import { Element } from "react-scroll";
import Stack from "@mui/material/Stack";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

function Education() {
  const [text] = useTypewriter({
    words: ["Education"],
    loop: true,
    typeSpeed: 150,
    deleteSpeed: 150,
  });
  return (
    <>
      <Element name="education">
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
          <Card
            sx={{
              maxWidth: "480px",
              p: 1,
              boxShadow: "0px 0px 12px rgba(221, 215, 215, 0.5)",
              backgroundColor: "var(--darken-white)",
            }}
          >
            <Typography
              variant="subtitle1"
              color="var(--green-color)"
              fontSize="18px"
              fontFamily="var(--primary-font)"
            >
              2021 - Present
            </Typography>
            <Typography
              variant="h5"
              fontSize="24px"
              fontWeight={600}
              fontFamily="var(--prime-font)"
            >
              Bachelor's Degree in Computer Science
            </Typography>
            <Typography
              variant="body1"
              fontSize="20px"
              fontFamily="var(--primary-font)"
            >
              Dedan Kimathi University of Technology
            </Typography>
          </Card>
          <Stack
            direction="row"
            gap={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Card
              sx={{
                width: "350px",
                p: 1,
                boxShadow: "0px 0px 12px rgba(221, 215, 215, 0.5)",
                backgroundColor: "var(--darken-white)",
              }}
            >
              <Typography
                variant="subtitle1"
                color="var(--green-color)"
                fontSize="18px"
                fontFamily="var(--primary-font)"
              >
                2017 - 2020
              </Typography>
              <Typography
                variant="h5"
                fontSize="24px"
                fontWeight={600}
                fontFamily="var(--prime-font)"
              >
                KSCE Certificate
              </Typography>
              <Typography
                variant="body1"
                fontSize="20px"
                fontFamily="var(--primary-font)"
              >
                Booker Academy
              </Typography>
            </Card>
            <Card
              sx={{
                width: "350px",
                p: 1,
                boxShadow: "0px 0px 12px rgba(221, 215, 215, 0.5)",
                backgroundColor: "var(--darken-white)",
              }}
            >
              <Typography
                variant="subtitle1"
                color="var(--green-color)"
                fontSize="18px"
                fontFamily="var(--primary-font)"
              >
                2016
              </Typography>
              <Typography
                variant="h5"
                fontSize="24px"
                fontWeight={600}
                fontFamily="var(--prime-font)"
              >
                KCPE Certificate
              </Typography>
              <Typography
                variant="body1"
                fontSize="20px"
                fontFamily="var(--primary-font)"
              >
                Webuye ACK Primary School
              </Typography>
            </Card>
          </Stack>
        </Stack>
      </Element>
    </>
  );
}

export default Education;
