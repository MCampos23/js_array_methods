const tasks = [
    { id: 1, name: "Set up project", completed: true },
    { id: 2, name: "Create components", completed: false },
    { id: 3, name: "Style application", completed: false },
    { id: 4, name: "Write tests", completed: true },
    { id: 5, name: "Deploy app", completed: false }
  ];
  
// Usando filter, obtén una lista de tareas que estén incompletas.
const uncompletedCompletedTasks = tasks.filter(task => !task.completed);
console.log(uncompletedCompletedTasks);

// Usando map, transforma cada tarea para que contenga la propiedad status como "Done" o "Pending" en lugar de completed (booleano).
const changedProperty = tasks.map(task => ({
        id: task.id,
        name: task.name,
        status: task.completed ? 'Done' : 'Pending'
}))
console.log(changedProperty)

// Usando some, verifica si existe alguna tarea que esté incompleta.
const isThereUnconmpletedTasks = tasks.some(task => !task.completed);
console.log(isThereUnconmpletedTasks);

// Usando find, busca la primera tarea que esté completa y devuelve su nombre.
const firstCompletedTaskName = tasks.find(task => task.completed)?.name;
//const { name: firstCompletedTaskName } = tasks.find(task => task.completed) || {};
console.log(firstCompletedTaskName);