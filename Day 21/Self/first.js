

// function cont(content){
// const element=document.createElement("li");
// element.innerText=content;
//  const parent=document.getElementById("head");
//  parent.append(element,"Hello Coder Army");
// }
// cont("TS")
// cont("React")
// cont("Node")
//   const text=document.createTextNode("Hello Dear Kaise HO");
//  const parent= document.getElementById("head");
//  parent.append(text)
//  const attri=document.createAttribute("id");
//  attri.value="mohan"
//   const parent=document.querySelector("li");
//   parent.setAttributeNode(attri)
//  const attri=document.createAttribute("class");
//  attri.value="mohan";
//  const element=document.querySelectorAll("li");
//  element[3].setAttributeNode(attri)
//   const parent=document.getElementById("head");
//   parent.children[3].setAttribute("class","mohan");
// console.log(parent.getAttribute("id"))
// parent.removeAttribute("id")
// const element=document.createElement("li");
// element.innerHTML="TS"
 const parent=document.getElementById("head");
//  parent.prepend(element)
//  const child2= parent.children[1];
//  parent.insertBefore(element,child2)
// parent.innerHTML+="<li>TS<li>"; 
const element=document.createElement("div");
element.innerHTML="HELLO GUYS KAISE HO";
parent.insertAdjacentElement("beforeend",element)
parent.removeChild(parent.children[1])
