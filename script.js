document.addEventListener("DOMContentLoaded", loadProjects);

function loadProjects() {
    fetch("http://localhost:5000/api/projects")
        .then(response => response.json())
        .then(projects => {
            const projectList = document.getElementById("project-list");
            projectList.innerHTML = "";
            projects.forEach(project => {
                const div = document.createElement("div");
                div.classList.add("project");
                div.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <p>Status: ${project.status}</p>
                `;
                projectList.appendChild(div);
            });
        })
        .catch(error => console.error("Error loading projects:", error));
}

function addProject() {
    const title = document.getElementById("project-title").value;
    const description = document.getElementById("project-description").value;

    if (!title) return;

    const project = { title, description, status: "Not Started" };

    fetch("http://localhost:5000/api/projects", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
    })
    .then(response => response.json())
    .then(() => {
        loadProjects();
        document.getElementById("project-title").value = "";
        document.getElementById("project-description").value = "";
    })
    .catch(error => console.error("Error adding project:", error));
}
