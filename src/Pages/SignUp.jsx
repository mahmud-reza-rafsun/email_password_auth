import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase/firebase__init";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    console.log(email, password, terms);
    // create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user.user);
        setSuccess(true);
        // Email verification sent!
        sendEmailVerification(auth.currentUser)
          .then(() => {
            console.log("Email verification sent!");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log("Error", error.message);
        setError(error.message);
        setSuccess(false);
      });
    // reset error
    setSuccess(false);
    setError("");
    //  password validition
    if (password.length < 6) {
      setError("Password al least 6 character or longer");
    }
    // expresion validation
    const regularEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (!regularEx.test(password)) {
      setError(
        "Use a Uppercase and a Lowercase and a special chacrater and number"
      );
      return;
    }
    // terms validation
    if (!terms) {
      setError("please check our terms and conditions.");
      return;
    }
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
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-xs absolute right-3 top-12"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="form-control">
              <label className="label justify-start gap-3 items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="terms"
                  defaultChecked
                  className="checkbox checkbox-primary"
                />
                <span className="label-text">Accept terms & condition</span>
              </label>
            </div>
            {success && <p className="text-green-500">Sign up successfull.</p>}
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
