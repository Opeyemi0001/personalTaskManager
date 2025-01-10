import "./Home.css";

// const Home = () => {
//   return (
//     <div className="flex flex-col bg-gray-100 items-center justify-center text-center h-screen space-y-6 px-4">
//       {/* Header Section */}
//       <div>
//         <h1 className="font-normal  md:text-4xl text-3xl lg:text-7xl leading-10 ">
//           <span className="">Stay Organized, Stay</span>
//           <br /> <span className="my-6 inline-block" >
//             <i class="fa-solid fa-arrow-up"></i>
//             Ahead.</span>
//         </h1>
//         <p className="mt-4 text-gray-600 text-base md:text-lg">
//           OprahTask helps you manage your tasks and time effectively, <br />
//           giving you the control to focus on what truly matters.
//         </p>
//       </div>

//       {/* Button Section */}
//       <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
//         Get Started for Free
//       </button>
//     </div>
//   );
// };

// export default Home;

const Home = () => {
  return (
    <div className="flex flex-col bg-gray-100 items-center justify-center text-center h-screen space-y-6 px-4">
      {/* Header Section */}
      <div>
        <h1 className="font-normal md:text-4xl text-3xl lg:text-7xl leading-10">
          <span>Stay Organized, Stay</span>
          <br />
          <span className="my-6 inline-block ">
            <i
              className="fa-solid fa-arrow-up bg-blue-500 text-white p-2 rounded-full transform rotate-45 mr-4"
            ></i>
            Ahead.
          </span>
        </h1>
        <p className="mt-4 text-gray-600 text-base md:text-lg">
          OprahTask helps you manage your tasks and time effectively, <br />
          giving you the control to focus on what truly matters.
        </p>
      </div>

      {/* Button Section */}
      <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
        Get Started for Free
      </button>
    </div>
  );
};

export default Home;


// const Home = () => {
//   return (
//     <div className="flex items-center justify-center text-center h-screen bg-gray-100">
//       <div className="text-center p-6">
//         <h1 className="font-medium text-3xl mb-4">
//           Stay Organized, <span className="text-blue-500">stay Ahead.</span>
//         </h1>
//         <p className="text-lg text-gray-700 mb-6">
//           OprahTask helps you manage your tasks and time effectively, giving you the control to focus on what truly matters.
//         </p>
//         <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300">
//           Get Started for Free
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;

