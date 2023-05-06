function setClock() {
    let date1 = new Date();

    let year = date1.getFullYear();
    let month = date1.getMonth()+1;
    let date = date1.getDate();
    let hour = modifyNumber(date1.getHours());
    let min = modifyNumber(date1.getMinutes());
    let sec = modifyNumber(date1.getSeconds());
    let day = date1.getDay();
    const week = new Array ('[일]','[월]','[화]','[수]','[목]','[금]','[토]');  
    const dayName = week[date1.getDay()];

    document.getElementById("date").innerHTML = year + "년 " + month + "월 " + date + "일" + dayName;
    document.getElementById("time").innerHTML = hour + ":" + min  + ":" + sec;

}

function modifyNumber(time){
    if(parseInt(time)<10){
        return "0"+ time;
    }
    else
        return time;
}

window.onload = function(){
    setClock();
    setInterval(setClock,1000); 
}
