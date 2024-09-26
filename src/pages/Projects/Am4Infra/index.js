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
import bgImage from "assets/images/projects/am4infraBG.jpg";
// import post4 from "assets/images/airosimage2.png";
import logo1 from "assets/images/projects/am4infra.png";
// import logo2 from "assets/images/airosimage2.png";
// import logo3 from "assets/images/airosimage2.png";

function am4infra() {
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
            backgroundPosition: "bottom",
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
            AM4INFRA{""}
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
                            {" "}AM4INFRA
                          </MKTypography>
                        </MKBox>
                      </ListItem>
                      <ListItem>
                        <MKBox ml={0} mt={0} mb={0}>
                          <MKTypography variant="body1" component="span" color="black" fontWeight="bold">
                            Project Title:
                          </MKTypography>
                          <MKTypography variant="body1" component="span" color="black" fontWeight="light">
                            {" "}Common Framework for a European Life Cycle based Asset Management Approach for transport infrastructure networks
                          </MKTypography>
                        </MKBox>
                      </ListItem>
                      <ListItem>
                        <MKBox ml={0} mt={0} mb={0}>
                          <MKTypography variant="body1" component="span" color="black" fontWeight="bold">
                            Duration:
                          </MKTypography>
                          <MKTypography variant="body1" component="span" color="black" fontWeight="light">
                            {" "}24 months (1/9/2016 - 31/8/2018)
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
                            {" "}H2020
                          </MKTypography>
                        </MKBox>
                      </ListItem>
                    </List>
                  </Container>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Container>
                    <MKBox component="img" src={logo1} width="70%" sx={{ marginRight: '10px' }} />
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
                  AM4INFRA project is a coordination and support action (CSA) funded by the H2020 programme with
                  the aim to enable transparent, risk-based optimization of investments within and across the modes.
                  The overall objective of this CSA is to launch a life cycle and risk based Asset Management (AM)
                  framework approach enabling effective governance of transport infrastructure networks across Europe.
                  The framework approach is supported by data management tools that ensure transparency and compatibility
                  of optimization and collaboration actions of the infrastructure authorities within the modes, across the
                  modes and across Europe. This common framework paves the way towards an integrated agenda such that it
                  allows smooth functioning of the European transport networks, providing outstanding value for stakeholders
                  and customers. The project’s scope is to support the infrastructure authorities in their decision making and
                  planning as identifying the priorities on basis of (remaining) cost-performance and service levels. AM4INFRA
                  aims to innovate the decision making by the authorities to the extent that the hinder on traffic is optimized
                  on the basis of transparent, coherent and consistent considerations that can be better communicated to society.
                  In addition, the innovations provided by AM4INFRA can offer new knowledge and represent the ‘seed corn’ for an
                  implementation agenda through which the effectiveness of the sector can be further enhanced. Building on ongoing
                  bottom-up actions, best practices and contemporary experiences of four National Infrastructure Agencies (NIAs)
                  that are considered frontrunners in the development and application of asset management in their networks
                  governance, it will deliver the first ever common European AM framework approach that enables consistent and
                  coherent cross-asset, cross-modal and cross-border decision making.
                </MKTypography>
              </Container>
            </Container>
            <Container>
              <MKTypography variant="h5" color="black" ml={3} mb={1}>
                Objectives
              </MKTypography>
              <Container>
                <MKTypography variant="body1" fontWeight="light" color="black" mb={1} textAlign="justify">
                  The main objectives of AM4INFRA are:
                </MKTypography>
                <MKTypography variant="body1" fontWeight="light" color="black" ml={3} mb={3} textAlign="justify">
                  <ul>
                    <li>To provide NIAs with insight on how AM practices would support the development of network management strategy, adoption of decision making processes, operational requirements and how asset knowledge can be utilized.</li>
                    <li>To provide NIAs with a common, practical framework for a life cycle and risk based AM approach capable of governance on the highest aggregation level of (cross-modal) network considerations.</li>
                    <li>To enable NIAs in acquiring meaningful data, sharing knowledge and good practices to achieve “learning by doing” and continuous improvement of the operations.</li>
                    <li>To connect NIAs of different transport modes in terms of AM systems, methodologies and practices (multi-modal management).</li>
                    <li>To provide NIAs the means for replication and wider roll-out of the developed solutions.</li>
                  </ul>
                </MKTypography>
              </Container>
              <Container>
                <MKBox display="flex" justifyContent="center" alignItems="center" py={3}>
                  <MKTypography variant="body1" component="span" color="black" fontWeight="bold">
                    For further information, please visit the{" "}
                    <a
                      href="https://am4infra.eu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#4A90E2", textDecoration: "underline" }}
                    >
                      AM4INFRA
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

export default am4infra;
