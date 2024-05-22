import { useState } from "react";
import { Calendar } from "./Calendar"
import { RoutineForm } from "./RoutineForm"



export const CreateRoutine = () => {
  const [selectedStudent, setSelectedStudent] = useState<string>('');
  const [exerciseName, setExerciseName] = useState<string>('');
  const [sets, setSets] = useState<number>(0);
  const [reps, setReps] = useState<number>(0);
  const [day, setDay] = useState<string>('');
  const [routines, setRoutines] = useState({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
  });

  const students = [
    { id: '1', name: 'Student 1' },
    { id: '2', name: 'Student 2' },
    { id: '3', name: 'Student 3' },
  ];

  const handleAddExercise = () => {
    // Aquí puedes manejar la lógica para agregar un ejercicio a la rutina
    // Puedes usar los estados exerciseName, sets, reps, day para crear un nuevo ejercicio
    // Luego, puedes agregar ese ejercicio al estado de rutinas asignadas al día seleccionado
    const newExercise = {
      id: '1', // Puedes generar un ID único aquí
      name: exerciseName,
      sets,
      reps,
      day,
    };

    setRoutines((prevRoutines) => {
      const updatedRoutines = { ...prevRoutines };
    
      if (Array.isArray(updatedRoutines[day])) {
        updatedRoutines[day] = [...updatedRoutines[day], newExercise];
      } else {
        updatedRoutines[day] = [newExercise];
      }
    
      return updatedRoutines;
    });

    // Limpiar el formulario después de agregar el ejercicio
    setExerciseName('');
    setSets(0);
    setReps(0);
    setDay('');
  };

  
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 gap-8">
        <RoutineForm
          students={students}
          selectedStudent={selectedStudent}
          setSelectedStudent={setSelectedStudent}
          exerciseName={exerciseName}
          setExerciseName={setExerciseName}
          sets={sets}
          setSets={setSets}
          reps={reps}
          setReps={setReps}
          day={day}
          setDay={setDay}
          handleAddExercise={handleAddExercise}
        />
        <Calendar daysOfWeek={Object.keys(routines)} />
      </div>
    </div>
  )
}
