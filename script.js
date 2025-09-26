document.getElementById("year").textContent = new Date().getFullYear();

window.addEventListener("DOMContentLoaded", () => {
  fetch("employees.json")
    .then(response => response.json())
    .then(data => {
      const main = document.querySelector("main");

      for (const dept in data) {
        const section = document.createElement("section");
        const heading = document.createElement("h4");
        heading.textContent = dept;

        const list = document.createElement("ul");
        data[dept].forEach(name => {
          const li = document.createElement("li");
          li.textContent = name;
          list.appendChild(li);
        });

        section.appendChild(heading);
        section.appendChild(list);
        main.appendChild(section);
      }
    })
    .catch(err => console.error("Error loading employees:", err));
});
