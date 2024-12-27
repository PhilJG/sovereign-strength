import { useState } from 'react'


const WorkoutForm = ({exercises, setExercises, workoutDate, setWorkoutDate, bodyWeight, setBodyWeight, workoutNotes, setWorkoutNotes, setIsModalOpen}) => {
    
    const handleAddExercise = () => {
      setIsModalOpen(true);
      console.log('create exercise')
    };
    
    const handleCloseModal = () => {
      setIsModalOpen(false);
      
      console.log(exercises)
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('exercise.date:', workoutDate)
      console.log('notes:', workoutNotes);
      console.log('Body weight:', bodyWeight);
      console.log('Form submitted');
    };
  
    return (
      <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-1">Date</label>
          <input type="date" value={workoutDate} onChange={(e)=> setWorkoutDate(e.target.value)} id="date" name="date" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
  
        <div className="mb-4">
          <label htmlFor="bodyweight" className="block text-sm font-semibold text-gray-700 mb-1">Bodyweight (kg)</label>

          <input type="number"  onChange={(e)=> setBodyWeight(e.target.value)} value={bodyWeight} id="bodyweight" name="bodyweight" step="0.01" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />

        </div>
  
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddExercise}
        >
          Add Exercise
        </button>
       
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
          <textarea id="workoutnotes" value={workoutNotes} onChange={(e)=> setWorkoutNotes(e.target.value)} name="workoutnotes" rows={4} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>
  
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Complete Workout
        </button>
      </form>
      
    );
  };
  
  export default WorkoutForm