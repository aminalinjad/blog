import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap"
import Auth from "../../API/modules/auth"
import {toast} from "react-toastify";
import {useHistory} from "react-router-dom";

const RegisterComponent = () => {
  let [username, setUserName] = useState('')
  let [fullName, setFullName] = useState('')
  let [password, setPassword] = useState('')
  let [disabledBtn, setDisabledBtn] = useState(false)

  let history = useHistory()

  function setFullNameValue(e) {
    setFullName(e.target.value)
  }

  function setUsernameValue(e) {
    setUserName(e.target.value)
  }

  function setPasswordValue(e) {
    setPassword(e.target.value)
  }

  function registerFunc() {
    setDisabledBtn(true)
    const user = {
      name: fullName,
      username: username,
      password: password
    }
    Auth.register(user)
      .then(res => {
        history.push('/')
        setDisabledBtn(false)
        toast.success('عملیات ثبت نام با موفقیت انجام شد', {
          position: 'bottom-right',
          autoClose: 3000,
          draggable: true,
          theme: 'dark',
        })

        // set local Storage
        localStorage.setItem('name', res.data.name)
        localStorage.setItem('image', res.data.image)
        localStorage.setItem('token', res.data['x-auth-token'])
      }).catch(err => {
      setDisabledBtn(false)
    })
  }

  return (
    <div>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Full Name</Form.Label>
        <Form.Control onChange={setFullNameValue} type="text" placeholder="Enter FullName"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="username">
        <Form.Label>UserName</Form.Label>
        <Form.Control onChange={setUsernameValue} type="text" placeholder="Enter UserName"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={setPasswordValue} type="password" placeholder="Enter Password"/>
      </Form.Group>

      <div className={'text-center w-100 my-5'}>
        <Button disabled={disabledBtn} onClick={registerFunc} variant={'outline-danger'}>Submit</Button>
      </div>
    </div>
  );
};

export default RegisterComponent;