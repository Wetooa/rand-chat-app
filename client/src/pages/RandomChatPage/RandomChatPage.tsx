function RandomChatPage() {
  return (
    <main className="p-2 h-screne">
      <div className="bg-gray-100 rounded-xl p-4 m-5 h-[700px] flex flex-col justify-between">
        <h1 className="text-4xl mb-4 capitalize">
          Chatting with a random stranger
        </h1>

        {/* messages */}
        <div className="h-10/12 flex justify-end">messages</div>

        <form action="" className="flex w-full h-16 p-2 rounded-lg">
          <input
            type="text"
            name=""
            id=""
            className="w-10/12 p-2 text-3md rounded-lg shadow-lg border-gray-700"
          />
          <button
            type="submit"
            className="ml-4 bg-blue-300 border-gray-600 w-2/12 rounded-lg text-2xl font-bold"
          >
            Send
          </button>
        </form>
      </div>
    </main>
  );
}
export default RandomChatPage;
