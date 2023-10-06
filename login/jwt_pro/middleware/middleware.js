const express = require("express");
const tokenobject = require("../token/token");
const tokenObj=require("../token/token");

const middleware=(req,res,next)=>{
    const reqheaders =req.headers;
    if(req.headers.token == tokenobject.token)
    {
        next();
    }
    else
    {
        res.json({"msg":"Unauthorised user"});
    }
};

module.exports = middleware;