
// export default function Login() {
//   return (
//     <div>Login
//       <form action="" method="post">
//       <input type="text" placeholder="email/username"  />
//       <input type="password" placeholder="password." />
//       <button type="button">submit</button>
//       </form>

//     </div>
//   )
// }
import { Link } from 'react-router-dom';
import Signup from './Signup.jsx';

const Login = () => {
    const google = () => {
        window.open("http://localhost:3000/auth/google","_blank")
    }
    return (  
        <div>
            <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
                <h1 className="text-4xl text-white-bold text-center mb-6">LOGIN</h1>
                <form action="">
                    <div className="relative my-4">
                        <input type="email" className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-grey-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600" />
                        <label htmlFor="email" className="absolute text-sm text-white bg-transparent duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75">Your Email</label>
                    </div>

                    <div className="relative my-4">
                        <input type="password" className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-grey-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600" />
                        <label htmlFor="password" className="absolute text-sm text-white bg-transparent duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75">Your Password</label>
                    </div>
                    <div>
                        <div>
                            <input type="checkbox" name="checkbox" id="checkbox" />
                            <label htmlFor="">Remember Me</label>
                        </div>
                        <span>Forgot Password</span>
                    </div>
                    <button type="submit">LOGIN</button>
                    <div>
                        <span>New here? <Link to='/Signup'>Create new Account</Link> </span>
                    </div>
                    <button onClick={google}> continue with google account</button>
                </form>
            </div >
        </div >
    ) 
}

export default Login;
