function validate(values){
    //Error Object 
    let errors = {};

    //Validation for form fields
    if(!values.name){
        errors.name = "Please provide your name.";
    } 

    if(!values.email){
        errors.email = "Please provide an email address.";
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Please provide a valid email address.";
    }

    if(!values.phone){
        errors.phone = "Please provide your phone number.";
    } else if (!/[0-9]{3}-[0-9]{2}-[0-9]{3}/.test(values.phone)) {
        errors.phone = "Please provide a valid phone number.";
    }

    if(!values.password){
        errors.password = "Password is required.";
    } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters.";
    }

    return errors;
}

export default validate;