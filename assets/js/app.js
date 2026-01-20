async function loadIndex() {
  if (!document.getElementById("raids")) return;

  // Load raids
  const raidsData = await fetch("data/raids.json").then(r => r.json());
  const raidsContainer = document.getElementById("raids");

  raidsData.raids.forEach(raid => {
    const card = document.createElement("a");
    card.href = `raid.html?raid=${raid.id}`;
    card.className = "card";
    card.innerHTML = `
      <h3>${raid.name}</h3>
      <p>${raid.season}</p>
    `;
    raidsContainer.appendChild(card);
  });

  // Load classes
  const classesData = await fetch("data/classes.json").then(r => r.json());
  const classesContainer = document.getElementById("classes");

  classesData.classes.forEach(cls => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${cls.name}</h3>
      <ul>
        ${cls.specs.map(spec =>
          `<li>
            <a href="class.html?class=${cls.id}&spec=${spec}">
              ${capitalize(spec)}
            </a>
          </li>`
        ).join("")}
      </ul>
    `;

    classesContainer.appendChild(card);
  });
}
