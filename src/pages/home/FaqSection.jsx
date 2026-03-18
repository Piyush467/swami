import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqTabs = [
  "Ayurveda Consultation",
  "Ayurveda Integrative",
  "Ayurveda Certification",
];

const faqData = {
  "Ayurveda Consultation": [
    {
      q: "How do we get to the root cause?",
      a: "Ayurveda is an ancient healing science from India focused on balancing the body, mind, and spirit. It helps you understand your unique nature and supports lasting health through diet, lifestyle, herbs, and daily routines.",
    },
    { q: "How do we personalize and analyze?", a: "" },
    { q: "How long will it take?", a: "" },
    { q: "What happens after the 4 weeks?", a: "" },
    { q: "How do we personalize and analyze?", a: "" },
  ],

  "Ayurveda Integrative": [
    { q: "What is integrative Ayurveda?", a: "" },
    { q: "Who can join this program?", a: "" },
  ],

  "Ayurveda Certification": [
    { q: "Do I get certification?", a: "" },
    { q: "Is it internationally recognized?", a: "" },
  ],
};

export default function FaqSection() {
  const [activeTab, setActiveTab] = useState(faqTabs[0]);
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="w-full bg-[#FFFCDD] py-16 md:py-20 lg:py-[80px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TITLE */}
        <h2 className="text-center font-serif font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight lg:leading-[65px]">
          <span className="text-[#FF6916]">Ayurveda</span> FAQs
        </h2>

        {/* dotted divider */}
        <div className="border-t border-dashed border-[#FF6916] mt-6 mb-10"></div>

        {/* TABS */}
        <div className="flex justify-start sm:justify-center gap-6 mb-10 overflow-x-auto pb-2 scrollbar-hide">

          {faqTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setOpenIndex(null);
              }}
              className={`whitespace-nowrap font-serif text-lg sm:text-2xl lg:text-[40px] pb-3 border-b transition ${
                activeTab === tab
                  ? "text-[#FF6916] border-[#FF6916]"
                  : "text-[#625B71] border-transparent"
              }`}
            >
              {tab}
            </button>
          ))}

        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">

          {faqData[activeTab].map((faq, i) => {

            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className="border border-black/10 rounded-xl lg:rounded-[16px] bg-white transition"
              >

                {/* QUESTION */}
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex justify-between items-center px-5 sm:px-6 lg:px-[32px] py-5 text-left"
                >

                  <span className="text-sm sm:text-base lg:text-[16px] font-medium leading-relaxed">
                    {faq.q}
                  </span>

                  {isOpen ? (
                    <Minus className="text-[#FF6916] w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 ml-3" />
                  ) : (
                    <Plus className="text-[#FF6916] w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 ml-3" />
                  )}

                </button>

                {/* ANSWER */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[200px] pb-6" : "max-h-0"
                  }`}
                >
                  <div className="px-5 sm:px-6 lg:px-[32px] text-sm sm:text-base lg:text-[16px] leading-relaxed lg:leading-[25.6px] text-[#9A8F86] max-w-[854px]">
                    {faq.a ||
                      "More details will be shared during consultation."}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
