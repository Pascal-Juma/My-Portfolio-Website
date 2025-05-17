import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { FaGithub } from "react-icons/fa";
import Typography from "@mui/material/Typography";

type PlatterProps = {
  screenShot: string;
  description: string;
  title: string;
  liveUrl: string;
  githubLink: string;
};

const CardCta = styled(Button)<ButtonProps>({
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#2196f3",
    transition: "all .4s",
    color: "var(--primary-color)",
  },
});

const PlatterCta = styled(Button)<ButtonProps>({
  textTransform: "none",
  backgroundColor: "var(--secondary-color)",
  fontFamily: "var(--courier-prime)",
  "&:hover": {
    backgroundColor: "var(--color-black)",
    transition: "all .4s",
    color: "var(--primary-color)",
  },
});

function Platter({
  screenShot,
  description,
  title,
  liveUrl,
  githubLink,
}: PlatterProps) {
  return (
    <>
      <Card
        sx={{
          width: "420px",
          boxShadow: "0px 0px 12px rgba(221, 215, 215, 0.5)",
        }}
      >
        <CardMedia
          component="img"
          height="194"
          image={screenShot}
          sx={{ objectFit: "cover" }}
          alt="card image"
        />
        <CardActions>
          <CardCta
            component="a"
            variant="contained"
            size="small"
            // @ts-expect-error: target and rel are valid on anchor elements
            target="_blank"
            href={liveUrl}
            rel="noopener noreferrer"
          >
            {title}
          </CardCta>
          <PlatterCta
            size="small"
            component="a"
            variant="contained"
            href={githubLink}
            // @ts-expect-error: target and rel are valid on anchor elements
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              style={{
                fontSize: "20px",
                marginLeft: "8px",
                marginRight: "5px",
              }}
            />
            Github Repository
          </PlatterCta>
        </CardActions>
        <CardContent>
          <Typography fontFamily="var(--prime-font)">{description}</Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default Platter;
