let maleNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwake']
let femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
let daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

function isValid(birthday, gender) {
    error = false
    errors = ''
    genderOptions = ['Male', 'Female']
    if (!birthday){
        error = true
        errors += 'Please enter a date. '
    } 

    if (!genderOptions.includes(gender)){
        error = true
        errors += 'Gender must be Female or Male'
    }
    return [error, errors]

}
function getName(){
    let birthday = document.getElementById('birthday').value;
    let gender = document.getElementById('gender').value;
    let validation = isValid(birthday, gender)
    if (!validation[0]) {
        let dayNumber = new Date(birthday).getDay();
        let result = ''

        if (gender == 'Male'){
            result =`You were born on ${ daysOfWeek[dayNumber]} 
            and your akhan name is ${maleNames[dayNumber]}`
        
        } 
        else {
            result = `You were born on ${ daysOfWeek[dayNumber]} 
            and your akhan name is ${femaleNames[dayNumber]}`
        
        } 
        document.getElementById('result').innerHTML = result
    } else {
        document.getElementById('error-message').innerHTML = validation[1]
    }
}
    