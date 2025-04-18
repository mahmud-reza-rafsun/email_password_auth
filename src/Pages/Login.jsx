import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase__init";
import { useState } from "react";

const Login = () => {
  const [success, setSuccess] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    // reset error
    setUser(false);
    // create users
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user.user);
        setUser(true);
      })
      .catch((error) => {
        console.log(error.message);
        setUser(false);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-[60vh] rounded-xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-success">Login</button>
            </div>
            {success && <p className="text-green-500">Login successful.</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
