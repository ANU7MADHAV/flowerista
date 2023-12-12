import { MdArrowForwardIos } from "react-icons/md";

const Message = () => {
  return (
    <div className="flex flex-col items-center justify-center border-b-1 border-t-1">
      <div className="flex items-center justify-center px-8  py-4">
        <div className="flex flex-col items-center justify-center py-2 text-center md:flex-row">
          <div className="flex flex-col items-center justify-center px-2">
            <h2 className="py-2 font-thin">WANT TO CONTACT US?</h2>
            <h3 className="py-1">SEND US A MESSAGE</h3>
            <p className="py-8 font-thin">
              Whether you are planning a wedding, a corporate meeting or a
              social gathering, the diverse scope of Infinity Hospitality Group
              allows for the creation of unique events for all occasions.
            </p>
            <div className=" mb-8 h-full w-[50px] rounded-full bg-black py-4 pl-4 text-white hover:bg-blue-600 hover:text-white dark:bg-white dark:text-black dark:hover:bg-gray-600">
              <MdArrowForwardIos />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center px-2">
            <h2 className="py-2 font-thin">FROM THE BLOG</h2>
            <h3 className="py-1">LATEST BLOG ARTICLES</h3>
            <p className="py-8 font-thin">
              Take a look at our Infinity Blog for advice from our Event
              Specialists, real weddings, and the latest trends in Nashville
              events, DIY weddings, event planning, and more!
            </p>
            <div className=" mb-8 h-full w-[50px] rounded-full bg-black py-4 pl-4 text-white hover:bg-blue-600 hover:text-white dark:bg-white dark:text-black dark:hover:bg-gray-600">
              <MdArrowForwardIos />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center px-2">
            <h2 className="py-2 font-thin">STAY IN THE LOOP</h2>
            <h3>SIGN UP FOR OUR NEWSLETTER</h3>
            <p className="py-8 font-thin">
              Sign up for our Infinity Newsletter to receive wedding
              inspiration, helpful tips and tricks, see the hottest trends in
              Nashville weddings, and more delivered straight to your inbox!
            </p>
            <div className=" mb-8 h-full w-[50px] rounded-full bg-black py-4 pl-4 text-white hover:bg-blue-600 hover:text-white dark:bg-white dark:text-black dark:hover:bg-gray-600">
              <MdArrowForwardIos />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="-mb-2 px-2 py-2 text-sm text-pink-400 md:text-lg">
          Photos by Sara Bill Photography, John Myers Photography, Jordyn
          Smalling, & Details Nashville.{" "}
        </p>
      </div>
    </div>
  );
};

export default Message;
