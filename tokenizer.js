const natural = require('natural');
const fs = require('fs')
const async = require('async')
const tf = require('@tensorflow/tfjs')


function codeTokenizer(codeList) {
  var tokenizer = new natural.WordPunctTokenizer();
  var vocalbury = []
  var result = []
  // Create vocalbury
  for (i in codeList) {
    var temp = tokenizer.tokenize((codeList[i]))
    vocalbury.push(...temp)
  }
  vocalbury = vocalbury.filter((v, i, a) => a.indexOf(v) === i)
  console.log(vocalbury)
  // Count word times in vocalbury
  for (i in codeList) {
    var temp = tokenizer.tokenize((codeList[i]))
    var temp2 = Array.apply(null, Array(vocalbury.length)).map(Number.prototype.valueOf,0);
    for (i in temp) {
      if (vocalbury.includes(temp[i])) {
        var index = vocalbury.indexOf(temp[i]);
        temp2[index]++;
      }
    }
    result.push(temp2)
  }
  return result
}

var parseCsv = function(cb){
    var results = [];
    fs.createReadStream('./src/data2.csv')
    .pipe(csv({ separator: ';', headers: false }))
        .on('data', function(data){
          results.push(data);
        })
        .on('end', function(){
            cb(null, results);
        });
};

// run the functions

const Papa = require('papaparse');

const csvFilePath = './src/data2.csv'

// Function to read csv which returns a promise so you can do async / await.

const readCSV = async (filePath) => {
  const csvFile = fs.readFileSync(filePath)
  const csvData = csvFile.toString()  
  return new Promise(resolve => {
    Papa.parse(csvData, {
      header: true,
      delimiter: ";",
      skipEmptyLines: true,
      transformHeader: header => header.trim(),
      complete: results => {
        console.log('Complete', results.data.length, 'records.'); 
        resolve(results.data);
      }
    });
  });
};

const run = async () => {
  let parsedData = await readCSV(csvFilePath);
  var sentences = parsedData.map(function(item) {
    return item['codesample'];
  });
  var labels = parsedData.map(function(item) {
    return item['labels'];
  });

  var numbers = codeTokenizer(sentences)
  console.log(numbers);
  const model = tf.sequential({
    layers: [
      tf.layers.dense({inputShape: [784], units: 32, activation: 'relu'}),
      tf.layers.dense({units: 10, activation: 'softmax'}),
    ]
   });
   model.summary();
   //model.save('file://./model-1a');

  
}
run()


