
let femaleNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama']
let daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

function getName(){
    let birthday = document.getElementById('birthday').value;
    let gender = document.getElementById('gender').value;
    let dayNumber = new Date(birthday).getDay();
    let result = ''

    if (gender == 'Male'){
        result =`You were born on ${ daysOfWeek[dayNumber]} 
        and your akhan name is ${maleNames[dayNumber]}`
    
    } 
    if (gender == 'Female'){
        result = `You were born on ${ daysOfWeek[dayNumber]} 
        and your akhan name is ${femaleNames[dayNumber]}`
    
    } 
    document.getElementById('result').innerHTML = result
}

