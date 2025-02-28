import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import logo from '../../assets/logo.png'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../Mutations/LoginMutation";

interface FormData {
  email: string,
  password: string,
}

const Login: React.FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  })
  const navigate = useNavigate()
  const mutation = useLoginMutation()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    mutation.mutate(formData, {
      onSuccess: (data) => {
        toast.success("Login successful!", { position: "top-right" });
        localStorage.setItem("token",data.access_token)
        localStorage.setItem("userId",data.user.userId)
        console.log("user",data)
        if (data.user.role == 'affected') {
          navigate('/userDashboard', { replace: true })
        }
        else if (data.user.role == 'volunteer') {
          navigate('/volunteerDashboard', { replace: true })
        }
        else {
          navigate('/', { replace: true })
        }
      },
      onError: () => {
        toast.error("Login failed. Please try again!", { position: "top-right" });
      }
    })
    // try {
    //   const response = await axios.post('http://127.0.0.1:8000/user/login/', formData)
    //   toast.success("Login successful!", { position: "top-right" });
    //   console.log(response.data)
    //   if (response.data.user.role == 'affected') {
    //     navigate('/userDashboard', { replace: true })
    //   }
    //   else {
    //     navigate('/', { replace: true })
    //   }

    // } catch (error) {
    //   toast.error(`Login failed. `, { position: "top-right" });
    //   console.error(error)
    // }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#292929] text-white">
      <div className="w-[90%] max-w-6xl bg-[#292929] p-10 md:py-20 rounded-sm shadow-[var(--tw-shadow-custom)] flex my-10">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Login</h2>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" className="input-style" name="email" onChange={handleChange} />

            {/* Password Input with Toggle Icon */}
            <div className="relative">
              <input
                name="password"
                type={isShow ? "text" : "password"}
                placeholder="Password"
                className="input-style pr-10"
                onChange={handleChange}
              />
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
                onClick={() => setIsShow(!isShow)}
              >
                {isShow ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
              </span>
            </div>

            <button className="w-full bg-[#31B18D] rounded-sm py-2 md:text-lg mt-4 hover:bg-[#88f7d8] hover:text-black transition ease-in-out duration-500 hover:cursor-pointer" type="submit">
              Login
            </button>
          </form>

          <button className="w-full flex items-center justify-center gap-2 bg-[rgba(30,30,30,0.5)] py-2 rounded-sm mt-4 hover:bg-gray-600 transition">
            <FaGoogle className="text-blue-300" /> Login with Google
          </button>
          <p className="text-center mt-4">
            Don't have an account? <a href="#" className="text-[#31B18D] hover:underline" onClick={() => navigate('/signup')}>Register</a>
          </p>
        </div>

        {/* Logo Section */}
        <div className="hidden md:flex flex-1 justify-center items-center">
          <div className="flex justify-center items-center">
            <img src={logo} alt="" className="w-4/5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;



