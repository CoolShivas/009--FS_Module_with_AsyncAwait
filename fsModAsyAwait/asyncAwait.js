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



const createFileFunc = async () => {
    try {
      await fsPro.writeFile(
        filePath,
        "Formation of file using Promises and Async/Await.",
        "utf-8"
      );
      console.log("File Created Successfully!");
    } catch (err) {
      console.log("Error Creating File", err);
    }
  };
  createFileFunc();


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
