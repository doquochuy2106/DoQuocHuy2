import { useState } from "react";
import "./Login.scss";
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import { loginUser } from "../../services/userService";

const Login = (props) => {
    let history = useHistory();

    const [valueLogin, setValueLogin] = useState("");
    const [passWord, setPassWord] = useState("")

    const defaultObjValidInput = {
        isValidValueLogin: true,
        isValidPassWord: true
    }

    const [objValidInput, setObjValidInput] = useState(defaultObjValidInput)

    const handleCreateNewAccount = () => {
        history.push("/register");
    }

    const handleLogin = async () => {
        setObjValidInput(defaultObjValidInput)

        if (!valueLogin) {
            setObjValidInput({ ...defaultObjValidInput, isValidValueLogin: false })
            toast.error("please enter your email address or your phone number")
            return;
        }
        if (!passWord) {
            setObjValidInput({ ...defaultObjValidInput, isValidPassWord: false })
            toast.error("please enter your password");
            return;
        }

        let response = await loginUser(valueLogin, passWord)

        if (response && response.data && response.data.EC === 0) {
            //success
            let data = {
                isAuthenticated: true,
                token: 'fake token'
            }
            sessionStorage.setItem('account', JSON.stringify(data))
            history.push("/users")
        }
        if (response && response.data && response.data.EC !== 0) {
            //error
            toast.error(response.data.EM)
        }

        console.log(">>> check response: ", response.data)
    }

    return (
        <div className="login-container ">
            <div className="container">
                <div className="row px-3 px-sm-0">
                    <div className="content-left col-12 d-none col-sm-7 d-sm-block ">
                        <div className="brand">
                            HOI DAN IT
                        </div>
                        <div className="detail">
                            Hoi Dan IT helps you connect and share with the people in your life
                        </div>
                    </div>

                    <div className="content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3 ">
                        <div className="brand d-sm-none">
                            HOI DAN IT
                        </div>
                        <input
                            type="text"
                            className={objValidInput.isValidValueLogin ? "form-control" : "form-control is-invalid"}
                            placeholder="Email address  phone number"
                            value={valueLogin}
                            onChange={(event) => { setValueLogin(event.target.value) }}

                        />
                        <input
                            type="password"
                            className={objValidInput.isValidPassWord ? "form-control" : "form-control is-invalid"}
                            placeholder="Password"
                            value={passWord}
                            onChange={(event) => { setPassWord(event.target.value) }}
                        />
                        <button className="btn btn-primary" onClick={() => handleLogin()}>Login</button>
                        <span className="text-center"><a className="forgot-password" href="#">Forgot your pasword</a></span>
                        <hr />
                        <div className="text-center">
                            <button className="btn btn-success" onClick={() => handleCreateNewAccount()}>
                                Create a new account
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Login