// 连接数据库
module.exports = app => {
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://admin:wangyanfeng1993@mongodb:27017/blog', {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    mongoose.connection.once("open", function(){
        console.log('mongoose success ~ ~')
    })
}
