import React from "react";
import { FaTiktok, FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return <>
  <div className='flex justify-between py-4 w-4/5 md:w-2/3 mx-auto'>
    <a href='https://www.tiktok.com/@oba_bisi' target="_blank"><FaTiktok className='w-10 h-10' /></a>
    <a href="https://x.com/king_tijesu" target="_blank"><RiTwitterXLine className='w-10 h-10' /></a>
    <a href="https://facebook.com/obafemi.adebisi.73" target="_blank"><FaFacebookF className='w-10 h-10' /></a>
    <a href="https://instagram.com/oba_bisi" target="_blank"><FaInstagram className='w-10 h-10' /></a>
    <a href="mailto:obafemiadebisi19@gmail.com" target="_blank"><AiOutlineMail className='w-10 h-10' /></a>
    <a href="tel:+2349130696617" target="_blank"><FaPhoneAlt className='w-10 h-10' /></a>
  </div>
  <div className="w-4/5 md:w-2/3 mx-auto text-center">
    <p>All rights reserved &copy; 2024</p>
    <a href="https://wa.me/2348126123194">Made by DevDan</a>
  </div>
  </>
};

export default Footer;
