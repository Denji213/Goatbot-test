const axios = require('axios');

const Prefixes = [
  '/ai', 
  'titus',
  'nemo',
  'ai',
  'ask',
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "OtinXSandip",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply("𝐒𝐚𝐥𝐮𝐭𝐚𝐭𝐢𝐨𝐧.𝐍'𝐚𝐢 𝐩𝐚𝐬 𝐩𝐞𝐮𝐫 𝐞𝐭 𝐩𝐨𝐬𝐞 𝐦𝐨𝐢 𝐭𝐚 𝐪𝐮𝐞𝐬𝐭𝐢𝐨𝐧 😁");
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply(answer);

    } catch (error) {
      console.error("Error:", error.message);
    }
  }
};
