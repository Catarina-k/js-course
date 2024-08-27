// Конструктор для створення об'єктів студентів
function Student(firstName, lastName, age, id, averageGrade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.id = id;
    this.averageGrade = averageGrade;
}

// Об'єкт для управління групою студентів
const StudentGroup = {
    students: [],

    // Метод для додавання нового студента
    addStudent: function(firstName, lastName, age, id, averageGrade) {
        const newStudent = new Student(firstName, lastName, age, id, averageGrade);
        this.students.push(newStudent);
    },

    // Метод для видалення студента за ідентифікаційним номером
    removeStudent: function(id) {
        this.students = this.students.filter(student => student.id !== id);
    },

    // Метод для виведення списку всіх студентів
    listStudents: function() {
        if (this.students.length === 0) {
            console.log("The list of students is empty.");
        } else {
            this.students.forEach(student => {
                console.log(`ID: ${student.id}, Name: ${student.firstName}, Surname: ${student.lastName}, Age: ${student.age}, Average Grade: ${student.averageGrade}`);
            });
        }
    },

    // Метод для пошуку студента за ідентифікаційним номером
    findStudentById: function(id) {
        const student = this.students.find(student => student.id === id);
        if (student) {
            console.log(`Student found: ID: ${student.id}, Name: ${student.firstName}, Surname: ${student.lastName}, Age: ${student.age}, Average Grade: ${student.averageGrade}`);
        } else {
            console.log(`Student with ID ${id} not found.`);
        }
    }
};

// Додавання нових студентів
StudentGroup.addStudent("David", "Silver", 20, 1, 83);
StudentGroup.addStudent("Brenda", "Walsh", 21, 2, 91);
StudentGroup.addStudent("Steve", "Sanders", 22, 3, 55);

// Виведення списку всіх студентів
StudentGroup.listStudents();

// Пошук студента за ідентифікаційним номером
StudentGroup.findStudentById(22);
StudentGroup.findStudentById(2);

// Видалення студента
StudentGroup.removeStudent(3);

// Виведення оновленого списку студентів
StudentGroup.listStudents();