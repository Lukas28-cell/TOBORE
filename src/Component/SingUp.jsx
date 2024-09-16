import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const title= "Register";
const socialtitle ="Login With Soical Media";
const btntext = "Signup";

const SingUp = () => {
    const [erroemessage, setErrormessage] = useState("");
    const {   signUpWithGmail, createUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister =() =>{
        signUpWithGmail().then((result) =>{
            const user = result.user;
            navigate(from, {replace: true})
        }).catch((error) => {
            const errorMsg = error.message;
            setErrormessage("Please provide valid email & password!")
        })

    }

    
    const handleSignup =(e) =>{
        e.preventDefault();
        const form = e.target;
// console.log(form);
        const email= form.email.value;
        const password = form.password.value;
        const confirmpassword= form.confirmpassword.value;
        // console.log(email, password, confirmpassword);
        if (password!== confirmpassword) {
            setErrormessage('password dosenot match! please provide a currect password')
            
        }else{
            setErrormessage('');
            createUser(email, password).then((createUser) =>{
                const user = createUser.user;
                alert('Acount created successfully done!!')
                navigate(from, {replace: true})
            }).catch((error) =>{
                console.log(error.message);
                alert(`${error.message}`)
            })
        }
        
    }
  return (
    <div className='login-section padding-tb section-bg'>
    <div className=' container'>
        <div className="account-wrapper">
            <h3 className=' title'>{title}</h3>
            <form className='account-form' onSubmit={handleSignup}>
                <div className='form-group'>
                    <input type="text" name="name" id="name" placeholder='Full Name ' required />
                </div>
                <div className='form-group'>
                    <input type="email" name="email" id="email" placeholder='Email Address *' required />
                </div>
                <div className=' form-group'>
                <input type="password" name="password" id="password" placeholder='Password *' required />
                </div>
                <div className=' form-group'>
                <input type="password" name="confirmpassword" id="confirmpassword" placeholder='Confirm Password *' required />
                </div>
                {/* showing message */}
                <div>
                    {
                        erroemessage &&(
                            <div className="error-message text-red-500 mb-1">
                                {erroemessage}
                            </div>
                        )
                    }
                </div>
              
                <div className='form-group'>
                    <button type='submit' className='d-block lab-btn'>
                        <span>{btntext}</span>
                    </button>
                </div>
            </form>
            {/* account bottom */}
            <div className='account-bottom'>
                <span className='d-block cate pt-10'>
                     Have an Account? <Link to="/login">Login</Link>
                </span>
                <span className='or'>
                    <span>or</span>
                </span>

                {/* socialmedia login  */}
                <h5 className='subtitle'>{socialtitle}</h5>
                <div className="lab-ul social-icons justify-center list-none">
                    <li>
                        <button className='github' onClick={handleRegister}><i className='icofont-github'></i></button>
                    </li>
                    <li>
                        <a href="/" className='facebook'><i className='icofont-facebook'></i></a>
                    </li>
                    <li>
                        <a href="/" className='twitter'><i className='icofont-twitter'></i></a>
                    </li>
                    <li>
                        <a href="/" className='linkedin'><i className='icofont-linkedin'></i></a>
                    </li>
                    <li>
                        <a href="/" className='instagram'><i className='icofont-instagram'></i></a>
                    </li>
                    
                </div>
            </div>
        </div>

    </div>
</div>
  )
}

export default SingUp
