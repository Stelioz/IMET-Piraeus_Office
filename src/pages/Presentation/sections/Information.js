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

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
// import bgFront from "assets/images/rotating-card-bg-front.jpeg";
// import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={5} my={5}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                // image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Research
                    <br />
                    Projects
                  </>
                }
                // description="All the MUI components that you need in a development have been re-design with the new look."
              />
              <RotatingCardBack
                // image={bgBack}
                title="Discover More"
                // description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "Start Here",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  // icon="content_copy"
                  title="Scilake"
                  description="Scientific Knowledge Graphs in the heart of Open Science"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  // icon="flip_to_front"
                  title="OptiShip"
                  description="OPTImization of Life Cycle in the SHIPping industry"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  // icon="price_change"
                  title="Scope"
                  description="Shared freight transport services connecting shipper and carrier operations"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  // icon="devices"
                  title="BEOPEN"
                  description="European forum and oBsErvatory for OPEN science in transport"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;