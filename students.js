const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 75 },
    { name: "Charlie", score: 95 },
    { name: "Dave", score: 60 },
    { name: "Eve", score: 55 }
  ];

// Usando filter, crea un array con los estudiantes que tienen una calificación superior a 70.
const upperScoreStudents = students.filter(student => student.score > 70);
console.log(upperScoreStudents);

// Usando map, transforma el array para que cada estudiante tenga una propiedad passed que sea true si su calificación es 70 o superior, y false si es menor a 70.
const passedPropertyAdded = students.map(student => ({
        name: student.name,
        score: student.score,
        passed: student.score >= 70 
}));
console.log(passedPropertyAdded);

// Usando reduce, agrupa a los estudiantes en dos categorías: aprobados y suspendidos.
const aprobadosAgrupado = students.reduce((result, student) => {
    const category = student.score >= 70 ? 'aprobados' : 'suspendidos'
    result[category].push(student);
    return result;
}, { aprobados: [], suspendidos: [] });

console.log(aprobadosAgrupado);

// Usando find, busca el primer estudiante con una calificación superior a 90.
const upToNinentyScore = students.find(student => student.score > 90);
console.log(upToNinentyScore);