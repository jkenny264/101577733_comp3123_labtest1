function resolvedPromise(){

    let p1 = new Promise((resolve, reject) => {

        let success = true

        if(success){
            setTimeout(() => {
                resolve({'message':'delayed success!'})
            }, 500)
        }else{
            reject({'message':'delayed exception!'})
        }
    })

    // setTimeout(() => {
    //     let success = {'message': 'delayed success!'}
    //     console.log(success)
    // }, 500)
    return p1
}

const rejectedPromise = () => {

    let p1 = new Promise((resolve, reject) => {

        let success = false

        if(success){
            setTimeout(() => {
                resolve({'message':'delayed success!'})
            }, 500)
        }else{
            setTimeout(() => {
                try {
                    throw new Error('error: delayed exception!');
                } catch (e) {
                    console.error(e);
                }
            }, 500)
        }
    })

    // setTimeout(() => {
    //     let success = {'message': 'delayed success!'}
    //     console.log(success)
    // }, 500)
    return p1

    setTimeout(() => {
        try {
            throw new Error('error: delayed exception!');
        } catch (e) {
            console.error(e);
        }
    }, 500)
}


// let p1 = new Promise((resolve, reject) => {
//     if(lowerCaseArray.length > 0){
//         resolvedPromise(lowerCaseArray)
//     }else{
//         rejectedPromise("Promise failed")
//     }
// })
// return p1



resolvedPromise().then(success => {console.log(success)}).catch(err => {console.log(err)})
rejectedPromise().then(success => {console.log(success)}).catch(err => {console.log(err)})




// p1.then((success) => {
//     console.log(success);
// }, (error) => {
//     console.log(error)
// })

