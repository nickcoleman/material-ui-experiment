import React, { Component, Fragment } from 'react';

import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { muscles, exercises } from '../store';

class App extends Component {
  state = {
    exercises,
    category: '',
    exercise: {},
  };

  getExercisesByMuscles() {
    const initExercises = muscles.reduce(
      (exercises, category) => ({
        ...exercises,
        [category]: [],
      }),
      {}
    );

    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = [...exercises[muscles], exercise];

        return exercises;
      }, initExercises)
    );
  }

  handleExerciseSelect = id => {
    this.setState(prevState => ({
      exercise: prevState.exercises.find(ex => ex.id === id),
    }));
  };

  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [...exercises, exercise],
    }));
  };

  handleExcerciseDelete = id => {
    const exercises = this.state.exercises.filter(ex => ex.id !== id);
    this.setState({ exercises });
  };

  handleCategorySelect = category => {
    this.setState({ category });
  };

  render() {
    const exercises = this.getExercisesByMuscles();
    const { category, exercise } = this.state;
    console.log('exercises', exercises);
    return (
      <Fragment>
        <Header
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Exercises
          exercise={exercise}
          exercises={exercises}
          category={category}
          onDeleteExercise={this.handleExcerciseDelete}
          onSelect={this.handleExerciseSelect}
        />
        <Footer
          muscles={muscles}
          onSelect={this.handleCategorySelect}
          category={category}
        />
      </Fragment>
    );
  }
}

export default App;
