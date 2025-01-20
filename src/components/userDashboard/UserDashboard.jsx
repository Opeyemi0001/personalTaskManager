import React, { useState } from "react";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("tasks"); // Manage active tab (tasks/profile)
  const [searchQuery, setSearchQuery] = useState(""); // Manage search input
  const [showAddTaskModal, setShowAddTaskModal] = useState(false); // Manage Add Task Modal
  const [newTask, setNewTask] = useState({ name: "", date: "", status: "" }); // New task data

  const tasks = [
    { id: 1, title: "First Task", date: "6/7/2019, 6:27:41 PM", status: "Completed" },
    { id: 2, title: "Second Task", date: "6/7/2019, 6:28:08 PM", status: "Ongoing" },
    { id: 3, title: "Third Task", date: "6/7/2019, 6:28:16 PM", status: "Completed" },
    { id: 4, title: "Fourth Task", date: "6/7/2019, 6:28:34 PM", status: "Ongoing" },
    { id: 5, title: "Fifth Task", date: "6/7/2019, 6:29:07 PM", status: "Ongoing" },
  ]; // Mock tasks

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddTask = () => {
    setShowAddTaskModal(true);
  };

  const handleTaskChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    console.log("New Task Submitted: ", newTask);

    // Reset form
    setNewTask({ name: "", date: "", status: "" });
    setShowAddTaskModal(false);

    // Add task to your backend or update tasks state here
  };

  const handleCancel = () => {
    setNewTask({ name: "", date: "", status: "" });
    setShowAddTaskModal(false);
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="w-full bg-blue-600 text-white px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold">Task Manager App</h1>
        <div className="flex items-center space-x-4">
          <span className="text-lg">Mostafa Ali</span>
          <button
            onClick={() => console.log("User logged out")}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded text-sm font-medium"
          >
            LOG OUT
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="w-full bg-white shadow-md flex justify-around py-4">
        <button
          onClick={() => setActiveTab("tasks")}
          className={`px-4 py-2 ${activeTab === "tasks" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"
            } font-medium`}
        >
          <i className="fas fa-tasks mr-2"></i> MY TASKS
        </button>
        <button
          onClick={() => setActiveTab("profile")}
          className={`px-4 py-2 ${activeTab === "profile" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"
            } font-medium`}
        >
          <i className="fas fa-user mr-2"></i> PROFILE
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-grow bg-gray-100 p-6">
        {activeTab === "tasks" && (
          <div className="bg-white shadow-md p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Tasks</h2>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Search tasks..."
                  className="border border-gray-300 rounded px-4 py-2 text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  onClick={handleAddTask}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center"
                >
                  <i className="fas fa-plus mr-2"></i> Add Task
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 px-4 py-2 text-left">Task</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Date</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Status</th>
                    <th className="border border-gray-200 px-4 py-2 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTasks.map((task) => (
                    <tr key={task.id} className="hover:bg-gray-50">
                      <td className="border border-gray-200 px-4 py-2">{task.title}</td>
                      <td className="border border-gray-200 px-4 py-2">{task.date}</td>
                      <td className="border border-gray-200 px-4 py-2">{task.status}</td>
                      <td className="border border-gray-200 px-4 py-2 text-center">
                        <button className="text-blue-500 hover:text-blue-600 mr-2">
                          <i className="fas fa-edit"></i>
                        </button>
                        <button className="text-red-500 hover:text-red-600">
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                  {filteredTasks.length === 0 && (
                    <tr>
                      <td
                        colSpan="4"
                        className="border border-gray-200 px-4 py-2 text-center text-gray-500"
                      >
                        No tasks found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "profile" && (
          <div className="bg-white shadow-md p-6 rounded-lg max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold border-b border-gray-300 pb-4 mb-6">My Profile</h2>
            <div className="space-y-4 text-gray-800">
              <div className="flex justify-between">
                <span className="font-medium">Name:</span>
                <span>Mostafa Ali</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Email:</span>
                <span>mostafa@test.com</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Age:</span>
                <span>27</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Joined:</span>
                <span>5/28/2019, 8:30:19 PM</span>
              </div>
              <p className="text-gray-600 leading-relaxed mt-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore modi quasi
                cupiditate vero porro dolor. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Iusto quibusdam nemo, cum officia expedita suscipit minima!
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Add Task Modal */}
      {showAddTaskModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-medium mb-4">Add New Task</h2>
            <form onSubmit={handleTaskSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Task Name</label>
                <input
                  type="text"
                  name="name"
                  value={newTask.name}
                  onChange={handleTaskChange}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Date</label>
                <input
                  type="date"
                  name="date"
                  value={newTask.date}
                  onChange={handleTaskChange}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Status</label>
                <select
                  name="status"
                  value={newTask.status}
                  onChange={handleTaskChange}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                >
                  <option value="">Select Status</option>
                  <option value="Ongoing">Ongoing</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
