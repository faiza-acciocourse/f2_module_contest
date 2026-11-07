
let name = document.getElementById("name");
let profession = document.getElementById("profession");
let age = document.getElementById("age");

let success = document.getElementById("successMessage");
let error = document.getElementById("errorMessage");

let employeeList = document.getElementById("employeeList");
let employeeCount = document.getElementById("employeeCount");

let employees = [];
let id = 1;

function check(event) {
    event.preventDefault();

    if (name.value.trim() == "" || profession.value.trim() == "" || age.value.trim() == "") {
        error.textContent = "Error : Please Make sure All the fields are filled before adding in an employee !";
        success.textContent = "";
    }
    else {
        employees.push({
            id: id++,
            name: name.value,
            profession: profession.value,
            age: age.value
        });

        success.textContent = "Success : Employee Added!";
        error.textContent = "";

        name.value = "";
        profession.value = "";
        age.value = "";

        displayEmployees();
    }
}

function displayEmployees() {
    employeeList.innerHTML = "";

    employees.map((employee) => {
        employeeList.innerHTML += `
            <div class="employee">
                <div class="employee-details">
                    <span>${employee.id}.</span>
                    <span>Name : ${employee.name}</span>
                    <span>Profession: ${employee.profession}</span>
                    <span>Age:${employee.age}</span>
                </div>
                <button class="delete-btn" onclick="deleteEmployee(${employee.id})">
                    Delete User
                </button>
            </div>
        `;
    });

    employeeCount.textContent = "You have " + employees.length + " Employees.";
}

function deleteEmployee(id) {
    employees = employees.filter((employee) => employee.id != id);
    displayEmployees();
}

document.querySelector("form").addEventListener("submit", check);
