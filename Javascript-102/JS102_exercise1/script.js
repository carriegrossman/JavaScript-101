const list = document.querySelector("ul");
const ns = new Nonsense();


const genPerson = () =>{
    return {
        firstName:ns.firstName(),
        lastName:ns.lastName(),
        id:ns.uuid(),
        occupation:ns.jobTitle(),
        quote:ns.buzzPhrase()
    }
}

const createPersonDom = (person) =>{
    console.log(person)
    let personList = document.createElement("li");
    personList.id = person.id;

    let details = document.createElement("div");
    details.innerText = `${person.firstName} ${person.lastName} : ${person.occupation}`
    details.className = "details";

    let quote = document.createElement("div");
    quote.innerText = person.quote;
    quote.className = "quote hidden"

    let x = document.createElement("span");
    x.innerText = "X";
    x.className = "remove";


    details.addEventListener("click", (event) =>{
        console.dir()
        event.target.nextSibling.classList.toggle("hidden")
    })

    x.addEventListener('click', event=>removePerson(event.target.parentElement.id))
        

    personList.append(x,details,quote)

    list.append(personList)
}

//function to remove person
const removePerson = (id) =>{

    list.removeChild(document.getElementById(id))
    people = people.filter(person=>person.id !== id)
    console.log(people.length)
}


let people = [];
for(let i=0; i<20; i++){
    let person = genPerson()
    people.push(person)
    createPersonDom(person)
}
console.log(people)