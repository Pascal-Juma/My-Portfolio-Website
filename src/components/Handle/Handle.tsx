import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type HandleProps = {
  contactIcon: React.ReactNode;
  contactDetails: string;
  contactLink: string;
};
function Handle({ contactIcon, contactDetails, contactLink }: HandleProps) {
  return (
    <>
      <Box sx={{ display: "flex", mb: 1 }}>
        <Typography
                component="a"
        href={contactLink}
        target="_blank"
        rel="noopener noreferrer"
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1,
            alignItems: "center",
            textDecoration: "none",
             color: "var(--primary-color)",
            fontSize: "18px",
            fontFamily: "var(--code-font)",
            '& svg': {
                fontSize: 24,
                color: "var(--green-color)"
            },
            '&:hover': {
                color: "var(--green-color)" 
            }
          }}
        >
          {contactIcon}
          {contactDetails}
        </Typography>
      </Box>
    </>
  );
}

export default Handle;
