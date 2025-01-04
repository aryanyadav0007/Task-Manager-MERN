import React, { useContext, useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../api/api";
import TaskCard from "../components/TaskCard";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({ title: "", description: "" });
  //   const { user, logout } = useContext(AuthContext

  //   );
  //   const navigate = useNavigate();
  //   if (!user) {
  //     logout();
  //     navigate("/login");
  //   }
  const fetchTasks = async () => {
    const { data } = await getTasks();
    setTasks(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask(formData);
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  const handleEdit = async (id, data) => {
    // const updatedTask = { ...task, completed: !task.completed };
    await updateTask(id, data);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Your Tasks</h1>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <input
            type="text"
            placeholder="Title"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "1rem",
              borderRadius: "5px",
            }}
          />
          <input
            type="text"
            placeholder="Description"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "1rem",
              borderRadius: "5px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "10px",
              backgroundColor: "#fcba03",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Add Task
          </button>
        </form>
      </div>
      {/* <div style={{ display: "flex", justifyContent: "center" }}> */}
      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onEdit={handleEdit}
          onDelete={handleDelete}
          fetchTasks={fetchTasks}
        />
      ))}
      {/* </div> */}
    </div>
  );
};

export default Tasks;
