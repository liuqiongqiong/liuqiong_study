//gulp入口文件

//yarn gulp foo
exports.foo = (done) => {
    console.log('foo task working')
    done() //标识任务完成
}
//默认执行  yarn gulp
exports.default = done => {
    console.log('default task working')
    done()
}

//不被推荐
const gulp = require('gulp')
gulp.task('bar', done => {
    console.log('bar working')
    done()
})

//组合任务
const { series, parallel } = require('gulp')
const task1 = done => {
    setTimeout(() => {
        console.log('task1 working')
        done()
    }, 1000)
}
const task2 = done => {
    setTimeout(() => {
        console.log('task2 working')
        done()
    }, 1000)
}
const task3 = done => {
    setTimeout(() => {
        console.log('task3 working')
        done()
    }, 1000)
}
//串行
exports.fun1 = series(task1, task2, task3)
//并行
exports.fun2 = parallel(task1, task2, task3)
//yarn gulp fun1
//yarn gulp fun2

//异步任务，返回Stream对象
const fs = require('fs')
exports.f4 = () => {
    const readStream = fs.createReadStream('package.json')
    const writeStream = fs.createWriteStream('temp.txt')
    readStream.pipe(writeStream)
    return readStream
}
