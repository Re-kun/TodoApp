let closeBtn = document.querySelector('.closeBtn')
let newTodo = document.querySelector('.newTodo')
let newTodoContainer = document.querySelector('.newTodoContainer')

newTodo.addEventListener('click', () => {
    newTodoContainer.classList.add('show')
    newTodoContainer.querySelector('.title').innerText = 'Add new todo'
})

closeBtn.addEventListener('click', () => {
    newTodoContainer.classList.remove('show')
    todoData.value = ''
})

let toggleBtns = document.querySelectorAll('.toggleBtn')
let options = document.querySelectorAll('.options')

const optionsToggle = () => {
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.path[3].classList.toggle('active')
        })
    })

    document.addEventListener('click', (e) => {
        options.forEach(option => {
            if (e.target.contains(option)) {
                document.querySelectorAll('.item').forEach(item => {
                    item.classList.remove('active')
                })
            }
        })
    })
}
optionsToggle()

