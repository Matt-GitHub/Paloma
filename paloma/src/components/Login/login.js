import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { BASE_API_URL } from '../../utils/baseAuth';
import './login.css';
//Yup form validation
const FormSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('Please enter an email for your account.'),
  password: yup
    .string()
    .min(4)
    .required('Please make sure to enter a password.')
});

const LoginForm = () => {
  const { register, handleSubmit, errors, reset } = useForm({
    validationSchema: FormSchema,
    mode: 'onBlur'
  });

  const onLoginSubmit = data => {
    console.log('Login Button! ', data);
    // login request sends --> tasks page
    axios
      .post('http://localhost:8500/api/login', {
        email: data.email,
        password: data.password
      })
      .then(res => {
        reset();
        console.log('response', res);
        localStorage.setItem('AUTH_TOKEN', res.data.token);
        localStorage.setItem('USER_ID', res.data.user.id);
        history.push('/app/dashboard');
        console.log('success');
      })
      .catch(err => {
        console.log('Login Error:', err.response);
        alert("Hmm something isn't quite right");
      });
  };

  const onRegisterSubmit = data => {
    axios
      .post('http://localhost:8500/api/register', {
        email: data.email,
        password: data.password
      })
      .then(res => {
        console.log('Registration successful:', res.data);
        onLoginSubmit(data);
      })
      .catch(err => {
        console.log('Registration Error:', err.response);
        alert('error registering account, please try again');
      });
  };

  // routerHistory
  const history = useHistory();
  return (
    <form onSubmit={handleSubmit(onLoginSubmit)} className="form-container">
      <div className="form-input">
        <input placeholder="Email" type="email" name="email" ref={register} />
      </div>

      <div className="form-input">
        <input
          placeholder="Password"
          type="password"
          name="password"
          ref={register}
        />
      </div>

      <div>
        <button type="submit" className="form-button" id="submit">
          Sign In
        </button>
        <button
          onClick={handleSubmit(onRegisterSubmit)}
          className="form-button"
          id="register"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
