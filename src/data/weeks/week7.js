// Week 7: AI/ML Basics & LLM APIs
export const week7 = {
  week: 7,
  title: { en: "AI/ML Basics & LLM APIs", hi: "AI/ML Basics और LLM APIs" },
  days: [
    {
      day: 1, dayInWeek: 1, type: "concept",
      title: { en: "What is AI/ML — The Big Picture", hi: "AI/ML क्या है — The Big Picture" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Watch: What is AI, ML, Deep Learning — visual explanations", hi: "देखो: AI, ML, Deep Learning क्या है — visual explanations" } },
        { time: "1:00–2:00", activity: { en: "Read about LLMs — ChatGPT, Claude, how they work (simplified)", hi: "LLMs के बारे में पढ़ो — ChatGPT, Claude, कैसे काम करते हैं (simple)" } },
        { time: "2:00–3:00", activity: { en: "Explore AI use cases + write notes on what you understood", hi: "AI use cases explore करो + notes लिखो जो समझ आया" } }
      ],
      topics: [{ en: "AI vs ML vs Deep Learning", hi: "AI vs ML vs Deep Learning" }, { en: "What are LLMs", hi: "LLMs क्या हैं" }, { en: "How ChatGPT/Claude work", hi: "ChatGPT/Claude कैसे काम करते हैं" }],
      resources: [
        { title: "AI Explained in 5 Minutes (Video)", url: "https://www.youtube.com/watch?v=2ePf9rue1Ao", type: "video" },
        { title: "What is an LLM — Simple Explanation", url: "https://www.cloudflare.com/learning/ai/what-is-large-language-model/", type: "article" },
        { title: "How ChatGPT Works", url: "https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/", type: "article" }
      ],
      claudePrompt: { en: "Explain AI, Machine Learning, and Deep Learning to me like I'm 10 years old. Then explain what LLMs are and how ChatGPT/Claude work — very simple language. Use cooking and school examples.", hi: "Mujhe AI, Machine Learning, aur Deep Learning aise samjhao jaise main 10 saal ki hoon. Phir LLMs kya hain aur ChatGPT/Claude kaise kaam karte hain — bahut simple language mein. Cooking aur school examples use karo." },
      tasks: [
        { id: "w7d1t1", text: { en: "Watch AI explanation videos", hi: "AI explanation videos देखो" }, type: "learn" },
        { id: "w7d1t2", text: { en: "Write differences: AI vs ML vs DL", hi: "AI vs ML vs DL differences लिखो" }, type: "learn" },
        { id: "w7d1t3", text: { en: "List 5 AI applications you use daily", hi: "5 AI applications list करो जो daily use करती हो" }, type: "think" },
        { id: "w7d1t4", text: { en: "Write notes on how LLMs work", hi: "LLMs कैसे काम करते हैं, notes लिखो" }, type: "learn" }
      ],
      realAppConnection: { app: "Google Assistant / Siri", concept: { en: "AI/ML", hi: "AI/ML" }, explanation: { en: "When you say 'Hey Google' — speech recognition (ML) converts voice to text, NLP (AI) understands meaning, and it responds using a language model. All AI!", hi: "'Hey Google' बोलते हो — voice to text (ML), meaning समझना (AI), जवाब देना (language model)। सब AI!" } },
      thinkingQuestions: [{ question: { en: "Is the autocomplete on your phone keyboard AI?", hi: "Phone keyboard पर autocomplete AI है?" }, claudePrompt: "Phone keyboard par autocomplete AI hai? Kaise kaam karta hai? Hindi mein samjhao." }]
    },
    {
      day: 2, dayInWeek: 2, type: "practice",
      title: { en: "Working with OpenAI/Claude API", hi: "OpenAI/Claude API से काम करना" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Set up API access — get API key, install library", hi: "API access setup करो — API key लो, library install करो" } },
        { time: "1:00–2:00", activity: { en: "Make your first API call to an LLM", hi: "LLM को अपना पहला API call करो" } },
        { time: "2:00–3:00", activity: { en: "Experiment with different prompts and parameters", hi: "Different prompts और parameters experiment करो" } }
      ],
      topics: [{ en: "API key setup", hi: "API key setup" }, { en: "Making LLM API calls", hi: "LLM API calls करना" }, { en: "Understanding parameters (temperature, max_tokens)", hi: "Parameters समझना (temperature, max_tokens)" }],
      resources: [
        { title: "Anthropic Claude API Docs", url: "https://docs.anthropic.com/en/docs/initial-setup", type: "docs" },
        { title: "OpenAI API Quickstart", url: "https://platform.openai.com/docs/quickstart", type: "docs" }
      ],
      claudePrompt: { en: "Help me set up and make my first API call to Claude/ChatGPT. Show me step by step: install library, set API key, make a simple request, handle the response. Very beginner-friendly.", hi: "Mujhe Claude/ChatGPT ko pehla API call karne mein help karo. Step by step dikhao: library install, API key set, simple request, response handle. Bahut beginner-friendly." },
      tasks: [
        { id: "w7d2t1", text: { en: "Get an API key (Claude or OpenAI)", hi: "API key लो (Claude या OpenAI)" }, type: "learn" },
        { id: "w7d2t2", text: { en: "Make your first API call", hi: "पहला API call करो" }, type: "code" },
        { id: "w7d2t3", text: { en: "Try 5 different prompts via API", hi: "API से 5 अलग prompts try करो" }, type: "code" },
        { id: "w7d2t4", text: { en: "Experiment with temperature parameter", hi: "temperature parameter experiment करो" }, type: "code" }
      ],
      realAppConnection: { app: "ChatGPT App", concept: { en: "LLM APIs", hi: "LLM APIs" }, explanation: { en: "The ChatGPT app on your phone is just a beautiful UI that calls the OpenAI API behind the scenes! You're learning to do the same thing — call the AI directly from your code.", hi: "Phone पर ChatGPT app बस एक सुंदर UI है जो पीछे से OpenAI API call करता है! तुम भी यही सीख रही हो — code से directly AI call करना।" } },
      thinkingQuestions: [{ question: { en: "What does 'temperature' do in AI API calls?", hi: "AI API calls में 'temperature' क्या करता है?" }, claudePrompt: "AI API calls mein temperature parameter kya karta hai? High vs low temperature ka kya fark hai? Hindi mein samjhao examples ke saath." }]
    },
    {
      day: 3, dayInWeek: 3, type: "practice",
      title: { en: "Prompt Engineering Basics", hi: "Prompt Engineering Basics" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Learn prompt engineering: system prompts, user prompts, few-shot examples", hi: "Prompt engineering सीखो: system prompts, user prompts, few-shot examples" } },
        { time: "1:00–2:00", activity: { en: "Practice writing effective prompts for different tasks", hi: "Different tasks के लिए effective prompts लिखने की practice" } },
        { time: "2:00–3:00", activity: { en: "Build a Python script that uses different prompt strategies", hi: "Different prompt strategies use करने वाला Python script बनाओ" } }
      ],
      topics: [{ en: "System vs user prompts", hi: "System vs user prompts" }, { en: "Few-shot prompting", hi: "Few-shot prompting" }, { en: "Chain of thought", hi: "Chain of thought" }],
      resources: [{ title: "Prompt Engineering Guide", url: "https://www.promptingguide.ai/", type: "article" }],
      claudePrompt: { en: "Teach me prompt engineering basics. Cover: system prompts, few-shot examples, chain of thought, role-playing prompts. Show good vs bad prompts with examples. Give me 6 prompt challenges to practice.", hi: "Mujhe prompt engineering basics sikhao. System prompts, few-shot examples, chain of thought, role-playing cover karo. Good vs bad prompts dikhao examples ke saath. 6 prompt challenges do practice ke liye." },
      tasks: [
        { id: "w7d3t1", text: { en: "Write 3 system prompts for different AI personalities", hi: "3 अलग AI personalities के लिए system prompts लिखो" }, type: "code" },
        { id: "w7d3t2", text: { en: "Practice few-shot prompting", hi: "Few-shot prompting practice करो" }, type: "code" },
        { id: "w7d3t3", text: { en: "Use chain of thought for a math problem", hi: "Math problem के लिए chain of thought use करो" }, type: "code" },
        { id: "w7d3t4", text: { en: "Compare good vs bad prompts — test both via API", hi: "Good vs bad prompts compare करो — दोनों API से test करो" }, type: "code" }
      ],
      realAppConnection: { app: "ChatGPT/Claude", concept: { en: "Prompt Engineering", hi: "Prompt Engineering" }, explanation: { en: "Every time you type a message to ChatGPT — you're prompt engineering! Better prompts = better answers. It's like asking a teacher the right question vs a vague one.", hi: "हर बार ChatGPT को message type करती हो — वो prompt engineering है! Better prompt = better answer। जैसे teacher से सही सवाल पूछना vs vague सवाल।" } },
      thinkingQuestions: [{ question: { en: "Why does 'Explain like I'm 5' give better answers than just 'Explain'?", hi: "'Explain like I'm 5' बेहतर answers क्यों देता है सिर्फ 'Explain' से?" }, claudePrompt: "'Explain like I'm 5' better answers kyon deta hai sirf 'Explain' se? Prompt engineering ke context mein samjhao Hindi mein." }]
    },
    {
      day: 4, dayInWeek: 4, type: "practice",
      title: { en: "Building a Chatbot with API", hi: "API से Chatbot बनाओ" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Learn conversation history — maintaining context in API calls", hi: "Conversation history सीखो — API calls में context maintain करना" } },
        { time: "1:00–2:00", activity: { en: "Build a chatbot that remembers previous messages", hi: "Chatbot बनाओ जो पिछले messages याद रखे" } },
        { time: "2:00–3:00", activity: { en: "Add personality and topic focus to your chatbot", hi: "Chatbot में personality और topic focus add करो" } }
      ],
      topics: [{ en: "Conversation history", hi: "Conversation history" }, { en: "Message roles (system, user, assistant)", hi: "Message roles (system, user, assistant)" }, { en: "Context window", hi: "Context window" }],
      resources: [{ title: "Building AI Chatbot — Tutorial", url: "https://platform.openai.com/docs/guides/text-generation", type: "docs" }],
      claudePrompt: { en: "Help me build a Python chatbot using Claude/OpenAI API. It should: maintain conversation history, have a custom personality (friendly Hindi tutor), handle errors. Show me step by step.", hi: "Mujhe Python chatbot build karne mein help karo Claude/OpenAI API se. Yeh: conversation history maintain kare, custom personality ho (friendly Hindi tutor), errors handle kare. Step by step dikhao." },
      tasks: [
        { id: "w7d4t1", text: { en: "Build a basic chatbot loop", hi: "Basic chatbot loop बनाओ" }, type: "code" },
        { id: "w7d4t2", text: { en: "Add conversation history", hi: "Conversation history add करो" }, type: "code" },
        { id: "w7d4t3", text: { en: "Give your chatbot a custom personality", hi: "Chatbot को custom personality दो" }, type: "code" },
        { id: "w7d4t4", text: { en: "Add exit command and error handling", hi: "Exit command और error handling add करो" }, type: "code" }
      ],
      realAppConnection: { app: "Customer Support Bots", concept: { en: "Chatbots", hi: "Chatbots" }, explanation: { en: "When you chat with Swiggy/Amazon support — you first talk to a chatbot! It uses conversation history to understand your problem. You're building the same thing!", hi: "Swiggy/Amazon support से chat करते हो — पहले chatbot से बात होती है! वो conversation history use करता है problem समझने के लिए। तुम वही बना रही हो!" } },
      thinkingQuestions: [{ question: { en: "How does a chatbot 'remember' what you said 5 messages ago?", hi: "Chatbot कैसे 'याद रखता है' 5 messages पहले क्या बोला था?" }, claudePrompt: "Chatbot kaise yaad rakhta hai 5 messages pehle kya bola tha? Conversation history ke context mein Hindi mein samjhao." }]
    },
    {
      day: 5, dayInWeek: 5, type: "combine",
      title: { en: "Combining AI Concepts", hi: "AI Concepts मिलाओ" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Review: AI/ML concepts, API calls, prompts, chatbot", hi: "Review: AI/ML concepts, API calls, prompts, chatbot" } },
        { time: "1:00–2:00", activity: { en: "Build a specialized chatbot (coding tutor, language teacher)", hi: "Specialized chatbot बनाओ (coding tutor, language teacher)" } },
        { time: "2:00–3:00", activity: { en: "Add features: save chat, multi-personality, topic detection", hi: "Features add करो: chat save, multi-personality, topic detection" } }
      ],
      topics: [{ en: "All Week 7 combined", hi: "Week 7 सब combined" }],
      resources: [],
      claudePrompt: { en: "I've learned AI basics, LLM APIs, prompt engineering, and chatbot building. Help me build a specialized chatbot that can switch between tutor/friend/translator modes based on user command.", hi: "Maine AI basics, LLM APIs, prompt engineering, aur chatbot building seekha. Specialized chatbot build karne mein help karo jo tutor/friend/translator modes switch kar sake user command se." },
      tasks: [
        { id: "w7d5t1", text: { en: "Review all Week 7 notes", hi: "Week 7 notes review करो" }, type: "learn" },
        { id: "w7d5t2", text: { en: "Build multi-mode chatbot", hi: "Multi-mode chatbot बनाओ" }, type: "code" },
        { id: "w7d5t3", text: { en: "Add chat-saving feature", hi: "Chat-saving feature add करो" }, type: "code" }
      ],
      realAppConnection: null, thinkingQuestions: []
    },
    {
      day: 6, dayInWeek: 6, type: "project",
      title: { en: "Mini Project: AI Study Buddy", hi: "Mini Project: AI Study Buddy" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–0:30", activity: { en: "Plan: features, personality, subjects", hi: "Plan: features, personality, subjects" } },
        { time: "0:30–2:00", activity: { en: "Code the AI Study Buddy", hi: "AI Study Buddy code करो" } },
        { time: "2:00–3:00", activity: { en: "Test with various subjects, polish, save conversations", hi: "Various subjects से test, polish, conversations save" } }
      ],
      topics: [{ en: "Complete AI chatbot project", hi: "Complete AI chatbot project" }],
      resources: [],
      claudePrompt: { en: "Help me build an AI Study Buddy in Python. Features: explain any topic in simple Hindi-English, quiz mode (ask questions), explain with real-life examples, save study sessions to file. Use Claude/OpenAI API.", hi: "Mujhe AI Study Buddy build karne mein help karo Python mein. Features: koi bhi topic simple Hindi-English mein samjhaye, quiz mode, real-life examples se samjhaye, study sessions file mein save. Claude/OpenAI API use karo." },
      tasks: [
        { id: "w7d6t1", text: { en: "Plan the Study Buddy features", hi: "Study Buddy features plan करो" }, type: "think" },
        { id: "w7d6t2", text: { en: "Code the AI Study Buddy", hi: "AI Study Buddy code करो" }, type: "code" },
        { id: "w7d6t3", text: { en: "Add quiz mode", hi: "Quiz mode add करो" }, type: "code" },
        { id: "w7d6t4", text: { en: "Test and share with Claude", hi: "Test करो और Claude को share करो" }, type: "learn" }
      ],
      realAppConnection: null, thinkingQuestions: []
    },
    { day: 7, dayInWeek: 7, type: "rest", title: { en: "Rest Day — Recharge! 🌺", hi: "आराम का दिन — Recharge करो! 🌺" }, duration: "0 hours", timeBlocks: [], topics: [], resources: [], claudePrompt: { en: "", hi: "" }, tasks: [], realAppConnection: null, thinkingQuestions: [] }
  ]
};
