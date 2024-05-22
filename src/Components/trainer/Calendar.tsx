
interface CalendarProps {
  daysOfWeek: string[];
}

export const Calendar:React.FC<CalendarProps> = ({daysOfWeek }) => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
    <h2 className="text-xl font-semibold mb-4">Calendar</h2>
    <div className="grid grid-cols-5 gap-4">
      {daysOfWeek.map((dayOfWeek) => (
        <div key={dayOfWeek} className="p-4 bg-gray-100 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">{dayOfWeek}</h3>
          {/* Aquí puedes añadir cualquier contenido adicional para cada día */}
        </div>
      ))}
    </div>
  </div>
  )
}
