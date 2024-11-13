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

// Profiles
// import Akac from "layouts/pages/profiles-pages/attilas-page";

// Images
import team1 from "assets/images/kitsios.jpg";
import team2 from "assets/images/akac.jpg";
import team3 from "assets/images/pappa.jpg";

function Team() {
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
              Researchers
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2}
                name={
                  <a
                    href="/our-team/akac" rel="noopener noreferrer"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Attila Akac
                  </a>
                }
                position={{ color: "info", label: "Research Associate" }}
                description={{
                  color: "#004978",
                  content: (
                    <>
                      <p>
                        <span style={{ display: "flex", alignItems: "center" }}>
                          <LinkedInIcon fontSize="small" style={{ marginLeft: "-2px" }} />
                          <a
                            href="https://www.linkedin.com/in/attila-akac-354ba384/"
                            style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                          >
                            LinkedIn
                          </a>
                        </span>
                        <span style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                          <PhoneIcon fontSize="small" style={{ marginTop: "0px", marginLeft: "-2px" }} />
                          <a href="tel:+302110130489"
                            style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                          >
                            +30.211.0130489
                          </a>
                        </span>
                        <span style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                          <MailIcon fontSize="small" style={{ marginTop: "0px", marginLeft: "-2px" }} />
                          <a href="mailto:akac.attila@certh.gr"
                            style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                          >
                            akac.attila@certh.gr
                          </a>
                        </span>
                      </p>
                    </>
                  ),
                }}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name={
                  <a
                    href="/our-team/kitsios" rel="noopener noreferrer"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Xenofon Kitsios
                  </a>
                }
                position={{ color: "info", label: "Research Associate" }}
                description={{
                  color: "#004978",
                  content: (
                    <>
                      <p>
                        <span style={{ display: "flex", alignItems: "center" }}>
                          <LinkedInIcon fontSize="small" style={{ marginLeft: "-2px" }} />
                          <a
                            href="https://www.linkedin.com/in/xkitsios/"
                            style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                          >
                            LinkedIn
                          </a>
                        </span>
                        <span style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                          <PhoneIcon fontSize="small" style={{ marginTop: "0px", marginLeft: "-2px" }} />
                          <a href="tel:+302110130490"
                            style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                          >
                            +30.211.0130490
                          </a>
                        </span>
                        <span style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                          <MailIcon fontSize="small" style={{ marginTop: "0px", marginLeft: "-2px" }} />
                          <a href="mailto:xkitsios@certh.gr"
                            style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                          >
                            xkitsios@certh.gr
                          </a>
                        </span>
                      </p>
                    </>
                  ),
                }}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team3}
                name={
                  <a
                    href="/our-team/pappa" rel="noopener noreferrer"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Ioanna Pappa
                  </a>
                }
                position={{ color: "info", label: "Research Associate" }}
                description={{
                  color: "#004978",
                  content: (
                    <>
                      <p>
                        <span style={{ display: "flex", alignItems: "center" }}>
                          <LinkedInIcon fontSize="small" style={{ marginLeft: "-2px" }} />
                          <a
                            href="https://www.linkedin.com/in/ioanna-pappa-39550928/"
                            style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                          >
                            LinkedIn
                          </a>
                        </span>
                        <span style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                          <PhoneIcon fontSize="small" style={{ marginTop: "0px", marginLeft: "-2px" }} />
                          <a href="tel:+302111069588"
                            style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                          >
                            +30.211.1069588
                          </a>
                        </span>
                        <span style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                          <MailIcon fontSize="small" style={{ marginTop: "0px", marginLeft: "-2px" }} />
                          <a href="mailto:ipappa@certh.gr"
                            style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                          >
                            ipappa@certh.gr
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

export default Team;
