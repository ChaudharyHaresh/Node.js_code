const bcrypt=require("bcryptjs");

const data={
    users:[
        {
            name:"scillqode",
            password:bcrypt.hashSync("hr@scillqode.in",8),
            isAdmin:true,
            email:"hr@scillqode.in",
        },
        
        {
            name:"scillqode1",
            password:bcrypt.hashSync("hr1@scillqode.in",8),
            isAdmin:true,
            email:"hr1@scillqode.in",
        },
    ],
};

module.exports=data;







// const bcrypt =require("bcryptjs");

// const data ={
//     users:[
//         {
//             name:"skillqode",
//             password: bcrypt.hashSync("hr@skillqode.in",8),
//             isAdmin:true,
//             email: "hr@skillqode.in",
//         },
//         {
//             name:"skillqode",
//             password: bcrypt.hashSync("hr@skillqode.in",8),
//             isAdmin:true,
//             email: "hr@skillqode.in",
//         },
//     ],
// };

// module.exports =data;