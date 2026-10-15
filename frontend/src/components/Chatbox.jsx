
import { useState } from "react";

function Chatbox() {
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!message.trim()) {
      return;
    }

    const response = await fetch("http://localhost:5000/ai/parse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: message,
      }),
    });

    const data = await response.json();

    console.log(data);

    setMessage("");
  }

  function handletextChange(e) {
    const textarea = e.target;

    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;

    setMessage(textarea.value);
  }

  return (
    <form onSubmit={handleSubmit} className="chatbox">
      <textarea
        value={message}
        onChange={handletextChange}
        placeholder="What would you like to schedule?"
        rows={1}
      />

      <button type="submit" disabled={!message.trim()}>
        ↑
      </button>
    </form>
  );
}

export default Chatbox;


