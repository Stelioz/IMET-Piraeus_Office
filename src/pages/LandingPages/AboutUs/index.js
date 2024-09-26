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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import MKButton from "components/MKButton";

// Material Kit 2 React examples
import Navbar from "examples/Navbars/DefaultNavbar";
import Footer from "examples/Footers/CenteredFooter";

// About Us page sections
// import Information from "pages/LandingPages/AboutUs/sections/Information";
import Team from "pages/LandingPages/AboutUs/sections/Team";
import TeamHead from "pages/LandingPages/AboutUs/sections/TeamHead";
// import Featuring from "pages/LandingPages/AboutUs/sections/Featuring";
import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/hit-image2.png";
import logo from "assets/images/HITlogos/HITLogo.png";

function AboutUs() {
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
      <MKBox
        minHeight="55vh"
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
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKBox
              mb={7}
              sx={{
                backgroundImage: `url(${logo})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                placeItems: "center",
                height: "100px",
                width: "100%",
              }}
            />
            <MKTypography
              variant="h2"
              color="white"
              textAlign="center"
              mt={-6}
              mb={0}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Hellenic Institute of Transport{" "}
            </MKTypography>
            <MKTypography
              variant="h2"
              color="white"
              textAlign="center"
              px={{ xs: 12, lg: 7 }}
              mt={0}
            >
              Piraeus Office
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Container>
          <Grid container spacing={3} mt={2} mb={6}>
            <Grid item ml={2} xs={12} sm={12} lg={12}>
              <MKTypography variant="body1" fontWeight="light" color="black" textAlign="justify">
                The Piraeus team consists of specialists with advanced degrees and extensive experience in
                managing national and European research projects. Their expertise spans various areas such
                as transport economics, operations research, energy and environment challenges in the
                transport sector, digital transformation in shipping and logistics, sustainable urban
                mobility and port operations. Team members have been involved in influential projects in
                collaboration with leading industrial companies, public authorities and academic institutions,
                helping to develop innovative solutions for Greece and beyond. This diverse team ensures that
                the Piraeus office is at the forefront of transport innovation, addressing challenges such as
                climate change, urbanization and technological advances in the maritime and logistics sectors. Their work consistently supports the development of more resilient, efficient and sustainable transportation systems, strengthening CERTH/HIT’s position as a key player in the European research landscape. 
              </MKTypography>
            </Grid>
          </Grid>
        </Container>
        {/* <Information /> */}
        <TeamHead />
        <Team />
        {/* <Featuring /> */}
        <Newsletter />
      </Card>
      <MKBox pt={0} px={0} mt={0}>
        <Footer content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
