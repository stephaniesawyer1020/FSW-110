var h = document.createElement("H1"); 
var t = document.createTextNode("Welcome to my JS site"); // Create a text element 
h.appendChild(t); // Append the text node to the H1 element 
 
document.body.appendChild(h); // Append the H1 element to the document body 

var newP = document.createElement("p")
newP.textContent = "All of this was created with Javascript!"
document.body.append(newP)
newP.style.textAlign = "center"
newP.style.fontSize = "30px"
 
var newLi1 = document.createElement("li")
newLi1.textContent = "JavaJavaJavaJavaJava"

var newLi2 = document.createElement("li")
newLi2.textContent = "JavaJavaJavaJavaJavaJava"

var newLi3 = document.createElement("li")
newLi3.textContent = "JavaJavaJavaJavaJavaJavaJava"

var ol = document.createElement("ol")
ol.append(newLi1,newLi2,newLi3)
document.body.append(ol)








