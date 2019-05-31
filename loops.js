function forLoop( myArr ){
  for( let a=0; a<25; a++){

     myArr[a]= `I am ${a} strange loop`;

  }
  return myArr;
}
function whileLoop( num ){
  while(num>0){
    console.log(num);
    --num;

  }
 return 'done';
}
var i = 0;

function incrementVariable() {
  return i++;
}
function doWhileLoop( num ){
  do{
    console.log("I run once regardless.")
  }while(incrementVariable()<num);
}
