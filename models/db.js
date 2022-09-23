const mongoose =  require('mongoose')

mongoose.connect('mongodb://localhost:27017/EmployeeDB',{ useNewUrlParser :true}, (err)=>{
    if(!err){ console.log('Mongo Connected')}
    else { console.log('Error in DB Connection: '+err)}
})

require('./employee_model')