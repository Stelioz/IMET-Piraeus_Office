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
import bgImage from "assets/images/projects/beopenBG.png";
// import post4 from "assets/images/airosimage2.png";
import logo1 from "assets/images/projects/beopen.png";
// import logo2 from "assets/images/airosimage2.png";
// import logo3 from "assets/images/airosimage2.png";

function BeOpen() {
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
            BE OPEN{""}
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
                            {" "}BE OPEN
                          </MKTypography>
                        </MKBox>
                      </ListItem>
                      <ListItem>
                        <MKBox ml={0} mt={0} mb={0}>
                          <MKTypography variant="body1" component="span" color="black" fontWeight="bold">
                            Project Title:
                          </MKTypography>
                          <MKTypography variant="body1" component="span" color="black" fontWeight="light">
                            {" "}European forum and oBsErvatory for OPEN science in transport
                          </MKTypography>
                        </MKBox>
                      </ListItem>
                      <ListItem>
                        <MKBox ml={0} mt={0} mb={0}>
                          <MKTypography variant="body1" component="span" color="black" fontWeight="bold">
                            Duration:
                          </MKTypography>
                          <MKTypography variant="body1" component="span" color="black" fontWeight="light">
                            {" "}30 months (01/01/2019 - 30/06/2021)
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
                            {" "}H2020
                          </MKTypography>
                        </MKBox>
                      </ListItem>
                    </List>
                  </Container>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Container>
                    <MKBox component="img" src={logo1} width="80%" sx={{ marginRight: '10px' }} />
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
                  The BE OPEN project aims to create a common understanding on the practical impact of Open
                  Science and to identify and put in place the mechanisms to make it a reality in transport
                  research. Achieving Open Access to publications, making their underlying data FAIR (Findable,
                  Accessible, Interoperable, Reusable) and open where possible, and using open and collaborative
                  processes and infrastructure via the European Open Science Cloud (EOSC) are key factors in making
                  transportation researchers share-reuse-reproduce science and in bringing such a critical sector
                  closer to the society for enabling open innovation and citizen science. Openness, transparency,
                  fairness, reproducibility of science are key aspects around which BE OPEN will seek to establish
                  the ground rules for the transport research communities, ultimately establishing a community of
                  transport research organizations willing to work on the basis of a commonly agreed “Open Science
                  Code of Conduct”. To this end, BE OPEN has brought on board key transport and open science related
                  communities in a two-fold action plan: to engage them in a participatory approach fostering a
                  dialogue on Open Science (what exists, what should be done, how it should be done) among relevant
                  stakeholders in Europe and around the world, and develop a detailed roadmap for the implementation
                  of sustainable open science modules which include key practices, infrastructures, policies and
                  business models, all taking into account the specificities of the transport research domain, and
                  the use and integration of existing-infrastructures and the emerging EOSC initiative.
                </MKTypography>
              </Container>
            </Container>
            <Container>
              <MKTypography variant="h5" color="black" ml={3} mb={1}>
                Objectives
              </MKTypography>
              <Container>
                <MKTypography variant="body1" fontWeight="light" color="black" mb={1}>
                  BE OPEN targets the promotion, regulation and standardization of Open Science in transport research through:
                </MKTypography>
                <MKTypography variant="body1" fontWeight="light" color="black" ml={3} mb={3}>
                  <ul>
                    <li>Developing a framework of common understanding for realizing Open Science services that will provide technical interoperability, data and information interoperability and legal interoperability;</li>
                    <li>Developing the TOPOS forum and observatory for different stakeholders to support an evidence based dialogue;</li>
                    <li>Providing a roadmap and concrete guidelines for operationalizing Open Science services and guide key actors on how to adopt and adapt Open Science services in their research workf lows; and </li>
                    <li>Designing a Code of Conduct for adopting them considering the main legal and security issues for their implementation.</li>
                  </ul>
                </MKTypography>
              </Container>
              <Container>
                <MKBox display="flex" justifyContent="center" alignItems="center" py={3}>
                  <MKTypography variant="body1" component="span" color="black" fontWeight="bold">
                    For further information, please visit the{" "}
                    <a
                      href="https://beopen-project.eu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#4A90E2", textDecoration: "underline" }}
                    >
                      BE OPEN
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

export default BeOpen;
