import React from 'react'


function Login(){
	return(
		<div>
			<form action=""> 
				<div> 
					<label htmlFor="email">Email</label>
					<input type="text" name="email" id="email"/> 
				</div> 
				<div> 
					<label htmlFor="passw">Password</label>
					<input type="password" name="passw" id="passw"/> 
				</div>  
				<button type="submit">Login</button>
			</form>
		</div>
	)
}

export default Login
