import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
// import Swal from 'sweetalert2'
import { AuthInput, 
    FormContainer,
    StyledAuthContainer } 
    from '../../styles/components/Auth/authStyle'
import { Button } from '../../styles/components/common/common'

export const RegisterScreen = () => {

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // }
  
    const [formValues, handleInputChange] = useForm({
      name: '',
      email: '',
      password: '',
      password2: ''
    });

    const { name, email, password, password2} = formValues

    return (
        <div>
           <FormContainer>
            <StyledAuthContainer>
              <h2>Register</h2>

              {/* <form onSubmit = {handleSubmit}> */}

              <AuthInput type = "text"
               name = "name"
                placeholder = "Name" 
                autoComplete = "off"
                value = {name}
                onChange = {handleInputChange}
                />

              <AuthInput type = "text"
               name = "email"
                placeholder = "email" 
                autoComplete = "off"
                value = {email}
                onChange = {handleInputChange}
                />

              <AuthInput 
              type = "password" 
              name = "password" 
              autoComplete = 'off'
              placeholder = "password"
              value = {password}
              onChange = {handleInputChange}
              />

            <AuthInput 
              type = "password" 
              name = "password2" 
              placeholder = "Confirm Passoword"
              autoComplete = 'off'
              value = {password2}
              onChange = {handleInputChange}
              />

            <Button
            >Login</Button>
        {/* </form> */}
            <Link className = "link" to = "/login" >Already register?</Link>
            </StyledAuthContainer>

            </FormContainer>
        </div>
    )
}
