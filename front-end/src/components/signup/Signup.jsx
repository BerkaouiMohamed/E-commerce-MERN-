import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import mainlogo from "../../assets/sarou5logo.png";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";
import { server } from "../../sever";
import { toast } from "react-toastify";
const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const  [name,setName]=useState('')
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [avatar, setAvatar] = useState(null);

    function handleTogglePassword() {
      setShowPassword(!showPassword);
    }
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setAvatar(file);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const config = { headers: { "Content-Type": "multipart/form-data" } };
    
        const newForm = new FormData();
    
        newForm.append("file", avatar);
        newForm.append("name", name);
        newForm.append("email", email);
        newForm.append("password", password);
    
        axios
          .post(`${server}/user/create-user`, newForm, config)
          .then((res) => {
            toast.success(res.data.message);
            setName("");
            setEmail("");
            setPassword("");
            setAvatar();
          })
          .catch((error) => {
            toast.error(error.response.data.message);
          });
      };
  return (
    <div className="min-h-screen bg-sky-300-300 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <img className="mx-auto h-12 w-auto" src={mainlogo} alt="Logo" />
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
      Registre!!
      </h2>
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form  onSubmit={handleSubmit} className="space-y-6">
        <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
            Nom
            </label>
            <div className="mt-1">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-500 sm:text-sm"
              />
            </div>
          </div>
            
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700" >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-500 sm:text-sm"
              />
              <button
                type="button"
                className="absolute top-6 right-0 flex items-center px-2 py-2 text-gray-400"
                onClick={handleTogglePassword}
              >
                {!showPassword ? (
                  <AiOutlineEyeInvisible className="h-5 w-5" />
                ) : (
                  <AiOutlineEye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <div>
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700"
              ></label>
              <div className="mt-2 flex items-center">
                <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="avatar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <RxAvatar className="h-8 w-8" />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <span>Upload a file</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleFileInputChange}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>

            
          <div>
            <button
              type="submit" 
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
            <div className=" relative text-xl-500 pt-3 right-0 w-1/2  text-black">
            vous avez un compt! <Link to='/login' className="text-blue-400" >login</Link>
            </div>

          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Signup;
