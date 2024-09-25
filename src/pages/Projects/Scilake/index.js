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
import bgImage from "assets/images/projects/scilakeBG.png";
// import post4 from "assets/images/airosimage2.png";
import logo1 from "assets/images/projects/scilake.png";
// import logo2 from "assets/images/airosimage2.png";
// import logo3 from "assets/images/airosimage2.png";

function Scilake() {
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
                            {" "}SCILAKE
                          </MKTypography>
                        </MKBox>
                      </ListItem>
                      <ListItem>
                        <MKBox ml={0} mt={0} mb={0}>
                          <MKTypography variant="body1" component="span" color="black" fontWeight="bold">
                            Project Title:
                          </MKTypography>
                          <MKTypography variant="body1" component="span" color="black" fontWeight="light">
                            {" "}Democratising and making sense out of heterogeneous scholarly content
                          </MKTypography>
                        </MKBox>
                      </ListItem>
                      <ListItem>
                        <MKBox ml={0} mt={0} mb={0}>
                          <MKTypography variant="body1" component="span" color="black" fontWeight="bold">
                            Duration:
                          </MKTypography>
                          <MKTypography variant="body1" component="span" color="black" fontWeight="light">
                            {" "}36 months (01/01/2023 - 31/12/2025)
                          </MKTypography>
                        </MKBox>
                      </ListItem>
                      <ListItem>
                        <MKBox ml={0} mt={0} mb={0}>
                          <MKTypography variant="body1" component="span" color="black" fontWeight="bold">
                            Role:
                          </MKTypography>
                          <MKTypography variant="body1" component="span" color="black" fontWeight="light">
                            {" "}Partner
                          </MKTypography>
                        </MKBox>
                      </ListItem>
                      <ListItem>
                        <MKBox ml={0} mt={0} mb={0}>
                          <MKTypography variant="body1" component="span" color="black" fontWeight="bold">
                            Programme:
                          </MKTypography>
                          <MKTypography variant="body1" component="span" color="black" fontWeight="light">
                            {" "}Horizon Europe
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
                <MKTypography variant="body1" fontWeight="light" color="black" mb={5} textAlign="justify">
                  SciLake&apos;s mission is to build upon the OpenAIRE ecosystem and EOSC services to (a) facilitate
                  and empower the creation, interlinking and maintenance of Scientific/Scholarly Knowledge Graphs
                  (SKGs) and the execution of data science and graph mining queries on top of them, (b) contribute
                  to the democratization of scholarly content and the related added value services implementing a
                  community-driven management approach, and (c) offer advanced, AI-assisted services that exploit
                  customised perspectives of scientific merit to assist the navigation of the vast scientific
                  knowledge space. In brief, SciLake will develop, support, and offer customisable services to the
                  research community following a two-tier service architecture. First, it will offer a comprehensive,
                  open, transparent, and customizable scientific data-lake-as-a-service (service tier 1), empowering
                  and facilitating the creation, interlinking, and maintenance of SKGs both across and within different
                  scientific disciplines. On top of that, it will build and offer a tier of customisable, AI-assisted
                  services that facilitate the navigation of scholarly content following a scientific merit-driven
                  approach (tier 2), focusing on two merit aspects which are crucial for the research community at
                  large: impact and reproducibility. The services in both tiers will leverage advanced AI techniques
                  (text and graph mining) that are going to exploit and extend existing technologies provided by
                  SciLake&apos;s technology partners. Finally, to showcase the value of the provided services and their
                  capability to address current and anticipated needs of different research communities, four
                  scientific domains (neuroscience, cancer research, transportation, and energy) have been selected
                  to serve as pilots. For each, the developed services will be customised, to accommodate differences
                  in research procedures, practices, impact measures and types of research objects, and will be validated
                  and evaluated through real-world use cases.
                </MKTypography>
              </Container>
            </Container>
            <Container>
              <MKTypography variant="h5" color="black" ml={3} mb={1}>
                Objectives
              </MKTypography>
              <Container>
                <MKTypography variant="body1" fontWeight="light" color="black" mb={1} textAlign="justify">
                  SciLake builds upon the OpenAIRE ecosystem and EOSC services to enable creation, interlinking, and maintenance
                  of Science Knowledge Graphs (SKGs) and execution of data science and graph mining queries on top of them unlock
                  the vast scientific knowledge space with advanced, AI-based services that exploit customized perspectives.
                  More specifically:
                </MKTypography>
                <MKTypography variant="body1" fontWeight="light" color="black" ml={3} mb={3} textAlign="justify">
                  <ul>
                    <li>Identify and address domain-specific cross-disciplinary information needs while managing heterogeneous scholarly content.</li>
                    <li>Democratize scholarly content by facilitating, interlinking, and managing of community-based SKGs.</li>
                    <li>Identify research trends and valuable research objects.</li>
                    <li>Assess research reproducibility and replicability/repeatability.</li>
                    <li>Customise, test, and demonstrate developed services in real-world scenarios.</li>
                    <li>Leverage & enrich EOSC services.</li>
                  </ul>
                </MKTypography>
              </Container>
              <Container>
                <MKBox display="flex" justifyContent="center" alignItems="center" py={3}>
                  <MKTypography variant="body1" component="span" color="black" fontWeight="bold">
                    For further information, please visit the{" "}
                    <a
                      href="https://scilake.eu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#4A90E2", textDecoration: "underline" }}
                    >
                      SCILAKE
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

export default Scilake;
