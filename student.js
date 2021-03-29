var selectedRow = null;
var count = 0;

function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }

    resetForm();
}

function readFormData() {
    var formData = {
        firstName: document.getElementById("fname").value,
        lastName: document.getElementById("lname").value,
        Degree: document.getElementById("degree").value,
        SubDegree: document.getElementById("sub-degree").value,
        DOB: document.getElementById("dob").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
    };
    return formData;
}

function rand() {
    return count += 1;
}

function insertNewRecord(data) {
    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    //studentID
    cell0 = newRow.insertCell(0);
    cell0.innerHTML = rand();

    //student values
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.firstName;

    cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.lastName;

    cell3 = newRow.insertCell(3);
    cell3.innerHTML = data.Degree;

    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.SubDegree;

    cell5 = newRow.insertCell(5);
    cell5.innerHTML = data.DOB;

    cell6 = newRow.insertCell(6);
    cell6.innerHTML = data.email;

    cell7 = newRow.insertCell(7);
    cell7.innerHTML = data.mobile;

    cell8 = newRow.insertCell(8);
    cell8.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick ="onDelete(this)">Delete</a>`;
}

//resetform values

function resetForm() {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("degree").value = "";
    document.getElementById("sub-degree").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
    selectedRow = null;

}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("lname").value = selectedRow.cells[2].innerHTML;
    document.getElementById("degree").value = selectedRow.cells[3].innerHTML;
    document.getElementById("sub-degree").value = selectedRow.cells[4].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[5].innerHTML;
    document.getElementById("email").value = selectedRow.cells[6].innerHTML;
    document.getElementById("mobile").value = selectedRow.cells[7].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[1].innerHTML = formData.firstName;
    selectedRow.cells[2].innerHTML = formData.lastName;
    selectedRow.cells[3].innerHTML = formData.Degree;
    selectedRow.cells[4].innerHTML = formData.SubDegree;
    selectedRow.cells[5].innerHTML = formData.DOB;
    selectedRow.cells[6].innerHTML = formData.email;
    selectedRow.cells[7].innerHTML = formData.mobile;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById("studentList").deleteRow(row.rowIndex);
        resetForm();
    }
}