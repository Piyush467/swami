import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import contactImg from "../../src/assets/images/ct.jpg";

export default function Contact() {
  return (
    <div className="bg-[#FFFCDD] py-12 md:py-20 px-4">

      {/* ================= HEADER ================= */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl lg:text-[56px] leading-tight md:leading-[60px] font-medium font-serif">
          Let's{" "}
          <span className="font-semibold text-[#FF5900]">Connect</span>{" "}
          <span className="text-2xl md:text-4xl">with</span>{" "}
          <span className="font-bold italic text-[#FF5900]">
            Love & Joy
          </span>
        </h1>

        <p className="mt-6 text-[#364153] text-sm md:text-base">
          Have a question, want to share your story, or interested in joining
          our community? We'd love to hear from you.
        </p>

        <div className="mx-auto mt-4 w-[163px] border-t border-dashed border-[#FF5900]" />
      </div>

      {/* ================= MAIN CARD ================= */}
      <div className="max-w-[1306px] mx-auto mt-12 md:mt-16 bg-white rounded-[36px] border-[5px] border-white shadow-lg overflow-hidden flex flex-col lg:flex-row">

        {/* ===== LEFT IMAGE ===== */}
        <div className="relative lg:w-[555px] h-[350px] lg:h-auto">
          <img
            src={contactImg}
            alt="Contact"
            className="h-full w-full object-cover lg:rounded-l-[24px]"
          />

          {/* Overlay Text */}
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 max-w-[300px] md:max-w-[380px] text-white">
            <p className="italic font-bold text-sm md:text-lg leading-6 md:leading-8 font-serif">
              "I am listening with an open heart.
              <br />
              Speak freely."
            </p>

            <p className="mt-2 md:mt-3 text-xs md:text-sm underline opacity-80">
              Swami Tirtha
            </p>
          </div>
        </div>

        {/* ===== RIGHT FORM ===== */}
        <div className="lg:w-[679px] px-6 md:px-14 py-10 md:py-12 flex flex-col justify-between">

          <div className="space-y-8 md:space-y-10">

            {/* Heading */}
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-[#364153]">
                Send a Message
              </h2>

              <p className="text-[#36415399] mt-2 text-sm">
                Fields marked with * are required
              </p>
            </div>

            {/* Form */}
            <form className="space-y-5 md:space-y-6">

              {/* Row 1 */}
              <div className="flex flex-col md:flex-row gap-5 md:gap-[45px]">
                <div className="flex-1">
                  <label className="text-sm font-medium text-[#101828]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full mt-2 h-12 bg-[#FBFBFB] rounded-[16px] border-t border-[#FF823733] px-4 outline-none"
                  />
                </div>

                <div className="flex-1">
                  <label className="text-sm font-medium text-[#101828]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your surname"
                    className="w-full mt-2 h-12 bg-[#FBFBFB] rounded-[16px] border-t border-[#FF823733] px-4 outline-none"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-[#101828]">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 h-12 bg-[#FBFBFB] rounded-[16px] border-t border-[#FF823733] px-4 outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium text-[#101828]">
                  Message *
                </label>
                <textarea
                  rows="6"
                  placeholder="How can we help today"
                  className="w-full mt-2 bg-[#FBFBFB] rounded-[16px] border-t border-[#FF823733] px-4 py-3 outline-none resize-none"
                />
              </div>

              {/* Social Icons */}
              <div className="flex gap-6 text-[#FF5900] text-lg">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FaFacebookF />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                  <FaYoutube />
                </a>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full h-[41px] rounded-[24px] bg-[#FF6916] text-white font-semibold border border-white/30"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ================= SOCIAL SECTION ================= */}
      <div className="max-w-[1440px] mx-auto bg-white rounded-t-[36px] mt-16 md:mt-20 py-12 text-center px-4">

        <h2 className="text-3xl md:text-5xl font-bold font-serif">
          Connect{" "}
          <span className="italic text-[#FF5900]">
            On Socials
          </span>
        </h2>

        <p className="text-[#36415399] mt-4">
          Join the community on your favorite platform
        </p>

        <div className="mx-auto mt-4 w-[249px] border-t border-dashed border-[#FF5900]" />

        {/* 3 Columns */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-12 divide-y md:divide-y-0 md:divide-x">

          {/* YouTube */}
          <div className="px-10 py-8 text-center">
            <div className="w-10 h-10 bg-[#FF823733] rounded-full flex items-center justify-center mx-auto">
              <FaYoutube className="text-[#FF5900]" />
            </div>

            <p className="mt-3 font-bold text-[#1F2A2E]">
              Orange Cowboy Channel
            </p>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-500 underline inline-flex items-center gap-2 mt-1"
            >
              SUBSCRIBE <FaArrowUpRightFromSquare className="text-[#FF5900]" />
            </a>
          </div>

          {/* LinkedIn */}
          <div className="px-10 py-8 text-center">
            <div className="w-10 h-10 bg-[#FF823733] rounded-full flex items-center justify-center mx-auto">
              <FaLinkedinIn className="text-[#FF5900]" />
            </div>

            <p className="mt-3 font-bold text-[#1F2A2E]">
              Swami ji Profile
            </p>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-500 underline inline-flex items-center gap-2 mt-1"
            >
              CONNECT <FaArrowUpRightFromSquare className="text-[#FF5900]" />
            </a>
          </div>

          {/* Email */}
          <div className="px-10 py-8 text-center">
            <div className="w-10 h-10 bg-[#FF823733] rounded-full flex items-center justify-center mx-auto">
              <FaInstagram className="text-[#FF5900]" />
            </div>

            <p className="mt-3 font-bold text-[#1F2A2E]">
              contact@orangecowboy.com
            </p>

            <a
              href="mailto:contact@orangecowboy.com"
              className="text-sm text-gray-500 underline inline-flex items-center gap-2 mt-1"
            >
              EMAIL <FaArrowUpRightFromSquare className="text-[#FF5900]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}