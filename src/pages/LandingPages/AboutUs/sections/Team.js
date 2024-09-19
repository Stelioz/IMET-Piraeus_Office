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
import team1 from "assets/images/team-2.jpg";
import team2 from "assets/images/bruce-mars.jpg";
import team3 from "assets/images/ivana-squares.jpg";

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
              The Team
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
                      href="https://www.linkedin.com/in/xkitsios/"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      Xenofon Kitsios
                    </a>
                  }
                  position={{ color: "info", label: "Developer" }}
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
                            <a
                              style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                            >
                              +30.211.0130490
                            </a>
                          </span>
                          <span style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                            <MailIcon fontSize="small" style={{ marginTop: "0px", marginLeft: "-2px" }} />
                            <a
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
                  image={team2}
                  name={
                    <a
                      href="https://www.linkedin.com/in/attila-akac-354ba384/"
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
                            <a
                              style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                            >
                              +30.211.0130489
                            </a>
                          </span>
                          <span style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                            <MailIcon fontSize="small" style={{ marginTop: "0px", marginLeft: "-2px" }} />
                            <a
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
                  image={team3}
                  name={
                    <a
                      href="https://www.linkedin.com/in/ioanna-pappa-39550928/"
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
