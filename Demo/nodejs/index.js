const axios = require('axios')
const md5 = require('md5')
const fs = require('fs')
const readline = require('readline');

let ApiKey = ''
let rl = readline.createInterface({input: process.stdin, output: process.stdout})
rl.question('请输入接口秘钥：', function (input) {
    if (input !== '') 
        ApiKey = input
    
    inputFile()
})

const inputFile = function () {
    rl.question('\n请输入图片路径：', function (file) {
        try {
            fs.accessSync(file, fs.F_OK)
            ocr(file).then(res => {
                console.log(res.data.Data)
                inputFile()
            }).catch(err => {
                console.log(err);
                inputFile()
            })
        } catch (e) {
            console.log('error: 文件不存在 ' + file);
            inputFile()
        }
    })
}

const ocr = function (file) {
    return new Promise((resolve, reject) => {
        let bitmap = fs.readFileSync(file)
        let Image = new Buffer.from(bitmap).toString('base64')
        let Token = ApiKey !== '' ? md5(Image + ApiKey) : ''
        axios.post('http://127.0.0.1:9292/api/ocr', {Image, Token}).then((res) => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}
