import Formulario from '../components/Form'

const FormWrappler = () => {
    const onSubmitProp = (values)=>{
        console.log("Se ha creado el usuario",values)
    }
    return (
        <div>
            <Formulario
            firstName='' 
            lastName=''
            email=''
            passWord=''
            confirmPassword=''
            onSubmitProp={onSubmitProp}>
            </Formulario>
        </div>
    );
}

export default FormWrappler;
