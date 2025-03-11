const fsPro = require("fs/promises");
const path = require('path');


const files = __dirname;

const fileName = "fsProAsyAwait.txt";
const filePath = path.join(__dirname, fileName);


// const readDirFunc = async () => {
//     try {
//         const response = await fsPro.readdir(files);
//         console.log(response);
//     } catch (err) {
//         console.error(err);
//     }
// };
// readDirFunc();

// // // // Here, we are getting the Output on Terminal as :-
// // // // [ 'asyncAwait.js', 'theory.js' ]
// // // // Therefore, we have given the command to read the directory's files.



///////*********************************************************************************************************** */
///////--------------------------------------------------------------------------------------------------------------
///////*********************************************************************************************************** */





// const createFileFunc = async () => {
//     try {
//       const res = await fsPro.writeFile(
//         filePath,
//         "Formation of file using Promises and Async/Await.",
//         "utf-8"
//       );
//       console.log(res, "File Created Successfully!");
//     } catch (err) {
//       console.log("Error Creating File", err);
//     }
//   };
//   createFileFunc();
  

// // // // Here, we are getting the Output on Terminal as :-
// // // // undefined File Created Successfully!
// // // // Therefore, new file created named as "fsProAsyAwait.txt".


///////--------------------------------------------------------------------------------------------



// // // // Getting rid of unnecessary undefined Output on Terminal i.e., (undefined File Created Successfully!):-



// const createFileFunc = async () => {
//     try {
//       await fsPro.writeFile(
//         filePath,
//         "Formation of file using Promises and Async/Await.",
//         "utf-8"
//       );
//       console.log("File Created Successfully!");
//     } catch (err) {
//       console.log("Error Creating File", err);
//     }
//   };
//   createFileFunc();


// // // // Here, we are getting the Output on Terminal as :-
// // // // File Created Successfully!

/**
 *
 * fsPromises.writeFile() :- Writes data to a file asynchronously. If the file exists, it overwrites the content.
 *
 * // ! syntax :- fsPromises.writeFile(path, data, options).
 * // ? path :- The file path to write to.
 * // ? data :- The content to write to the file.
 * // ? options : Optional. Specifies encoding (e.g., 'utf8'), mode, or flags.
 *
 */



////////************************************************************************************* */
/////-------------------------------------------------------------------------------------------
////////************************************************************************************* */



// const readFileFunc = async () => {
//     try {
//         const data = await fsPro.readFile(filePath, 'utf-8');
//         console.log(data);
//     } catch (err) {
//         console.log("Error Reading File", err);
//     }
// };
// readFileFunc();


// // // // Here, we are getting the Output on Terminal as :-
// // // // Formation of file using Promises and Async/Await.




/**
 * 
 * Reading a File :- fsPromises.readFile() :- Reads the contents of a file asynchronously.
 *
 * 
 * // ! syntax :- fsPromises.readFile(path, options);
 * // ? path :- The file path to read.
 * // ? options :- Optional. Can specify encoding (e.g., 'utf8') or return a Buffer if no encoding is provided.
 * 
 * 
 */

////////************************************************************************************* */
/////-------------------------------------------------------------------------------------------
////////************************************************************************************* */




const updateFileFunc = async () => {
    try {
        await fsPro.appendFile(filePath, "\nUpdating the status.", 'utf-8')
        console.log("File Updated Successfully!");
    } catch (err) {
        console.log("Error Updating File", err);
    }
};
updateFileFunc();


// // // // Here, we are getting the Output on Terminal as :-
// // // // File Updated Successfully!


/**
 * 
 * Appending Data : fsPromises.appendFile() :- Adds content to the end of a file. If the file does not exist, it creates a new one.
 * 
 * 
 * // ! syntax :- fsPromises.appendFile(path, data, options).
 * // ? path :- The file path to read.
 * // ? options :- Optional. Can specify encoding (e.g., 'utf8') or return a Buffer if no encoding is provided.
 * 
 * 
 */



////////************************************************************************************* */
/////-------------------------------------------------------------------------------------------
////////************************************************************************************* */
