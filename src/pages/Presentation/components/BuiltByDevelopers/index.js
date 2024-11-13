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
import Icon from "@mui/material/Icon";
import bgImage from "assets/images/airosimage.png";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { useEffect } from "react"

function BuiltByDevelopers() {
  // const bgImage =
  //   "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg";
  useEffect(() => {
    document.title = "Home | HIT Piraeus Office"
  }, [])

  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={8} sx={{ ml: { xs: 0, lg: 6 } }}>
          {/* <MKTypography variant="h4" color="white" fontWeight="bold">
            Built by developers
          </MKTypography> */}
          <MKTypography variant="h1" color="white" mb={1}>
            AIROS Services
          </MKTypography>
          <MKTypography variant="body1" color="white" opacity={0.8} mb={4} textAlign="justify">
            The AIROS services aim to revolutionize port operations through the development and implementation
            of AI-powered maritime services that use Automatic Identification System (AIS) data for dynamic vessel
            monitoring and real-time tracking.
          </MKTypography>
          <MKTypography component="ul" sx={{"list-style-type":"none", padding:"0", margin:"0"}}>
            <MKTypography component="li">
              <MKTypography
                component="a"
                href="https://www.aishub.net/stations/3074"
                rel="noreferrer"
                variant="body2"
                color="white"
                fontWeight="regular"
                sx={{
                  display: "flex",
                  alignItems: "center",

                  "& .material-icons-round": {
                    fontSize: "1.125rem",
                    transform: `translateX(3px)`,
                    transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                  },

                  "&:hover .material-icons-round, &:focus .material-icons-round": {
                    transform: `translateX(6px)`,
                  },
                }}
              >
                View station on AISHub <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
              </MKTypography>
            </MKTypography>
            <MKTypography component="li">
              <MKTypography
                component="a"
                href="https://stations.vesselfinder.com/stations/6635"
                rel="noreferrer"
                variant="body2"
                color="white"
                fontWeight="regular"
                sx={{
                  display: "flex",
                  alignItems: "center",

                  "& .material-icons-round": {
                    fontSize: "1.125rem",
                    transform: `translateX(3px)`,
                    transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                  },

                  "&:hover .material-icons-round, &:focus .material-icons-round": {
                    transform: `translateX(6px)`,
                  },
                }}
              >
                View station on VesselFinder <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
              </MKTypography>
            </MKTypography>
            <MKTypography component="li">
              <MKTypography
                component="a"
                href="https://www.marinetraffic.com/ais/details/stations/38283"
                rel="noreferrer"
                variant="body2"
                color="white"
                fontWeight="regular"
                sx={{
                  display: "flex",
                  alignItems: "center",

                  "& .material-icons-round": {
                    fontSize: "1.125rem",
                    transform: `translateX(3px)`,
                    transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                  },

                  "&:hover .material-icons-round, &:focus .material-icons-round": {
                    transform: `translateX(6px)`,
                  },
                }}
              >
                View station on MarineTraffic <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
              </MKTypography>
            </MKTypography>
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
