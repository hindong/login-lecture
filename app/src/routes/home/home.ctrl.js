"use strict"

const users = {
    id : ["woorimiT", "나개발", "김팀장"],
    password : ["1234", "1234", "123456"],
};

const output = {
    home : (request, response)=>{
        response.render("home/index");
    },
    login : (request, response)=>{
        response.render("home/login");
    }
};

const process = {
    login: (req, res) => {
        const id = req.body.id;
        const password = req.body.password;

        if( users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.password[idx] === password){
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        });
    },
};

module.exports = {
    output,
    process,
};

