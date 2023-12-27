
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputButton = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteButton = document.getElementById("delete-btn")
const leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")


if (leadsFromStorage) {
    myLeads = leadsFromStorage
    render(myLeads)
}


tabBtn.addEventListener("click", function(){
        
        chrome.tabs.query({active: true, currentWindow: true}, function(tab){
            myLeads.push(tabs[0].url)

localStorage.setItem("myLeads", JSON.stringify(myLeads))
render(myLeads)

        })   

})

function render(leads){
    let listIems = ""

    for( let i = 0; i < leads.length; i++){
   //listIems += "<li><a target = '_blank' href = '" + leads[i]+ "' > " +  myLeads[i]+ "</a></li>"
listIems += `
<li>
        <a target = '_blank' href = '${leads[i]}'>
        ${leads[i]}
        </a>
</li>

`
    }
    ulEl.innerHTML =  listIems 
   
    }

deleteButton.addEventListener('dblclick',function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)

})





inputButton.addEventListener("click", function(){
myLeads.push(inputEl.value)
inputEl.value = ""
localStorage.setItem("myLeads", JSON.stringify(myLeads))
render(myLeads)

})





//const li =  document.createElement("li")
  // li.textContent = myLeads[i]
   //ulEl.append(li)









