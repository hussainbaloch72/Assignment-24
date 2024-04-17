// Q3 JS
document.addEventListener('DOMContentLoaded', function () {
    const dataTable = document.getElementById('data-table');
    const data = [
        { index: 0, name: 'Jhone', class: 10 },
        { index: 1, name: 'Doe', class: 9 },
        { index: 2, name: 'Mark', class: 10 },
        { index: 3, name: 'James', class: 8 }
    ];
    data.forEach(item => {
        const row = dataTable.insertRow();
        row.insertCell().innerText = item.index;
        row.insertCell().innerText = item.name;
        row.insertCell().innerText = item.class;
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = function () {
            dataTable.deleteRow(row.rowIndex); 
        };

        row.insertCell().appendChild(deleteButton);
    });
});



// Q5 JS 
const counterElement = document.querySelector('#counter');
let counter = 0;
const increaseButton = document.querySelector('#increaseButton');
const decreaseButton = document.querySelector('#decreaseButton');
increaseButton.addEventListener('click', () => {
    counter++;
    counterElement.textContent = counter;
});

decreaseButton.addEventListener('click', () => {
    counter--;
    counterElement.textContent = counter;
});


//chapters49-52.pdf....

// Q1

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signup-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const username = form.username.value;
        const email = form.email.value;
        console.log('Username:', username);
        console.log('Email:', email);
    });
});
// Q2

document.addEventListener('DOMContentLoaded', function () {
    const shortDetails = document.getElementById('short-details');
    const fullDetails = document.getElementById('full-details');
    const readMoreButton = document.getElementById('read-more-button');
    readMoreButton.addEventListener('click', function () {
        if (fullDetails.style.display === 'none') {
            shortDetails.style.display = 'none';
            fullDetails.style.display = 'inline';
            readMoreButton.textContent = 'Read less';
        } else {
            shortDetails.style.display = 'inline';
            fullDetails.style.display = 'none';
            readMoreButton.textContent = 'Read more';
        }
    });
});

// Q3
document.addEventListener('DOMContentLoaded', function () {
    const studentForm = document.getElementById('student-form');
    const studentTable = document.getElementById('student-table');
    const editForm = document.getElementById('edit-form');
    const editName = document.getElementById('edit-name');
    const editRoll = document.getElementById('edit-roll');
    const saveEditButton = document.getElementById('save-edit');

    studentForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const roll = document.getElementById('roll').value;
        addStudentRow(name, roll);
        studentForm.reset();
    });

    function addStudentRow(name, roll) {
        const row = studentTable.insertRow();
        row.innerHTML = `
            <td>${name}</td>
            <td>${roll}</td>
            <td>
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
            </td>
        `;

        const editButton = row.querySelector('.edit-button');
        const deleteButton = row.querySelector('.delete-button');

        editButton.addEventListener('click', function () {
            editName.value = name;
            editRoll.value = roll;
            editForm.style.display = 'block';
        });

        deleteButton.addEventListener('click', function () {
            studentTable.deleteRow(row.rowIndex);
        });
    }

    saveEditButton.addEventListener('click', function () {
        const editedName = editName.value;
        const editedRoll = editRoll.value;
        editForm.style.display = 'none';
    });
});