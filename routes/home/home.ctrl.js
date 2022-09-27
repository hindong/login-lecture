"use strict"

const homectr = (request, response)=>{
    response.render("home/index");
}

const login = (request, response)=>{
    response.render("home/login");
}

module.exports = {
    homectr,
    login,
};

