

// Code your solution here
let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name){
    
    const driversNames = drivers.filter(function (driver){
       return name.toLowerCase() === driver.toLowerCase()
    }) 
        return(driversNames);
}

        // drivers is the array 
        // findMatching is the initial function
        //drivers.filter (filters the array and returns a new array
        // function inside the filter is an annomous function. 
        // return the string name to equal (array element) driver
   
function fuzzyMatch(drivers, name) {

    const firstInitDriversName = drivers.filter(function (driver){
        return name.charAt() === driver.charAt();
    })
    return (firstInitDriversName)
} 

const driverss = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName (driverss, personWeAreLookingFor) {
  console.log('this is the array of drivers objects', driverss)
  console.log('this is the person we are looking for - argument', personWeAreLookingFor)
  
    const driverNameandHometown = driverss.filter(function (driverObject){
    return 
        //return matchName.driverss.name() === driverObject;
        

        //check out objects and redo modifying objects - DOT NOTATION, 
    })
    return (driverNameandHometown)
}  
  


      
    
   
 
    

    

