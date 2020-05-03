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

// getting the Iterator 
const fruitsIterator = getFruits();

//approach one 
while((fruit = fruitsIterator.next()).value){
    console.log(fruit)
}

// approach 2 
// for(fruit of fruitsIterator){
//     console.log(fruit);
// }

