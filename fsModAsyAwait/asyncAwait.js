const fsPro = require("fs/promises");


const files = __dirname;


const readDirFunc = async () => {
    try {
        const response = await fsPro.readdir(files);
        console.log(response);
    } catch (err) {
        console.error(err);
    }
};
readDirFunc();

// // // Here, we are getting the Output on Terminal as :-
// // // [ 'asyncAwait.js', 'theory.js' ]
// // // Therefore, we have given the command to read the directory's files.



///////*********************************************************************************************************** */
///////--------------------------------------------------------------------------------------------------------------
///////*********************************************************************************************************** */


