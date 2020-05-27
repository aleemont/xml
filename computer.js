var pc = new Array();
var storage = ["HDD", "SSD"];

function carica(){
    var url = "computer.json";
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            pc = JSON.parse(xmlhttp.responseText);
            stampa();
        }
        else{
            document.getElementById("errori").innerHTML = "Errore";
        }
    }
    xmlhttp.open("GET",url,true);
    xmlhttp.send();
}

{
    var ncol=0;
    for (key in pc)
      ncol++;
    var tit = document.getElementsByTagName("TITLE");
      var txt = tit[0].childNodes[0];
    var tab = document.getElementById("pc");
      tab.innerHTML="";
      var tabella = document.createElement("TABLE");
    
    var titolo = document.createElement("TR");
    var ele = document.createElement("TH");
    titolo.className="purple";
    ele.colSpan = ncol;
    ele.appendChild(txt);    
    titolo.appendChild(ele);
    tabella.appendChild(titolo);
  
    var intestazione = document.createElement("TR");
    for (var x in pc[0])
    {
        txt = document.createTextNode(x);
      ele = document.createElement("TH");
        ele.appendChild(txt);
      intestazione.appendChild(ele);
    }
    intestazione.className="purple";
    tabella.appendChild(intestazione);
  
    for (var i in pc)
      {
          var riga = document.createElement("TR");
      for (var x in pc[i])
      {
          if (x=="Titolo")
               txt = document.createTextNode(titStudio[pc[i][x]]);
               else
                   txt = document.createTextNode(pc[i][x]);
               ele = document.createElement("TD");
        ele.appendChild(txt);
        riga.appendChild(ele);
      }
      tabella.appendChild(riga);
      }
      tab.appendChild(tabella);
  }















