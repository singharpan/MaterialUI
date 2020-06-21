import React, { Component } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import MainBody from "./MainBody";
import { muscles, excercises } from "./store/store";
import Dialogs from "./Dialogs/dialogs";

class App extends Component {
  state = {
    excercises,
    exercise: {},
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
  handleExerciseSelected = (id) => {
    console.log(id);
    this.setState(({ excercises }) => ({
      exercise: excercises.find((ex) => ex.id === id),
    }));
  };
  render() {
    console.log(this.getExcercisesbyMuscles());
    const excercies = this.getExcercisesbyMuscles(),
      { category, exercise } = this.state;

    //excercise is currently selected excercise
    return (
      <React.Fragment>
        <Header />
        <MainBody
          exercise={exercise}
          excercies={excercies}
          category={category}
          onSelect={this.handleExerciseSelected}
        />

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
