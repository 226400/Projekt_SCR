var h1="bez pracy nie ma kołaczy";
var h2="źźź źźźźź źźź źź źźźźźźź";
var h3="szkoła to nie wyścig";
var h4="Wykonał: Mateusz Król"
var ustaw


var numerlos=Math.floor(Math.random()*4)+1;
 ustaw="h" + numerlos;
 if(ustaw=="h1") haslo=h1
 if(ustaw=="h2") haslo=h2
 if(ustaw=="h3") haslo=h3
 if(ustaw=="h4") haslo=h4



//var haslo=h3;
haslo=haslo.toUpperCase(); //zamien na wielkie litery

var dlugosc=haslo.length;  //wez dlugosc hasla
var ile_skuch=0;           //do wyswietlania zdjec i konczenia gry
var yes=new Audio("yes.wav");
var no=new Audio("no.wav");



var haslo1=""; //haslo wpisywane przez uzytkownika

for(i=0; i<dlugosc; i++) //tyle ile jest litery
{
  //if(haslo[i]==" ") haslo1= haslo1+"     ";
  if(haslo.charAt(i)==" ") haslo1= haslo1+" "; //zeby pauza byla dalej wyswietlana jako pauza
  else if(haslo.charAt(i)==":") haslo1= haslo1+":"; //zeby pauza byla dalej wyswietlana jako pauza

  else haslo1 = haslo1+"-";    //zamiana liter na myslniki do wyswietlenia na ekranie
}

function wypisz_haslo()
{
  document.getElementById("plansza").innerHTML=haslo1;   //wypisuje myslniki w planszy na pole

}

window.onload=start;  //allias, przy zaladowaniu otwarcie strony to funkcja start

var litery=new Array(35);  //tablica z literami

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";


function start()
{
  var tresc_diva="";   //tymczasowa zmienna
for(i=0; i<=34; i++)
{
  var element="lit"+i;  //tworzenie elementu lit1, lit2 do podpisanie literki
tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
//bierze diva i dokleja mu literki gdy nacisniete to wywola funkcje sprawdz (numer i) id liter = lit(i) i wkleja wartosc litery z tablicy litery
if((i+1)%7==0) tresc_diva=tresc_diva+'<div style="clear:both;"></div>'  //wyswietla po 7 w rzedzie
}
  document.getElementById("alfabet").innerHTML=tresc_diva

  wypisz_haslo();
}

String.prototype.ustawZnak=function(miejsce, znak) //funkcja do zamiany znaku imejsce pozycja a znak to literk ado wstawienia
{
  if(miejsce>this.length-1) return this.toString();//zabezpieczenie zeby nie zamieniac za duzo
  else return this.substr(0,miejsce) +znak + this.substr(miejsce+1);
// substr(x,y) s od ktorego znaku, y ilosc wyjmowanych znakow
}

function sprawdz(nr) //sprawdza czy literka sie zgadza
{
  var trafiona=false; //zakladamy ze nie trafilismy literki
for(i=0; i<dlugosc; i++)
{
  if(haslo.charAt(i)==litery[nr]) //czy i znak rowny sie znaku nr z tablicy litery
  {
    haslo1=haslo1.ustawZnak(i,litery[nr]); //zamienia myslnik na literke zamienia i-ty znak na literke z tablicy
    trafiona=true; //zmiana flagi na prawde
  }
wypisz_haslo();
}
if(trafiona==true)
{
    yes.play();
    var element="lit"+nr;
    document.getElementById(element).style.background = "#003300"
    document.getElementById(element).style.color = "#00C000"
    document.getElementById(element).style.border = "3px solid #00C000"
    document.getElementById(element).style.cursor = "default"

  wypisz_haslo();
}
else {
  {
    no.play();
    var element="lit"+nr;
    document.getElementById(element).style.background = "#330000"
    document.getElementById(element).style.color = "#C00000"
    document.getElementById(element).style.border = "3px solid #C00000"
    document.getElementById(element).style.cursor = "default"
    document.getElementById(element).setAttribute("onclick",";"); //zapobiega wyswietleniu sprawdz znowu konuje pusta instrukcjewy

//skucha
ile_skuch++;
var obraz="s"+ile_skuch+".jpg"; //pomocniczo wyswietlenia zdjec
	document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt="" />';  } //wyswietla obraz do skuch
}
//wygrana
if(haslo==haslo1)
document.getElementById("alfabet").innerHTML="PRAWIDLOWO  " +haslo+ '<br/><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>'
//przegrana
if (ile_skuch>=10){
  var koniec=" ";
document.getElementById("alfabet").innerHTML="PRZEGRANA   " +koniec+ '<br/><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span><br/><br /><span class="poka" onclick="pokaz()">POKAZ HASLO</span>'
}}

function pokaz()
{
var koniec=" ";
  document.getElementById("alfabet").innerHTML="  " +haslo+ '<br/><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>'


}
