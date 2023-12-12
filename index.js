
let myLeads =[]
const inputEl = document.getElementById("input-el")
const inputButton = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputButton.addEventListener("click", function(){
myLeads.push(inputEl.value)
// inputEL.value = ""
renderLeads()
})

function renderLeads (){
    let listIems = " "

    for( let i = 0; i < myLeads.length; i++){
   //listIems += "<li><a target = '_blank' href = '" + myLeads[i]+ "' > " +  myLeads[i]+ "</a></li>"
listIems += `
<li>
        <a target = '_blank' href = '${myLeads[i]}'>
        ${myLeads[i]}
        </a>
</li>

`

    }
    ulEl.innerHTML =  listIems 
    let input = document.getElementById("input-el")
input.value = "";

    }



//const li =  document.createElement("li")
  // li.textContent = myLeads[i]
   //ulEl.append(li)









