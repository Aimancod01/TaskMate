import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";

function App() {
  const [task, setTask] = useState(
    JSON.parse(localStorage.getItem("task")) || []
  );
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);
  return (
    <div className="App container ">
      <Header />
      <AddTask task={task} setTask={setTask} />
      <ShowTask task={task} setTask={setTask} />
    </div>
  );
}

export default App;
