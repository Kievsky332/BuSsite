const main = document.getElementById("main");
const addons = document.getElementById("addons");
const text = document.getElementById("text");
const vid = document.getElementById("vid");
const ddv = document.getElementById("btn");

const age = {
  deti: "Твои родители приемные",
  pubertat: "Я солью тебя",
  adults: "Ваши данные геопазиции переданы в министерство военных дел.",
  middle: "Ваши дети не выйдут женятся",
  old: "Завтра будет расспад и рубль упадёт."
};

function func(){
    let inpt = document.getElementById("inpt").value;
    let zn = document.querySelector('input[name="radio"]:checked').value;

    if (typeof zn === 'undefined' && inpt ==="" ) {
        alert("Всё пусто");
        
    } else if(typeof zn !== 'undefined' && inpt ==="") {
        text.innerHTML = age[zn]; 
        times();
    }else if(typeof zn !== 'undefined' && inpt !=="") {
        text.innerHTML = inpt;
        times();
    }
    else{
        alert("Ошибка");
    };
};

function times(){
    main.style.display = "none";
    let min = document.getElementById("min").value;
    intrv = setInterval(proverka,(60*1000*min)+10000)
};
function proverka(){
    addons.style.display = "inherit";
    var audio = new Audio('pip.mp3');
    audio.play(); 
    setTimeout(() => {
        audio.pause
        
        if (ddv.value==="0"){
            clearInterval(intrv);
            buuu();
        }
        else{
            ddv.value ="0";
            addons.style.display = "none";
        };
    }, 10*1000);
};

function buuu(){
    addons.style.display = "none";
    let inpt = document.getElementById("inpt").value;
    let zn = document.querySelector('input[name="radio"]:checked').value;
    if(typeof zn !== 'undefined' && inpt ==="") {
        text.style.display = "inherit";
    }else if(typeof zn !== 'undefined' && inpt !=="") {
        vid.style.display = "inherit";
    };
    var audio = new Audio('boo.mp3');
    audio.volume = 0.3;
    audio.play(); 
};

function plusone(){
    alert ("Хорошо!");
    ddv.value ="1";
};

document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('mousemove', (e) => {
        const f = document.getElementById("check");
        const subm = document.getElementById("sbm");

        if (f.checked ){
            subm.disabled = 0;
        }else {
            subm.disabled = 1;
        };
    });    

}); 

