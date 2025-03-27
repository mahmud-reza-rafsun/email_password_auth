import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase__init";
import { useState } from "react";

const SignUp = () => {
  const [error, setError] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    // create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user.user);
      })
      .catch((error) => {
        console.log("Error", error.message);
      });
    // reset error
    setError("");
    //  password validition
    if (password.length < 6) {
      setError("Password al least 6 character or longer");
    }
    // expresion validation
    var regularEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (!regularEx.test(password))
      [
        setError(
          "Use a Uppercase and a Lowercase and a special chacrater and number"
        ),
      ];
  };
  return (
    <div className="hero bg-base-200 min-h-[60vh] rounded-xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body">
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
