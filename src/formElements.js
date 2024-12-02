export const inputFormElements=[
    {
        name:"firstName",type:"text", placeholder:"Enter first name", label:"First Name",id:"firstname",
        variant:"outlined", fullWidth:true,required:true, xs:12,sm:6
    },
    {
        name:"lastName",type:"text", placeholder:"Enter last name", label:"Last Name", id:"lastname" ,
        variant:"outlined", fullWidth:true,required:true, xs:12,sm:6
    },
    {
        name:"email",type:"email",placeholder:"Enter email", label:"Email", id:"email" ,
        variant:"outlined", fullWidth:true,required:true, xs:12,sm:6
    },
    {
        name:"phone", type:"number",placeholder:"Enter phone number", label:"Phone", id:"phonenumber" ,
        variant:"outlined", fullWidth:true,required:true, xs:12,sm:6
    },
    {
        name:"gender", type:"radio",value:"male", label:"Male", id:"male",
        variant:"outlined", fullWidth:true,required:true, xs:12,sm:6
    },
    {
        name:"gender", type:"radio",value:"female", label:"Female", id:"female",
        variant:"outlined", fullWidth:true,required:true, xs:12,sm:6
    },

   {
        name:"country",label:"Country", id:"country" ,value: ['USA', 'Nepal', 'China'],
        variant:"outlined", fullWidth:true,required:true, xs:12,sm:6
    }, 
]