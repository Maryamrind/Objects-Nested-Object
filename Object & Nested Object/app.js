//  Object 
var Object1 = {
    name: "Watch",
    brand: "Rado",
    Price: 20000
};
console.log(Object1.brand);
console.log(Object1["Price"]);
var Product1 = {
    name: "Shirt",
    brand: "Nike",
    price: 15000
};
console.log(Product1.brand);
console.log(Product1["price"]);
//Nested Object
var Staff = {
    name: "Merit",
    members: 3,
    job_type: "teaching",
    teacher1: {
        name: "Miss Maryam Rind",
        age: "24",
        qualification: "B.com",
        teacher2: {
            name: "Miss Kulsoom",
            age: "27",
            qualification: "B.A",
            teacher3: {
                name: "Miss Iqra",
                age: "28",
                qualification: "B.com"
            }
        }
    }
};
console.log(Staff.teacher1.teacher2.qualification);
var myTeacher1 = {
    fav_Teacher: {
        name: "Miss Maryam Rind",
        age: "24",
        qualification: "B.com",
    },
    job_Type: "teaching"
};
console.log(myTeacher1.fav_Teacher.qualification);
