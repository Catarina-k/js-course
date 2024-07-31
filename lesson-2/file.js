
document.querySelector('#date').innerHTML = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
document.querySelector("#btn").onclick = function(){
    let output = document.querySelector('#output')
    output.innerHTML = 'Hello, Kate'
    output.style.fontSize = '22px'
    output.style.color = 'red'
}