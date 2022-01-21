const tasks = {
    items: [],
    add: function(task) {
        this.items.push(task)
        this.saveStorage()
    },
    remove: function(index) {
        this.items.splice(index, 1)
        this.saveStorage()
    },
    saveStorage: function() {
        const tasksJSON = JSON.stringify(this.items)
        return localStorage.setItem('tasks', tasksJSON)
    },
    loadStorage () {
        const tasksArray = JSON.parse(localStorage.getItem('tasks'))
        console.log(tasksArray)
        return this.items = tasksArray
    },
    clearStorage: function() {
        return localStorage.removeItem('tasks')
    }
}

tasks.loadStorage()
updateTasks()
const inputTask = document.querySelector('.input-task')
const buttonAddTask = document.querySelector('.button-add-task')

function createTask(text, index) {
    const li = document.createElement('li')
    li.setAttribute('index', index)
    li.innerText = text + ' '
    li.appendChild(createBtnDel())
    return li
}

function createBtnDel() {
    const btn = document.createElement('button')
    btn.setAttribute('class', 'del-task')
    btn.innerText = 'Apagar'
    return btn
}

function updateTasks() {
    const listTasks = document.querySelector('.list-tasks')
    listTasks.innerHTML = ''
    for (const key in tasks.items) {
        listTasks.appendChild(createTask(tasks.items[key], key))
    }
}

function addTask(text) {
    tasks.add(text)
    updateTasks()
    inputTask.value = ''
}

function removeTask(index) {
    tasks.remove(index)
    updateTasks()
}

document.addEventListener('click', (e) => {
    e.preventDefault()
    const el = e.target
    if (el.classList.contains('del-task')) {
        removeTask(el.parentElement.getAttribute('index'))
    }
    if (el.classList.contains('button-add-task') && inputTask.value) {
        addTask(inputTask.value)
    }
})
