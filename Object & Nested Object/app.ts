//  Object 
let Object1={
    name:"Watch",
    brand:"Rado",
    Price:20000
}
console.log(Object1.brand);
console.log(Object1["Price"]);

//  Object in type alias

type Product = {
    name: string,
    brand: string,
    price: number
}
let Product1:Product={
    name:"Shirt",
    brand:"Nike",
    price:15000

} 

    console.log(Product1.brand);
    console.log(Product1["price"]);
    
    //Nested Object

    let Staff ={
        name:"Merit",
        members:3,
        job_type:"teaching",
        teacher1:{
            name:"Miss Maryam Rind",
            age:"24",
            qualification:"B.com",
        teacher2:{
            name:"Miss Kulsoom",
            age:"27",
            qualification:"B.A",
        teacher3:{
            name:"Miss Iqra",
            age:"28",
            qualification:"B.com"
        }
        }
}}
console.log(Staff.teacher1.teacher2.qualification);

// Nested Object in type alias

type myTeacher = {
    name: string,
    age: string,
    qualification: string
}

type MyTeacher = { 
    fav_Teacher:myTeacher
    job_Type: string
}

let myTeacher1:MyTeacher={
    fav_Teacher:{
        name:"Miss Maryam Rind",
        age:"24",
        qualification:"B.com",
    },
     job_Type:"teaching"
}
console.log(myTeacher1.fav_Teacher.qualification);

