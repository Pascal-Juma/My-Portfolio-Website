import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";
import "./Plate.css";

type Plateprops = {
  achievementTitle: string;
  company: string;
  reason: string;
  link: string;
};

const PlateCta = styled(Button)<ButtonProps>({
  textTransform: "none",
  fontFamily: "var(--code-font)",
  border: "1px solid var(--green-color)",
  color: "var(--brighter-green)",
  "&:hover": {
    backgroundColor: "var(--green-color)",
    transition: "all .4s",
    color: "var(--primary-color)",
    border: "1px solid var(--green-color)",
  },
});

function Plate({ achievementTitle, company, reason, link }: Plateprops) {
  return (
    <>
      <div className="plate-outer">
        <div className="plate-inner">
          <Typography
            variant="body1"
            fontFamily="var(--prime-font)"
            color="var(--brighter-green)"
            fontWeight={600}
            sx={{
              mr: {
                xs: 9.1,
                sm: 9.1,
                md: 10,
                lg: 10,
              },
              fontSize: {
                xs: 15,
                sm: 15,
                md: 20,
                lg: 20,
              },
            }}
            mb={1}
          >
            {achievementTitle}
          </Typography>
          <Typography
            variant="body1"
            fontFamily="var(--primary-font)"
            sx={{
              mr: {
                xs:9,
                sm: 9,
                md: 10,
                lg: 10,
              },
                            fontSize: {
                xs: 14,
                sm: 14,
                md: 16,
                lg: 16,
              },
            }}
            color="var(--blue-brighter)"
            mb={1}
          >
            {company}
          </Typography>
          <Typography
            variant="body1"
            fontFamily="var(--courier-prime)"
            fontSize="18px"
            fontWeight={400}
            sx={{
              ml: {
                xs: 4,
                sm: 4,
                md: 4,
                lg: 4,
              },
              pr: {
                xs: 9,
                sm: 9,
                md: 9,
                lg: 9,
              },
            }}
          >
            {reason}
          </Typography>
          <PlateCta
            component="a"
            variant="outlined"
            href={link}
            // @ts-expect-error: target and rel are valid on anchor elements
            target="_blank"
            sx={{
              ml: {
                xs: 1,
                sm: 1,
                md: 12,
                lg: 12,
              },
              border: {
                xs: "none",
                sm: "none",
                md: "1px solid var(--green-color)",
                lg: "1px solid var(--green-color)",
              }
            }}
            rel="noopener noreferrer"
          >
            View Certificate
          </PlateCta>
        </div>
      </div>
    </>
  );
}

export default Plate;
