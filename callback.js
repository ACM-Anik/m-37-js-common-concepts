function greeting(greetingHandler, name){
    greetingHandler(name);
}

function greetingHandler(name){
    console.log('Good morning', name);
}

function greetEvening(name){
    console.log('Good evening', name);
}

function greetNight(name){
    console.log('Good night', name);
}

greeting(greetingHandler, 'Tom Hanks');
greeting(greetingHandler, 'Tom Brady');
greeting(greetingHandler, 'Tom Cruise');
greeting(greetEvening, 'Tom SoloMan');
greeting(greetEvening, 'Tom SpeedMan');
greeting(greetNight, 'Tom JhankarMan');



function submitHandler(){
    console.log('Submit button clicked.');
}
document.getElementById('btn-submit').addEventListener('click', submitHandler);

