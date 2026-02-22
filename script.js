const main = document.getElementById("main");
const addons = document.getElementById("addons");
const text = document.getElementById("text");
const vid = document.getElementById("vid");
const ddv = document.getElementById("btn");

const age = {
  deti: "Твои родители приемные",//8-13 лет
  pubertat: "Я солью твои данные",//14-17 лет
  adults: "Ваши данные геопазиции переданы в министерство военных дел(военкомат).", //18-29 лет
  middle: "Ваши дети не выйдут женятся",//30-54 Лет
  old: "Завтра будет расспад и рубль упадёт."//55-64 лет
}; //Массив с сообщениямя 

function func(){
    let inpt = document.getElementById("inpt").value;
    let zn = document.querySelector('input[name="radio"]:checked').value;

    if (typeof zn === 'undefined' && inpt ==="" ) {
        alert("Всё пусто"); //Если все пусто 
        
    } else if(typeof zn !== 'undefined' && inpt ==="") {
        text.innerHTML = age[zn]; //если выбрал возрасть (правый блок)
        times(); //запуск таймера
    }else if(typeof zn !== 'undefined' && inpt !=="") {
        text.innerHTML = inpt; //если вписал свой страх (левый блок)
        times(); //запуск таймера
    }
    else{
        alert("Ошибка");
    };
};

function times(){
    main.style.display = "none"; //Скрываем основу
    let min = document.getElementById("min").value; //узнаём сколько раз в н минут.
    intrv = setInterval(proverka,(60*1000*min)+10000) //ставим таймер
};
function proverka(){
    addons.style.display = "inherit"; //показываем бууу страницу
    var audio = new Audio('pip.mp3'); // воспроизведение звука на проверка
    audio.play(); 
    setTimeout(() => { //таймер
        audio.pause
        
        if (ddv.value==="0"){ //если уснул
            clearInterval(intrv); 
            buuu();
        }
        else{ //если не уснул
            ddv.value ="0";
            addons.style.display = "none";
        };
    }, 10*1000);
};

function buuu(){ //пугаем
    addons.style.display = "none";
    let inpt = document.getElementById("inpt").value;
    let zn = document.querySelector('input[name="radio"]:checked').value;
    if(typeof zn !== 'undefined' && inpt ==="") {
        text.style.display = "inherit";
    }else if(typeof zn !== 'undefined' && inpt !=="") {
        vid.style.display = "inherit";
    };
    var audio = new Audio('boo1.mp3'); //'boo.mp3'(более страшнее)or 'boo1.mp3'
    audio.volume = 0.3; //Уровень звука
    audio.play(); 
};

function plusone(){//добавляем что бы не пугали 
    alert ("Хорошо!");
    ddv.value ="1";
};

document.addEventListener('DOMContentLoaded', function() { // что бы проверять что пользователь согласен
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

