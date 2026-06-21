import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

const About = () => {
  return (
    <div className="overflow-hidden">
      <section className="grid grid-cols-1 md:grid-cols-2 py-10 px-6 md:px-12 lg:pl-32 items-center lg:items-start gap-10 md:gap-0 ">
        <div className="flex flex-col md:items-start items-center max-w-xl mx-auto md:mx-0 lg:pt-20">
          <img
            className="w-36 sm:w-44 md:w-[190px] h-auto object-contain"
            src="/about_us.png"
            alt="about_us"
          />
          <div className="mt-8 text-center md:text-left">
            <span className="text-[#6B788E] tracking-[12%] text-sm sm:text-base md:text-[18px]">
              WE PRIDE OURSELF ON
            </span>
            <p className="font-bold text-2xl sm:text-3xl md:text-[35px] mt-4 leading-tight">
              <span className="text-[#D95103]">Our authentic momo recipes</span>{" "}
              passed down through generations
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <img
            src="about_us_chef.png"
            className="w-full max-w-[500px] object-contain"
            alt="about-us-chef"
          />
        </div>
      </section>

      <section className="relative">
        <img
          className="lg:h-180 m-h-100 w-full lg:object-cover"
          src="/about_us_video.png"
          alt="about-us-video"
        />
        <div className="absolute inset-0 bg-linear-to-t  from-black/90 via-black/50 to-transparent"></div>
        <div className="hidden lg:block absolute bottom-30 left-50 text-white">
          <span className="text-[40px] font-bold ">
            Process behind the making
          </span>
          <div className="text-[20px] font-light">
            See how we make momos that you like from only the best ingredients
          </div>
          <button className="bg-[#0C6967] hover:bg-[#094f4e] rounded-full py-5 px-10 text-white flex items-center mt-10 gap-2 cursor-pointer">
            <img className="w-8 h-8" src="video-icon.png" alt="video-icon" />{" "}
            Watch the Video
          </button>
        </div>
      </section>

      <section className="py-12 px-6 md:px-12 lg:py-24 lg:px-24 xl:px-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-25 max-w-7xl mx-auto">
          <div className="text-2xl sm:text-3xl lg:text-[35px] font-bold leading-tight">
            Our momos are <span className="text-[#D95103]">made with love</span>
            <p className="mt-4 text-sm sm:text-base font-normal text-[#6B788E] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing. Leo odio tincidunt ipsum magna lacus viverra
              tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum
              velit viverra gravida consectetur sed facilisis ut morbi.
            </p>
          </div>

          <div className="relative w-full max-w-[500px]">
            <img
              className="w-full h-auto max-h-[450px] object-cover"
              src="/about_us/momo_making.png"
              alt="Momo making process"
            />

            <img
              className="hidden xl:block absolute h-auto w-[45%] max-w-[240px] -bottom-10 -left-16 object-contain animate-fade-in"
              src="buffmomo.png"
              alt="Buff momo platter"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-25 max-w-7xl mx-auto lg:mt-30 mt-20">
          <div className="relative w-full max-w-[500px] lg:order-1 order-2">
            <img
              className="w-full h-auto max-h-[450px] object-cover"
              src="/about_us/handcraft_momo.png"
              alt="Momo making process"
            />

            <img
              className="hidden xl:block absolute h-auto w-[45%] max-w-[240px] -bottom-10 -right-16 object-contain animate-fade-in"
              src="/fried_momo.png"
              alt="Buff momo platter"
            />
          </div>
          <div className="text-2xl sm:text-3xl lg:text-[35px] font-bold leading-tight lg:order-2 order-1 ">
            Taste the difference with{" "}
            <span className="text-[#D95103]">our handcrafted momos</span>
            <p className="mt-4 text-sm sm:text-base font-normal text-[#6B788E] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing. Leo odio tincidunt ipsum magna lacus viverra
              tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum
              velit viverra gravida consectetur sed facilisis ut morbi.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-25 max-w-7xl mx-auto lg:mt-30 mt-20">
          <div className="text-2xl sm:text-3xl lg:text-[35px] font-bold leading-tight  ">
            Our momos are the perfect{" "}
            <span className="text-[#D95103]">blend of tradition</span> and{" "}
            <span className="text-[#D95103]">innovation</span>
            <p className="mt-4 text-sm sm:text-base font-normal text-[#6B788E] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Lectus faucibus lorem ac
              adipiscing. Leo odio tincidunt ipsum magna lacus viverra
              tincidunt. Viverra aliquet sollicitudin eget dapibus. Vestibulum
              velit viverra gravida consectetur sed facilisis ut morbi.
            </p>
          </div>
          <div className="relative w-full max-w-[500px] ">
            <img
              className="w-full h-auto max-h-[450px] object-cover"
              src="/about_us/traditional_momo.png"
              alt="Momo making process"
            />

            <img
              className="hidden xl:block absolute h-auto w-[65%] max-w-[340px] -bottom-16 -left-45 object-contain animate-fade-in"
              src="/about_us/dumpling.png"
              alt="Buff momo platter"
            />
          </div>
        </div>
      </section>
      <section>
        <img
          className="lg:h-[640px] w-full object-cover"
          src="/about_us/quote.png"
          alt="quote"
        />
      </section>
      <section className="lg:p-25 p-8">
        <div className="text-center font-bold text-[35px]">
          Meet The <span className="text-[#D95103]">Team</span>
          <p className="text-[#0C6967] text-[20px]">
            Our talented team members who delivers only the best results
          </p>
        </div>
        <div className="flex flex-wrap gap-6 mt-12 justify-center items-center">
          <img
            className="h-[512px]"
            src="/about_us/head_chef.png"
            alt="head_chef"
          />
          <img
            className="h-[512px]"
            src="/about_us/assistant_chef.png"
            alt="head_chef"
          />
          <img
            className="h-[512px]"
            src="/about_us/assistant_chef2.png"
            alt="head_chef"
          />
        </div>
        <div className="flex flex-wrap justify-between mt-8 mx-8 items-center">
          <span className="font-bold text-[31px]">
            01 /
            <span className="font-normal text-[#C2C7D0] text-[25px]! ">
              {" "}
              05
            </span>
          </span>
          <div className="flex gap-5 items-center text-4xl">
            <FiArrowLeftCircle className="cursor-pointer transition-all duration-200 hover:scale-108 hover:-translate-x-0.2" />
            <FiArrowRightCircle className="cursor-pointer transition-all duration-200 hover:scale-108 hover:translate-x-0.2" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
