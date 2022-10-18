const express= require("express");
const app = express();
const port = 8000;


const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

//ambas funciones deben ir antes de cualquier codigo con app.get/app.post
//son las responsables de analizar los datos de request.body (se conocen como middleware)
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//ENVIANDO DATOS CON POST
app.post("/api/users",(req,res)=>{
    //req.body tendra los datos del formulario desde react
    console.log(req.body);
    //vamos a poner estos nuevos datos en el arreglo users
    users.push(req.body);
    //es obligación responder con algo
    res.json({status:"ok"});
});


//PARAMETROS DE RUTA

//podemos pasar cualquier dato a través de la url colocándolo luego de un ":"
app.get("/api/users/:id",(req,res)=>{
    //accedemos al parámetro con "req.params"
    console.log(req.params.id);
    //suponiendo que id es el indice del elemento en el arreglo al que queremos acceder podemos devolver
    //a este usuario en particular escribiendo
    res.json(users[req.params.id]);
});

//ACTUALIZAR DATOS
app.put("/api/users/:id",(req,res)=>{
    const id = req.params.id;
    users[id]= req.body;
    res.json({status:"ok"});
});








app.listen(port,()=>console.log(`escuchando al puerto ${port}`));