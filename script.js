const listForm = document.querySelector(".listForm")
const taskInput = document.querySelector(".taskInput")
const card = document.querySelector(".card")
const message = document.querySelector(".message")


listForm.addEventListener("submit", event=>{
    event.preventDefault()
    let addTask = taskInput.value

   

    let taskList = document.createElement("div")
    

    let checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    
    
    let task = document.createElement("label")
    task.classList.add("task")
    task.textContent = addTask

    let deleteBtn = document.createElement("button")
    deleteBtn.classList.add("deleteBtn")
    deleteBtn.textContent = "🗑️"

    let editBtn = document.createElement("button")
    editBtn.classList.add("deleteBtn")
    editBtn.textContent = "✏️"

    
    taskList.appendChild(checkbox)
    taskList.appendChild(task)
    taskList.appendChild(deleteBtn)
    taskList.appendChild(editBtn)

    card.appendChild(taskList)

   checkbox.addEventListener("change",()=>{
    if(checkbox.checked){
    task.classList.add("checkbox")
    }

    else{
        task.classList.remove("checkbox")
    }
   })

   deleteBtn.addEventListener("click", ()=>{
    taskList.remove()
   })

   
   
   editBtn.addEventListener("click", ()=>{
    editInput = document.createElement("input")
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

    if(!addTask){
        taskList.innerHTML = ""
        return
    }
    

taskInput.value = ""

})

