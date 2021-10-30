import {Button, Form} from "react-bootstrap"
import {useState} from "react"
import Auth from "../../API/modules/auth"
import {toast} from "react-toastify";
import {useHistory} from "react-router-dom";

const LoginComponent = () => {
  let [username, setUserName] = useState('')
  let [password, setPassword] = useState('')
  let [disabledBtn, setDisabledBtn] = useState(false)

  let history = useHistory()

  function setUsernameValue(e) {
    setUserName(e.target.value)
  }
  function setPasswordValue(e) {
    setPassword(e.target.value)
  }
  function loginFunc() {
    setDisabledBtn(true)
    const user = {
      username: username,
      password: password
    }
    Auth.Login(user).then(res => {
      history.push('/')
      setDisabledBtn(false)
      toast.success('با موفقیت وارد شدید' , {
        position: 'bottom-right',
        autoClose: 3000,
        draggable: true,
        theme: 'dark',
      })

      // set local Storage
      localStorage.setItem('name' , res.data.name)
      localStorage.setItem('image' , res.data.image)
      localStorage.setItem('token' , res.data['x-auth-token'])
    }).catch(err => {
      setDisabledBtn(false)
    })
  }

  return (
    <div>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>UserName</Form.Label>
        <Form.Control onChange={setUsernameValue} type="text" placeholder="Enter UserName"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={setPasswordValue} type="password" placeholder="Enter Password"/>
      </Form.Group>

      <div className={'text-center w-100 my-5'}>
        <Button disabled={disabledBtn} onClick={loginFunc} variant={'outline-danger'}>Submit</Button>
      </div>
    </div>
  );
};

export default LoginComponent;