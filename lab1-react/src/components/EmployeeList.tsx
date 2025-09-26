import employees from "../data/employees.json";
import type { EmployeeData } from "../types";

export default function EmployeeList() {
  const data: EmployeeData = employees;

  return (
    <main className="p-6">
      <h2>Employee Directory</h2>
      {Object.entries(data).map(([dept, names]) => (
        <section key={dept} className="border p-2 my-2">
          <h4>{dept}</h4>
          <ul>
            {names.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
