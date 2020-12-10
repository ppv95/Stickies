import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useForm } from '../../hooks/useForm'
import { AuthInput, 
    FormContainer,
    StyledAuthContainer } 
    from '../../styles/components/Auth/authStyle'
import { Button } from '../../styles/components/common/common'

export const LoginScreen = () => {

    const [formValues,setFormValues] = useForm({
        email:'',
        password: ''
    });

    const {email,password} = formValues;

    const handleLogin = () =>{
        Swal.fire('Login','Succesfull login on the click','success'); 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <FormContainer>
            <StyledAuthContainer>
              <h2>Login</h2>

            <form onSubmit = {handleSubmit} >

              <AuthInput type = "text"
               name = "email"
                placeholder = "email" 
                autoComplete = "off"
                onChange = {setFormValues}
                value = {email}

                />

              <AuthInput 
              type = "password" 
              name = "password" 
              placeholder = "password"
              onChange = {setFormValues}
              value = {password}
              autoComplete = "off"
              />

            <Button
            onClick = {handleLogin}
            >Login</Button>
            </form>

            <Link className = "link" to = "/register">Need around here? Join us</Link>
            </StyledAuthContainer>

            </FormContainer>
        </div>
    )
}
