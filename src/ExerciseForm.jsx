// ExerciseForm.jsx
import React, { useState } from "react";
import Modal from "./components/Modal";

// Define the ExerciseForm component
const ExerciseForm = ({
  onClose,
  exercises,
  exerciseName,
  setExerciseName,
  exerciseWeight,
  setExerciseWeight,
  reps,
  setReps,
  sets,
  setSets,
  restBetweenSets,
  setRestBetweenSets,
  exerciseComplete,
  setExerciseComplete,
  intensity,
  setIntensity,
  exerciseNotes,
  setExerciseNotes,
}) => {
  // Handle form submission (log button click)
  const handleSubmitExercise = (event) => {
    event.preventDefault();
    // Create a new exercise object with the form input values
    const exercise = {
      exerciseName,
      exerciseWeight: parseInt(exerciseWeight),
      reps: parseInt(reps),
      sets: parseInt(sets),
      restBetweenSets: parseInt(restBetweenSets),
      exerciseComplete,
      intensity,
      exerciseNotes,
    };

    // Save the exercise to local storage
    JSON.parse(localStorage.getItem("exercises")) || [];
    exercises.push(exercise);
    console.log(exercises);
    localStorage.setItem("exercises", JSON.stringify(exercises));
    // Close the form
    onClose();
  };

  // Render the form
  return (
    <Modal isOpen={true} onClose={onClose}>
      <button onClick={onClose} className="align-self-end">
        X
      </button>

      <div className="exercise-form bg-gray-800 text-white p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Log Exercise</h2>
        <form onSubmit={handleSubmitExercise} className="flex flex-col">
          <label>Exercise Name</label>
          <input
            className="bg-transparent border-2 rounded p-2"
            type="text"
            value={exerciseName}
            onChange={(event) => setExerciseName(event.target.value)}
          />
          <label>Weight</label>
          <input
            className="bg-transparent border-2 rounded p-2"
            type="number"
            value={exerciseWeight}
            onChange={(event) => setExerciseWeight(event.target.value)}
          />
          <label>Reps</label>
          <input
            className="bg-transparent border-2 rounded p-2"
            type="number"
            value={reps}
            onChange={(event) => setReps(event.target.value)}
          />
          <label>Sets</label>
          <input
            className="bg-transparent border-2 rounded p-2"
            type="number"
            value={sets}
            onChange={(event) => setSets(event.target.value)}
          />
          <label>Rest Between Sets (seconds)</label>
          <input
            className="bg-transparent border-2 rounded p-2"
            type="number"
            value={restBetweenSets}
            onChange={(event) => setRestBetweenSets(event.target.value)}
          />
          <label>Complete</label>
          <input
            className="bg-transparent border-2 rounded p-2"
            type="checkbox"
            checked={exerciseComplete}
            onChange={(event) => setExerciseComplete(event.target.checked)}
          />
          <label>Intensity</label>
          <div className="flex justify-center">
            <input
              className="bg-transparent border-2 rounded p-2"
              type="radio"
              value="1"
              checked={intensity === 1}
              onChange={(event) => setIntensity(1)}
            />{" "}
            1
            <input
              className="bg-transparent border-2 rounded p-2"
              type="radio"
              value="2"
              checked={intensity === 2}
              onChange={(event) => setIntensity(2)}
            />{" "}
            2
            <input
              className="bg-transparent border-2 rounded p-2"
              type="radio"
              value="3"
              checked={intensity === 3}
              onChange={(event) => setIntensity(3)}
            />{" "}
            3
            <input
              className="bg-transparent border-2 rounded p-2"
              type="radio"
              value="4"
              checked={intensity === 4}
              onChange={(event) => setIntensity(4)}
            />{" "}
            4
            <input
              className="bg-transparent border-2 rounded p-2"
              type="radio"
              value="5"
              checked={intensity === 5}
              onChange={(event) => setIntensity(5)}
            />{" "}
            5
          </div>
          <label>Notes</label>
          <textarea
            className="bg-transparent border-2 rounded p-2"
            value={exerciseNotes}
            onChange={(event) => setExerciseNotes(event.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded"
          >
            Log
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default ExerciseForm;
