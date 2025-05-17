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
            fontSize="20px"
            color="var(--brighter-green)"
            fontWeight={600}
            mr={10}
            mb={1}
          >
            {achievementTitle}
          </Typography>
          <Typography
            variant="body1"
            fontFamily="var(--primary-font)"
            fontSize="16px"
            mr={10}
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
            ml={4}
            pr={9}
          >
            {reason}
          </Typography>
          <PlateCta
            component="a"
            variant="outlined"
            href={link}
            // @ts-expect-error: target and rel are valid on anchor elements
            target="_blank"
            sx={{ marginLeft: 12 }}
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
