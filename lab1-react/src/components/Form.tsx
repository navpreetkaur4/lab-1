import { useState } from "react";
import type { EmployeeData } from "../types";

interface FormProps {
  data: EmployeeData;
  setData: React.Dispatch<React.SetStateAction<EmployeeData>>;
}

export default function Form({ data, setData }: FormProps) {
  const [name, setName] = useState("");
  const [dept, setDept] = useState(Object.keys(data)[0] || "");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim().length < 3) {
      setError("Name must be at least 3 characters long.");
      return;
    }
    setData((prev) => ({
      ...prev,
      [dept]: [...prev[dept], name.trim()],
    }));

    setName("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 my-4">
      <h3 className="text-lg font-bold mb-2">Add New Employee</h3>

      <div className="mb-2">
        <label className="block mb-1">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-1 w-full"
          />
        </label>
        {error && <p className="text-red-600">{error}</p>}
      </div>

      <div className="mb-2">
        <label className="block mb-1">
          Department:
          <select
            value={dept}
            onChange={(e) => setDept(e.target.value)}
            className="border p-1 w-full"
          >
            {Object.keys(data).map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </label>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Add Employee
      </button>
    </form>
  );
}
