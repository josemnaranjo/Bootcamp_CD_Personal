const {simplePost} = require('./simplePost.js');

const logout = async() => {
    try{
        const response = await simplePost("/api/logout");
        if(!response){
            return {success:false,data:response}
        }else{
            return {success:true,data:response}
        }


    }catch(err){
        return{success:false,data:{errors:{error:err}}}
    }
}

export default logout;