// Week 8: Agentic AI & Final Project
export const week8 = {
  week: 8,
  title: { en: "Agentic AI — Build Your Own Agent! 🤖", hi: "Agentic AI — अपना Agent बनाओ! 🤖" },
  days: [
    {
      day: 1, dayInWeek: 1, type: "concept",
      title: { en: "What are AI Agents — Concepts", hi: "AI Agents क्या हैं — Concepts" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Learn: What are AI agents, how they differ from chatbots", hi: "सीखो: AI agents क्या हैं, chatbots से कैसे अलग हैं" } },
        { time: "1:00–2:00", activity: { en: "Understand: perception, reasoning, action loop", hi: "समझो: perception, reasoning, action loop" } },
        { time: "2:00–3:00", activity: { en: "Study examples: AutoGPT, Devin, personal assistants", hi: "Examples study करो: AutoGPT, Devin, personal assistants" } }
      ],
      topics: [{ en: "AI Agents vs Chatbots", hi: "AI Agents vs Chatbots" }, { en: "Perception-Reasoning-Action loop", hi: "Perception-Reasoning-Action loop" }, { en: "Types of agents", hi: "Agents के types" }],
      resources: [
        { title: "What are AI Agents — Simple Guide", url: "https://www.ibm.com/think/topics/ai-agents", type: "article" },
        { title: "LangChain Agents Explained", url: "https://python.langchain.com/docs/concepts/agents/", type: "docs" }
      ],
      claudePrompt: { en: "Explain AI agents to me like I'm a beginner. How are they different from chatbots? What is the perception-reasoning-action loop? Give real examples of AI agents (AutoGPT, coding assistants). Very simple language.", hi: "Mujhe AI agents samjhao jaise main beginner hoon. Chatbots se kaise alag hain? Perception-reasoning-action loop kya hai? Real examples do (AutoGPT, coding assistants). Bahut simple language mein." },
      tasks: [
        { id: "w8d1t1", text: { en: "Read about AI agents (articles + videos)", hi: "AI agents ke baare mein padho (articles + videos)" }, type: "learn" },
        { id: "w8d1t2", text: { en: "Write: 5 differences between agents and chatbots", hi: "Likho: agents aur chatbots mein 5 differences" }, type: "learn" },
        { id: "w8d1t3", text: { en: "List 5 real-world AI agents", hi: "5 real-world AI agents list karo" }, type: "think" },
        { id: "w8d1t4", text: { en: "Draw the agent architecture diagram", hi: "Agent architecture diagram banao" }, type: "think" }
      ],
      realAppConnection: { app: "Google Maps", concept: { en: "AI Agents", hi: "AI Agents" }, explanation: { en: "Google Maps is an AI agent! It perceives (your location, traffic), reasons (calculates fastest route), and acts (gives navigation). When traffic changes, it re-reasons — that's an agent loop!", hi: "Google Maps एक AI agent है! Perceive (location, traffic), reason (fastest route calculate), act (navigation). Traffic बदले तो फिर reason करता है — यही agent loop है!" } },
      thinkingQuestions: [{ question: { en: "Is Google Maps smarter than a chatbot? Why?", hi: "Google Maps chatbot से smart है? क्यों?" }, claudePrompt: "Google Maps chatbot se smart hai? Kyon? Agent vs chatbot ke context mein Hindi mein samjhao." }]
    },
    {
      day: 2, dayInWeek: 2, type: "practice",
      title: { en: "Tools & Function Calling", hi: "Tools और Function Calling" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Learn: giving tools to AI — calculator, web search, file operations", hi: "सीखो: AI को tools देना — calculator, web search, file operations" } },
        { time: "1:00–2:00", activity: { en: "Implement function calling with Claude/OpenAI API", hi: "Claude/OpenAI API से function calling implement करो" } },
        { time: "2:00–3:00", activity: { en: "Build an AI with 3 tools: calculator, dictionary, weather", hi: "3 tools वाला AI बनाओ: calculator, dictionary, weather" } }
      ],
      topics: [{ en: "Tool use / Function calling", hi: "Tool use / Function calling" }, { en: "Defining tools for AI", hi: "AI ke liye tools define karna" }, { en: "Tool selection by AI", hi: "AI dwara tool selection" }],
      resources: [
        { title: "Anthropic Tool Use Guide", url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use", type: "docs" },
        { title: "OpenAI Function Calling", url: "https://platform.openai.com/docs/guides/function-calling", type: "docs" }
      ],
      claudePrompt: { en: "Teach me how to give tools to AI agents. Show function calling with Claude/OpenAI API. Build a simple agent with 3 tools: calculator, dictionary lookup, weather check. Step by step, beginner-friendly.", hi: "Mujhe sikhao AI agents ko tools kaise dete hain. Claude/OpenAI API se function calling dikhao. 3 tools wala simple agent banao: calculator, dictionary, weather. Step by step, beginner-friendly." },
      tasks: [
        { id: "w8d2t1", text: { en: "Learn function calling API syntax", hi: "Function calling API syntax seekho" }, type: "learn" },
        { id: "w8d2t2", text: { en: "Define 3 tools as functions", hi: "3 tools functions ke roop mein define karo" }, type: "code" },
        { id: "w8d2t3", text: { en: "Make AI choose the right tool automatically", hi: "AI ko automatically sahi tool choose karwao" }, type: "code" },
        { id: "w8d2t4", text: { en: "Test with different queries", hi: "Different queries se test karo" }, type: "code" }
      ],
      realAppConnection: { app: "Siri / Google Assistant", concept: { en: "Tools", hi: "Tools" }, explanation: { en: "When you say 'Set alarm for 7 AM' — Siri uses the Clock TOOL. 'Play music' — Music TOOL. 'Navigate home' — Maps TOOL. The AI decides WHICH tool to use based on your words!", hi: "'Alarm set karo 7 AM' — Siri Clock TOOL use karta hai। 'Music play karo' — Music TOOL। 'Ghar navigate karo' — Maps TOOL। AI decide karta hai KAUN SA tool use karna hai!" } },
      thinkingQuestions: [{ question: { en: "How does Siri know to open Camera vs Calculator when you speak?", hi: "Siri kaise jaanti hai Camera kholna hai ya Calculator — jab tum bolte ho?" }, claudePrompt: "Siri kaise jaanti hai Camera kholna hai ya Calculator jab hum bolte hain? Tool selection ke context mein Hindi mein samjhao." }]
    },
    {
      day: 3, dayInWeek: 3, type: "practice",
      title: { en: "Building an Agent with Tools", hi: "Tools वाला Agent बनाओ" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Design agent loop: think → select tool → use tool → respond", hi: "Agent loop design करो: think → tool select → tool use → respond" } },
        { time: "1:00–2:00", activity: { en: "Build the agent loop in Python", hi: "Python में agent loop बनाओ" } },
        { time: "2:00–3:00", activity: { en: "Add error handling and tool result processing", hi: "Error handling और tool result processing add करो" } }
      ],
      topics: [{ en: "Agent loop implementation", hi: "Agent loop implementation" }, { en: "Tool orchestration", hi: "Tool orchestration" }, { en: "Error handling in agents", hi: "Agents mein error handling" }],
      resources: [{ title: "Building AI Agents from Scratch", url: "https://www.anthropic.com/engineering/building-effective-agents", type: "article" }],
      claudePrompt: { en: "Help me build a complete agent loop in Python. The agent should: receive user question, think about which tool to use, call the tool, process result, and give final answer. Simple implementation without frameworks.", hi: "Mujhe Python mein complete agent loop build karne mein help karo. Agent: user question le, tool decide kare, tool call kare, result process kare, final answer de. Simple implementation bina frameworks ke." },
      tasks: [
        { id: "w8d3t1", text: { en: "Design the agent loop on paper", hi: "Paper par agent loop design karo" }, type: "think" },
        { id: "w8d3t2", text: { en: "Code the agent loop", hi: "Agent loop code karo" }, type: "code" },
        { id: "w8d3t3", text: { en: "Add 5 tools to your agent", hi: "Agent mein 5 tools add karo" }, type: "code" },
        { id: "w8d3t4", text: { en: "Test with 10 different questions", hi: "10 different questions se test karo" }, type: "code" }
      ],
      realAppConnection: { app: "Self-Driving Cars", concept: { en: "Agent Loop", hi: "Agent Loop" }, explanation: { en: "A self-driving car runs an agent loop every millisecond: perceive (cameras see road), reason (should I turn?), act (turn steering). Your AI agent does the same — just with text!", hi: "Self-driving car har millisecond agent loop run karti hai: perceive (cameras road dekhti hain), reason (kya turn lena chahiye?), act (steering ghuma do)। Tumhari AI agent bhi yahi karti hai — bas text ke saath!" } },
      thinkingQuestions: [{ question: { en: "What's the difference between your chatbot (Week 7) and this agent?", hi: "Week 7 ke chatbot aur is agent mein kya fark hai?" }, claudePrompt: "Mere Week 7 ke chatbot aur Week 8 ke agent mein kya fark hai? Hindi mein samjhao." }]
    },
    {
      day: 4, dayInWeek: 4, type: "practice",
      title: { en: "Memory & Context Management", hi: "Memory और Context Management" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Learn: short-term vs long-term memory for agents", hi: "सीखो: agents के लिए short-term vs long-term memory" } },
        { time: "1:00–2:00", activity: { en: "Implement conversation memory (list-based and file-based)", hi: "Conversation memory implement करो (list-based aur file-based)" } },
        { time: "2:00–3:00", activity: { en: "Add summarization for long conversations", hi: "Long conversations के लिए summarization add करो" } }
      ],
      topics: [{ en: "Short-term memory", hi: "Short-term memory" }, { en: "Long-term memory (file storage)", hi: "Long-term memory (file storage)" }, { en: "Conversation summarization", hi: "Conversation summarization" }],
      resources: [{ title: "AI Agent Memory — LangChain", url: "https://python.langchain.com/docs/concepts/memory/", type: "docs" }],
      claudePrompt: { en: "Teach me about memory in AI agents. Short-term (conversation history) vs long-term (saved to file). How to summarize long conversations. Help me implement both types. Simple Python, no frameworks.", hi: "Mujhe AI agents mein memory ke baare mein sikhao. Short-term (conversation history) vs long-term (file mein save). Long conversations summarize karna. Dono types implement karne mein help karo. Simple Python, frameworks nahi." },
      tasks: [
        { id: "w8d4t1", text: { en: "Implement short-term memory for your agent", hi: "Agent ke liye short-term memory implement karo" }, type: "code" },
        { id: "w8d4t2", text: { en: "Save conversations to file (long-term memory)", hi: "Conversations file mein save karo (long-term memory)" }, type: "code" },
        { id: "w8d4t3", text: { en: "Load previous conversations when agent starts", hi: "Agent start hone par previous conversations load karo" }, type: "code" },
        { id: "w8d4t4", text: { en: "Add conversation summarization", hi: "Conversation summarization add karo" }, type: "code" }
      ],
      realAppConnection: { app: "Netflix", concept: { en: "Memory", hi: "Memory" }, explanation: { en: "Netflix remembers everything: what you watched (long-term memory), what you're watching now (short-term), your preferences (user profile). It's an AI agent that uses memory to recommend shows!", hi: "Netflix sab yaad rakhta hai: kya dekha (long-term memory), abhi kya dekh rahe ho (short-term), preferences (user profile)। Yeh AI agent hai jo memory se shows recommend karta hai!" } },
      thinkingQuestions: [{ question: { en: "How does Netflix know what to recommend next?", hi: "Netflix kaise jaanta hai aage kya recommend karna hai?" }, claudePrompt: "Netflix kaise jaanta hai aage kya recommend karna hai? AI memory ke context mein Hindi mein samjhao." }]
    },
    {
      day: 5, dayInWeek: 5, type: "combine",
      title: { en: "Combining Agent Concepts", hi: "Agent Concepts मिलाओ" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Review: agents, tools, memory, prompts — everything", hi: "Review: agents, tools, memory, prompts — सब कुछ" } },
        { time: "1:00–2:00", activity: { en: "Enhance your agent with all features combined", hi: "सभी features मिलाकर agent enhance करो" } },
        { time: "2:00–3:00", activity: { en: "Plan your final project agent", hi: "Final project agent plan करो" } }
      ],
      topics: [{ en: "All agent concepts combined", hi: "सभी agent concepts combined" }],
      resources: [],
      claudePrompt: { en: "I've learned AI agents, tools, function calling, and memory. Help me combine everything into one powerful agent. Then help me plan my final project — a personal assistant agent.", hi: "Maine AI agents, tools, function calling, aur memory seekha hai. Sab combine karke ek powerful agent banana help karo. Phir final project plan karo — personal assistant agent." },
      tasks: [
        { id: "w8d5t1", text: { en: "Review all Week 8 notes", hi: "Week 8 notes review karo" }, type: "learn" },
        { id: "w8d5t2", text: { en: "Combine tools + memory in one agent", hi: "Ek agent mein tools + memory combine karo" }, type: "code" },
        { id: "w8d5t3", text: { en: "Plan final project on paper", hi: "Paper par final project plan karo" }, type: "think" }
      ],
      realAppConnection: null, thinkingQuestions: []
    },
    {
      day: 6, dayInWeek: 6, type: "project",
      title: { en: "Final Project: Personal Assistant Agent 🎓", hi: "Final Project: Personal Assistant Agent 🎓" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–0:30", activity: { en: "Finalize project plan: tools, personality, features", hi: "Project plan finalize: tools, personality, features" } },
        { time: "0:30–2:00", activity: { en: "Code the Personal Assistant Agent", hi: "Personal Assistant Agent code karo" } },
        { time: "2:00–2:30", activity: { en: "Test with various scenarios", hi: "Various scenarios se test karo" } },
        { time: "2:30–3:00", activity: { en: "Write project description in ENGLISH — this is your proof! ✨", hi: "Project description ENGLISH mein likho — yahi tumhara proof hai! ✨" } }
      ],
      topics: [{ en: "Complete Agentic AI project", hi: "Complete Agentic AI project" }],
      resources: [],
      claudePrompt: { en: "Help me build a Personal Assistant Agent in Python. Features: weather checking, note-taking, task management, web search, casual conversation. Use tools/function calling, memory, good prompts. This is my final project — make it impressive!", hi: "Mujhe Personal Assistant Agent build karne mein help karo Python mein. Features: weather, notes, task management, web search, casual conversation. Tools, memory, good prompts use karo. Yeh mera final project hai — impressive banana hai!" },
      tasks: [
        { id: "w8d6t1", text: { en: "Plan the final project", hi: "Final project plan karo" }, type: "think" },
        { id: "w8d6t2", text: { en: "Code the Personal Assistant Agent", hi: "Personal Assistant Agent code karo" }, type: "code" },
        { id: "w8d6t3", text: { en: "Test all features thoroughly", hi: "Saare features achhe se test karo" }, type: "code" },
        { id: "w8d6t4", text: { en: "🌟 Write your project description in English and share with Claude!", hi: "🌟 Project description English mein likho aur Claude ko share karo!" }, type: "learn" }
      ],
      realAppConnection: null, thinkingQuestions: []
    },
    { day: 7, dayInWeek: 7, type: "rest", title: { en: "🎉 CELEBRATION DAY! You Did It! 🎉", hi: "🎉 CELEBRATION DAY! तुमने कर दिखाया! 🎉" }, duration: "0 hours", timeBlocks: [], topics: [], resources: [], claudePrompt: { en: "", hi: "" }, tasks: [], realAppConnection: null, thinkingQuestions: [] }
  ]
};
