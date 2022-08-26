import { useEffect } from "react";

export default function TodoList({ tasklist, setTasklist }) {
  useEffect(() => {
    fetch("https://three-do-api-ga.web.app/tasks")
      .then((results) => results.json())
      .then((tasks) => setTasklist(tasks))
      .catch(console.error);
  }, [setTasklist]);
  if (!tasklist) {
    return <h2>No tasks to complete!</h2>;
  }
  return (
    <ul>
      {tasklist.map((task) => (
        <li key={task.id}>{task.task}</li>
      ))}
    </ul>
  );
}
