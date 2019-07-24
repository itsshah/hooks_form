import {useState, useEffect} from 'react';
//import validate from './Validate';

const useForm = (submitcb, validate) => {
    //The initial State
    const [values, setValues] = useState({name:"", email:"", phone:"", password:""});
    const [errors, setErrors] = useState({});
    const [canSubmit, setCanSubmit] = useState(false);

    //Handles the change from inputs
    const handleChange = event => {
        const {name, value} = event.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    //Handles the initial Submit event and Calls Back for Errors
    const handleSubmit = event => {
        event.preventDefault();
        setErrors(validate(values));
        setCanSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && canSubmit ){
            submitcb();
        }
    }, [errors, canSubmit, submitcb]);

    return {
        handleChange,
        handleSubmit,
        values,
        errors
    };
};

export default useForm;