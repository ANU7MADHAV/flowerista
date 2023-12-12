const About = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center px-2">
      <div
        className="flex h-screen w-screen flex-col 
      items-center justify-center text-left md:flex-row md:items-center
      md:justify-center "
      >
        <div className="flex h-auto w-full flex-col px-2  py-2 text-sm md:text-center">
          <h2 className="py-2 font-light">ABOUT</h2>
          <p>
            Infinity Hospitality is a full-service event planning and design
            company providing a wide array of event services from venue styling
            to vendor management, event staffing, and more.
          </p>
        </div>
        <div className="h-auto w-full px-2 py-2 text-sm md:text-center">
          <h2 className=" py-2 font-light">INFINITY HOSPITALITY GROUP</h2>
          <div className="space-y-2">
            <p>The Bridge Building Event</p>
            <p>The Bell Tower</p>
            <p>Spaces The Estate at Cherokee Dock</p>
          </div>
        </div>
        <div className="h-auto w-full px-2 py-2 text-sm md:text-center">
          <h2 className="py-2 font-light">CONTACT US</h2>
          <div className="space-y-2">
            <p>345 Hill Ave. Nashville, TN 37210</p>
            <p>615.369.6474</p>
            <p>sales@infinityhospitality.net</p>
          </div>
        </div>
        <div className=" flex h-auto w-full flex-col  px-2 py-2 text-sm md:flex md:flex-col md:items-center md:justify-center md:text-center">
          <h2 className="py-2 font-light">SIGN UP FOR OUR NEWSLETTER</h2>
          <div className=" flex w-auto flex-col space-y-2 md:justify-center md:text-center">
            <input
              placeholder="email"
              className="my-2 h-10 w-[250px] border-2"
            />
            <button className="w-[100px] rounded-md bg-black py-2 text-white dark:bg-white dark:text-black">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
