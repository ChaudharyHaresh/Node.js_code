const bcrypt=require("bcryptjs");

const data={
    users:[
        {
            id:"haresh123",
            name:"haresh",
            email:"haresh@13",
            passwordHash:bcrypt.hashSync("hr@scillqode.in",8),
            street:"hareshnagari",
            apartment:"hareshnagar",
            city:"surat",
            zip:"123456",
            country:"india",
            phone:123468567,
            isAdmin:true,
        },
    ],
};

module.exports=users