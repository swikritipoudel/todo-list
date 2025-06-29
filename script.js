const listForm = document.querySelector(".listForm")
const taskInput = document.querySelector(".taskInput")
const card = document.querySelector(".card")
const message = document.querySelector(".message")


listForm.addEventListener("submit", event=>{
    event.preventDefault()
    let addTask = taskInput.value


    if(!addTask){
        message.textContent = "Please enter a task"
        return
    }

    message.textContent = ""
   
    createTask(addTask)

    
    taskInput.value = ""

})


function createTask(taskToAdd){
     let taskList = document.createElement("div")
     taskList.classList.add("taskList")
    

    let checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.classList.add("checkbox")
    
    
    
    let task = document.createElement("label")
    task.textContent = taskToAdd
    task.classList.add("task")

    let buttons = document.createElement("div")

    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "🗑️"
    deleteBtn.classList.add("deleteBtn")

    let editBtn = document.createElement("button")
    editBtn.textContent = "✏️"
    editBtn.classList.add("editBtn")

    taskList.appendChild(checkbox)
    taskList.appendChild(task)

    buttons.appendChild(editBtn)
    buttons.appendChild(deleteBtn)

    taskList.appendChild(buttons)
    

    card.appendChild(taskList)

    markDone(checkbox,task)
    deleteTask(deleteBtn,taskList)
    editTask(editBtn,taskList,task)

}


function markDone(checkbox,task){
    checkbox.addEventListener("change",()=>{
    if(checkbox.checked){
    task.classList.add("markDone")
    }

    else{
        task.classList.remove("markDone")
    }
   })

   
}


function deleteTask(deleteBtn,taskList){
deleteBtn.addEventListener("click", ()=>{
    taskList.remove()
   })
}


function editTask(editBtn,taskList,task){
    editBtn.addEventListener("click", ()=>{
    let editInput = document.createElement("input")
    editInput.setAttribute("type", "text")
    editInput.value = task.innerText

    taskList.replaceChild(editInput, task)
    editInput.focus()

    editInput.addEventListener("keydown", (e)=>{
        if(e.key==="Enter"){
            task.textContent = editInput.value
            taskList.replaceChild(task, editInput)
        }

        
    })
   })
}
