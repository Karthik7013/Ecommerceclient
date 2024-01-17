import axios from "axios";
import logo from "./online-shopping.png";
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";



export default function Login() {
  let action = useParams();
  let navigate = useNavigate();
  let [loging, setLoging] = useState(false)
  let [loginCred, setLoginCred] = useState({
    email: "",
    password: ""
  })

  let [register,setRegister] = useState({
    name:"karthik",
    phno:"7013140693",
    password:"1234",
    email:"karthiktumala143@gmail.com"
  })

  async function login(loginCred) {
    setLoging(true)

    try {
      let res = await axios.post('https://myshopee-ba54.onrender.com/user/login', loginCred);

      if (res.status === 200) {
        if (res.data.status) {
          navigate('/')
        } else {
        }
      } else {
        alert("wrong credentials !")
      }
    } catch (error) {
      setLoging(false);
    }
  }


  async function registerUser(){
let res = await axios.post('https://myshopee-ba54.onrender.com/user/register',register);
console.log(res.status);

  }



  function handleChange(e) {
    if (e.target.name === 'email') {
      setLoginCred((prev) => {
        return { ...prev, email: e.target.value }
      })
    } else if (e.target.name === 'password') {
      setLoginCred((prev) => {
        return { ...prev, password: e.target.value }
      })
    }
  }

let x = {
  backgroundColor: "#8EC5FC",
  backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)"
}

  return <div className="px-4 pt-2" style={x}>
    {action.signin === 'signin' ? <div>
      <div className="max-w-md m-auto rounded-xl p-6 shadow-lg bg-white">
        <div className="m-auto rounded mt-10 w-16 h-16"><img src={logo} alt="" /></div>
        <div className="font-bold text-2xl text-center mt-5 text-gray-800">
          <h1>Log in to your account</h1>
        </div>
        <div className="text-gray-800 text-md text-center mt-2">
          Don't have an account?
          <span onClick={() => { navigate('/register') }} className="text-blue-400 font-bold hover:underline cursor-pointer">
            Sign up
          </span>
        </div>
        <div className="mt-8">
          <label htmlFor="" className="text-gray-600 font-semibold">
            Email
          </label>
          <input value={loginCred.email} onChange={(e) => { handleChange(e) }} name="email" type="text" className="transition-colors w-full rounded-md h-10 border indent-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
        </div>
        <div className="mt-4">
          <label className="text-gray-600 font-semibold" htmlFor="">
            Password
          </label>
          <input value={loginCred.password} name="password" onChange={(e) => { handleChange(e) }} type="text" className="transition-colors w-full rounded-md h-10 border indent-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
        </div>
        <div className="flex justify-between mt-8">
          <div className="flex gap-x-2">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
          <div className="font-bold text-blue-500 cursor-pointer hover:underline">
            Forgot password ?
          </div>
        </div>
        <div className="mt-3">
          <button onClick={() => { login(loginCred) }} className="bg-blue-500 w-full rounded-md text-white font-bold py-2">
            Sign in
          </button>
        </div>
        <div className="flex items-center gap-x-2 mt-5">
          <div className="flex-auto h-0.5 bg-gray-300" />
          <div className="">or continue with</div>
          <div className="flex-auto h-0.5 bg-gray-300" />
        </div>
        <div className="flex text-center mt-3 gap-x-5">
          <div className="flex-1 border rounded-xl hover:bg-blue-100 cursor-pointer">
            <div className="m-auto flex justify-center py-2">
              <svg
                width="24px"
                height="24px"
                viewBox="-0.5 0 48 48"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">

                  <title>Google-color</title> <desc>Created with Sketch.</desc>
                  <defs> </defs>
                  <g
                    id="Icons"
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >

                    <g id="Color-" transform="translate(-401.000000, -860.000000)">

                      <g id="Google" transform="translate(401.000000, 860.000000)">

                        <path
                          d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                          id="Fill-1"
                          fill="#FBBC05"
                        >

                        </path>
                        <path
                          d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                          id="Fill-2"
                          fill="#EB4335"
                        >

                        </path>
                        <path
                          d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                          id="Fill-3"
                          fill="#34A853"
                        >

                        </path>
                        <path
                          d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                          id="Fill-4"
                          fill="#4285F4"
                        >

                        </path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="flex-1 border rounded-xl hover:bg-blue-100 cursor-pointer">
            <div className="m-auto flex justify-center py-2">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 48 48"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">

                  <title>Facebook-color</title> <desc>Created with Sketch.</desc>
                  <defs> </defs>
                  <g
                    id="Icons"
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >

                    <g
                      id="Color-"
                      transform="translate(-200.000000, -160.000000)"
                      fill="#4460A0"
                    >

                      <path
                        d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z"
                        id="Facebook"
                      >

                      </path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="flex-1 border rounded-xl hover:bg-blue-100 cursor-pointer">
            <div className="m-auto flex justify-center py-2">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">

                  <title>github [#142]</title> <desc>Created with Sketch.</desc>
                  <defs> </defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >

                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-140.000000, -7559.000000)"
                      fill="#000000"
                    >

                      <g id="icons" transform="translate(56.000000, 160.000000)">

                        <path
                          d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                          id="github-[#142]"
                        >

                        </path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div> : <div className="p-1">
      <div className="max-w-md m-auto rounded-xl p-6 shadow-lg bg-white">
        <div className="m-auto rounded w-16 h-16"><img src={logo} alt="" /></div>
        <div className="font-bold text-2xl text-center mt-5 text-gray-800">
          <h1>Create an account</h1>
        </div>
        <div className="text-gray-800 text-md text-center mt-2">
          Already have an account? <span onClick={() => { navigate('/signin') }} className="text-blue-400 font-bold hover:underline cursor-pointer">
            Log in
          </span>
        </div>
        <div className="mt-4">
          <label htmlFor="" className="text-gray-600 font-semibold">
            Name
          </label>
          <input type="text" className="transition-colors w-full rounded-md h-10 border indent-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
        </div>
        <div className="mt-4">
          <label htmlFor="" className="text-gray-600 font-semibold">
            Mobile Number
          </label>
          <input type="number" className="transition-colors w-full rounded-md h-10 border indent-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
        </div>
        <div className="mt-4">
          <label htmlFor="" className="text-gray-600 font-semibold">
            Email
          </label>
          <input type="email" required className="transition-colors w-full rounded-md h-10 border indent-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
        </div>
        <div className="mt-4">
          <label className="text-gray-600 font-semibold" htmlFor="">
            Password
          </label>
          <input type="text" className="transition-colors w-full rounded-md h-10 border indent-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
        </div>

        <div className="mt-6">
          <button onClick={()=>{registerUser()}} className="bg-blue-500 w-full rounded-md text-white font-bold py-2">
            Create Account
          </button>
        </div>
        <div className="flex items-center gap-x-2 mt-5">
          <div className="flex-auto h-0.5 bg-gray-300" />
          <div className="">or sign up with</div>
          <div className="flex-auto h-0.5 bg-gray-300" />
        </div>
        <div className="flex text-center mt-3 gap-x-5">
          <div className="flex-1 border rounded-xl hover:bg-blue-100 cursor-pointer">
            <div className="m-auto flex justify-center py-2">
              <svg
                width="24px"
                height="24px"
                viewBox="-0.5 0 48 48"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">

                  <title>Google-color</title> <desc>Created with Sketch.</desc>
                  <defs> </defs>
                  <g
                    id="Icons"
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >

                    <g id="Color-" transform="translate(-401.000000, -860.000000)">

                      <g id="Google" transform="translate(401.000000, 860.000000)">

                        <path
                          d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                          id="Fill-1"
                          fill="#FBBC05"
                        >

                        </path>
                        <path
                          d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                          id="Fill-2"
                          fill="#EB4335"
                        >

                        </path>
                        <path
                          d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                          id="Fill-3"
                          fill="#34A853"
                        >

                        </path>
                        <path
                          d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                          id="Fill-4"
                          fill="#4285F4"
                        >

                        </path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="flex-1 border rounded-xl hover:bg-blue-100 cursor-pointer">
            <div className="m-auto flex justify-center py-2">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 48 48"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">

                  <title>Facebook-color</title> <desc>Created with Sketch.</desc>
                  <defs> </defs>
                  <g
                    id="Icons"
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >

                    <g
                      id="Color-"
                      transform="translate(-200.000000, -160.000000)"
                      fill="#4460A0"
                    >

                      <path
                        d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z"
                        id="Facebook"
                      >

                      </path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="flex-1 border rounded-xl hover:bg-blue-100 cursor-pointer">
            <div className="m-auto flex justify-center py-2">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">

                  <title>github [#142]</title> <desc>Created with Sketch.</desc>
                  <defs> </defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                  >

                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-140.000000, -7559.000000)"
                      fill="#000000"
                    >

                      <g id="icons" transform="translate(56.000000, 160.000000)">

                        <path
                          d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                          id="github-[#142]"
                        >

                        </path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>}
    {loging ? <div className="flex items-center justify-center absolute top-0 left-0 h-screen w-screen bg-[#000000ad]">
      <div className="loader"></div>
    </div> : ""}
  </div>

}