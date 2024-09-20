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
import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKInput from "components/MKInput";
// import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import Navbar from "examples/Navbars/DefaultNavbar";
import Footer from "examples/Footers/CenteredFooter";

// Routes
import routes from "routes";
// import footerRoutes from "footer.routes";

// Image
import bgImage from "assets/images/projects/scopeBG.jpg";
// import post4 from "assets/images/airosimage2.png";
import logo1 from "assets/images/projects/scope.png";
// import logo2 from "assets/images/airosimage2.png";
// import logo3 from "assets/images/airosimage2.png";

function ContactUs() {
  return (
    <>
      <Navbar
        routes={routes}
        // action={{
        //   type: "external",
        //   route: "https://www.creative-tim.com/product/material-kit-react",
        //   label: "free download",
        //   color: "info",
        // }}
        sticky
      />
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        >
          <MKTypography
            variant="h1"
            color="white"
            textAlign="center"
            mt={-2}
            mb={1}
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
            })}
          >
            SCILAKE{""}
          </MKTypography>
        </MKBox>
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >

          <MKBox component="section" py={3}>

            <Container sx={{ mt: 2, mb: 5 }}>
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={12} sm={8}>
                  <Container>
                    {/* <MKTypography variant="h4" color="black" ml={0} mt={3} mb={1}>
                      Details
                    </MKTypography> */}
                    <List>
                      <ListItem>
                        <MKBox ml={0} mt={0} mb={0}>
                          <MKTypography variant="body1" component="span" color="black" fontWeight="bold">
                            Acronym:
                          </MKTypography>
                          <MKTypography variant="body1" component="span" color="black" fontWeight="light">
                            {" "}SCOPE
                          </MKTypography>
                        </MKBox>
                      </ListItem>
                      <ListItem>
                        <MKBox ml={0} mt={0} mb={0}>
                          <MKTypography variant="body1" component="span" color="black" fontWeight="bold">
                            Project Title:
                          </MKTypography>
                          <MKTypography variant="body1" component="span" color="black" fontWeight="light">
                            {" "}Shared freight transport services connecting shipper and carrier operations
                          </MKTypography>
                        </MKBox>
                      </ListItem>
                      <ListItem>
                        <MKBox ml={0} mt={0} mb={0}>
                          <MKTypography variant="body1" component="span" color="black" fontWeight="bold">
                            Duration:
                          </MKTypography>
                          <MKTypography variant="body1" component="span" color="black" fontWeight="light">
                            {" "}34 months (09/09/2019 - 08/07/2022)
                          </MKTypography>
                        </MKBox>
                      </ListItem>
                      <ListItem>
                        <MKBox ml={0} mt={0} mb={0}>
                          <MKTypography variant="body1" component="span" color="black" fontWeight="bold">
                            Role:
                          </MKTypography>
                          <MKTypography variant="body1" component="span" color="black" fontWeight="light">
                            {" "}Lead Partner
                          </MKTypography>
                        </MKBox>
                      </ListItem>
                      <ListItem>
                        <MKBox ml={0} mt={0} mb={0}>
                          <MKTypography variant="body1" component="span" color="black" fontWeight="bold">
                            Programme:
                          </MKTypography>
                          <MKTypography variant="body1" component="span" color="black" fontWeight="light">
                            {" "}Interreg Balkan Mediterranean
                          </MKTypography>
                        </MKBox>
                      </ListItem>
                    </List>
                  </Container>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Container>
                    <MKBox component="img" src={logo1} width="90%" sx={{ marginRight: '10px' }} />
                  </Container>
                </Grid>
              </Grid>
            </Container>
            <Container>
              <MKTypography variant="h5" color="black" ml={3} mb={1}>
                Description
              </MKTypography>
              <Container>
                <MKTypography variant="body1" fontWeight="light" color="black" mb={5}>
                  SCOPE aims to address existing inefficiencies (e.g. capacity utilization, fragmentation of
                  activities, environmental sustainability) and improve the performance of the road freight
                  transport system in the Balkan-Med region by providing a transnational, innovative and
                  market-driven freight exchange platform. The SCOPE platform will build upon available knowledge
                  and experience and will carefully consider local and transnational road freight transport
                  conditions, providing value-added services meeting its users’ needs and requirements.
                  The overall objective is to increase employment options and enhance regional competitiveness
                  building upon available technological solutions for developing an innovative web-based platform
                  that will facilitate shared road freight transport services efficiently connecting national and
                  transnational shipper and carrier operations. Significant benefits will be provided to its users
                  enhancing their territorial competitiveness and sustainability which, in turn, will contribute
                  towards a more efficient business environment.
                </MKTypography>
              </Container>
            </Container>
            <Container>
              <MKTypography variant="h5" color="black" ml={3} mb={1}>
                Objectives
              </MKTypography>
              <Container>
                <MKTypography variant="body1" fontWeight="light" color="black" ml={3} mb={3}>
                  <ul>
                    <li>SCOPE project aims to address existing inefficiencies and improve the performance of the road freight transport system in the Balkan-Med region by providing a transnational, innovative and market-driven freight exchange platform.</li>
                    <li>The proposed platform will be built upon the continuous engagement of industry stakeholders with prospective users and upon careful consideration on users’ needs and requirements.</li>
                    <li>The SCOPE platform will satisfy potential users’ recommendations through a tailored online booking system to facilitate freight exchanges between dully-certified users and offer advanced services, such as operating cost estimation, routing applications, cargo monitoring, truck driver simulator etc.</li>
                  </ul>
                </MKTypography>
              </Container>
              <Container>
                <MKBox display="flex" justifyContent="center" alignItems="center" py={3}>
                  <MKTypography variant="body1" component="span" color="black" fontWeight="bold">
                    For further information, please visit the{" "}
                    <a
                      href="https://scope-app.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#4A90E2", textDecoration: "underline" }}
                    >
                      SCOPE
                    </a>{" "}
                    website.
                  </MKTypography>
                </MKBox>
              </Container>
            </Container>
          </MKBox>
        </Card>
        {/* <Contact /> */}
        <Footer />
      </MKBox>
    </>
  );
}

export default ContactUs;
