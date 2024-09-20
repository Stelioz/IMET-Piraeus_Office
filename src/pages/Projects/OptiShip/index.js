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
import bgImage from "assets/images/projects/optishipBG.jpg";
// import post4 from "assets/images/airosimage2.png";
import logo1 from "assets/images/projects/optiship.png";
// import logo2 from "assets/images/airosimage2.png";
// import logo3 from "assets/images/airosimage2.png";

function OptiShip() {
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
            backgroundPosition: "top",
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
            OptiShip{""}
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
                            {" "}OptiShip
                          </MKTypography>
                        </MKBox>
                      </ListItem>
                      <ListItem>
                        <MKBox ml={0} mt={0} mb={0}>
                          <MKTypography variant="body1" component="span" color="black" fontWeight="bold">
                            Project Title:
                          </MKTypography>
                          <MKTypography variant="body1" component="span" color="black" fontWeight="light">
                            {" "}OPTImization of Life Cycle in the SHIPping industry
                          </MKTypography>
                        </MKBox>
                      </ListItem>
                      <ListItem>
                        <MKBox ml={0} mt={0} mb={0}>
                          <MKTypography variant="body1" component="span" color="black" fontWeight="bold">
                            Duration:
                          </MKTypography>
                          <MKTypography variant="body1" component="span" color="black" fontWeight="light">
                            {" "}18 months (01/06/2022 - 30/11/2023)
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
                            {" "}Greece 2.0 National Recovery and Resilience Plan Funded by the European Union NextGenerationEU
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
                <MKTypography variant="body1" fontWeight="light" color="black" mb={1}>
                  Life Cycle Analysis (LCA) or Life Cycle Performable Analysis (LCPA) is based on modern mathematical
                  models and contributes to business decision-making. LCA is also applied to shipping by examining the
                  three life phases of a ship: (Ι) design & construction, (ΙΙ) operation & maintenance, and (ΙΙΙ) end
                  of life cycle. The OptiShip project deals with the development of a web-based decision-support service
                  (DSS), which will be provided for the 3 life phases of the ship. In addition, it will combine (1)
                  applied operational research with (2) naval architecture, (3) marine hydrodynamics, and (4) key
                  performance indicators (KPIs) to provide decision support in all areas of the maritime industry.
                </MKTypography>
                <MKTypography variant="body1" fontWeight="light" color="black" mb={1}>
                  OptiShip provides an innovative combined solution to address the various challenges highlighted,
                  through a cloud-based consulting platform that will not require additional equipment, offering:
                </MKTypography>
                <MKTypography variant="body1" fontWeight="light" color="black" ml={3} mb={3}>
                  <ul>
                    <li>Supporting existing vessels throughout their life cycle, as opposed to simply optimizing the design, as has been the practice to date.</li>
                    <li>Decision support through autonomous evaluation of many alternative scenarios and ship compositions.</li>
                    <li>Decision support through autonomous evaluation of many alternative scenarios and ship compositions.</li>
                  </ul>
                </MKTypography>
              </Container>
            </Container>
            <Container>
              <MKTypography variant="h5" color="black" ml={3} mb={1}>
                Objectives
              </MKTypography>
              <Container>
                <MKTypography variant="body1" fontWeight="light" color="black" mb={1}>
                  The OptiShip project focuses on the development, testing, implementation, evaluation and commercialization
                  of a holistic online cloud-based LCA platform for the life cycle of a ship (phases I, II, III) and its
                  structural parts. The OptiShip project aims to:
                </MKTypography>
                <MKTypography variant="body1" fontWeight="light" color="black" ml={3} mb={3}>
                  <ul>
                    <li>create a decision-support tool for shipyards, shipping companies, brokers, banks, insurance companies, engineering companies, etc</li>
                    <li>develop a prototype platform, which will make decisive progress in the analysis of the 3 phases of a ship&apos;s life with new models for phases II & III of LCA and the introduction of a database for the majority of ship types (e.g. tankers, bulk carriers, gas, passenger).</li>
                    <li>develop an IPR plan, business plan and marketing plan that will support OptiShip&apos;s business in the years to come after the project is completed.</li>
                    <li>create a European Economic Interest Group (EEIG) as a start-up to market the product and manage it after the project is closed (search for partnerships, investors, alliances and franchise for the product worldwide).</li>
                  </ul>
                </MKTypography>
              </Container>
              <Container>
                <MKBox display="flex" justifyContent="center" alignItems="center" py={3}>
                  <MKTypography variant="body1" component="span" color="black" fontWeight="bold">
                    For further information, please visit the{" "}
                    <a
                      href="https://optiship.eu/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#4A90E2", textDecoration: "underline" }}
                    >
                      OptiShip
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

export default OptiShip;
