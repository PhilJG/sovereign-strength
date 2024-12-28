import { useState } from "react";

const WorkoutForm = ({
  workout,
  setWorkout,
  exercises,
  setExercises,
  workoutDate,
  setWorkoutDate,
  bodyWeight,
  setBodyWeight,
  workoutNotes,
  setWorkoutNotes,
  setIsModalOpen,
}) => {
  const handleAddExercise = () => {
    setIsModalOpen(true);
    console.log("create exercise");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);

    console.log(exercises);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("workout before:", workout);

    setWorkout({
      date: workoutDate,
      bodyweight: bodyWeight,
      notes: workoutNotes,
      exercises: exercises,
    });

    console.log("workout after:", workout);

    console.log("Form submitted");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 p-8 rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label
          htmlFor="date"
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          Date
        </label>
        <input
          type="date"
          value={workoutDate}
          onChange={(e) => setWorkoutDate(e.target.value)}
          id="date"
          name="date"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="bodyweight"
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          Bodyweight (kg)
        </label>

        <input
          type="number"
          onChange={(e) => setBodyWeight(e.target.value)}
          value={bodyWeight}
          id="bodyweight"
          name="bodyweight"
          step="0.01"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddExercise}
      >
        Add Exercise
      </button>

      <div className="mb-4">
        <label
          htmlFor="workoutnotes"
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          Workout Notes
        </label>
        <textarea
          id="workoutnotes"
          value={workoutNotes}
          onChange={(e) => setWorkoutNotes(e.target.value)}
          name="workoutnotes"
          rows={4}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Complete Workout
      </button>

      <ul className="flex flex-col items-center justify-center">
        {exercises.map((exercise, index) => (
          <li key={index} className="flex bg-gray-200 p-2 m-2">
            <h2>{exercise.exerciseName} </h2>
            <p>: {exercise.exerciseWeight}</p>
          </li>
        ))}
      </ul>
    </form>
  );
};

export default WorkoutForm;
