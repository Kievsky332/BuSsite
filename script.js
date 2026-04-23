const main = document.getElementById("main");
const addons = document.getElementById("addons");
const text = document.getElementById("text");
const vid = document.getElementById("vid");
const ddv = document.getElementById("btn");
const gg = document.getElementById("select");
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
        text.innerHTML = age[zn]; //если выбрал возраст (правый блок)
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
        let result;
        let zapros = 'https://tenor.googleapis.com/v2/search?key=AIzaSyC-P6_qz3FzCoXGLk6tgitZo4jEJ5mLzD8&media_filter=gif%2Cgif_transparent%2Cmediumgif%2Ctinygif%2Ctinygif_transparent%2Cwebp%2Cwebp_transparent%2Ctinywebp%2Ctinywebp_transparent%2Ctinymp4%2Cmp4%2Cwebm%2Coriginalgif%2Cgifpreview&q='+inpt;
        console.log(zapros)
        console.log(inpt)
        fetch(zapros)
        .then(response => response.json())
        .then(data => {
            result = data;
            const firstGifUrl = data.results[0].media_formats.mp4.url;
            vid.src = firstGifUrl;
        });
        
        vid.style.display = "inherit";  
    };
    var audio = new Audio(gg.value); //'boo.mp3'(более страшнее)or 'boo1.mp3'
    console.log(gg.value);
    audio.loop = true;
    audio.volume = 1; //Уровень звука
    audio.play(); 
};

function plusone(){//добавляем что бы не пугали 
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

