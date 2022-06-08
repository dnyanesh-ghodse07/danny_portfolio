import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import BrandReact from "./../../assets/react-brands.svg";
import BrandJS from "./../../assets/js-square-brands.svg";
import BrandGit from "./../../assets/github-brands.svg";
import BrandJira from "./../../assets/jira-brands.svg";
import BrandCss from "./../../assets/css3-brands.svg";
import BrandHtml from "./../../assets/html5-brands.svg";
import BrandSass from "./../../assets/sass-brands.svg";
import './Home.scss';

const Home = () => {
  const boxStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1654650231825-f1c06db0c1ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60')",
    backgroundSize: "cover",
    height: "300px",
    width: "300px",
    boxShadow: "2px 3px 10px 2px lightgrey",
    borderRadius: "50%",
  };

  const skillBox = {
    marginTop: '20px',
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <Box className="home">
      <Box sx={boxStyle} />
      <Box>
        <Typography variant="h2" component="h2">
          Dnyanesh Ghodse
        </Typography>
        <Typography variant="h6" component="h6">
          Front End developer
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 128,
            height: 128,
            cursor: "pointer",
          },
        }}
      >
        <Typography variant="h3">
            Skills
        </Typography>
        <Paper elevation={1} sx={skillBox}>
          <img src={BrandReact} alt="" width='60%' />
          React
        </Paper>
        <Paper elevation={2} sx={skillBox}>
          <img src={BrandJS} alt="" width='60%' />
          JavaScript
        </Paper>
        <Paper elevation={5} sx={skillBox}>
          <img src={BrandGit} alt="" width='60%' />
          Git
        </Paper>
        <Paper elevation={1} sx={skillBox}>
          <img src={BrandCss} alt="" width='60%' />
          CSS
        </Paper>
        <Paper elevation={2} sx={skillBox}>
          <img src={BrandHtml} alt="" width='50%'/>
          HTML
        </Paper>
        <Paper elevation={5} sx={skillBox} >
          <img src={BrandJira} alt="" width='60%' />
          Jira
        </Paper>
        <Paper elevation={5} sx={skillBox} >
          <img src={BrandSass} alt="" width='60%' />
          Sass
        </Paper>
      </Box>
    </Box>
  );
};

export default Home;
