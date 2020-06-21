import React, { Component } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import MainBody from "./MainBody";
import { muscles, excercises } from "./store/store";

class App extends Component {
  state = {
    excercises,
    category: "legs",
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

  handleCategorySelected = (category) => {
    this.setState({
      category,
    });
  };
  render() {
    console.log(this.getExcercisesbyMuscles());
    const excercies = this.getExcercisesbyMuscles(),
      { category } = this.state;
    return (
      <React.Fragment>
        <Header />
        <MainBody excercies={excercies} category={category} />
        <Footer
          muscles={muscles}
          category={category}
          onSelect={this.handleCategorySelected}
        />
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
