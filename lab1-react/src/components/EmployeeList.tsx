import React from "react";

interface EmployeeData {
  department: string;
  employees: string[];
}

interface EmployeeListProps {
  data: EmployeeData[]; 
}

const EmployeeList: React.FC<EmployeeListProps> = ({ data }) => {
  return (
    <div>
      {data.map((dept, i) => (
        <div key={i}>
          <h3>{dept.department}</h3>
          <ul>
            {dept.employees.map((emp, j) => (
              <li key={j}>{emp}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
