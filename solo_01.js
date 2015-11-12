var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var Employee = function(array){
	this.name = array[0];
	this.number = array[1];
	this.salary = array[2];
	this.rating = array[3];
}
var Atticus = new Employee(atticus);
var Jem = new Employee(jem);
var Boo = new Employee(boo);
var Scout = new Employee(scout);

var employees = [Atticus,Jem,Boo,Scout];

function evaluateEmployee(employee) {
		switch (employee.rating){
			case 0:
			case 1:
			case 2: var bonus=0; break;
			case 3: var bonus=4; break;
			case 4: var bonus=6; break;
			case 5: var bonus=10; break;
		}
		if (employee.number>=4 && employee.salary<65000){bonus+=5;}
		else if (this.salary>65000) bonus = 1;
		if (bonus>13)bonus=13;
		var STI=bonus/100;
		var totalBonus= Math.round(STI*employee.salary);
		var AAC=parseInt(employee.salary)+totalBonus;
		var info = {'Name' : employee.name, 'STI' : STI, 'AAC' : AAC, 'totalBonus':totalBonus};
	return (info);
}
for (var i in employees){
	console.log(evaluateEmployee(employees[i]));
}

/*
- employees name
- percentage of STI the employee is to receive
- adjusted annual compensation (base annual + STI)
- employee's total bonus rounded to the nearest dollar

## Calculating an employee's STI
- Those who have a rating of a 2 or below should not receive a bonus.
- Those who have a rating of a 3 should receive a base bonus of 4% of their base annual income.
- Those who have a rating of a 4 should receive a base bonus of 6% of their base annual income.
- Those who have a rating of a 5 should receive a base bonus of 10% of their base annual income.
- If they have 4 employee numbers, this means they have been with the company for longer than 15 years, 
and should receive an additional 5%.
- However, if their annual income is greater than $65,000, they should have their bonus adjusted down 1%. 
- No bonus can be above 13% total.
*/