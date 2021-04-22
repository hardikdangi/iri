class Form{
construcktor(){
}
display(){
var title = createElement('h2')
title.html("hell racer")
title.position(200,0)
var input=createInput('name');
var button=createButton('run')
input.position(20,50)
    button.position(300,400);
button.mousepressed(function (){
    input.hide()
button.hide()
var name =input.value()
var greeting = createElement('h3')
greeting.html("hellow"+name)
greeting.position(130,160)
})
}
}


 