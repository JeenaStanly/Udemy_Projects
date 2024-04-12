const addBtn = document.getElementById('add')

const notes = JSON.parse(localStorage.getItem('notes'))

if (notes) {
    notes.forEach(note => addNewNote(note))
}

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {
    const newnote = document.createElement('div')
    newnote.classList.add('note')
    newnote.innerHTML = `
    <div class="tools">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
</div>
 <div class="main ${text ? "" : "hidden"}"></div>
<textarea class="${text ? 'hidden' : ''}"></textarea> 
    `
    const editBtn = newnote.querySelector('.edit')
    const deleteBtn = newnote.querySelector('.delete')
    const main = newnote.querySelector('.main')
    const textArea = newnote.querySelector('textarea')

    textArea.value = text
    main.innerHTML = marked(text)
    deleteBtn.addEventListener('click', () => {
        newnote.remove()
        updateLS()
    })
    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })
    textArea.addEventListener('input', (e) => {
        const { value } = e.target
        console.log(e.target.value);
        main.innerHTML = marked(value)
        updateLS()
    })

    document.body.appendChild(newnote)
}

function updateLS() {
    const notesText = document.querySelectorAll('textarea')

    const notes = []
    notesText.forEach(note => notes.push(note.value))
    localStorage.setItem('notes', JSON.stringify(notes))
}

// How to Add data into local storage
/* 1. localStorage.setItem('key','value')
2. localstorage store data as strings only so we need to stringify our data using 
localStorage.setItem('key',JSON.stringify())
3. to get the data from local storage we need to parse JSON.parse(localStorage.getItem('key'))
4. how to remove item from localStorage
  localStorage.removeItem('key') 
we can also use sessionstorage instead of local storage but if we close the browser the data will be cleared but in local storage it will be there until it is cleared   
  */











