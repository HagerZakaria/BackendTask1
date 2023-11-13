// // // ////////////////////////// Task1 ////////////////////////////////
// const fs = require("fs")
// const yargs = require("yargs")
// const PersonObj ={                          //1
//     fname : "ahmed",
//     lname : "hossam",
//     age : 20,
//     city : "alex"
// }
// const personJson = JSON.stringify(PersonObj)   //2 convert to json
// fs.writeFileSync('person.txt',personJson)       //3- store in file

// const person = fs.readFileSync('person.txt').toString()     //4- read file(json)
// const person2 = JSON.parse(person)                           //5- convert to obj

// person2.fname = "adel"                                     //6- update data
// person2.lname = 'ahmed'
// person2.age = 40
// person2.city = 'cairo'

// const personUpdated = JSON.stringify(person2)                    //7- convert to json
// fs.writeFileSync('person.txt' ,personUpdated)                   // 8- store in file

// /////////////////////////////  Task2  /////////////////////////////////////////////////////////
const yargs = require("yargs")
const data = require('./data')
yargs.command({
    command : "add",
    builder: {
        id:{
            demandOption:true,
            type : 'int'
        },
        fname:{
            describe: 'firstName',
            demandOption : true ,
            type : 'string'
        },
        lname:{
            describe: 'last Name',
            demandOption : true ,
            type : 'string'
        },
        age:{
            demandOption: false,
            type : 'int'
        },
        city:{
            describe: 'city',
            demandOption : true ,
            type : 'string'
        }
    },
    handler : (x)=>{
        data.addPerson(x.id,x.fname,x.lname,x.age,x.city)
    }
})
/////////////////////////////
yargs.command({
    command : "delete",
    builder :{
        id:{
            demandOption : true,
            type : 'int'
        }
    },
    handler :(x)=>{
          data.deletePerson(x.id)
    }
})
// /////////////////////////////
yargs.command({
    command :'find',
    builder :{
        id:{
            demandOption : true,
            type : 'int'
        }
    },
    handler:(x)=>{
        data.findPerson(x.id)
    }
})
// // //////////////////////////////////
yargs.command({
    command : "show Data",
    handler :()=>{
        data.listData()
    }
})
// // ////////////////////////////////
yargs.parse()
