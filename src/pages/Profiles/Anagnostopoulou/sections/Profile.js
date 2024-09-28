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
// import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKAvatar from "components/MKAvatar";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import profilePicture from "assets/images/anag.jpg";
import PhoneIcon from "@mui/icons-material/Phone";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import WorkIcon from "@mui/icons-material/Work";
import { useEffect } from "react"

function Profile() {
  useEffect(() => {
    document.title = "Afroditi Anagnostopoulou | HIT Piraeus Office"
  }, [])

  return (
    <MKBox component="section" py={{ xs: 5, sm: 5 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <img src={profilePicture} alt="Afroditi Anagnostopoulou" style={{ width: "200px", borderRadius: "15%" }} />
          </MKBox>
          <Grid container justifyContent="center" py={4}>
            <Grid item xs={12} md={8} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Afroditi Anagnostopoulou</MKTypography>
                <MKButton
                  variant="outlined"
                  color="info"
                  size="small"
                  onClick={() => window.open('https://www.imet.gr/images/cvs/a.anagnostopoulouEN.pdf', '_blank')}
                >
                  CV
                </MKButton>
              </MKBox>
              <Grid container spacing={0} mb={3}>
                <p>
                  <span style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                    <a
                      style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                    >
                      Deputy of Sector C: “Non-land Transport, Environmental and Economic Issues”
                    </a>
                  </span>
                  <span style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                    <a
                      style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                    >
                      Head of Laboratory C5: “Economic and Social Impacts of Transport Systems”
                    </a>
                  </span>
                </p>
              </Grid>
              <MKTypography variant="body1" fontWeight="light" color="text" textAlign="justify">
                Dr. Afroditi Anagnostopoulou is a Research Director at the Hellenic Institute of
                Transport (HIT) / Centre for Research and Technology Hellas (CERTH), experienced in project
                management and transport economics overseeing the “Economic and Social Impacts of
                Transport Systems” laboratory. She is also Deputy of Unit on Transport Economics and
                Environment, Maritime and Air Transport in the HIT. Her research interest lies in the
                analysis and evaluation of the economic and social impacts from the operation of
                transport systems and services. <br /> <br />
                She participates in several research projects and she has also been teaching in the
                MSc Logistics and Supply Chain Management at the EPSILON COLLEGE supervised by
                Northampton University since 2022. In addition, she has worked as course instructor in
                the MSc in Shipping at the University of Piraeus from 2018 to 2022. She holds a BSc in
                Management Science and Technology from the Athens University of Economics and Business
                and an MSc in Computer Science from the University College London. She has also received
                a PhD in Operations Research from the Department of Management Science and Technology of
                the Athens University of Economics and Business. She is a member of the Hellenic
                Operational Research Society, the Hellenic Institute of Transport Engineers, the
                Association of Greek Researchers and the Economic Chamber of Greece. In addition, she
                was a member of committee for developing the Gender Equality Plan of Centre for Research
                and Technology Hellas (2022-2023). <br /> <br />
                Dr. Afroditi Anagnostopoulou is also a research fellow in the Operations Research &
                Decision Systems Centre of the Athens University of Economics and Business. She is
                listed in “Who&apos;s Who in the World” (2015, 2016, 2017, 2018, 2019) and her work has been
                published in international academic journals (including the first-tiered Transportation
                Science journal) and presented in more than 30 national and international conferences
                (including the TRISTAN VII, 1st & 3rd VEROLOG, EWGT2014, EWGT2023, TRA2014, TRA2018,
                TRA2020, TRA2022, CoDIT2019 & CoDIT2020). <br /> <br />
                <p>
                  <span style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                    <WorkIcon fontSize="small" style={{ marginTop: "0px", marginLeft: "-2px" }} />
                    <a
                      style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                    >
                      G.Kasimati 1, Piraeus, Attica, 18531
                    </a>
                  </span>
                  <span style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                    <PhoneIcon fontSize="small" style={{ marginTop: "0px", marginLeft: "-2px" }} />
                    <a
                      style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                    >
                      +30.212.1069828
                    </a>
                  </span>
                  <span style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                    <MailIcon fontSize="small" style={{ marginTop: "0px", marginLeft: "-2px" }} />
                    <a
                      style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                    >
                      a.anagnostopoulou@certh.gr
                    </a>
                  </span>
                </p>
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
