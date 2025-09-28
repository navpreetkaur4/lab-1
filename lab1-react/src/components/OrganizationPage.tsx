import React, { useState } from "react";
import orgData from "../data/organization.json";

interface Role {
  title: string;
  name: string;
  description: string;
}

const OrganizationPage: React.FC = () => {
  const [openTitle, setOpenTitle] = useState<string | null>(null);

  return (
    <section>
      <h1>Organization</h1>
      { (orgData as Role[]).map(role => (
        <div key={role.title} className="role-card">
          <h3
            onClick={() => setOpenTitle(openTitle === role.title ? null : role.title)}
            style={{ cursor: "pointer" }}
          >
            {role.title} — {role.name}
          </h3>
          {openTitle === role.title && (
            <p>{role.description}</p>
          )}
        </div>
      )) }
    </section>
  );
};

export default OrganizationPage;
