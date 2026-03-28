const text = ["Frontend Developer","React Developer","Web Developer"]

let i=0
let j=0
let currentText=""
let isDeleting=false

function type(){

currentText = text[i]

if(!isDeleting){
document.getElementById("typing").textContent = currentText.substring(0,j++)
}else{
document.getElementById("typing").textContent = currentText.substring(0,j--)
}

if(j==currentText.length){
isDeleting=true
setTimeout(type,1000)
return
}

if(j==0){
isDeleting=false
i++
if(i==text.length){
i=0
}
}

setTimeout(type,120)

}

type()
document.querySelector(".contact-form").addEventListener("submit",function(e){
    e.preventDefault()
    alert("message sent successfully")
})

let text2=["Hi", "Im" ,"Jayaraj"]
let k=0
let l=0
let letter=""
let istemp=false
// function type1()
// {
//     letter=text2[k]
//     if(!istemp)
//     {
//         document.getElementById("type1").innerHTML=letter.substring(0,l++)    
//     }
//     else{
//          document.getElementById("type1").innerHTML=letter.substring(0,l--)
//     }

//     if(l==letter.length)
//     {
//         istemp=true
//         setTimeout(type1,1000)
//         return
//     }
//     if(l==0)
//     {
//     istemp=false
//     k++
    
//     if(k==text2.length)
//     {
//         k=0
//     }  
//     }
//     setTimeout(type1,120)
// }
// type1()