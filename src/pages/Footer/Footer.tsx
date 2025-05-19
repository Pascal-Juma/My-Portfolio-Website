import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"


function Footer() {
  return (
    <>
      <Stack sx={{backgroundColor: "var(--secondary-color)", display: "flex", alignItems: "center", flexWrap: "wrap", minHeight: 50, p: 2}}>
<Box display ="flex" gap={1}>
            <Typography fontFamily="var(--prime-font)" fontSize="17px" >
            &copy; 2025 CopyRights reserved. Powered by 
        </Typography>
        <Typography fontFamily="var(--prime-font)" fontSize="17px" color="var(--brighter-green)">
             Metalabs
        </Typography>
</Box>
      </Stack>
    </>
  )
}

export default Footer
