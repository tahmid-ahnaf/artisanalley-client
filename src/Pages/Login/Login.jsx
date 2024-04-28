import { useContext, useEffect } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import { useLocation, useNavigate,Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import { FacebookAuthProvider, updateProfile } from "firebase/auth";

const Login = () => {
  const { user,loginUser, googleLoginUser, facebookLoginUser,setReload ,setUser} =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
        navigate(location?.state ? location.state : "/");
    }
}, [user]);

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        
        setReload(true);
        toast.success("User Logged In Successfully.", {
          position: "top-right",
          onClose: () => {
            navigate(location?.state ? location.state : "/");
            location.reload();
          }
        });
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/invalid-credential).") {
          // console.log("invalid email or pass");
          toast.error("Invalid email address or password.", {
            position: "top-right",
          });
        }
      });
  };

  const handleGoogleLogIn = () => {
    googleLoginUser()
      .then((result) => {
        console.log(result.user);
        setReload(true);
        toast.success("User Logged In Successfully.", {
          position: "top-right",
          onClose: () => {
            navigate(location?.state ? location.state : "/");
            location.reload();
          }
        });
      })
      .catch((error) => console.log(error));
  };


  

  const handleFacebookLogIn = () => {
    facebookLoginUser()
      .then((result) => {
        console.log(result.user);
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        const tokenizedPhotoURL = result.user.photoURL + "?height=500&access_token=" + accessToken;
        updateProfile(result.user, {
          photoURL: tokenizedPhotoURL,
        })
          .then(() => {
            console.log("profile updated");
            
            setUser({...result.user,photoURL:tokenizedPhotoURL});
          })
          .catch((error) => {
            console.log(error);
          });

        setReload(true);
        toast.success("User Logged In Successfully.", {
          position: "top-right",
          onClose: () => {
            navigate(location?.state ? location.state : "/");
            location.reload();
          }
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="mx-auto bg-[#FFF4E4] p-4 lg:p-8 rounded-lg">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="w-[95%] md:w-[50%] bg-[#FAE8D3] mx-auto p-4 lg:px-12 lg:py-10 rounded-lg">

      <form onSubmit={handleLogIn} >

      <h2 className="font-semibold text-4xl text-center mb-4">
        Sign <span className="font-black">In</span>
      </h2>
        <div className="form-control mb-4">
          
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="input input-bordered bg-[#FFF4E4]"
            required
          />
        </div>
        <div className="form-control mb-4">
          
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="input input-bordered bg-[#FFF4E4]"
            required
          />
        </div>

        <div className="form-control mt-6">
          <button
            type="submit"
            className="hover:bg-black px-12 py-3  mx-auto bg-[#CD3520] text-white "
          >
            SIGN IN
          </button>
        </div>
      </form>

      <div className="flex flex-col items-center gap-4 mt-4">
        <p>Or Sign In With</p>
        <div className="flex gap-4">
          <button className="btn bg-transparent border-[#CD3520] text-[#CD3520] hover:bg-[#CD3520] hover:text-white text-base" onClick={handleGoogleLogIn}>
            <FaGoogle></FaGoogle>
          </button>
          <button className="btn bg-transparent border-[#CD3520] text-[#CD3520] hover:bg-[#CD3520] hover:text-white text-base" onClick={handleFacebookLogIn}>
            <FaFacebookF />
          </button>
        </div>

        <p>Do not have an account? <Link className="underline cursor-pointer text-[#CD3520]" to="/register">Register Now</Link></p>
      </div>

      </div>
      

      
      <ToastContainer />
    </div>
  );
};

export default Login;