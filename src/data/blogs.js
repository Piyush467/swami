import blog1 from "../assets/images/blog1.jpg";
import blog2 from "../assets/images/blog2.jpg";
import blog3 from "../assets/images/blog3.jpg";
import blog4 from "../assets/images/blog4.jpg";
import blog5 from "../assets/images/blog5.jpg";
import blog6 from "../assets/images/blog6.jpg";

export const blogs = [
  {
    id: "story-you-tell",

    // Title split into words (for alternating color styling)
    title: [
      "The",
      "Story",
      "You",
      "Tell",
      "Becomes",
      "the",
      "Life",
      "You",
      "Live",
    ],

    // Words to highlight in orange (#FF6916)
    highlight: [1, 4, 6, 8],

    excerpt:
      "A reflection on identity, narrative, and how the quiet stories inside you shape your reality.",

    date: "Jan 2026",
    author: "By Swami",
    category: "Identity",
    image: blog1,

    content: {
      p1:
        "The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods, the paint you may slap on your face to impress the new boss is your business. But what about your daily bread? Not so fast, I'd say, there are some redeeming factors in favor of greeking text, as its use is merely the symptom of a worse problem to take into consideration.",

      quote:
        "Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever.",

      p2:
        "Design comps, layouts, wireframes—will your clients accept that you go about things the facile way? Authorities in our business will tell in no uncertain terms that Lorem Ipsum is that huge, huge no no to forswear forever. The toppings you may chose for that TV dinner pizza slice when you forgot to shop for foods...",
    },
  },

  // ===== OTHER BLOGS (CONTENT TO ADD LATER) =====

  {
    id: "presence-power",
    title: ["Why", "Presence", "Is", "More", "Powerful", "Than", "Persuasion"],
    highlight: [1, 4],

    excerpt: "",
    date: "Nov 2025",
    author: "By Swami",
    category: "Influence",
    image: blog2,

    content: {
      p1: "",
      quote: "",
      p2: "",
    },
  },

  {
    id: "courage-peace",
    title: ["The", "Courage", "to", "Be", "Seen", "Can", "Bring", "Peace"],
    highlight: [1, 7],

    excerpt: "",
    date: "Jan 2026",
    author: "By Swami",
    category: "Inner Work",
    image: blog3,

    content: {
      p1: "",
      quote: "",
      p2: "",
    },
  },

  {
    id: "fear-to-fire",
    title: ["From", "Fear", "to", "Fire:", "Awakening", "Your", "Voice"],
    highlight: [1, 3],

    excerpt: "",
    date: "Feb 2025",
    author: "By Swami",
    category: "Public Speaking",
    image: blog4,

    content: {
      p1: "",
      quote: "",
      p2: "",
    },
  },

  {
    id: "conversations-heal",
    title: ["Conversations", "That", "Heal", "Instead", "of", "Convince"],
    highlight: [2],

    excerpt: "",
    date: "Mar 2025",
    author: "By Swami",
    category: "Communication",
    image: blog5,

    content: {
      p1: "",
      quote: "",
      p2: "",
    },
  },

  {
    id: "messaging-sounds-like-you",
    title: [
      "When",
      "Your",
      "Messaging",
      "Finally",
      "Sounds",
      "Like",
      "You",
    ],
    highlight: [2, 6],

    excerpt: "",
    date: "Aug 2025",
    author: "By Swami",
    category: "Wisdom",
    image: blog6,

    content: {
      p1: "",
      quote: "",
      p2: "",
    },
  },
];