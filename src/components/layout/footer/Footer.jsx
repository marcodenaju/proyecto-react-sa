import { Paper, Typography, Link, Grid } from "@mui/material";
import { styled } from "@mui/system";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "#000",
  color: "#fff",
  borderRadius: 0,
  height: "300px",
}));

const useStyles = (theme) => ({
  footerSection: {
    margin: theme.spacing(2),
  },
});

const Footer = () => {
  return (
    <StyledPaper>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <div className={useStyles.footerSection}>
            <Typography variant="h6">Contactanos:</Typography>
            <Typography>
              <Link
                href="https://mail.google.com/mail/"
                target="_blank"
                color="inherit"
              >
                salsa.areco@gmail.com
              </Link>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={useStyles.footerSection}>
            <Typography variant="h6">Nuestras redes:</Typography>
            <Typography>
              <Link
                href="https://www.facebook.com/Salsa-Areco"
                target="_blank"
                color="inherit"
              >
                Facebook
              </Link>
            </Typography>
            <Typography>
              <Link
                href="https://www.instagram.com/salsa.areco/"
                target="_blank"
                color="inherit"
              >
                Instagram
              </Link>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={useStyles.footerSection}>
            <Typography variant="h6">Horarios:</Typography>
            <Typography>Lun a Vie de 9 a 18 hs</Typography>
            <Typography>Sábados de 9 a 12 hs</Typography>
          </div>
        </Grid>
      </Grid>
    </StyledPaper>
  );
};

export default Footer;
