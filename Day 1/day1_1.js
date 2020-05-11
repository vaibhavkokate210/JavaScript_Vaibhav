let calculate=highNumber(70,20,30);
console.log(calculate);

function highNumber(n1,n2,n3)
{
     if(n1>=n2 && n1>=n3)
     return n1;
     else if(n2>=n1 && n2>=n3)
     return n2;
     else
     return n3;
}