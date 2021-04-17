//此文件作为generator的核心入口
//需要导出一个继承自Yeoman Generator的类型
//Yeoman generator在工作时会自动调用我们在此类型中定义的一些生命周期方法
//我们在这些方法中可以通过调用父类提供的一些工具方法实现一些功能，例如文件写入
const Generator = require('yeoman-generator')
module.exports = class extends Generator {
    writing() {
        this.fs.write(
            this.destinationPath('temp.txt'),
            Math.random.toString()
        )
    }
    // prompting() {
    //     return this.prompt([
    //         type: 'input',
    //         name: 'name',
    //         message: 'Your project name',
    //         default: this.appname
    //     ])
    //     .then(answers => {
    //         this.answers = answers
    //     })
    // },
    // writing: {
    //     let templates = [
    //         'package.json',
    //         'src/index.js',
    //         ...
    //     ]
    //     templates.forEach(item => {
    //         this.fs.copyTpl(
    //             this.templatePath(item),
    //             this.destinationPath(item),
    //             this.answers,
    //         )
    //     })
    // }
}