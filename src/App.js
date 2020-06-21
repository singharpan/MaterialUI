import React, { Component } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import MainBody from "./MainBody";
import { muscles, excercises } from "./store/store";

class App extends Component {
  state = {
    excercises,
  };
  //Object.entries convert Object into Array
  getExcercisesbyMuscles() {
    return Object.entries(
      this.state.excercises.reduce((exercises, excercise) => {
        const { muscles } = excercise;
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], excercise]
          : [excercise];

        return exercises;
      }, {})
    );
  }

  render() {
    console.log(this.getExcercisesbyMuscles());
    const excercies = this.getExcercisesbyMuscles();
    return (
      <React.Fragment>
        <Header />
        <MainBody excercies={excercies} />
        <Footer muscles={muscles} />
      </React.Fragment>
    );
  }
}

export default App;

//createMuiTheme allow to generate custom mui theme giving a option object as parameter
//...conatining custom colors and typography and returns a new theme for your react component
//responseFontSizes which can automatically update the font size of your typography for every break point
//themeprovider is top level wrapper for all the components in application

//typography to display the heading and the text
