import React from "react";
import "./App.css";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
  Typography,
  MuiThemeProvider,
} from "@material-ui/core";
import Footer from "./Footer";
import Header from "./Header";
import MainBody from "./MainBody";
// import InstaFollow from "./InstaFollow";

// //here we are not customization anything other than font size which should be responseive ...so we are not passing anything
// let theme = createMuiTheme();
// //now we pass the theme retured by createMuiTheme to responseiveFontSizes funtion..this gives the updated theme..that would do the job of making font sizes responseive

// theme = responsiveFontSizes(theme);

// const heading = "HI HEADING";
// const text =
//   "here we are not customization anything other than font size which should be responseive ...so we are not passing anything now we pass the theme retured by createMuiTheme to responseiveFontSizes funtion..this gives the updated theme..that would do the job of making font sizes responseive";
// //then finally inside div w'll have MuiThemeProvider component && that component have a theme props associated"
// //we provide our theme to this theme...& by wrapping all our component inside MuiThemeProvider ensure that all component get access of this custom theme
// //now we don't need to write multiple media queries for multiple font sizes
function App() {
  return (
    <React.Fragment>
      {/* <MuiThemeProvider theme={theme}>
        <Typography variant="h1" gutterBottom>
          {heading}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {text}
        </Typography>
      </MuiThemeProvider>
      <InstaFollow /> */}
      <Header />
      <MainBody />
      <Footer />
    </React.Fragment>
  );
}

export default App;

//createMuiTheme allow to generate custom mui theme giving a option object as parameter
//...conatining custom colors and typography and returns a new theme for your react component
//responseFontSizes which can automatically update the font size of your typography for every break point
//themeprovider is top level wrapper for all the components in application

//typography to display the heading and the text
