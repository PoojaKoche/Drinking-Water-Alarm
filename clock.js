//code for displaying time on web page 
setInterval(Myclock, 1000);
function Myclock() {
    let now = new Date();
    let hrs = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let ampm = (hrs < 12) ? "am" : "pm";
    if(hrs > 12)
    {
        hrs= hrs-12;
    }
    //code for time format 00:00:00 and also for am/pm
    hrs = (hrs < 10) ? "0" + hrs : hrs;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    //display current time on web page in 00:00:00 am/pm format
    document.getElementById('clock').innerHTML = hrs + ':' + min + ':' + sec;
    document.getElementById('ampm').innerHTML =ampm;
}

//code for displaying date on web page 
function Mydate() {
    let date = new Date();
    let yr = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    month = (month < 10) ? "0" + month : month;
    day = (day < 10) ? "0" + day : day;
    document.getElementById('date').innerHTML = day + '/' + month + '/' + yr;
}
Mydate();

//code to set an alarm
let alarmTime = null;
let alarmTimeOut = null;

function setAlarm(value) {
    alarmTime = value;
    console.log(alarmTime);
    if (alarmTime) {
        let current = new Date();
        let timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current) {
            let timeOut = timeToAlarm.getTime() - current.getTime();
            alarmTimeOut = setTimeout(() => document.getElementById('audio').play(), timeOut);
            alert('alarm set');
        }else{
            alert('Past date and time are not allowed');
        }
    }
}
//code for stop an alarm
function stopAlarm() {
    document.getElementById('audio').pause();
    if (alarmTimeOut) {
        clearTimeout(alarmTimeOut);
        alert('alarm cleared');
    }
}

