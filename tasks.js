2
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
 const array = ['Apple', 'Banana']
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */

function onDataReceived(text) {
  console.log
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(text.slice(0,5) === 'hello' ){
    hello(text);
  }  
  else if(text.slice(0,4) === 'help' ){
    help(text);
  }  
  else if (text === 'list\n'){
      list();
  }
  else if (text.slice(0,3) === 'add'){
    add(text.substring(3).trim());
}
else if (text.slice(0,6)==='remove'){
  remove(text.slice(6));
}
else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */

function hello(text){
  const text1 = text.replace(/ +/, " ");
  const text2 =text1.trim()+"!";
  console.log(text2);

}
/**
 * Lists all the possible commands
 */

function help(text){
  const text1 = text.replace(/ +/g, " ");
  const text2 =text1.trim()+"!";
  console.log(text2);

}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Hassan Alsabeh")
function list(){
for (let i=0;i<array.length;i++)
console.log(i+1+" - [ ] "+array[i])
}

function add(text){
  if(text.slice(0,3)==""){
    console.log("error")
  }
  else{
array.push(text)
}}

function remove(text){
text=text.trim();
if(text<=array.length){
  if(text == ""){
    array.pop();
  }else if(text == "1"){
    array.shift();
  }else if(text == "2"){
    array.splice(1,1);
  }}
  else{
    console.log("you enter a number greater than length of the list");}
}