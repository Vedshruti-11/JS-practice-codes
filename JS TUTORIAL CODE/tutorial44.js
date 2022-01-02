console.log("Tut44");

//pretend this is coming from a server
let a = "Harry Bhai";
a = undefined;
if (a != undefined) {
    throw new Error('This is not undefined');
} else {
    console.log("This is undefined");
}

try {
    // hhijihgu
    null.console;
    console.log('We are inside try block');
    functionYOU();
} catch (error) {
    console.log(error);
    console.log('Are you okay');
    //console.log(error.name);
    console.log(error.message);
} finally {
    console.log('Finally We will run this');
}