import React, { useState } from "react";

const TaskCard = ({ task, onEdit, onDelete, fetchTasks }) => {
  const [openModal, setOpenModel] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    completed: false,
  });
  function handleOpenModel() {
    setOpenModel(true);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // await createTask(formData);
    onEdit(task._id, formData);
    fetchTasks();
    setOpenModel(false);
  };

  return (
    <div
      className="task-card"
      style={{
        minWidth: "250px",
        border: "1px solid #ccc",
        margin: "1rem",
        padding: "1rem",
        borderRadius: "5px",
      }}
    >
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.completed ? "Completed" : "Pending"}</p>
      {openModal && (
        <div>
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
                width: "50%",
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
                width: "50%",
                padding: "10px",
                fontSize: "1rem",
                borderRadius: "5px",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "3px",
              }}
            >
              <label>Status</label>
              <select
                style={{ padding: "10px" }}
                onChange={(e) =>
                  setFormData({ ...formData, completed: e.target.value })
                }
              >
                <option value={false}>Select</option>
                <option value={false}>Pending</option>
                <option value={true}>Completed</option>
              </select>
            </div>
            <div>
              <button
                type="submit"
                style={{
                  padding: "10px",
                  backgroundColor: "#fcba03",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Ok
              </button>
              <button
                onClick={() => setOpenModel(false)}
                style={{
                  padding: "10px",
                  backgroundColor: "#fcba03",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                cnacel
              </button>
            </div>
          </form>
        </div>
      )}
      {!openModal && (
        <button
          onClick={handleOpenModel}
          //   onClick={() => }
          style={{
            padding: "10px",
            backgroundColor: "#fcba03",
            borderRadius: "5px",
            cursor: "pointer",
            marginRight: "3px",
          }}
        >
          Edit
        </button>
      )}
      {!openModal && (
        <button
          onClick={() => onDelete(task._id)}
          style={{
            padding: "10px",
            backgroundColor: "#fcba03",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default TaskCard;
