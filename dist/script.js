// import csvData from "./data";
// console.log("csvData", csvData);
// // CSV file name
// const fileName = “cities_canada-usa.csv”;
// var arrayToInsert = [];
// csvtojson().fromFile(fileName).then(source => {
//     // Fetching the all data from each row
//     for (var i = 0; i < source.length; i++) {
//          var oneRow = {
//              firstName: source[i][“Firstname”],
//              lastName: source[i][“Lastname”],
//              city: source[i][“City”],
//              salary: source[i][“Salary”]
//          };
//          arrayToInsert.push(oneRow);
//      }
//      //inserting into the table “employees”
//      var collectionName = ‘employees’;
//      var collection = dbConn.collection(collectionName);
//      collection.insertMany(arrayToInsert, (err, result) => {
//          if (err) console.log(err);
//          if(result){
//              console.log(“Import CSV into database successfully.”);
//          }
//      });
// });
//# sourceMappingURL=script.js.map