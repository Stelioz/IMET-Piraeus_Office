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
import profilePicture from "assets/images/attila.jpg";
import PhoneIcon from "@mui/icons-material/Phone";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import WorkIcon from "@mui/icons-material/Work";

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 5, sm: 5 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <img src={profilePicture} alt="Attila Akac" style={{ width: "200px", borderRadius: "15%" }} />
          </MKBox>
          <Grid container justifyContent="center" py={4}>
            <Grid item xs={12} md={8} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Attila Akac</MKTypography>
                <MKButton
                  variant="outlined"
                  color="info"
                  size="small"
                  onClick={() => window.open('https://www.imet.gr/images/cvs/akac.attilaEN.pdf', '_blank')}
                >
                  CV
                </MKButton>
              </MKBox>
              <Grid container spacing={0} mb={3}>
                {/* <Grid item>
                  <MKTypography component="span" variant="body2" color="info">
                    Deputy of Sector C: Transport Economics and Environment
                  </MKTypography>
                </Grid> */}
                {/* <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    3.5k&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Followers
                  </MKTypography>
                </Grid> */}
                {/* <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    260&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Following
                  </MKTypography>
                </Grid> */}
              </Grid>
              <MKTypography variant="body1" fontWeight="light" color="text" textAlign="justify">
                Attila Akac was born in the city of Pecs, Hungary. He has been working as a Research
                Associate at the Hellenic Institute of Transport / Centre for Research and Technology
                Hellas since 2018 with the specialization of &quot;Energy & Production Engineer&quot;, performing
                multiple tasks in European, Regional and National projects of the Energy, Economic and
                Environmental Issues - Maritime and Air Transport Division of the Institute. <br /> <br />
                He is a graduate of the School of Production Engineering and Management of the
                Technical University of Crete (Integrated BSc & MSc), a graduate (MSc)of the School
                of Mechanical Engineering of the Heriot-Watt University of Edinburgh (in collaboration
                with the University of West Attica) and a member of the Technical Chamber of Greece
                (TEEE-TCG). His research interest and specialisation focuses on the (1) evaluation of
                energy, economic and environmental impacts of transport system operation (mainly in
                renewable energy and alternative fuels), (2) strategic planning and multi-criteria life
                cycle analysis (LCA) of multimodal power generation and power management systems in the
                maritime transport sector and (3) energy transition in the Blue Economy sector. <br /> <br />
                As a member of HIT, he has participated in 12 European, Regional and National funded
                projects, coordinating and managing 7 research projects. Throughout his career, he has
                coordinated more than 40 Research and Technical Partners. He has 15 publications in
                international journals, conference proceedings and book chapters. <br /> <br />
                Alongside his studies, he has obtained certification as a trainer on everyday general
                skills (soft skills), having delivered more than 100 hours of instruction to
                students/students aged 17-25. Furthermore, he is a member of a European Engineers
                NGO called BEST (Board of Students of Technology) and has organized plenty of local,
                regional and European courses/seminars and conferences. <br /> <br />
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
                      +30.211.0130489
                    </a>
                  </span>
                  <span style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                    <MailIcon fontSize="small" style={{ marginTop: "0px", marginLeft: "-2px" }} />
                    <a
                      style={{ color: "black", fontSize: "smaller", marginLeft: "3px", marginRight: "8px" }}
                    >
                      akac.attila@certh.gr
                    </a>
                  </span>
                </p>
                {/* <MKTypography
                  component="a"
                  href="#"
                  variant="body1"
                  fontWeight="light"
                  color="info"
                  mt={3}
                  sx={{
                    width: "max-content",
                    display: "flex",
                    alignItems: "center",

                    "& .material-icons-round": {
                      transform: `translateX(3px)`,
                      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                    },

                    "&:hover .material-icons-round, &:focus .material-icons-round": {
                      transform: `translateX(6px)`,
                    },
                  }}
                >
                  More about me <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                </MKTypography> */}
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
