//for github
document.write("How many numbers are divisible by 3 and 5<br>");
document.write("---------------------<br>");
document.write("var a=[2,3,4,5,6,15,30,45,90]<br>");
document.write("--------------<br>");
document.write("output:<br>");
document.write("Numbers:4");







var a=[2,3,4,5,6,15,30,45,90];
var b=0;
for(let i=0;i<a.length;i++){
	if((a[i]%3==0) && (a[i]%5==0)){
		// console.log(a[i]);
		b++;
		
	}
}
console.log(b);
