import { useState, useEffect } from "react";
import { FaCalendarAlt, FaPlus } from "react-icons/fa";

import axios from "axios";

import "./App.css";
import Navbar from "./components/Navbar";
import WorkoutForm from "./WorkoutForm";
import ExerciseForm from "./ExerciseForm";
import Modal from "./components/Modal";

function App() {
  const [exercises, setExercises] = useState(
    JSON.parse(localStorage.getItem("exercises")) || []
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [workout, setWorkout] = useState({});
  const [workoutDate, setWorkoutDate] = useState("");
  const [bodyWeight, setBodyWeight] = useState("");
  const [workoutNotes, setWorkoutNotes] = useState("");

  const [exerciseName, setExerciseName] = useState("");
  const [exerciseWeight, setExerciseWeight] = useState("");
  const [reps, setReps] = useState("");
  const [sets, setSets] = useState("");
  const [restBetweenSets, setRestBetweenSets] = useState("");
  const [exerciseComplete, setExerciseComplete] = useState(false);
  const [intensity, setIntensity] = useState(1);
  const [exerciseNotes, setExerciseNotes] = useState("");

  function completeWorkout() {
    // Send a POST request to the backend for the workout
    axios
      .post("http://localhost:3000/workouts", {
        workout_date: workoutDate,
        workout_notes: workoutNotes,
        bodyweight: bodyWeight,
      })
      .then((response) => {
        const workoutId = response.data.id;

        // Send a POST request to the backend for each exercise
        exercises.forEach((exercise) => {
          axios
            .post("http://localhost:3000/exercises", {
              exercise_name: exercise.exerciseName,
              exercise_weight: exercise.exerciseWeight,
              reps: exercise.reps,
              sets: exercise.sets,
              rest_between_sets: exercise.restBetweenSets,
              exercise_complete: exercise.exerciseComplete,
              intensity: exercise.intensity,
              exercise_notes: exercise.exerciseNotes,
              workout_id: workoutId,
            })
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.error(error);
            });
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const handleAddExerciseLog = () => {
    // Render the ExerciseForm component
    const exerciseForm = (
      <ExerciseForm onClose={() => console.log("Form closed")} />
    );
  };

  const handleAddExercise = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="dark:bg-gray-800 bg-white p-4 h-screen ">
      <Navbar />
      <section>
        <WorkoutForm
          exercises={exercises}
          setExercises={setExercises}
          workoutDate={workoutDate}
          setWorkoutDate={setWorkoutDate}
          bodyWeight={bodyWeight}
          setBodyWeight={setBodyWeight}
          workoutNotes={workoutNotes}
          setWorkoutNotes={setWorkoutNotes}
          setIsModalOpen={setIsModalOpen}
          workout={workout}
          setWorkout={setWorkout}
          completeWorkout={completeWorkout}
        />
        {isModalOpen && (
          <Modal isOpen={true} onClose={handleCloseModal}>
            <ExerciseForm
              exercises={exercises}
              onClose={handleCloseModal}
              exerciseName={exerciseName}
              setExerciseName={setExerciseName}
              exerciseWeight={exerciseWeight}
              setExerciseWeight={setExerciseWeight}
              reps={reps}
              setReps={setReps}
              sets={sets}
              setSets={setSets}
              restBetweenSets={restBetweenSets}
              setRestBetweenSets={setRestBetweenSets}
              exerciseComplete={exerciseComplete}
              setExerciseComplete={setExerciseComplete}
              intensity={intensity}
              setIntensity={setIntensity}
              exerciseNotes={exerciseNotes}
              setExerciseNotes={setExerciseNotes}
            />
          </Modal>
        )}
      </section>
    </div>
  );
}

export default App;
