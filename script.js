let students =
JSON.parse(localStorage.getItem("students")) || [];

const studentTable =
document.getElementById("studentTable");

const totalStudents =
document.getElementById("totalStudents");

const averagePercentage =
document.getElementById("averagePercentage");

displayStudents();

/* Add Student */

function addStudent() {

    let name =
    document.getElementById("name").value.trim();

    let roll =
    document.getElementById("roll").value.trim();

    let marks =
    parseInt(
        document.getElementById("marks").value
    );

    if(name === "" || roll === "" || isNaN(marks))
    {
        alert("Please fill all fields");
        return;
    }

    let percentage = marks;

    let grade = calculateGrade(marks);

    let student = {
        name,
        roll,
        marks,
        percentage,
        grade
    };

    students.push(student);

    saveData();

    displayStudents();

    clearFields();
}

/* Grade */

function calculateGrade(marks){

    if(marks >= 90)
        return "A+";

    if(marks >= 80)
        return "A";

    if(marks >= 70)
        return "B";

    if(marks >= 60)
        return "C";

    return "D";
}

/* Display Students */

function displayStudents(){

    if(students.length === 0){

        studentTable.innerHTML = `
        <tr>
            <td colspan="6">
                <div class="empty-state">
                    <i class="fa-solid fa-box-open"></i>
                    <h3>No students added yet.</h3>
                </div>
            </td>
        </tr>
        `;

        updateDashboard();
        return;
    }

    studentTable.innerHTML = "";

    students.forEach((student,index)=>{

        studentTable.innerHTML += `

        <tr>

            <td>${student.name}</td>

            <td>${student.roll}</td>

            <td>${student.marks}</td>

            <td>${student.percentage}%</td>

            <td>${student.grade}</td>

            <td>

                <button
                class="delete-btn"
                onclick="deleteStudent(${index})">

                Delete

                </button>

            </td>

        </tr>

        `;
    });

    updateDashboard();
}

/* Delete Student */

function deleteStudent(index){

    let confirmDelete =
    confirm("Delete this student?");

    if(confirmDelete){

        students.splice(index,1);

        saveData();

        displayStudents();
    }
}

/* Search */

document
.getElementById("search")
.addEventListener("keyup",function(){

    let value =
    this.value.toLowerCase();

    let rows =
    document.querySelectorAll(
        "#studentTable tr"
    );

    rows.forEach(row=>{

        row.style.display =
        row.innerText.toLowerCase()
        .includes(value)
        ? ""
        : "none";
    });

});

/* Dashboard */

function updateDashboard(){

    totalStudents.innerText =
    students.length;

    let total = 0;

    students.forEach(student=>{

        total += student.percentage;

    });

    let avg =
    students.length > 0
    ?
    (total / students.length).toFixed(2)
    :
    0;

    averagePercentage.innerText =
    avg + "%";
}

/* Local Storage */

function saveData(){

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );
}

/* Clear Inputs */

function clearFields(){

    document.getElementById("name").value = "";

    document.getElementById("roll").value = "";

    document.getElementById("marks").value = "";
}

/* Dark Mode */

document
.getElementById("themeBtn")
.addEventListener("click",()=>{

    document.body
    .classList.toggle("dark");

});