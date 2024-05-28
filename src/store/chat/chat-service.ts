import clienteAxios from "../../service/axiosService";

export const saveMessage = async(room: string, message: { user: string; body: string }) => {
  return await clienteAxios.post('/messages', {room, message});
}

export const getMessageByRoom = async(room: string) => {
  try {
    const response = await clienteAxios.get(`/messages/room/${room}`);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Error loading messages:', error);
    return [];
  }
}