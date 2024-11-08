import { useState } from "react";

const Chat = () => {
  return (
    <section className="h-full ">
      <div className="p-6">
        <textarea
          type="text"
          className="w-96 h-10 rounded-lg bg-white/80 p-2 resize-none"
          placeholder="Make a prompt..."
        />
      </div>
    </section>
  );
};

export default Chat;
