const dbConfig = require('./config');
const sql = require('mssql');

exports.getPersonList = (req, res, next) => {
    getPersonListData().then(result => {
        res.status(200).json(result);
    });
};

getPersonListData = () => {
    return new Promise((resolve) => {
        var dbConn = new sql.ConnectionPool(dbConfig.dataBaseConfig);
        dbConn.connect().then(function () {
            var request = new sql.Request(dbConn);
            request.execute('USP_BSV_GET_PERSON_LIST').then(function (resp) {
                resolve(resp.recordset);
                dbConn.close();
            }).catch(function (err) {
                console.log(err);
                dbConn.close();
            });
        }).catch(function (err) {
            console.log(err);
        });
    });
};

exports.postPersonData = (req, res, next) => {
    console.log('Demo');
    // postPersonData(req.body).then(result => {
    //     console.log(result);
    //     res.status(200).json(result);
    // });
    res.status(200).json('Added');
};

// postPersonData = (objParam) => {
//     return new Promise((resolve) => {
//         var dbConn = new sql.ConnectionPool(dbConfig.dataBaseConfig);
//         dbConn.connect().then(function(){
//             var request = new sql.Request(dbConn);
//             request
//                 .input('Id', sql.Int, objParam.Id)
//                 .input('FirstName', sql.NVarChar, objParam.FirstName)
//                 .input('LastName', sql.NVarChar, objParam.LastName)
//                 .input('Age', sql.Int, objParam.Age)
//                 execute('USP_BSV_GET_PERSON_ADD').then(function(resp) {
//                 resolve(resp);
//                 dbConn.close();
//             }).catch(function(err){
//                 console.log(err);
//                 dbConn.close();
//             });
//         }).catch(function(err){
//             console.log(err);
//         });
//     });
// };