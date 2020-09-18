// Assignment 2: Object - 1

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


const count = (
  {op : "+" , n1 : 3 ,n2 : 12 }
  );
console.log(
 `answer is ${calculate(count)}`

);