import React from "react";
import { FaTiktok, FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="p-6 flex justify-center items-center">
      <div className="w-full md:w-2/3">
        <div className="w-full h-[30rem] bg-heroimage"></div>
        <h1 className="font-black text-5xl p-2 text-center">Oniosun Obafemi</h1>
        <div className="flex justify-between py-4 w-4/5 md:w-2/3 mx-auto">
        <a href="https://www.tiktok.com/@oba_bisi" target="_blank">
          <FaTiktok className="w-10 h-10" />
        </a>
        <a href="https://x.com/king_tijesu" target="_blank">
          <RiTwitterXLine className="w-10 h-10" />
        </a>
        <a href="https://facebook.com/obafemi.adebisi.73" target="_blank">
          <FaFacebookF className="w-10 h-10" />
        </a>
        <a href="https://instagram.com/oba_bisi" target="_blank">
          <FaInstagram className="w-10 h-10" />
        </a>
        <a href="mailto:obafemiadebisi19@gmail.com" target="_blank">
          <AiOutlineMail className="w-10 h-10" />
        </a>
        <a href="tel:+2349130696617" target="_blank">
          <FaPhoneAlt className="w-10 h-10" />
        </a>
      </div>
        <p className="leading-8 text-xs md:text-normal">
          Oniosun Obafemi is an open minded individual with great social skills.
          He is a trained actor, screenwriter, make up artist, decorator and
          certified filmmaker. He is a graduate of ekiti state university
          (English Education)
        </p>
        <p className="leading-8 text-xs md:text-normal">
          He had his first training at Apex produktion studio where he learned
          the rudiments and basics of screenwriting, dialogue directing, acting
          and directing.
        </p>
      </div>
    </div>
  );
};

export default Hero;
