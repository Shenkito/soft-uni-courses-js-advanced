function previousDay(year, month, day) {
    
    let date = new Date(year, month - 1, day);
    date.setDate(date.getDate() - 1);
    return `${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate()}`;

}

/*

Тази функция се нарича "previousDay" и приема три параметъра: "year", "month" и "day". Тези параметри определят определена дата, за която функцията ще върне предишната дата.

В тялото на функцията първоначално се създава нова дата, която се инициализира със зададените параметри. Това се прави със следния ред:

let date = new Date(year, month - 1, day);

Забележете, че месецът се намаля с 1, тъй като месеците в JavaScript започват от 0 (0 е януари, 1 е февруари и т.н.).

След това се използва методът "setDate" на датата, за да се зададе нова дата, която е предишната дата. Това се прави със следния ред:

date.setDate(date.getDate() - 1);

Този ред намалява деня на датата с 1.

Накрая, функцията връща предишната дата като низ, форматиран във формат "YYYY-MM-DD". Това се прави със следния ред:

return ${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate()};

Тук се използва методът "getFullYear" за да се получи годината на датата, методът "getMonth" за да се получи месецът и методът "getDate" за да се получи деня. Забележете, че отново месецът се увеличава с 1, за да се получи правилния месец във формат "YYYY-MM-DD".

*/
console.log(previousDay(2016, 9, 30)); // Output: "2016-9-29"
console.log(previousDay(2015, 5, 10)); // Output: "2015-5-9"