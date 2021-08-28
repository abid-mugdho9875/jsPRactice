const value = Promise.resolve('ok')

const value1 = new Promise((resolve, reject) => {
    resolve('hi')
})

Promise.all([value, value1]).then(res => {
    console.log(res)
})