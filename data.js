const fs = require("fs")

const loadData = ()=>{
    try{
        const allData = fs.readFileSync('data.json').toString()
        return JSON.parse(allData)
    }catch{
        return []
    }   
}
// ///////////////////////////////////////////////////////////////////////////////////////
const saveData = (data)=>{
      const allData = JSON.stringify(data)
      fs.writeFileSync('data.json',allData)
}
//////////////////////////////////////////////////////////////////////////////////////////////
const addPerson = (id,fname,lname,age,city)=>{
    const data = loadData()
    const duplicData = data.filter((obj)=>{
        return obj.id == id
    })
    if(duplicData.length == 0){
        data.push({
            id:id,
            fname:fname,
            lname,age,city
        })
      console.log('successfully added...... ')  
    }else{
        console.log("EROR Can Not Be Added (Invalid Data)!!")
    }
    // console.log('added.......')
    saveData(data)

}
// ////////////////////////////////////////////////////////////////////////////////////////
const deletePerson = (id)=>{
    const data = loadData()
    const returnedData = data.filter((obj)=>{
        return obj.id != id
    })
    console.log('successfully deleted.....  ')
    saveData(returnedData)
}
// ////////////////////////////////////////////////////////////////////////////////////////
const findPerson = (id)=>{
    const allData = loadData()
    const choseinPerson = allData.find((obj)=>{
        return obj.id == id
    })
    if(choseinPerson){
    console.log(choseinPerson)
    }else{
        console.log("Don Not found.....")
    }
}
// //////////////////////////////////////////////////////////////////////////////////////
const listData =()=>{
    const Data = loadData()
    const list = Data.forEach((element) => {
        console.log(element.fname, element.lname, element.city)   
    });
}
// ///////////////////////////////////////////////////////////////////////////////////////////////
module.exports ={
    addPerson,
    deletePerson,
    findPerson,
    listData
}