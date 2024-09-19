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
import bgImage from "assets/images/illustrations/illustration-reset.jpg";
// import post4 from "assets/images/airosimage2.png";
import logo1 from "assets/images/airosimage2.png";
import logo2 from "assets/images/airosimage2.png";
import logo3 from "assets/images/airosimage2.png";

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
            SCOPE{""}
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

            <Container>
              <MKTypography variant="h3" color="black" ml={3} mb={3}>
                About the Project
              </MKTypography>
              <Container>
                <MKTypography variant="body1" fontWeight="light" color="black" mb={2}>
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
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <Container>
                    <MKTypography variant="h4" color="black" ml={0} mt={5} mb={2}>
                      Specifications
                    </MKTypography>

                    <List>
                      <ListItem>
                        {/* <FontAwesomeIcon icon={icon({ name: 'fire' })} style={{ color: "#004978" }} /> */}
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "20px" }}>
                          Fire Detection Using a Camera Device.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        {/* <FontAwesomeIcon icon={icon({ name: 'satellite-dish' })} style={{ color: "#004978" }} /> */}
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "15px" }}>
                          Multiple Sensors for Data Acquisition.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        {/* <FontAwesomeIcon icon={icon({ name: 'tower-broadcast' })} style={{ color: "#004978" }} /> */}
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "12px" }}>
                          Foldable Panel and Communication Antenna.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        {/* <FontAwesomeIcon icon={icon({ name: 'solar-panel' })} style={{ color: "#004978" }} /> */}
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "10px" }}>
                          Solar Panel Charging.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        {/* <FontAwesomeIcon icon={icon({ name: 'diagram-project' })} style={{ color: "#004978" }} /> */}
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "10px" }}>
                          Image and Data Telemetry System.
                        </MKTypography>
                      </ListItem>
                    </List>
                  </Container>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Container>
                    <MKTypography variant="h4" color="black" ml={0} mt={5} mb={2}>
                      Programming Stack
                    </MKTypography>

                    <List>
                      <ListItem>
                        {/* <FontAwesomeIcon icon={icon({ name: 'microchip' })} style={{ color: "#004978" }} /> */}
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "10px" }}>
                          Arduino for Electronics and Control.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        {/* <FontAwesomeIcon icon={icon({ name: 'eye' })} style={{ color: "#004978" }} /> */}
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "10px" }}>
                          Nvidia Jetson Nano for AI Fire Detection.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        {/* <FontAwesomeIcon icon={icon({ name: 'code' })} style={{ color: "#004978" }} /> */}
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "10px" }}>
                          Python and C.
                        </MKTypography>
                      </ListItem>
                      <ListItem>
                        {/* <FontAwesomeIcon icon={icon({ name: 'desktop' })} style={{ color: "#004978" }} /> */}
                        <MKTypography variant="body1" color="black" sx={{ marginLeft: "12px" }}>
                          Remote Control via a PC Program.
                        </MKTypography>
                      </ListItem>
                    </List>

                    <MKTypography variant="h4" color="black" ml={0} mt={5} mb={2}>
                      Partners
                    </MKTypography>
                    <MKBox component="img" src={logo1} width="60px" sx={{ marginRight: '10px' }} />
                    <MKBox component="img" src={logo2} width="70px" sx={{ marginRight: '10px' }} />
                    <MKBox component="img" src={logo3} width="70px" sx={{ marginRight: '10px' }} />
                  </Container>
                </Grid>
              </Grid>
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
