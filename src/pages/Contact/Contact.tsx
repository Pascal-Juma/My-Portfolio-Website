import { Element } from "react-scroll";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { FaPhoneAlt, FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { styled } from "@mui/material/styles";
import type { ButtonProps } from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Handle from "../../components/Handle/Handle";

const ContactCta = styled(Button)<ButtonProps>({
  textTransform: "none",
  backgroundColor: "var(--blue-color)",
  fontFamily: "var(--prime-font)",
  fontSize: "15px",
  "&:hover": {
    backgroundColor: "var(--green-color)",
    transition: "all .4s",
    color: "var(--primary-color)",
  },
});

const StyledField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "var(--grey-contrast)",
    },
    "&:hover fieldset": {
      borderColor: "var(--light-grey)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--light-grey)",
    },
  },
  "& .MuiInputLabel-root": {
    color: "var(--light-grey)",
    fontFamily: "var(--prime-font)",
  },
  "& .MuiInputBase-input": {
    color: "var(--light-grey)",
    fontFamily: "var(--prime-font)",
  },
});

function Contact() {

    const [text] = useTypewriter({
      words: ["Contact"],
      loop: true,
      typeSpeed: 150,
      deleteSpeed: 150,
    });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    console.log("Submitted form:", data);
  };
  return (
    <>
      <Element name="contact">
              <Typography
                fontFamily="var(--prime-font)"
                color="var(--green-color)"
                fontSize="31px"
                textAlign="center"
                mt={2}
                mb={3}
              >
                <HorizontalRuleIcon />
                {text}
                <Cursor />
              </Typography>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
            mb: 5,
            p: 2,
          }}
        >
          <Box maxWidth="500px">
            <Typography
              variant="body1"
              fontFamily="var(--prime-font)"
              color="var(--green-color)"
              fontSize="30px"
            >
              Get In Touch
            </Typography>
            <Typography
              variant="body1"
              fontFamily="var(--code-font)"
              color="var(--light-grey)"
              fontSize="16px"
              sx={{ mt: 2, mb: 3 }}
            >
              Open to full-time roles, internships, or freelance work. Feel free
              to reach out anytime — I’d be happy to chat and explore how we can
              work together.
            </Typography>
            <Handle
              contactIcon={<FaPhoneAlt />}
              contactDetails="+254 7424 71674"
              contactLink="tel:+254742471674"
            />
            <Handle
              contactIcon={<MdOutlineMail />}
              contactDetails="pascal.juma4747@gmail.com"
              contactLink="mailto:pascal.juma4747@gmail.com"
            />
          </Box>
          <Card
            component="form"
            onSubmit={handleSubmit}
            sx={{
              maxWidth: "500px",
              boxShadow: "0px 0px 5px rgba(221, 215, 215, 0.3)",
              backgroundColor: "var(--grey-color)",
              p: 2,
            }}
          >
            <StyledField
              type="text"
              required
              label="First Name"
              name="firstName"
              variant="outlined"
              sx={{ mb: 1.5, mr: 2, width: 225 }}
            />
            <StyledField
              type="text"
              required
              label="Last Name"
              name="lastName"
              variant="outlined"
              sx={{ width: 225, mb: 1.5, }}
            />
            <StyledField
              type="text"
              required
              label="Email"
              name="email"
              variant="outlined"
              fullWidth
              sx={{ mb: 1.5 }}
            />
            <StyledField
              type="text"
              required
              label="Message"
              name="message"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              sx={{ mb: 2 }}
            />
            <Box display="flex" justifyContent="flex-end">
              <ContactCta variant="contained" type="submit">
                Submit <FaLongArrowAltRight style={{ marginLeft: 1.5 }} />
              </ContactCta>
            </Box>
          </Card>
        </Stack>
      </Element>
    </>
  );
}

export default Contact;
