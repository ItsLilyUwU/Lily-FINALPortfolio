const quoter = document.getElementById('quotey')

fetch('https://programming-quotesapi.vercel.app/api/random').then(response => {
    response.json().then(data => {
        console.log(data)
        quoter.textContent = data.quote
    })
})

var index = 0;
change();

function change() {
    var x = document.getElementsByClassName('slides');
    for(var i = 0; i < x.length; i++) { 
        x[i].style.display = "none"; 
    }    
    index++;
    if(index > x.length) { 
        index = 1; 
    }
    x[index - 1].style.display = "block";
    setTimeout(change, 3000);
}