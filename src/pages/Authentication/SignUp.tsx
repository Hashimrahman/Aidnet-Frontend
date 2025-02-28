import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
// import { IoIosArrowDown } from "react-icons/io";
import logo from '../../assets/logo.png'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSignupStore } from "../../Store/useStore";
import { useSignupMutation } from "../../Mutations/SignupMutation";


const Signup: React.FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isShow2, setIsShow2] = useState<boolean>(false);
  const mutation = useSignupMutation()

  const { formData, setFormData, resetForm } = useSignupStore()

  const navigate = useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(name, value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    mutation.mutate(formData, {
      onSuccess: () => {
        toast.success("Signup successful", { position: "top-right" })
        resetForm()
        navigate('/login')
      },
      onError: (data) =>{
        console.log(data)
        toast.error("Signup failed. Please try again!", { position: "top-right" });
      }
    })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#292929] text-white">
      <div className="w-[90%] max-w-6xl bg-[#292929] p-10 md:py-20 rounded-sm shadow-[var(--tw-shadow-custom)] flex my-10">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Sign up</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 md:gap-4">
              <input type="text" placeholder="First name" className="input-style" name="first_name" onChange={handleChange} />
              <input type="text" placeholder="Last name" className="input-style" name="last_name" onChange={handleChange} />
            </div>
            <input type="email" placeholder="Email" className="input-style" name="email" onChange={handleChange} />

            <div className="grid md:grid-cols-2 md:gap-4 ">
              <input type="text" placeholder="Phone number" name="phone" className="input-style" onChange={handleChange} />
              <div className="relative">
                <select
                  className="input-style"
                  name= 'role'
                  // onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({ ...formData, role: e.target.value })}
                  onChange={handleChange}
                  value={formData.role}
                >
                  <option value="" className="">Role</option>
                  <option value="affected">User</option>
                  <option value="donor">Donor</option>
                  <option value="volunteer">Volunteer</option>
                </select>
              </div>
            </div>
            <input type="text" placeholder="Organization Name" className={formData.role === 'donor' ? 'input-style' : 'hidden'} name="organization_name" onChange={handleChange} />
            <input type="text" placeholder="Skills" className={formData.role === 'volunteer' ? 'input-style' : 'hidden'} name="skills" onChange={handleChange} />
            <input type="address" placeholder="Address" className="input-style" name="address" onChange={handleChange} />

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

            <div className="relative">
              <input
                name="confirm_password"
                type={isShow2 ? "text" : "password"}
                placeholder="Confirm password"
                className="input-style pr-10"
                onChange={handleChange}
              />
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
                onClick={() => setIsShow2(!isShow2)}
              >
                {isShow2 ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
              </span>
            </div>


            <button className="w-full bg-[#31B18D] rounded-sm py-2 md:text-lg mt-4 hover:bg-[#88f7d8] hover:text-black transition ease-in-out duration-500 hover:cursor-pointer" type="submit">
              Signup
            </button>
          </form>

          <button className="w-full flex items-center justify-center gap-2 bg-[rgba(30,30,30,0.5)] py-2 rounded-sm mt-4 hover:bg-gray-600 transition">
            <FaGoogle className="text-blue-300" /> Login with Google
          </button>
          <p className="text-center mt-4">
            Already a member? <a href="#" className="text-[#31B18D] hover:underline" onClick={() => navigate('/login')}>Login</a>
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

export default Signup;


// Tailwind Custom Input Style (Add to your CSS file or global styles)

