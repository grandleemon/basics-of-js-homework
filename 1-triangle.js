/**
 * LOOPING A TRIANGLE
 *
 * to run code from this file use: npx nodemon 1-triangle
 *
 * Write a loop that makes seven calls to console.log to output the following triangle:
 #
 ##
 ###
 ####
 #####
 ######
 #######
 *
 * Try to find the most optimal way to do this.
 *
 */

// Your code here.
const arr = []
for(let i = 0; i < 7; i++){
    arr.push("#")
    console.log(arr.toString().replace(/,/g, ""))
}


