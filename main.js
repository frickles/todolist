// SKAPAR EN TOM ARRAY FÖR "ELEMENTS".
var elements = [];

// VID LADDNING AV SIDAN KÖRS DENNA FUNKTION, SOM TITTAR PÅ OM DET FINNS OCH "PARSAR" EN JSON-FIL VID NAMN "TODO-ELEMENTS". DVS ATT VÄRDET AV DENNA INTE ÄR "NULL".
// OM DET FINNS SÅ LADDAR DEN FILERNA SOM SPARATS NÄR MAN TIDIGARE LAGT TILL NÅGOT MED HJÄLP AV "ADDELEMENT"-FUNKTIONEN SOM SKAPATS HÄR NEDAN.
window.onload = function () {
    if (JSON.parse(localStorage.getItem("todo-elements")) != null) {
        //SÄTTER VÄRDET PÅ "ELEMENTS" TILL VÄRDET SOM FINNS I ARRAYEN
        elements = JSON.parse(localStorage.getItem("todo-elements"));
        // ROPAR PÅ DISPLAY-FUNKTIONEN SOM ÅTERFINNS LÄNGRE NER.
        display();
        }
    }

    function addElement() {
        // LÄGGER TILL VÄRDET I TEXTRUTAN NÄR MAN KLICKAR PÅ KNAPPEN "ADDTXT". SPARAR SEDAN VÄRDET OCH LÄGGER TILL DET I ARRAYEN "ELEMENTS" MED HJÄLP AV "PUSH"-METODEN. PROPERTYN "TRIM()" TAR BORT ONÖDIGA MELLANRUM.
        if (document.querySelector(".addTxt").value.trim() != "") {
            elements.push(document.querySelector(".addTxt").value.trim());
            if (localStorage.getItem("todo-elements") == null) {
                localStorage.setItem("todo-elements", JSON.stringify(elements))
            }
            else {
                localStorage.setItem("todo-elements", JSON.stringify(elements))
            }
            display();
        }
    }

    function display() {
        // FUNKTION FÖR ATT LOOPA IGENOM LISTAN OCH LÄGGA TILL OCH VISA ELEMENT GENOM ATT LÄGGA TILL DENNA HTML-KOD I DEN DOMMA DIV:EN SOM SKAPADES I HTML:EN.
        document.querySelector(".list").innerHTML = "";
        for (var i = 0; i < elements.length; i++)
            // KOD SOM LÄGGS TILL I HTML FÖR VARJE NYTT ELEMENT.
            // VALDE HÄR ATT LÄGGA TILL IKONER FÖR SJÄLVA KNAPPARNA DÅ DET SER LITE ROLIGARE UT FÖR ÖGAT. SÅ VARJE GÅNG ETT OBJEKT LÄGGS TILL I LISTAN SÅ LÄGGS DENNA KOD TILL, OCH DÄRMED SÅ KOMMER EN IKON FÖR "KLAR" SAMT EN IKON FÖR "TA BORT" UPP TILLSAMMANS MED LIST-OBJEKTET.
            document.querySelector(".list").innerHTML +=
                "<center><div class='element'>"
                + elements[i] +
                "<img class='check' src='./img/check.png' onclick='strike(" + i + ")'><img class='trash' src= './img/trash.png' onclick='del(" + i + ")'></div></center>";
    }

    function del(index) {
        // DELAR UPP INDEXEN I ELEMENTS-ARRAYEN MED HJÄLP AV SPLICE-METODEN OCH TAR BORT DEM, OCH UPPDATERAR ARRAYEN NÄR DETTA ÄR BORTTAGET
        elements.splice(index, 1);
        if (localStorage.getItem("todo-elements") == null) {
            localStorage.setItem("todo-elements", JSON.stringify(elements))
        }
        else {
            localStorage.setItem("todo-elements", JSON.stringify(elements))
        }
        display();
    }

    function strike(index) {
        // KOLLAR OM DET BEFINTLIGA INDEXET SOM KLICKATS PÅ INNEHÅLLER "STRIKE" I DESS HTML-KOD. OM DET INTE GÖR DET SÅ LÄGGS DET TILL NÄR CHECK-KNAPPEN KLICKAS PÅ. SAMMA SAK HÄNDER I LOCAL STORAGE.
        if (elements[index].includes("<strike>")) {
            elements[index] = elements[index].replace("<strike>", "");
            elements[index] = elements[index].replace("</strike>", "");
        } else
            elements[index] = "<strike>" + elements[index] + "</strike>";
            if (localStorage.getItem("todo-elements") == null) {
                localStorage.setItem("todo-elements", JSON.stringify(elements))
            }
            else {
                localStorage.setItem("todo-elements", JSON.stringify(elements))
            }
        display();
    }