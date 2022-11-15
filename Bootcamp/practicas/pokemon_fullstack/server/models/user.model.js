const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');


const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"El nombre es obligatorio"]
    },
    lastName:{
        type:String,
        required:[true,"El apellido es obligatorio"]
    },
    email:{
        type:String,
        required:[true,"El email es obligatorio"],
        validate:{
            validator:val=>/^([\w-\.]+@([\w-]+.)+[\w-]+)?$/.test(val),
            message:"Por favor ingresar un correo válido"
        }, 
        unique: true
    },
    password:{
        type:String,
        required:[true,"Por favor ingresa una contraseña"],
        minLength:[8,"La contraseña debe tener minimo 8 caracteres"]
    }
},{timestamps:true})


UserSchema.plugin(uniqueValidator,{message:"Error, el correo ya existe"});

UserSchema.virtual("confirmPassword")
    .get(()=>this._confirmPassword)
    .set((value)=>(this._confirmPassword=value))

UserSchema.pre("validate",function(next){
    if(this.isNew && this.password !== this["confirmPassword"]){
        this.invalidate("confirmPassword","Las contraseñas deben ser iguales")
    }
    next()
})

const User = mongoose.model("User", UserSchema);
module.exports = {User,UserSchema};