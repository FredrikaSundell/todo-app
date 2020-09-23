let todos = [] //Array
const ul = document.querySelector('ul') //funktion lista
const form = document.querySelector('form')
const input = document.querySelector('input')

//Lägg en eventlyssnare på formuläret och kör
// funktionen addTodo vid eventet 'submit'
form.addEventListener('submit', addTodo)

//Definerar en funktion som heter addTodo
function addTodo(e) {
  //Så att inte sidan laddas om
  e.preventDefault()
  //Lägg till vad som står i input i slutet på arrayen todo
  todos.push(input.value)
  //Återställer värdet i input
  input.value = ''
  //kör dessa två funktioner
  renderList()
  bindEvents()
}

function removeTodo(e) {
  //Hämta texten på todo'n genom eventet
  const todoRemove = e.target.previousSibling.data
  //Definera newTodos till en filtrerad version av todos
  const newTodos = todos.filter(function (todo) {
    //För varje todo, returnera en boolean (true/false)
    //den boolean vi vill returnera är false på den
    //todon vi klickat på
    //Google Array.filter  (läsa mer om filter)
    return todo !== todoRemove
  })
  //Sätt todos (den som är definerad högst upp)
  //till den nya listan
  todos = newTodos
  renderList()
}

function bindEvents() {
  //Hämta alla knappar inuti ul (som vi definerat högst upp)
  const allButtons = ul.querySelectorAll('button')
  //loopa igenom alla knappar..
  allButtons.forEach(function (button) {
    //en för varje knapp, lätt till en lyssnare på 'click'-eventet
    //där den ska köra funktionen removeTodo
    button.addEventListener('click', removeTodo)
  })
}

function getListMarkup() {
  //Definera Markup och sätt de till en tom stäng ('')
  let markup = ''
  //Loopa igeno todos-arrayen som vi definerat högst upp)
  todos.forEach(function (todo) {
    //För varje item i den arrayen (som vi namngett todo)
    //Skriv över variabeln markup att vara det den var innan
    // plus nedan html (som vi konkatenerar)
    markup += '<li>' + todo + '<button>&times;</button></li>'
  })

  //retunerar sedan denna markup
  return markup
}

function renderList() {
  //Sätt HTML inuti ul till vad som retuneras från getListMarkup
  ul.innerHTML = getListMarkup()
}

//kör dessa två funktioner
renderList()
bindEvents()
