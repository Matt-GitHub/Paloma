import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { BASE_API_URL } from '../../utils/baseAuth';

//Yup form validation
const FormSchema = yup.object().shape({
  email: yup.string().required('Please enter an email for your account.'),
  password: yup.string().required('Please make sure to enter a password.')
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
        // history.push('/app');
        console.log('success');
      })
      .catch(err => {
        console.log('Login Error:', err.response);
        alert("Hmm something isn't quite right");
      });
  };

  const onRegisterSubmit = data => {
    console.log('Register button! ', data);
    axios
      .post('http://localhost:8500/api/register', {
        email: data.email,
        password: data.password
      })
      .then(res => {
        console.log('Registration successful:', res.data);
        // registration includes token to login --> tasks page
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
    <form onSubmit={handleSubmit(onLoginSubmit)}>
      <h1>Sign in to continue.</h1>

      <div>
        <input placeholder="Email" type="email" name="email" ref={register} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <input
          placeholder="Password"
          type="password"
          name="password"
          ref={register}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div>
        <button type="submit">Sign In</button>
        <button onClick={handleSubmit(onRegisterSubmit)}>Register</button>
      </div>
    </form>
  );
};

export default LoginForm;
