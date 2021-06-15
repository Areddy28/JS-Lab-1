"use strict"; 


const alias = "Mitch Cuckovich"; 
const age = 25;
const birthday = "January 24"; 
const detroitGC = true || false; 
const lifeEvents = ["I was born in Troy, Michigan", "I went to Junior Olympics when I was 10 years old. I placed 14th in the nation in the 800 meter event.", "I'm a graduate of the front-end bootcamp"]

if (detroitGC === true) {
    console.log(`My name is ${alias} and I am a student at Grand Circus in Detroit, Michigan.
    I am currently ${age} years old and my birthday is on ${birthday}.`); 
} else 
    console.log(`My name is ${alias} and I am a student in Grand Rapids, Michigan.
    I am currently ${age} years old and my birthday is on ${birthday}`); 


for (let i = 0; i<lifeEvents.length; i++) {
    console.log (lifeEvents[i]); 
}   

let counter = 0; 
 

while (true) {
    let randomNumber = Math.ceil(Math.random() * 10); 

    if (randomNumber !==5) {
        console.log(`${randomNumber} !==5`);  
        counter ++; 
    } 
    
    else {
    counter ++; 
    console.log(`5 === 5 "It took ${counter} iterations to randomly generate the number 5.`) 
    break; 

    }
}