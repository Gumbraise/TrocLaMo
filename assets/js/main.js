var div = document.getElementById("poi");
var file = document.getElementById("inns");
var fileinput = document.getElementById("file");
var select = document.getElementById("select");


window.onload = function actus() {
    const request = new XMLHttpRequest();
    request.open('POST', 'actions/actus.php', true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send('categorie='+ select.value);
    request.onreadystatechange = function()
    {
        if (request.readyState === 4) {
            div.innerHTML = request.responseText;
        }
    };
    setTimeout(actus, 15000);
}

fileinput.onchange = function() {
    file.innerHTML = fileinput.value;
}

select.onchange = function() {
    const request = new XMLHttpRequest();
    request.open('POST', 'actions/actus.php', true);
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send('categorie='+ select.value);
    request.onreadystatechange = function()
    {
        if (request.readyState === 4) {
            div.innerHTML = request.responseText;
        }
    };
}