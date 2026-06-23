const Services = () => {
  return (
    <div>
      <section className="md:py-15 md:px-25 p-10 grid md:grid-cols-2 grid-cols-1 justify-center gap-12 lg:pl-32">
        <div className="flex lg:items-start items-center flex-col mt-15">
          <img
            className="h-[55px] w-[220px] object-contain"
            src="/services/our_services.png"
            alt="services"
          />
          <span className="text-[18px] text-[#6B788E] tracking-[12%] font-light mt-10 mb-4 lg:text-left text-center">
            KNOWING OUR CUSTOMERS NEEDS
          </span>
          <div className="font-bold text-[25px] lg:text-left text-center">
            <span className="text-[#D95103]">We're more than just momos.</span>{" "}
            We're a full-service dining experience.
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="/services/male_chef.png"
            className="w-full max-w-[500px] object-contain"
            alt="about-us-chef"
          />
        </div>
      </section>

      <section>
        <div
          className="relative h-160 w-full bg-cover bg-end flex flex-col justify-center items-center object-cover"
          style={{ backgroundImage: "url('/services/dine_with_us.png')" }}
        >
          <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

          <div className="absolute lg:bottom-20 lg:left-20 z-10 text-center flex flex-col lg:items-start items-center">
            <div className="text-white md:text-[40px] text-2xl font-bold">
              Dine With Us
            </div>
            <div className="text-white md:text-[20px] text-xl mt-2">
              Enjoy our momos in the comfort of your own home with our delivery
              services
            </div>

            <button className="bg-[#0C6967] hover:bg-[#094f4e] rounded-full py-4 px-8 text-white flex items-center mt-14 gap-2 cursor-pointer transition-colors">
              <img className="w-8 h-8" src="video-icon.png" alt="video-icon" />{" "}
              Watch the Video
            </button>
          </div>
        </div>
      </section>

      <section className="px-8 py-10 lg:px-30 lg:py-15">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
          <div className="flex flex-col lg:px-20">
            <img
              className="h-18 w-18"
              src="private_party.png"
              alt="private-party"
            />
            <div className="text-[31px] font-bold mt-3">Private Party</div>
            <span className="text-[16px] mt-4 text-[#6B788E]">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing. Leo odio tincidunt ipsum magna lacus viverra
              tincidunt.
            </span>
            <div className="flex justify-between flex-wrap mt-5 p-5 shadow-md rounded-lg w-full">
              <div className="text-[#0C6967] font-bold text-[18px]">
                Scan the QR code
                <p className="text-[#6B788E] text-[12px] font-normal">
                  You can also check about the service
                </p>
              </div>
              <div className="flex justify-center lg:mt-0 mt-5">
                <img
                  className="h-[105px] object-contain"
                  src="/QR.png"
                  alt="Qr"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              className="w-full max-w-[450px] object-contain"
              src="/services/celebrating.png"
              alt=""
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-20">
          <div className="flex flex-col lg:px-20 lg:order-2">
            <img className="h-18 w-18" src="catering.png" alt="catering" />
            <div className="text-[31px] font-bold mt-3">Private Party</div>
            <span className="text-[16px] mt-4 text-[#6B788E]">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing. Leo odio tincidunt ipsum magna lacus viverra
              tincidunt.
            </span>
            <div className="flex justify-between flex-wrap mt-5 p-5 shadow-md rounded-lg w-full">
              <div className="text-[#0C6967] font-bold text-[18px]">
                Scan the QR code
                <p className="text-[#6B788E] text-[12px] font-normal">
                  You can also check about the service
                </p>
              </div>
              <div className="flex justify-center lg:mt-0 mt-5">
                <img
                  className="h-[105px] object-contain"
                  src="/QR.png"
                  alt="Qr"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:order-1">
            <img
              className="w-full max-w-[450px] object-contain"
              src="/services/celebrating.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="lg:p-40 p-8 flex items-center justify-center">
        <div className="bg-[#F5F6F7] p-16 flex flex-col justify-center items-center rounded-2xl lg:w-[90%] w-full">
          <h3 className="font-bold text-[25px]">Got any Queries?</h3>
          <p className="text-[#6B788E] mt-4">
            If you have any queries, send us a message. Our Friendly team would
            love to hear from you{" "}
          </p>
          <button className="bg-[#0C6967] hover:bg-[#094f4e] mx-auto lg:mx-0 rounded-full py-4 px-12 text-white flex items-center mt-10 gap-2 cursor-pointer">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
