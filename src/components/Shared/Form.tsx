const Form = () => {
  return (
    <div className="bg-[#F4F4F433] bg-opacity-70 backdrop-blur-md rounded-lg p-6 text-white  w-full">
      <div className="">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Sign Up with Email
        </h1>
        <form className="space-y-4">
          <div className="flex justify-between  gap-3">
            {/* First Name */}
            <div className="w-full">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium mb-1"
              >
                First Name
              </label>
              <input
                id="first-name"
                type="text"
                placeholder="Enter your first name"
                className="w-full bg-white bg-opacity-20 border-none rounded-md px-2  py-2 text-white placeholder-white focus:outline-none"
              />
            </div>

            {/* Last Name */}
            <div className="w-full">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium mb-1"
              >
                Last Name
              </label>
              <input
                id="last-name"
                type="text"
                placeholder="Enter your last name"
                className="w-full bg-white bg-opacity-20 border-none rounded-md px-2  py-2 text-white placeholder-white focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white bg-opacity-20 border-none rounded-md px-2  py-2 text-white placeholder-white focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full bg-white bg-opacity-20 border-none rounded-md px-2  py-2 text-white placeholder-white focus:outline-none"
            />
          </div>
          <p className="text-center">
            <span>You are already member </span>
            <span
              className="underline-offset-3 underline
        "
            >
              <a href="">log in</a>
            </span>
          </p>

          {/* Submit Button */}
          <div className="w-full flex items-center justify-center gap-2 bg-[#0872BA] cursor-pointer text-white font-semibold py-2 rounded-md mt-4 focus:outline-none">
            <span> Sign Up</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 fill-white"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
