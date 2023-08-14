var counter = 2;
radiobtn = document.getElementById("radio1");
radiobtn.checked = true;
setInterval(function hello(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000)