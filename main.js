let a=prompt("enter the reverse number");
let c=a;
let result=0;
var b;
document.write("enter number:&nbsp;&nbsp;"+a+"<br>");
while(a>0)
{
	b=a%10;
	result=result*10+b;
	a=parseInt(a/10);
	console.log(a);

}
if(result==c)
{
	document.write("palindrome");
}
else{
document.write("not palindrome");
}
