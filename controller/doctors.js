const { response } = require('express');
const path = require('path');
const sql = require('mssql');
const dbConfig = require('./config');
let _STATUSCODE = 200;
const _allowedDesignaiton = ['ADMIN'];

/**
 * USP_HAEMAT_ADD_ORDER_DETAILS
USP_HAEMAT_GET_DOC_DETAILS
USP_HAEMAT_GET_DOC_LIST
 */


exports.getMyDoctorList = (req, res, next) => {
    
    getMyDoctorList(req.params).then((result) => {
        res.status(_STATUSCODE).json(result);
    });
};

function getMyDoctorList (objParam) {
    console.clear();
    console.log(dbConfig)
    console.log(objParam);
    //console.log(storeProc)
    return new Promise((resolve) => {
        var dbConn = new sql.ConnectionPool(dbConfig.dataBaseConfig);
        dbConn
            .connect()
            .then(function () {
                var request = new sql.Request(dbConn);
                request
                    .input("empID", sql.Int, objParam.empId)
                    .execute('USP_HAEMAT_GET_DOC_LIST')
                    .then(function (resp) {
                        //console.log(resp)
                        resolve(resp.recordset);
                        dbConn.close();
                    })
                    .catch(function (err) {
                        console.log(err);
                        dbConn.close();
                    });
            })
            .catch(function (err) {
                console.log(err);
            });
    });
};