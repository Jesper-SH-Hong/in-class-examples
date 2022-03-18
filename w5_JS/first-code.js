// alert('Hello!')


// alert('Hello2!')


function f1(){
    alert("Hello!")
}

f1()

function f(x){
    alert(x)
}


//the following is an assignment statement
// f(x)

x = 5  // x = variable, identifier , value =5

x = x + 1 // = is not equal. it's assigning!!!!!!!!!!!!
// y = x  + 1 

// case sensitive. follow ur instructors or groups convention. stick to it for that project.

console.log(x)     // 6

y = x / 2   // 2.5 

y= "dsfdsf"  // not allowed 
y = y / 2    // NaN returned.

console.log(y);

x = 17
y = x % 25 //17

console.log(y)

x= true;
y = false && x;

console.log(y)

y = true && x; // true

console.log(y)

y = true || (false && (true && (false)));  //short-circuiting
console.log(y)

y = !true ||(false && (true && (false))); 
console.log(y) // false - cuz false &&

y = !true ||((5<2) && (true && (false))); 
console.log(y) // 5<2 false! short-curciting



function f1(){
    console.log("Something!");  // onclick test
}