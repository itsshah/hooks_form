import React from 'react';
import useForm from './useForm';
import validate from './Validate';

const Form = () => {
    const {handleChange, handleSubmit, values, errors} = useForm(submitForm, validate);
    //Callback for Thank You message after submit
    function submitForm(){
        console.log('form submitted');
    }
    //Form JSX
    return(
        <section>
            <div className="wrapper">
                
                <form onSubmit={handleSubmit} noValidate name="contact-form">
                    <div className="container">
                        <div class="form">
                            <div className="input-holder">
                                <label>Name</label>
                                <div>
                                    <input type="name" name="name" value={values.name} onChange={handleChange} />
                                    <p className="error">{errors.name}</p>
                                </div>
                                <label>Email</label>
                                <div>
                                    <input type="email" name="email" value={values.email} onChange={handleChange} />
                                    <p className="error">{errors.email}</p>
                                </div>
                            </div>
                            <div className="input-holder">
                                <label>Phone</label>
                                <div>
                                    <input type="tel" name="phone" value={values.phone} onChange={handleChange} />
                                    <p className="error">{errors.phone}</p>
                                </div>
                                <label>Password</label>
                                <div>
                                    <input type="password" name="password" value={values.password} onChange={handleChange} />
                                    <p className="error">{errors.password}</p>
                                </div>
                            </div>
                            <div className="btn-holder">
                                <button className="btn" type="submit">Submit</button>
                            </div>
                        </div>
                        <div class="company-info">
                            <h3>Company Info</h3>
                            <ul>
                                <li>123 Anywhere St.</li>
                                <li>Smalltown, New Jersey</li>
                                <li>(000) 000-0000</li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Form;