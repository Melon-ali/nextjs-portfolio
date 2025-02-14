"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import photo from "../../../public/avatar.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import {
  MdEmail,
  MdOutlinePhoneInTalk,
  MdOutlineLocationOn,
} from "react-icons/md";
import ContactForm from "../forms/ContactForm";
// import ContactForm from "@/components/forms/ContactForm";
export default function ContactComponent() {
  return (
    <div className="pt-16 bg-gray-900">
      <motion.div
        initial={{ opacity: 0, scale: 0, y: -500 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.75 }}
      >
        <h1 className=" text-center text-2xl mt-16 font-bold text-white">Get in Touch</h1>
        <h1 className=" text-center text-5xl font-bold text-white">
          Contact Me and About a Project!
        </h1>
      </motion.div>
      <div className="py-12 flex flex-col-reverse justify-center md:flex-row gap-20 md:gap-6 space-y-5 overflow-hidden">
        {/* form  */}
        <motion.div
          initial={{ opacity: 0, scale: 0, x: -500 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          className="flex flex-col gap-4 bg-slate-200 rounded-3xl p-10 mt-32 md:mt-4 md:w-8/12 lg:w-4/12 w-full shadow-xl"
        >
          <ContactForm />
        </motion.div>
        {/* profile section  */}
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 500 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.75 }}
          className="md:w-4/12 w-full flex justify-center "
        >
          <div className="h-56 w-72 absolute flex justify-center items-center">
            <Image
              className="object-cover h-20 w-20 rounded-full"
              src={photo}
              alt="avater"
              width={100}
              height={100}
              priority
            />
          </div>

          <div
            className="
          h-56
          mx-4
          w-5/6
          bg-slate-200
          rounded-3xl
          shadow-md
          sm:w-80 sm:mx-0
        "
          >
            <div className="h-1/2 w-full flex justify-between items-baseline px-3 py-5"></div>

            <div
              className="
            bg-white
            h-auto
            w-full
            rounded-3xl
            flex flex-col
            justify-around
            items-center
            shadow-xl
          "
            >
              <div className="w-full mt-12 mb-6 px-2 flex flex-col justify-center items-center space-y-5">
                <h1 className="font-bold">Melon Ali</h1>
                <h1 className=" text-sm flex items-center gap-1">
                  <MdEmail />
                  <a href="mailto:ayankumar.akd@gmail.com">
                    melonali200@gmail.com
                  </a>
                </h1>
                <h1 className=" text-sm flex items-center gap-1">
                  <MdOutlinePhoneInTalk /> (+88) 01738349069
                </h1>
                <h1 className=" text-sm text-justify flex items-center gap-1">
                  <MdOutlineLocationOn /> Rajshahi, Bangladesh
                </h1>
                <div className="grid grid-flow-col gap-4 text-3xl pt-2 text-pinky">
                  <motion.a
                    whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                    target="_blank"
                    href="https://www.facebook.com/md.melon.581"
                  >
                    <FaFacebook></FaFacebook>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                    target="_blank"
                    href="https://www.instagram.com/md.melon.581"
                  >
                    <FaInstagram></FaInstagram>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                    target="_blank"
                    href="https://www.linkedin.com/in/melon-ali/"
                  >
                    <FaLinkedin></FaLinkedin>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                    target="_blank"
                    href="https://github.com/Melon-ali"
                  >
                    <FaGithub></FaGithub>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
