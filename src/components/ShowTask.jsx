function ShowTask({ task, setTask }) {
  function handleDelete(id) {
    const filtered = task.filter((task) => task.id !== id);
    setTask(filtered);
  }
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{task.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTask([])}>
          Clear All
        </button>
      </div>
      <ul>
        {task.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i
              onClick={() => handleDelete(task.id)}
              className="bi bi-trash"
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ShowTask;
