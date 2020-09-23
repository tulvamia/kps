// tabrisjs-esimerkki: Kivi-paperi-sakset, TUL 2019

// muuttujien alustukset
var cpoints = 0 // koneen pisteet
var upoints = 0 // pelaajan pisteet

import {contentView, TextView, Button, ImageView } from 'tabris';

// käyttäjän valintakuvat
new ImageView({
  layoutData: {width: 150,top: 30},
  image: {src: "http://tero.vlab.fi/kps/kivi.png"},
  highlightOnTouch: true
}).on("tap", function() {
  arvonta("kivi");  
}).appendTo(contentView);

new ImageView({
  layoutData: {width: 150, top: 170},
  image: {src: "http://tero.vlab.fi/kps/paperi.png"},
  highlightOnTouch: true
}).on("tap", function() {
  arvonta("paperi");  
}).appendTo(contentView);

new ImageView({
  layoutData: {width: 150, top: 320},
  image: {src: "http://tero.vlab.fi/kps/sakset.png"},
  highlightOnTouch: true
}).on("tap", function() {
  arvonta("sakset");  
}).appendTo(contentView);

// koneen vastauskuva
var ccpic = new ImageView({
  layoutData: {width: 150, top: 300, left: 200, top: 150},
  highlightOnTouch: true
}).on("tap", function() {
  // 
}).appendTo(contentView);


// "teksti: Pelaaja:"
new TextView({
  font: "12px",
  layoutData: {left: 10, top: 10 },
  text: "Pelaaja: "
}).appendTo(contentView);

// "teksti: Kone:"
new TextView({
  font: "12px",
  layoutData: {left: 200, top: 120 },
  text: "Kone: "
}).appendTo(contentView);

// tekstikenttä tulokselle
var gameresult = new TextView({
  font: "24px",
  layoutData: {centerX: 0, top: 500 }
}).appendTo(contentView);

// tekstikenttä pelaajan pisteille
var userpoints = new TextView({
  font: "24px",
  layoutData: {left: 10, top: 500 },
  text: "0"
}).appendTo(contentView);

// tekstikenttä koneen pisteille
var computerpoints = new TextView({
  font: "24px",
  layoutData: {left: 300, top: 500 },
  text: "0"
}).appendTo(contentView);

// koneen valinnan arvonta
function arvonta(uc) {
   
  var cc = "";
  
  // arvo luku
  var arvottuluku = Math.floor((Math.random() * 3) + 1);
  
  if (arvottuluku == 1) {
  ccpic.set({image: "http://tero.vlab.fi/kps/kivi.png"})
  cc = "kivi";
  }
  
  if (arvottuluku == 2) {
  ccpic.set({image: "http://tero.vlab.fi/kps/paperi.png"})
  cc = "paperi";
  }
  
  if (arvottuluku == 3) {
  ccpic.set({image: "http://tero.vlab.fi/kps/sakset.png"})
  cc = "sakset";
  }
  
  // kutsutaan tarkistusta 
  tarkistus(uc,cc);
  
}

// tarkistetaan miten kävi
function tarkistus(uc, cc) {
  
  // uc = käyttäjän valinta
  // cc = koneen valinta
 
  // tasapeli
  if ((cc == "kivi") && (uc == "kivi")){
  gameresult.set({text: "Tasapeli!"})
  }
  
  // tasapeli
  if ((cc == "sakset") && (uc == "sakset")){
  gameresult.set({text: "Tasapeli!"})
  }
  
  // tasapeli
  if ((cc == "paperi") && (uc == "paperi")){
  gameresult.set({text: "Tasapeli!"})
  }
  
  // kone voittaa
  if ((cc == "kivi") && (uc == "sakset")){
  gameresult.set({textColor: "red"})
  gameresult.set({text: "Kone voittaa!!"})
  
  cpoints += 1;
  computerpoints.set({text: cpoints})
  
  }
    
  // kone voittaa
  if ((cc == "sakset") && (uc == "paperi")){
  gameresult.set({textColor: "red"})
  gameresult.set({text: "Kone voittaa!!"})
  cpoints += 1;
  computerpoints.set({text: cpoints})
  }

  // kone voittaa
  if ((cc == "paperi") && (uc == "kivi")){
  gameresult.set({textColor: "red"})
  gameresult.set({text: "Kone voittaa!!"})
  cpoints += 1;
  computerpoints.set({text: cpoints})
  }
 
  // käyttäjä voittaa
  if ((cc == "kivi") && (uc == "paperi")){
  gameresult.set({textColor: "red"})
  gameresult.set({text: "Pelaaja voittaa!!"})
  upoints += 1;
  userpoints.set({text: upoints})
  }
  
  // käyttäjä voittaa
  if ((cc == "paperi") && (uc == "sakset")){
  gameresult.set({textColor: "red"})
  gameresult.set({text: "Pelaaja voittaa!!"})
  upoints += 1;
  userpoints.set({text: upoints})
  }
  
  // käyttäjä voittaa
  if ((cc == "sakset") && (uc == "kivi")){
  gameresult.set({textColor: "red"})
  gameresult.set({text: "Pelaaja voittaa!!"})
  upoints += 1;
  userpoints.set({text: upoints})
  }
      
}
