import { FaPhoneAlt } from "react-icons/fa";
import { FaClock, FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <section className="md:py-20 md:px-20 py-15 px-10">
        <div className="flex justify-center items-center flex-col">
          <img
            className="h-[55px] w-[280px] object-contain"
            src="/contact_us/our_contact.png"
            alt=""
          />
          <span className="text-[24px] text-[#6B788E] tracking-[12%] font-light mt-10 text-center">
            GET IN TOUCH
          </span>
          <div className="font-bold text-[30px] text-center">
            <span className="text-[#D95103]">Our Friendly Team </span>would love
            to hear from you{" "}
          </div>
        </div>
        <div className="h-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-center gap-6 mt-8">
          <div className="rounded-2xl shadow-md p-12 h-full">
            <div className="flex items-center gap-4">
              <FaLocationDot className="text-3xl text-[#D95103]" />
              <span className="font-semibold"> LOCATION</span>
            </div>
            <div className="font-semibold italic text-[18px] mt-10">
              New Baneshwor -41201, Kathmandu, Bagmati, Nepal
            </div>
          </div>

          <div className="rounded-2xl shadow-md p-12 h-full">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-3xl text-[#D95103]" />
              <span className="font-semibold"> LOCATION</span>
            </div>
            <div className="flex justify-between font-semibold mt-5">
              <span className="text-[#0C6967]">Mobile:</span>
              <div className="italic">
                (+977) 980 5689789 <br /> (+977) 9841 275897
              </div>
            </div>
            <div className="flex justify-between font-semibold mt-3">
              <span className="text-[#0C6967]">Tel:</span>
              <span className="italic">01-4783972</span>
            </div>
          </div>

          <div className="rounded-2xl shadow-md p-12 h-full">
            <div className="flex items-center gap-4">
              <FaClock className="text-3xl text-[#D95103]" />
              <span className="font-semibold">SERVICE TIME</span>
            </div>
            <div className="flex justify-between font-semibold mt-5">
              <span className="text-[#0C6967]">MON-FRI</span>
              <div className="italic">8 am - 8pm</div>
            </div>
            <div className="flex justify-between font-semibold mt-3">
              <span className="text-[#0C6967]">SAT-SUN</span>
              <span className="italic">Closed</span>
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 pt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28265.76587739513!2d85.29151307431637!3d27.679571799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1924562f06c3%3A0xb81ea62db6935dd7!2sJOY%20MOMO%20-%20Sankhamul%2C%20Lalitpur!5e0!3m2!1sen!2snp!4v1782030800932!5m2!1sen!2snp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="bg-[#FAFBFB] p-10">
          <form className="bg-white rounded-2xl p-10">
            <div className="font-bold text-[30px]">
              Contact
              <span className="text-[#D95103]"> US</span>
            </div>
            <p className="text-[#6B788E] text-[14px] my-4">If you have any queries, send us a message. Our Friendly team would love to hear from you</p>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-2 mt-8">
              <div>
                <label className="" htmlFor="fname">
                  First Name
                </label>
                <div className="mt-2">
                  <input
                    id="fname"
                    name="fname"
                    className="rounded-lg h-10 border border-[#DFE2E6] w-full"
                  />
                </div>
              </div>
              <div>
                <label className="" htmlFor="lname">
                  last Name
                </label>
                <div className="mt-2">
                  <input
                    id="lname"
                    name="lname"
                    className="rounded-lg h-10 border border-[#DFE2E6] w-full"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="email">Email</label>
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="rounded-lg h-10 border border-[#DFE2E6] w-full"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="helper">What can we do for you</label>
              <div>
                <select
                  id="helper"
                  name="helper"
                  className="rounded-lg h-10 border border-[#DFE2E6] w-full"
                >
                  <option value={"1"}></option>
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <div className="flex items-center">
                <select
                  id="phone"
                  name="phone"
                  className="rounded-l-lg h-10 border border-[#DFE2E6] border-r-0 bg-transparent px-2"
                >
                  <option value="np">🇳🇵 +977</option>
                  <option value="in">🇮🇳 +91</option>
                </select>
                <input
                  id="phone"
                  type="text"
                  name="phone"
                  className="rounded-r-lg flex-1 h-10 border border-[#DFE2E6] px-3  focus:outline-gray-300"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="message">Message</label>
              <div>
                <textarea
                  id="message"
                  name="message"
                  type="text"
                  rows={6}
                  className="rounded-lg border border-[#DFE2E6] w-full"
                />
              </div>
            </div>
            <button className="bg-[#D95103] px-12 py-3 rounded-full text-white mt-8">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
