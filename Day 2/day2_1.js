let num=[10,50,23,45,1,24,99,76,28,30];
num.sort(function(a,b){return b-a});
document.getElementById('hh').innerHTML="Max Number = "+num[0];