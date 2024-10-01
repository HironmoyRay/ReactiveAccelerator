// Scope / Lexical Scope 
var lang = "JavaScript";

function learn(topic){
    // lang = topic;
    var lang = topic;
    console.log(`${lang}`);
}

learn("Python");

console.log(`I know ${lang}`);