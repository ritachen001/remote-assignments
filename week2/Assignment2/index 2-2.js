// Assignment 2: Object - 2


function calculate(args){ 
  let result;
if(args.op==="+"){ 
  result=args.n1+args.n2;
}else if(args.op==="-"){ 
  result=args.n1-args.n2;
}else{
result="Not supported";
}
return result;
}


function Count(op,n1,n2) {
  this.op = op;
  this.n1 = n1;
  this.n2 = n2;
}

let answer = new Count('-', 6 ,10 );

console.log(
 `answer is ${calculate(answer)}`
);
