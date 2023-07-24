function templateElement(element_name, text, parent, attribute) {
    const template = document.createElement(element_name);
    template.textContent = text;
    parent.appendChild(template);
    attribute ? template.setAttribute(attribute.name, attribute.value) : "";
    return template;
}

let tasks = ["Tâche 1", "Tâche 2", "Tâche 3"];

const addBtn = templateElement("button", "Ajouter", document.body);

// Fonction pour créer le formulaire d'ajout de tâche

function createTaskForm() {
    const form = templateElement("form", "", document.body, { name: "id", value: "form" });
    const input = templateElement("input", "", form);
    const submitButton = templateElement("button", "Valider", form, { name: "type", value: "submit" });

    submitButton.addEventListener("click", function(e) {
        e.preventDefault();
        let nameTask = input.value;

        if (nameTask) {
            tasks.push(nameTask);
            addTask(nameTask);
            form.hidden = true;
            addBtn.hidden = false;
        } else {
            alert("Veuillez saisir une tâche");
        }
    });
}
// [10:08]
// Fonction pour ajouter une tâche

function addTask(nameTask) {
    const task = templateElement("article", "", contain_tasks);
    const taskName = templateElement("h2", nameTask, task);
    const deleteTask = templateElement("button", "Supprimer", task);
    const editButton = templateElement("button", "Modifier", task);

    deleteTask.addEventListener("click", function() {
        task.remove();
        tasks = tasks.filter(task => task !== nameTask);
    });

    editButton.addEventListener("click", function() {
        const form = templateElement("form", "", task);
        const input = templateElement("input", "", form);
        const submitButton = templateElement("button", "Valider", form, { name: "type", value: "submit" });

        taskName.hidden = true;
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            let newName = input.value;

            if (newName) {
                taskName.textContent = newName;
                taskName.hidden = false;
                form.remove();
                tasks[tasks.indexOf(nameTask)] = newName;
            } else {
                alert("Veuillez saisir un nouveau nom pour la tâche");
            }
        });
    });
}

// Création du conteneur des tâches

const contain_tasks = templateElement("section", "", document.body);

// Génération des tâches existantes

tasks.forEach(task => {
    addTask(task);
});

addBtn.addEventListener("click", function() {
    createTaskForm();
    addBtn.hidden = true;
});