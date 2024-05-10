import { Link, useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";
import Swal from "sweetalert2";
import bg from '../../assets/images/wave.png'
import { ToastContainer, toast } from "react-toastify";
// import { useHistory } from "react-router-dom";

function Login() {
    const showLoginSuccessToast = () => {
  toast.success("Login successful!", {
    position: "top-right",
    autoClose: 3000, // Close the notification after 3 seconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

  const { SignIn } = useContext(AuthContext);
  const auth = getAuth(app);

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const userCredientials = {
      email,
      password,
    };
    console.log(userCredientials);
    SignIn(email, password)
      .then((result) => {
          const user = result.user;
          if (result.user) {
                 Swal.fire({
                   icon: "success",
                   title: "Congratulation",
                   text: "Successfully Login",
                 });
          }
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
          console.error(error.message);
         Swal.fire({
           icon: "error",
           title: "Oops...",
           text: "Wrong email/password",
           
         });
      });
  };
  return (
    <div style={{
      backgroundImage: `url(${bg})`,
      backgroundRepeat: 'no-repeat',
    backgroundSize:'cover'}}>
      <div className="hero min-h-screen">
        <ToastContainer></ToastContainer>
        <div className="hero-content   items-center">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 animate__animated animate__fadeInTopRight">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary"
                />
              </div>
            </form>
            <div className="flex gap-2 mx-auto mb-4 ">
              <p>New to Car Doctor?</p>
              <p className="text-red-700">
                <Link to={"/signup"}>Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
