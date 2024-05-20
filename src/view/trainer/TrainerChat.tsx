

export const TrainerChat = () => {
  return (
    <div className=" container mx-auto p-4 bg-white rounded-lg shadow-lg">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Chat</h2>
      </div>
      <div className="mb-4 h-64 overflow-y-auto border border-gray-200 p-4 rounded-lg">
        {/* Messages will be rendered here */}
        <div className="mb-2 p-2 rounded-lg bg-blue-100 text-blue-900">
          Trainer: Welcome to the chat!
        </div>
        <div className="mb-2 p-2 rounded-lg bg-gray-100 text-gray-900">
          User: Thank you! I'm excited to start.
        </div>
        {/* End of message list */}
      </div>
      <div className="flex">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-l-lg"
          placeholder="Type a message"
        />
        <button
          className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  )
}
