import { useState, useEffect } from "react";
import { FaCalendarAlt, FaPlus } from "react-icons/fa";

import "./App.css";
import Navbar from "./components/Navbar";
import WorkoutForm from "./WorkoutForm";
import ExerciseForm from "./ExerciseForm";
import Modal from "./components/Modal";

function App() {
  const [exercises, setExercises] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleAddExerciseLog = () => {
    // Render the ExerciseForm component
    const exerciseForm = (
      <ExerciseForm onClose={() => console.log("Form closed")} />
    );
    // You can use a modal or other overlay to display the form
    // For example:
    // const modal = document.getElementById('modal');
    // modal.innerHTML = exerciseForm;
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
        />
        {isModalOpen && (
          <Modal isOpen={true} onClose={handleCloseModal}>
            <ExerciseForm
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
