
for(let i = 1; i < 151; i++) {
fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
.then(function(response) { return response.json(); })
.then(function(data){

    let bground = "";
    let pokemon = document.getElementById('pokemon');
    let name = data['name'];
    let img = data['sprites']['front_default'];
    let id = data['id'];
    let type1 = data['types'][0]['type']['name'];

    if(type1.includes('water'))     { bground = "#8CCFFF";}
    if(type1.includes('fire'))      { bground = "#FD7272";}
    if(type1.includes('grass'))     { bground = "#3BA846";}
    if(type1.includes('bug'))       { bground = "#7DB883";}
    if(type1.includes('normal'))    { bground = "#5C5656";}
    if(type1.includes('poison'))    { bground = "#E089FF";}
    if(type1.includes('electric'))  { bground = "#E9EC69";}
    if(type1.includes('ground'))    { bground = "#B47272";}
    if(type1.includes('fighting'))  { bground = "#D1BEBE";}
    if(type1.includes('rock'))      { bground = "#736161";}
    if(type1.includes('fairy'))     { bground = "#A889FF";}
    if(type1.includes('ice'))       { bground = "#BFD1FF";}
    if(type1.includes('psychic'))   { bground = "#46D1B0";}
    if(type1.includes('dragon'))    { bground = "#FF6FC5";}
    if(type1.includes('ghost'))     { bground = "#F1DFFF";}

    pokemon.innerHTML += 
        `<div class="container" style="background: ${bground};"> 
        <span></span>
        <p id="name">${name}</p>
        <img id='image' style="z-index: 2" src=${img} alt="">
        <p id="index">#${id}</p>
        <p id="type">Type : ${type1}</p>
            <div class="hidden"> 
                <p>hahahaha</p>
            </div>
        </div>        
        `
});
}



