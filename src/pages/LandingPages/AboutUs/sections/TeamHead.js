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

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";

// Images
import team1 from "assets/images/anagnostopoulou.jpg";

function TeamHead() {
  return (
    <MKBox
      component="section"
      bgColor="info"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Head
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name={
                  <a
                    href="/our-team/anagnostopoulou" rel="noopener noreferrer"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Afroditi Anagnostopoulou
                  </a>
                }
                position={{ color: "info", label: "Research Director" }}
                description={{
                  color: "#004978",
                  content: (
                    <>
                      <p>
                        <span style={{ display: "flex", alignItems: "center" }}>
                          <LinkedInIcon fontSize="small" style={{ marginLeft: "-2px" }} />
                          <a
                            href="https://www.linkedin.com/in/afroditi-anagnostopoulou-951a6913/"
                            style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                          >
                            LinkedIn
                          </a>
                        </span>
                        <span style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                          <PhoneIcon fontSize="small" style={{ marginTop: "0px", marginLeft: "-2px" }} />
                          <a href="tel:+302121069828"
                            style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                          >
                            +30.212.1069828
                          </a>
                        </span>
                        <span style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                          <MailIcon fontSize="small" style={{ marginTop: "0px", marginLeft: "-2px" }} />
                          <a href="mailto:a.anagnostopoulou@certh.gr"
                            style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                          >
                            a.anagnostopoulou@certh.gr
                          </a>
                        </span>
                      </p>
                    </>
                  ),
                }}
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default TeamHead;
