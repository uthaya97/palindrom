var a=prompt("enter the number");
var c=a;
var result=0;
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
	document.write("This number is palindrom");
}
else{
document.write("This number is not palindrom");
}
