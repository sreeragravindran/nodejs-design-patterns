/*
This is essentially an iterator pattern
*/

const fruitsList = ["apple", "guava", "watermelon", "muskmelon", "grapes"];

// function* makes it a generator function 
function* getFruits(){
    for(fruit of fruitsList ){
        yield fruit; 
        // the yield keyword returns the value and stops until the next() function is invoked on the iterator / generator
    }  
}

// using a generator 

const fruitsIterator = getFruits();

while((fruit = fruitsIterator.next()).value){
    console.log(fruit)
}
