import { useState } from 'react'
import { FaCalendarAlt, FaPlus } from 'react-icons/fa';

import './App.css'
import Navbar from './components/Navbar'
import ExerciseForm from './ExerciseForm';
import Modal from './components/Modal';

function App() {
  const [exercises, setExercises] = useState(JSON.parse(localStorage.getItem('exercises')) || []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddExerciseLog = () => {
    // Render the ExerciseForm component
    const exerciseForm = <ExerciseForm onClose={() => console.log('Form closed')} />;
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
    <div className='dark:bg-gray-800 bg-white p-4 h-screen '>
  <Navbar />
  <section>
   <WorkoutForm />
    </section>
</div>
  )
}

const WorkoutForm = () => {
  const [exercises, setExercises] = useState(JSON.parse(localStorage.getItem('exercises')) || []);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddExercise = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };


  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-1">Date</label>
        <input type="date" id="date" name="date" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      <div className="mb-4">
        <label htmlFor="bodyweight" className="block text-sm font-semibold text-gray-700 mb-1">Bodyweight (kg)</label>
        <input type="number" id="bodyweight" name="bodyweight" step="0.01" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddExercise}
      >
        Add Exercise
      </button>
      {isModalOpen && (
        <Modal isOpen={true} onClose={handleCloseModal}>
          <ExerciseForm onClose={handleCloseModal} />
        </Modal>
      )}
            <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>
            <h2>{exercise.exerciseName}</h2>
            <p>Weight: {exercise.weight}</p>
            </li>
        ))}
      </ul>


      <div className="mb-4">
        <label htmlFor="workoutnotes" className="block text-sm font-semibold text-gray-700 mb-1">Workout Notes</label>
        <textarea id="workoutnotes" name="workoutnotes" rows={4} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
      </div>

      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Complete Workout
      </button>
    </form>
  );
};

export default App


