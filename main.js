var choice = prompt("welcome to area calculater. \n please Enter you chice. \n1.Area of rectangle. \n2.area of triangle. \n3.area if circle. \n4.area of parallelogram");

if (choice == '1') {
    var l = prompt('Enter the lenght')
    var b = prompt('Enter the breadth')
    var result= Number(l) * Number(b)
    alert ('the area is ' + result)
}

if (choice == '2') {
    var h = prompt('Enter the height')
    var b = prompt('Enter the base')
    var result= Number(h) * Number(b) / 2
    alert ('the area is ' + result)
}

if (choice == '3') {
    var r = prompt('Enter the radius')
    var result= Number(r) * Number(r)
    alert ('the area is ' + result)
}

if (choice == '4') {
    var h = prompt('Enter the height')
    var cb = prompt('Enter the corresponding base')
    var result= Number(h) * Number(cb)
    alert ('the area is ' + result)
}