/* eslint-disable react/jsx-no-duplicate-props */
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
// import MKTypography from "components/MKTypography";
// import MKInput from "components/MKInput";
// import MKButton from "components/MKButton";

// Images
import image1 from "assets/images/illustrations/hit-image1-raw.png";
import image2 from "assets/images/illustrations/hit-image2-raw.png";

function Newsletter() {
  return (
    <MKBox component="section" pt={6} my={3}>
      <Container>
        <Grid container alignItems="center">
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <MKBox position="relative">
              <MKBox component="img" src={image1} alt="macbook" width="100%" />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={5} sx={{ ml: "auto" }}>
            <MKBox position="relative">
              <MKBox component="img" src={image2} alt="macbook" width="100%" />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Newsletter;
