window.onload = function(){
	$(".butt").click(function(){
		$("#any").text("");
		var a, b, c, choose, d;
	function write(){
		a= + prompt("ax² + bx + c = 0\na =");
		b= + prompt(a+"x² + bx + c = 0\nb =");
		c= + prompt(a+"x² + "+b+"x + c = 0\nc =");
		choose = + prompt(a+"x² + "+b+"x + "+c+" = 0\n1. Поетапно\n 2. Відразу\n 3. Ввести заново");
		d = b*b-(4*a*c);
	}
	function verif(){
		switch(choose){
			case 1:
			$("#any").append(a,"x² + ",b, "x + ",c, " = 0", "</br></br>",
			"1. Знаходимо дискримінант за формулою D = b² - 4ac:</br>D = ",b,"² - 4 * ",a," * ",c," = ",d,"</br>");
			if (d<0){
				$("#any").append(d," < 0</br></br> Рівняння не має коренів");
			} else
			if (d==0){
				$("#any").append("D = 0</br></br> Рівняння має 1 корінь</br></br>",
				"2. Знаходимо його за формулою x = -b / 2 * a</br> x = ",
				-b," / 2 * ",a," = ",-b/2*a);
			} else
			if (d>0){
				$("#any").append("D > 0</br></br> Рівняння має 2 кореня</br></br>",
				"2. Знаходимо їх за формулою x = -b +(-) √D / 2 * a</br> x1 = (",-b," + √",d,") / 2 * ",a," = ",(-b+Math.pow(d, 1/2))/(2*a),"</br> x2 = (",
				-b," - √",d,") / 2 * ",a," = ",(-b-Math.pow(d, 1/2))/(2*a));
			}
			break;
			case 2:
			if(d<0){
				$("#any").append("D = ",d," < 0</br> Рівняння не має коренів");
			} else if(d==0){
				$("#any").append("D = ",d,"</br> Рівняння має 1 корінь</br> x = ",-b/(2*a));
			} else if(d>0){
				$("#any").append("D = ",d," > 0 </br> Рівняння має 2 корені</br> x1 = ",(-b+Math.pow(d, 1/2))/2*a,
				"x2 = ", (-b-Math.pow(d, 1/2))/2*a);
			}
			break;
			case 3:
			write();
			verif();
		}
	}
	write();
	verif();
	});
}
