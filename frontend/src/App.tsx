import { useState } from "react";

function Home() {
  const [data, setData] = useState(["hi there", "helo"]);
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="w-[70vh] h-[80vh] border-2 border-white border-dotted flex flex-col">

        {/* Messages area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          <div className="text-white bg-zinc-800 p-2 rounded max-w-[80%]">
            Hi there
          </div>

          {data.map((item: any, index: number) => (
            <div
              key={index}
              className="text-white bg-zinc-700 p-2 rounded max-w-[80%] self-end ml-auto"
            >
              {item}
            </div>
          ))}

        </div>

        {/* Input area */}
        <div className="border-t border-white flex p-3 gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 bg-black text-white border border-white px-3 py-2 outline-none"
          />
          <button className="border border-white text-white px-4 py-2 hover:bg-white hover:text-black transition">
            Send
          </button>
        </div>

      </div>
    </div>
  )
}

export default Home

