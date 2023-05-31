const { response } = require('express');
const path = require('path');
const sql = require('mssql');
const dbConfig = require('./config');
let _STATUSCODE = 200;
const _allowedDesignaiton = ['ADMIN'];

exports.getMyDoctorList = (req, res, next) => {
    getMyDoctorList(req.params).then((result) => {
        res.status(_STATUSCODE).json(result);
    });
};

function getMyDoctorList(objParam) {
    //console.clear();
    //console.log(dbConfig)
    //console.log(objParam);
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

exports.getLogin = (req, res, next) => {

    //res.status(200).json([{ id: 101, name: 'Ram' }]);

    getLogin(req.body).then((result) => {
        let response, success, msg, userDetiails;
        if (result.recordset.length > 0) {
            let rec = result.recordset[0]
            success = true;
            msg = 'Login successful'
            userDetiails = {
                empId: rec.EmpID,
                name: rec.firstName,
                post: rec.Designation,
                lastLogin: rec.lastLoginDate,
                targetLeft: 4
            }
        } else {
            success = false;
            msg = 'Login failed'
        }
        response = {
            success, msg, userDetiails
        };
        console.log(response)
        res.status(200).json(response);
    });
};

function getLogin(objParam) {
    return new Promise((resolve) => {
        var dbConn = new sql.ConnectionPool(dbConfig.dataBaseConfig);
        dbConn
            .connect()
            .then(function () {
                var request = new sql.Request(dbConn);
                request
                    .input("email", sql.NVarChar, objParam.email)
                    .input("password", sql.NVarChar, objParam.password)
                    .input("portalCode", sql.NVarChar, process.env.PORTAL_DIVISION)
                    .execute("USP_VALIDATE_USER")
                    .then(function (resp) {
                        //console.log(resp);
                        resolve(resp);
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



