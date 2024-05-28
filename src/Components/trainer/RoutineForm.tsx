import React from "react";

interface CreateRoutineFormProps {
  students: Student[];
  selectedStudent: string;
  setSelectedStudent: React.Dispatch<React.SetStateAction<string>>;
  exerciseName: string;
  setExerciseName: React.Dispatch<React.SetStateAction<string>>;
  sets: number;
  setSets: React.Dispatch<React.SetStateAction<number>>;
  reps: number;
  setReps: React.Dispatch<React.SetStateAction<number>>;
  day: string;
  setDay: React.Dispatch<React.SetStateAction<string>>;
  handleAddExercise: () => void;
}

interface Student {
  id: string;
  name: string;
}

export const RoutineForm: React.FC<CreateRoutineFormProps> = ({
  students,
  selectedStudent,
  setSelectedStudent,
  exerciseName,
  setExerciseName,
  sets,
  setSets,
  reps,
  setReps,
  day,
  setDay,
  handleAddExercise,
}) => {

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Create Routine</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Select Student</label>
        <select
          className="block w-full p-2 border border-gray-300 rounded-lg"
          value={selectedStudent}
          onChange={(e) => setSelectedStudent(e.target.value)}
        >
          <option value="">Select a student</option>
          {students.map((student) => (
            <option key={student.id} value={student.id}>
              {student.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Exercise Name</label>
        <input
          type="text"
          className="block w-full p-2 border border-gray-300 rounded-lg"
          value={exerciseName}
          onChange={(e) => setExerciseName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Sets</label>
        <input
          type="number"
          className="block w-full p-2 border border-gray-300 rounded-lg"
          value={sets}
          onChange={(e) => setSets(Number(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Reps</label>
        <input
          type="number"
          className="block w-full p-2 border border-gray-300 rounded-lg"
          value={reps}
          onChange={(e) => setReps(Number(e.target.value))}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Day</label>
        <select
          className="block w-full p-2 border border-gray-300 rounded-lg"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        >
          {daysOfWeek.map((dayOfWeek) => (
            <option key={dayOfWeek} value={dayOfWeek}>
              {dayOfWeek}
            </option>
          ))}
        </select>
      </div>
      <button
        className="block w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={handleAddExercise}
      >
        Add Exercise
      </button>
    </div>
  )
}
