import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#FFF4CC] min-h-screen py-16 px-4 mt-5 sm:px-8 md:px-12">

      {/* ================= HEADING ================= */}
      <div className="text-center">

        <h1 className="font-playfair font-bold text-[36px] sm:text-[42px] md:text-[48px] leading-none">
          <span className="text-[#2E3D4C]">Privacy </span>
          <span className="text-[#FF5900] italic">Policy</span>
        </h1>

        {/* Dotted Line */}
        <div className="border-t-2 border-dotted border-[#FF5900] w-full max-w-[1232px] mx-auto mt-6" />

      </div>

      {/* ================= INTRO TEXT ================= */}

      <p className="
        max-w-[1232px]
        mx-auto
        text-center
        text-[#364153]
        text-[14px] sm:text-[15px] md:text-[16px]
        leading-[25px]
        mt-6
      ">
        This privacy policy (“policy”) will help you understand how{" "}
        <span className="font-bold">
          OrangeCowboy.com
        </span>{" "}
        (Peaceful Press Productions, LLC) uses and protects the data you provide
        to us when you visit and use this website. We reserve the right to change
        this policy at any given time, of which you will be promptly updated. If
        you want to make sure that you are up to date with the latest changes,
        we advise you to frequently visit this page.
      </p>

      {/* Dotted Line */}
      <div className="border-t-2 border-dotted border-[#FF5900] max-w-[1232px] mx-auto mt-6" />

      {/* ================= MAIN CONTENT ================= */}

      <div className="
        max-w-[1150px]
        mx-auto
        mt-12
        space-y-10
      ">

        {/* ROW 1 */}
        <div className="grid md:grid-cols-[260px_1fr] gap-6 md:gap-[123px]">

          <h3 className="font-bold text-[#364153] text-[16px] leading-[25px]">
            What User Data We Collect
          </h3>

          <p className="text-[#36415399] text-[16px] leading-[22px]">
            When you visit the website, we do not collect any of your
            information. If you sign up for our newsletter we will collect your
            name and email address.
          </p>

        </div>

        {/* ROW 2 */}
        <div className="grid md:grid-cols-[260px_1fr] gap-6 md:gap-[123px]">

          <h3 className="font-bold text-[#364153] text-[16px] leading-[25px]">
            Why We Collect Your Data
          </h3>

          <p className="text-[#36415399] text-[16px] leading-[22px]">
            If we collect your data it will be through you signing up for a newsletter only.Safeguarding and Securing the Data.
We are committed to securing your data and keeping it confidential. We have done all in its power to prevent data theft, unauthorized access, and disclosure by implementing the latest technologies and software, which help us safeguard all the information we collect online.
          </p>

        </div>

        {/* ROW 3 */}
        <div className="grid md:grid-cols-[260px_1fr] gap-6 md:gap-[123px]">

          <h3 className="font-bold text-[#364153] text-[16px] leading-[25px]">
            Our Cookie Policy
          </h3>

          <p className="text-[#36415399] text-[16px] leading-[22px]">
           Once you agree to allow our website to use cookies, please note that cookies don't allow us to gain control of your computer in any way. We do not analyze any of your data and we do not store any information including cookies.<br/>
If you want to disable cookies, you can do it by accessing the settings of your internet browser. (Provide links for cookie settings for major internet browsers).
          </p>

        </div>

        {/* ROW 4 */}
        <div className="grid md:grid-cols-[260px_1fr] gap-6 md:gap-[123px]">

          <h3 className="font-bold text-[#364153] text-[16px] leading-[25px]">
            Links to Other Websites
          </h3>

          <p className="text-[#36415399] text-[16px] leading-[22px]">
           Our website may contain links that lead to other websites. If you click on these links Peaceful Press Productions LLC is not held responsible for your data and privacy protection. Visiting those websites is not governed by this privacy policy agreement. Make sure to read the privacy policy documentation of the website you go to from our website.
          </p>

        </div>

        {/* ROW 5 */}
        <div className="grid md:grid-cols-[260px_1fr] gap-6 md:gap-[123px]">

          <h3 className="font-bold text-[#364153] text-[16px] leading-[25px]">
            Restricting the Collection of Your Personal Data
          </h3>

          <p className="text-[#36415399] text-[16px] leading-[22px]">
            At some point, you might wish to restrict the use and collection of your personal data. You can achieve this by doing the following:
When you are filling the forms on the website, make sure to check if there is a box which you can leave unchecked, if you don't want to disclose your personal information. If you have already agreed to share your information with us, feel free to contact us via email and we will be more than happy to change this for you.
Peaceful Press Productions LLC (OrangeCowboy.com) will not lease, sell or distribute your personal information to any third parties, unless we have your permission. We might do so if the law forces us. Your personal information will be used when we need to send you promotional materials if you agree to this privacy policy
          </p>

        </div>

      </div>

    </div>
  );
};

export default PrivacyPolicy;