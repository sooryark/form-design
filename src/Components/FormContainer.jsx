import GoogleIcon from "../assets/GoogleIcon";
import FacebookIcon from "../assets/facebookIcon";
import Input from "./Input";

const FormContainer = () => {
  return (
    <div className="bg-white shadow-lg p-8 w-[380px] h-[70vh] rounded-sm">
      <div className="mb-4">
        <h1 className="font-bold text-3xl">Login</h1>
        <p className="text-gray-400 ">
          Doesn&apos;t have an account yet?
          <span className="text-[#864AF9] underline underline-offset-2 text-sm ml-4">
            Sign up
          </span>
        </p>
      </div>
      <form action="#">
        <div className="mb-3">
          <label className="font-bold mb-1">Email Address</label>
          <Input
            type="text"
            placeholder="You@gmail.com"
            className="border border-2 rounded-lg block w-full p-3"
          />
        </div>
        <div className="mb-3">
          <div className="flex justify-between">
            <label className="font-bold mb-1">Password</label>
            <span className="text-[#864AF9] underline underline-offset-2 text-sm">
              Forgot Password?
            </span>
          </div>

          <Input
            type="password"
            placeholder="Enter 6 charcter or More"
            className="border border-2 rounded-lg block w-full p-3"
          />
        </div>
        <div className="mb-5 flex items-center">
          <input type="checkbox" className="w-4 h-4 rounded-lg mr-2" />
          <label className="text-gray-400">Remember Me?</label>
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-[#864AF9] text-white rounded-md mb-3 text-sm"
        >
          LOGIN
        </button>
        <div className="mb-5 flex items-center justify-center gap-1">
          <p className="border w-[30%] h-0"></p>
          <p className="text-center text-gray-400 text-sm">or Login With</p>
          <p className="border w-[30%] h-0"></p>
        </div>
        <div className="flex justify-center items-center gap-5">
          <button className="flex items-center gap-1 py-3 justify-center px-7 border border-1 border-red-500 rounded-lg text-red-500 w-full ">
            <GoogleIcon />
            Google
          </button>
          <button className="flex items-center gap-1 py-3 justify-center px-7 border border-1 border-blue-700 rounded-lg text-blue-700 w-full">
            <FacebookIcon />
            FaceBook
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormContainer;
