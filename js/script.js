/**
 * Created by Liza on 030 30.11.16.
 */
function validate_form ( ){
    var valid = true;
    if ( document.Comment.field1.value === "")
    {
        alert ( "Пожалуйста, введите данные в поле 'Имя'." );
        valid = false;
    }

    if ( document.Comment.field2.value == "")
    {
        alert ( "Пожалуйста, введите данные в поле 'животное'." );
        valid = false;
    }

    if ( document.Comment.field3.value == "")
    {
        alert ( "Пожалуйста, введите данные в поле 'блюдо'." );
        valid = false;
    }

    if ( document.Comment.field4.value == "")
    {
        alert ( "Пожалуйста, введите данные в поле 'возраст'." );
        valid = false;
    }
    return valid;
}

function closeIt(){
    var a=window.close();
}

function nextF(smth) {
    if (event.keyCode == 40) {

    for (i = 0; i < document.Comment.elements.length-1; i++) {
        if (document.Comment.elements[i].name == smth.name) {
            document.Comment.elements[i + 1].focus();
            return;
        }
    }
    }

    if (event.keyCode == 38) {

        for (i = 0; i < document.Comment.elements.length; i++) {
            if (document.Comment.elements[i].name == smth.name) {
                document.Comment.elements[i - 1].focus();
                return;
            }
        }
    }
}

var n = 0;
var col = new Array();
var f1 = new Array();
var f2 = new Array();
var f3 = new Array();
var f4 = new Array();

    function create() {
        var list = document.getElementById('list');
        var secLi = list.getElementsByTagName('li')[1];
        var newLi = document.createElement('li');
        var newListElem = document.createElement('input');
        newListElem.value="новое поле";
        newLi.onkeydown=nextF(this);
        newLi.innerHTML="<br/>"+"<span class='text'>"+"Новое поле"+ "</span>";
        list.insertBefore(newListElem, secLi.nextSibling);
        list.insertBefore(newLi, newListElem);
    };



function show(){
    var a = window.open("Result.html", "", "width=700,height=250");

    col[n] = document.Comment.Color.value;
    f1[n] = document.Comment.field1.value;
    f2[n] = document.Comment.field2.value;
    f3[n] = document.Comment.field3.value;
    f4[n] = document.Comment.field4.value;

    html = "<table style='color:" + col[n]+ "'>" + "<tr>"+"<th colspan='4'>"+"Введённая Вами информация"+"</th>"+"</tr>"+"<tr>" + "<td>" + "Имя" + "</td>" + "<td>" + "Любимое животное" + "</td>" + "<td>" + "Любимое блюдо" + "</td>"+ "<td>" + "Возраст" + "</td>" + "</tr>";
    html += "<tr>" + "<td>" + f1[n] + "</td>"+ "<td>"  + f2[n] + "</td>"+ "<td>"  + f3[n] + "</td>"+ "<td>"  + f4[n] + "</td>" + "</tr>"+ "</table>";

    a.focus();
    a.document.write('<DOCTYPE html><html><head><link rel="stylesheet" type="text/css" href="css/style.css"><script src="js/script.js"></script></head><body><div class="content"><div id="table">');
    a.document.write(html);
    a.document.write('<button type="button" value="Закрыть" onClick="closeIt()">Закрыть</button></div></div></body></html>');
    n++;

}
