console.log("someText")
var inputBox = document.getElementById("math")
var inputBox2 = document.getElementById("numbers")
var inputBox3 = document.getElementById("addition")
inputBox.value = "CHANGED"

inputBox3.addEventListener("click",function(){
    var input = inputBox.value
    var input2 = inputBox2.value
    console.log(input+input2)
    var input3 =  parseInt(input)+ parseInt(input2)
    console.log(input3)

})