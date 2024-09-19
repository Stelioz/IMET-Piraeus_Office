/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKAvatar from "components/MKAvatar";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import profilePicture from "assets/images/pappa.jpg";
import PhoneIcon from "@mui/icons-material/Phone";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import WorkIcon from "@mui/icons-material/Work";

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 5, sm: 5 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <img src={profilePicture} alt="Ioanna Pappa" style={{ width: "200px", borderRadius: "15%" }} />
          </MKBox>
          <Grid container justifyContent="center" py={4}>
            <Grid item xs={12} md={8} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Ioanna Pappa</MKTypography>
                <MKButton variant="outlined" color="info" size="small">
                  Curriculum Vitae
                </MKButton>
              </MKBox>
              <Grid container spacing={0} mb={3}>
                {/* <Grid item>
                  <MKTypography component="span" variant="body2" color="info">
                    Deputy of Sector C: Transport Economics and Environment
                  </MKTypography>
                </Grid> */}
                {/* <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    3.5k&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Followers
                  </MKTypography>
                </Grid> */}
                {/* <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    260&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Following
                  </MKTypography>
                </Grid> */}
              </Grid>
              <MKTypography variant="body1" fontWeight="light" color="text">
                Ioanna Pappa was born in Arta (Greece) in 1979. She holds a Degree (BSc) in Economics
                (Department of Economics) and an MSc in Services Management (Department of Business
                Administration) from the Athens University of Economics (AUEB). <br /> <br />
                She has strong experience in financial administration of European and National projects,
                with special expertise in budget development, cost eligibility, agreement validation,
                sub-contractors monitoring, also in dissemination actions (workshops, conferences, etc.). <br /> <br />
                Since July 2018, she is working in the Hellenic Institute of Transportation (HIT) of the
                Centre for Research and Technology Hellas (CERTH), in the financial management of EU and
                National projects and supports the preparation and submission of project proposals as
                well. <br /> <br />
                <p>
                  <span style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                    <WorkIcon fontSize="small" style={{ marginTop: "0px", marginLeft: "-2px" }} />
                    <a
                      style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                    >
                      Egialias 52, Marousi, Attica, 15125
                    </a>
                  </span>
                  <span style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                    <PhoneIcon fontSize="small" style={{ marginTop: "0px", marginLeft: "-2px" }} />
                    <a
                      style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                    >
                      +30.211.1069588
                    </a>
                  </span>
                  <span style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                    <MailIcon fontSize="small" style={{ marginTop: "0px", marginLeft: "-2px" }} />
                    <a
                      style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                    >
                      ipappa@certh.gr
                    </a>
                  </span>
                </p>
                {/* <MKTypography
                  component="a"
                  href="#"
                  variant="body1"
                  fontWeight="light"
                  color="info"
                  mt={3}
                  sx={{
                    width: "max-content",
                    display: "flex",
                    alignItems: "center",

                    "& .material-icons-round": {
                      transform: `translateX(3px)`,
                      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                    },

                    "&:hover .material-icons-round, &:focus .material-icons-round": {
                      transform: `translateX(6px)`,
                    },
                  }}
                >
                  More about me <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                </MKTypography> */}
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
