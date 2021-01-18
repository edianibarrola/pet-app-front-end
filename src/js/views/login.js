import React from "react";
import { Form, Button } from "react-bootstrap";

const Login = (props) => {
    const {email, setEmail, password, setPassword, handleLogin, handleSignUp, hasAccount, setHasAccount, emailError, passwordError,} = props;
    return(
        <div>
			<div className="card">
				<div className="card-body">
					<h2 className="text-center mb-4">Log In</h2>
					<Form>
						<Form.Group id="email">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" onChange={e => setEmail(e.target.value)}value={email} required />
						</Form.Group>
                        <p>{emailError}</p>
						<Form.Group id="password">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" onChange={e => setPassword(e.target.value)}value = {password} required />
						</Form.Group>
                        <p>{passwordError}</p>
                        <div>
                            {hasAccount ? (
                            <><Button className="w-100" onClick={handleLogin}>Sign in</Button>
                            <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p></>
                            )
                            : 
                            (<><Button className="w-100" onClick={handleSignUp}>Sign Up</Button>
                            <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p></>)}
                        </div>
					</Form>
				</div>
			</div>
			<div className="w-100 text-center mt-2">Already have an account? Login</div>
		</div>
    )
}

export default Login;