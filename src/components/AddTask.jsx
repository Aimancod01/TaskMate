import { useState } from "react";

function AddTask({ task, setTask }) {
  const [uname, setUname] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const date = new Date();
    const newTask = {
      id: date.getTime(),
      name: uname,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
    };
    console.log(newTask);
    if (!uname) return;
    setTask([...task, newTask]);
    setUname("");
  }
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          onChange={(e) => setUname(e.target.value)}
          placeholder="add task"
          name="task"
          value={uname}
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
}

export default AddTask;
