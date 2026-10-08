const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

async function lowerCaseWords(mixedArray) {
    let lowerCaseArray = []
    for (let i = 0; i < mixedArray.length; i++) {
        if(typeof mixedArray[i] === 'string'){
            lowerCaseArray.push(mixedArray[i].toLowerCase())
        }
    }

    let p1 = new Promise((resolve, reject) => {
        if(lowerCaseArray.length > 0){
            resolve(lowerCaseArray)
        }else{
            reject("Promise failed")
        }
    })
    return p1
}


let c = await lowerCaseWords(mixedArray)
console.log(c)