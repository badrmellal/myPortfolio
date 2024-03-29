import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div id="works" className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]">
      <div className=" bg-indigo-500 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2 
        data-aos="zoom-out"
         className="font-bold text-indigo-50 text-5xl sm:text-3xl">Let's Talk</h2>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
          <a 
          data-aos="fade-up" data-aos-duration="1000"

            href="https://www.linkedin.com/in/badr-mellal-207a34201/"
            className="box font-medium text-white   flex items-center justify-center flex-col"
          >
            <FaLinkedin className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Linkdin</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1200"

            href="https://wa.me/+447466068298?text=Hello%20there!"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <IoLogoWhatsapp className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>WhatsApp</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1400"

            href="https://www.instagram.com/badr_wireshark/"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <RiInstagramFill className="text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Instagram</p>
          </a>
        </div>
        <div className="sm:text-[12px]">
          | Copyright &copy; <span> Made with love.</span> All rights reserved
          <a href="#"></a> |
        </div>
      </div>
    </div>
  );
};

export default Footer;
