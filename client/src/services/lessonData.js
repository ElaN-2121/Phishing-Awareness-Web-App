export const mockLessons = [
  {
    id: "telebirr-sms-01",
    title: "The Fake Account Lock",
    language: "Amharic",
    difficulty: "Beginner",
    introText: "Someone sent you an SMS. Is it safe or a scam?",
    simulator: {
      type: "SMS",
      sender: "0912-34-56-78", // A random number, not 'Telebirr'
      content: "የእርስዎ የሂሳብ ቁጥር ተዘግቷል። እባክዎ በዚህ ሊንክ ያረጋግጡ፡ http://bit.ly/tele-scam",
      redFlags: [
        { id: "sender", check: "09", message: "Official banks don't use personal phone numbers." },
        { id: "link", check: "bit.ly", message: "Never click shortened links in SMS." }
      ]
    },
    correctAction: "BLOCK", // Users choose: IGNORE, BLOCK, or CLICK
    explanation: "Telebirr will never send you a link to 'unlock' your account via a random phone number."
  }
];