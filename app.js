var list = document.getElementById('list')
document.getElementById('deleAll').disabled = true

function itemAdd() {
    var item = document.getElementById('item')
    var textNode = document.createTextNode(item.value)
    var li = document.createElement('li')
    li.appendChild(textNode)

    var edit = document.createElement("button")
    var editextNode = document.createTextNode("EDIT")
    edit.setAttribute("class","btn btn-outline-light")
    edit.setAttribute("onclick","edit(this)")
    edit.appendChild(editextNode)
    li.appendChild(edit)

    var dlt = document.createElement("button")
    var dltextNode = document.createTextNode("DELETE")
    dlt.setAttribute("class","btn btn-outline-danger")
    dlt.setAttribute("onclick","dlt(this)")
    dlt.appendChild(dltextNode)
    li.appendChild(dlt)
    item.value = ""
    
    list.appendChild(li)
    document.getElementById('deleAll').disabled = false
}

function delAll() {
    list.innerHTML = ""
    document.getElementById('deleAll').disabled = true 
}

function edit(edit) {
    var val = edit.parentNode.firstChild.nodeValue;
    var newValue = prompt("Enter edit value",val)
    edit.parentNode.firstChild.nodeValue = newValue;
}

function dlt(del) {
    alert(del.parentNode.firstChild.nodeValue+ " is deleted")
    del.parentNode.remove()
}


