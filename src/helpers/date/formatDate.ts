export const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString();
}


// Función para formatear la fecha al formato "yyyy-MM-dd"
export const fornatDateEdit = (date: Date) => {
  const fecha = new Date(date);
  const year = fecha.getFullYear();
  const month = String(fecha.getMonth() + 1).padStart(2, '0');
  const day = String(fecha.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};