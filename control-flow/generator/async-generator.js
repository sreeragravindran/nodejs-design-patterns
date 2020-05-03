// async process fetching data 1 
const promise1 = function() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            console.log("processed promise 1");
            resolve([1, 2, 3, 4, 5]);
        }, 1000);
    })
}
// async generator
async function* asyncGenerator(){
    // assume fetching from db/file/http-call
    const list = await promise1();
    for(item of list){
        yield item;
    }
}

// // consumer of async generator 
const  aysncIterator = asyncGenerator();
async function start(){
    for await(item of aysncIterator){
        console.log("processed " + item);
    }
}

start();