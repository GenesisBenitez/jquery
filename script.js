class Person{
    firstName;
    lastName;
    dateOfBirth;
    constructor(firstName,lastName,dateOfBirth){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
    }
   
}

$(document).ready(function(){
    // $("#hello").click(function(){
    //     alert("hello");
    // })

    $("#myForm").submit(function(event){
        event.preventDefault();
        let firstName = $("#firstName").val();
        let lastName = $("#lastName").val();
        let dateOfBirth =$("#dateOfBirth").val();
    
  
// $("p").html(`
//         First Name: ${firstName},
//         Last Name: ${lastName},
//         DOB: ${dateOfBirth}
// `)

let person = new Person(firstName, lastName, dateOfBirth);
console.log(person);
        
        this.reset();
    })
})