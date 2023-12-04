document.addEventListener('DOMContentLoaded', function () {
    const addBtn = document.getElementById('add');
    const newItemInput = document.getElementById('new');
    const incompleteTasks = document.getElementById('incomplete');
    const completeTasks = document.getElementById('complete');

    addBtn.addEventListener('click', addTask);

    // function for add

    function addTask() {
        const taskText = newItemInput.value.trim();
        if (taskText === '') return;

        const listItem = createTaskElement(taskText);
        incompleteTasks.appendChild(listItem);

        newItemInput.value = '';
    }

    function createTaskElement(task) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <input type="checkbox">
            <label>${task}</label>
            <input type="text" class="edit-input">
            <button class="edit" onclick="editTask(this)">Edit</button>
            <button class="update" style="display: none;" onclick="updateTask(this)">Update</button>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        `;

        return listItem;
    }
    //  edit 
    window.editTask = function (editButton) {
        const listItem = editButton.parentNode;
        const editInput = listItem.querySelector('.edit-input');
        const updateButton = listItem.querySelector('.update');

        editInput.value = listItem.querySelector('label').textContent;
        editInput.focus();
        editButton.style.display = 'none';
        updateButton.style.display = 'inline-block';
    }

//  update 
    window.updateTask = function (updateButton) {
        const listItem = updateButton.parentNode;
        const editInput = listItem.querySelector('.edit-input');
        const editButton = listItem.querySelector('.edit');

        listItem.querySelector('label').textContent = editInput.value;
        editButton.style.display = 'inline-block';
        updateButton.style.display = 'none';
    }

    // delete
    window.deleteTask = function (deleteButton) {
        const listItem = deleteButton.parentNode;
        listItem.parentNode.removeChild(listItem);
    }
});
