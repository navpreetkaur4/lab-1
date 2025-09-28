import React, { useMemo, useState } from "react";
import departmentsData from "../data/employees.json";

interface Department {
  department: string;
  employees: string[];
}

const EmployeePage: React.FC = () => {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return departmentsData as Department[];

    return (departmentsData as Department[]).map(dep => {
      const matched = dep.employees.filter(name =>
        name.toLowerCase().includes(q)
      );
      if (dep.department.toLowerCase().includes(q) && matched.length === 0) {
        return { ...dep, employees: dep.employees };
      }
      return { ...dep, employees: matched };
    }).filter(dep => dep.employees.length > 0);
  }, [search]);

  return (
    <section>
      <h1>Employee Directory</h1>
      <input
        aria-label="Search employees"
        placeholder="Search by name or department"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "1rem" }}
      />

      {filtered.map(dep => (
        <section key={dep.department} className="department-card">
          <h4>{dep.department}</h4>
          <ul>
            {dep.employees.map(name => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </section>
      ))}

      {filtered.length === 0 && <p>No employees found.</p>}
    </section>
  );
};

export default EmployeePage;
