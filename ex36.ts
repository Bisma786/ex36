// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
const make_shirt=(size: string, message:string)
:string=>
{
console.log(`Size: ${size}, Message:'${message}'`); return `Size:${size}, Message: '${message}'`;
}
let size: string ="Large";
let message:string="Bisma Digitalisma";

// make_shirt("Medium","Bisma Digitalisma");ing="medium";
make_shirt("Medium","Bisma Digitalisma");
make_shirt(size,message);
// 
