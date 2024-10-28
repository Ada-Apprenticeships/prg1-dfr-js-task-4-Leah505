const fs = require('fs'); 

//dont forget docstrings
function fileExists(filename) {
  if (!fs.existsSync(filename)) {
      return false;
  } else {
    return true;
  }
}

console.log(fileExists('./datatrafficdataset_2000.csv'))

function validNumber(value) {
  // Check if value is a number or a string that can be converted to an integer
  const parsed = parseInt(value, 10);
  return !isNaN(parsed) && Number.isInteger(parsed) && String(parsed) === value.toString() && parsed >= 0; // value can be string or numeric
 // returns a boolean 
}

console.log(validNumber("4"))

function dataDimensions(dataframe) {
  // returns a list [rows (int), cols (int)]
}


function calculateMean(dataset) {
  // returns a float or false
  
}


function findTotal(dataset) {
  // returns float or false
  
} 


function convertToFloat(dataframe, col){ //dataframe, integer
  // returns an integer, which is the number that were  converted to floats.
  
}


function flatten(dataframe) {
  // returns a dataset (a flattened dataframe)
  
}


function loadCSV(csvFile, ignorerows, ignorecols) {  // string, dataset, dataset
  // returns a list comprising of [dataframe, rows (integer), cols (integer)]

}


function calculateMedian(dataset) {
  // return float or false 
  
}


function createSlice(dataframe, colindex, colpattern, exportcols = []) { // dataframe, integer, string/numeric, dataset
  // returns a dataframe
  
}









module.exports = {
  fileExists, validNumber, dataDimensions, calculateMean, findTotal, convertToFloat, flatten, 
  loadCSV, calculateMedian, createSlice,
} 