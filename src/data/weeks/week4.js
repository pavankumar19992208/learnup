// Week 4: Functions & Modules
export const week4 = {
  week: 4,
  title: { en: "Functions & Modules", hi: "Functions और Modules" },
  days: [
    {
      day: 1, dayInWeek: 1, type: "concept",
      title: { en: "Defining & Calling Functions", hi: "Functions बनाना और Call करना" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Learn def, parameters, arguments, return values", hi: "def, parameters, arguments, return values सीखो" } },
        { time: "1:00–2:00", activity: { en: "Practice writing functions for common tasks", hi: "Common tasks के लिए functions लिखने की practice करो" } },
        { time: "2:00–3:00", activity: { en: "Understand scope — local vs global variables", hi: "Scope समझो — local vs global variables" } }
      ],
      topics: [{ en: "def keyword", hi: "def keyword" }, { en: "Parameters and arguments", hi: "Parameters और arguments" }, { en: "return statement", hi: "return statement" }, { en: "Variable scope", hi: "Variable scope" }],
      resources: [{ title: "Python Functions — W3Schools", url: "https://www.w3schools.com/python/python_functions.asp", type: "article" }, { title: "Python Functions — Real Python", url: "https://realpython.com/defining-your-own-python-function/", type: "article" }],
      claudePrompt: { en: "Teach me Python functions from zero. Explain def, parameters, arguments, return. Use a restaurant ordering system as example (function to calculate bill, function to apply discount). Cover local vs global scope. Give 5 exercises.", hi: "Mujhe Python functions zero se sikhao. def, parameters, arguments, return samjhao. Restaurant ordering example use karo (bill calculate function, discount apply function). Local vs global scope cover karo. 5 exercises do." },
      tasks: [
        { id: "w4d1t1", text: { en: "Write 5 simple functions", hi: "5 simple functions लिखो" }, type: "code" },
        { id: "w4d1t2", text: { en: "Create a function with multiple parameters", hi: "Multiple parameters वाला function बनाओ" }, type: "code" },
        { id: "w4d1t3", text: { en: "Experiment with return values", hi: "Return values experiment करो" }, type: "code" },
        { id: "w4d1t4", text: { en: "Demonstrate local vs global scope", hi: "Local vs global scope demonstrate करो" }, type: "code" }
      ],
      realAppConnection: { app: "Swiggy", concept: { en: "Functions", hi: "Functions" }, explanation: { en: "Every action on Swiggy is a function: calculate_total(items), apply_coupon(code), estimate_delivery(distance). The search bar calls search_restaurants(query). Each function does ONE job!", hi: "Swiggy पर हर action एक function है: calculate_total(items), apply_coupon(code), estimate_delivery(distance)। Search bar search_restaurants(query) call करता है। हर function एक काम करता है!" } },
      thinkingQuestions: [{ question: { en: "How many functions do you think run when you place one Swiggy order?", hi: "एक Swiggy order place करने पर कितने functions run होते हैं?" }, claudePrompt: "Ek Swiggy order place karne mein kitne functions run hote hain? Hindi mein samjhao." }]
    },
    {
      day: 2, dayInWeek: 2, type: "practice",
      title: { en: "Advanced Function Concepts", hi: "Advanced Function Concepts" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Learn default arguments, *args, **kwargs", hi: "Default arguments, *args, **kwargs सीखो" } },
        { time: "1:00–2:00", activity: { en: "Practice lambda functions and map/filter", hi: "Lambda functions और map/filter practice" } },
        { time: "2:00–3:00", activity: { en: "Solve 8 function problems", hi: "8 function problems solve करो" } }
      ],
      topics: [{ en: "Default arguments", hi: "Default arguments" }, { en: "*args and **kwargs", hi: "*args और **kwargs" }, { en: "Lambda functions", hi: "Lambda functions" }, { en: "map(), filter(), sorted()", hi: "map(), filter(), sorted()" }],
      resources: [{ title: "Python Lambda", url: "https://www.w3schools.com/python/python_lambda.asp", type: "article" }],
      claudePrompt: { en: "Teach me advanced Python functions: default args, *args, **kwargs, lambda, map, filter. Use food ordering examples. Give 8 problems from easy to hard.", hi: "Mujhe advanced Python functions sikhao: default args, *args, **kwargs, lambda, map, filter. Food ordering examples use karo. 8 problems do easy se hard tak." },
      tasks: [
        { id: "w4d2t1", text: { en: "Practice default arguments", hi: "Default arguments practice" }, type: "code" },
        { id: "w4d2t2", text: { en: "Write functions using *args and **kwargs", hi: "*args और **kwargs से functions लिखो" }, type: "code" },
        { id: "w4d2t3", text: { en: "Create 5 lambda functions", hi: "5 lambda functions बनाओ" }, type: "code" },
        { id: "w4d2t4", text: { en: "Use map/filter on a list of numbers", hi: "Numbers की list पर map/filter use करो" }, type: "code" }
      ],
      realAppConnection: { app: "YouTube", concept: { en: "Lambda & Filter", hi: "Lambda और Filter" }, explanation: { en: "YouTube's filter button uses filter(). When you sort by 'Most viewed' — that's sorted() with a lambda key function. Autoplay uses map() to prepare the next queue!", hi: "YouTube का filter button filter() use करता है। 'Most viewed' sort = sorted() with lambda key। Autoplay map() use करता है next queue prepare करने में!" } },
      thinkingQuestions: [{ question: { en: "How would YouTube's 'Sort by: Upload date' work in Python?", hi: "YouTube का 'Sort by: Upload date' Python में कैसे काम करेगा?" }, claudePrompt: "YouTube ka 'Sort by: Upload date' Python mein kaise kaam karega? Lambda aur sorted se samjhao Hindi mein." }]
    },
    {
      day: 3, dayInWeek: 3, type: "practice",
      title: { en: "Built-in Functions & Recursion", hi: "Built-in Functions और Recursion" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Explore important built-in functions: abs, max, min, sum, len, round, zip, enumerate", hi: "Important built-in functions explore करो: abs, max, min, sum, len, round, zip, enumerate" } },
        { time: "1:00–2:00", activity: { en: "Learn recursion — function calling itself", hi: "Recursion सीखो — function खुद को call करता है" } },
        { time: "2:00–3:00", activity: { en: "Practice: factorial, fibonacci, sum of digits using recursion", hi: "Practice: factorial, fibonacci, sum of digits recursion से" } }
      ],
      topics: [{ en: "Built-in functions", hi: "Built-in functions" }, { en: "Recursion concept", hi: "Recursion concept" }, { en: "Base case and recursive case", hi: "Base case और recursive case" }],
      resources: [{ title: "Python Built-in Functions", url: "https://www.w3schools.com/python/python_ref_functions.asp", type: "docs" }],
      claudePrompt: { en: "Teach me Python built-in functions (all important ones) and recursion. Explain recursion with folder structure example. Give factorial and fibonacci exercises. Make it simple.", hi: "Mujhe Python built-in functions (saare important) aur recursion sikhao. Recursion ko folder structure example se samjhao. Factorial aur fibonacci exercises do. Simple rakho." },
      tasks: [
        { id: "w4d3t1", text: { en: "Use 10 different built-in functions", hi: "10 अलग built-in functions use करो" }, type: "code" },
        { id: "w4d3t2", text: { en: "Write factorial using recursion", hi: "Recursion से factorial लिखो" }, type: "code" },
        { id: "w4d3t3", text: { en: "Write fibonacci using recursion", hi: "Recursion से fibonacci लिखो" }, type: "code" },
        { id: "w4d3t4", text: { en: "Solve 3 recursion problems", hi: "3 recursion problems solve करो" }, type: "code" }
      ],
      realAppConnection: { app: "File Explorer", concept: { en: "Recursion", hi: "Recursion" }, explanation: { en: "When your computer searches for a file — it opens a folder, checks inside, finds another folder, opens THAT — this is recursion! search_folder(folder) calls search_folder(subfolder).", hi: "जब computer file search करता है — folder खोलता है, अंदर देखता है, और folder मिले तो उसे भी खोलता है — यही recursion है! search_folder(folder) calls search_folder(subfolder)।" } },
      thinkingQuestions: [{ question: { en: "How does Windows search find files in nested folders?", hi: "Windows search nested folders में files कैसे ढूंढता है?" }, claudePrompt: "Windows search nested folders mein files kaise dhundhta hai? Kya yeh recursion se related hai? Hindi mein samjhao." }]
    },
    {
      day: 4, dayInWeek: 4, type: "practice",
      title: { en: "Modules & Imports", hi: "Modules और Imports" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Learn import, from...import, as keyword, creating own modules", hi: "import, from...import, as keyword, own modules बनाना सीखो" } },
        { time: "1:00–2:00", activity: { en: "Explore useful modules: math, random, datetime, os", hi: "Useful modules explore करो: math, random, datetime, os" } },
        { time: "2:00–3:00", activity: { en: "Create your own module and import it", hi: "अपना module बनाओ और import करो" } }
      ],
      topics: [{ en: "import statement", hi: "import statement" }, { en: "Standard library modules", hi: "Standard library modules" }, { en: "Creating custom modules", hi: "Custom modules बनाना" }],
      resources: [{ title: "Python Modules — W3Schools", url: "https://www.w3schools.com/python/python_modules.asp", type: "article" }],
      claudePrompt: { en: "Teach me Python modules: import, from-import, creating own modules. Show useful modules (math, random, datetime, os) with examples. Help me create my first custom module.", hi: "Mujhe Python modules sikhao: import, from-import, apne modules banana. Useful modules dikhao (math, random, datetime, os) examples ke saath. Mera pehla custom module banana help karo." },
      tasks: [
        { id: "w4d4t1", text: { en: "Import and use math, random, datetime modules", hi: "math, random, datetime modules import और use करो" }, type: "code" },
        { id: "w4d4t2", text: { en: "Generate random numbers and passwords", hi: "Random numbers और passwords generate करो" }, type: "code" },
        { id: "w4d4t3", text: { en: "Work with dates — calculate age from birthdate", hi: "Dates के साथ काम करो — birthdate से age calculate करो" }, type: "code" },
        { id: "w4d4t4", text: { en: "Create your own utility module", hi: "अपना utility module बनाओ" }, type: "code" }
      ],
      realAppConnection: { app: "WhatsApp", concept: { en: "Modules", hi: "Modules" }, explanation: { en: "WhatsApp is built with modules: messaging module, calling module, status module, encryption module. Each does its job independently. Your own Python projects will have modules too!", hi: "WhatsApp modules से बना है: messaging module, calling module, status module, encryption module। हर एक अपना काम independently करता है। तुम्हारे Python projects में भी modules होंगे!" } },
      thinkingQuestions: [{ question: { en: "Why do apps like WhatsApp separate features into modules?", hi: "WhatsApp जैसे apps features को modules में क्यों separate करते हैं?" }, claudePrompt: "WhatsApp jaise apps features ko modules mein kyon separate karte hain? Hindi mein samjhao." }]
    },
    {
      day: 5, dayInWeek: 5, type: "combine",
      title: { en: "Combining Functions & Modules", hi: "Functions और Modules मिलाओ" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Review all Week 4 topics", hi: "Week 4 के सभी topics review करो" } },
        { time: "1:00–2:00", activity: { en: "Solve 5 problems using functions + modules", hi: "Functions + modules से 5 problems solve करो" } },
        { time: "2:00–3:00", activity: { en: "Build a utility library with multiple functions", hi: "Multiple functions की utility library बनाओ" } }
      ],
      topics: [{ en: "All Week 4 combined", hi: "Week 4 सब combined" }],
      resources: [],
      claudePrompt: { en: "I've learned Python functions (def, args, kwargs, lambda, recursion) and modules. Give me 5 problems combining everything. Help me build a utility library module.", hi: "Maine Python functions (def, args, kwargs, lambda, recursion) aur modules seekhe hain. 5 problems do sab combine karke. Utility library module banana help karo." },
      tasks: [
        { id: "w4d5t1", text: { en: "Review Week 4 notes", hi: "Week 4 notes review करो" }, type: "learn" },
        { id: "w4d5t2", text: { en: "Solve 5 mixed problems", hi: "5 mixed problems solve करो" }, type: "code" },
        { id: "w4d5t3", text: { en: "Build a utility library module", hi: "Utility library module बनाओ" }, type: "code" }
      ],
      realAppConnection: null, thinkingQuestions: []
    },
    {
      day: 6, dayInWeek: 6, type: "project",
      title: { en: "Mini Project: Calculator with History", hi: "Mini Project: Calculator with History" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–0:30", activity: { en: "Plan: operations, history storage, module structure", hi: "Plan: operations, history storage, module structure" } },
        { time: "0:30–2:00", activity: { en: "Code the Calculator with History", hi: "Calculator with History code करो" } },
        { time: "2:00–3:00", activity: { en: "Test and add scientific operations", hi: "Test करो और scientific operations add करो" } }
      ],
      topics: [{ en: "Full project with functions + modules", hi: "Functions + modules का full project" }],
      resources: [],
      claudePrompt: { en: "Help me build a Calculator with History in Python. Use functions for each operation, a module for math operations, list to store history. Features: basic +,-,*,/ operations, history viewing, clear history, scientific mode.", hi: "Mujhe Calculator with History build karne mein help karo. Har operation ke liye functions, math operations ka module, history store karne ke liye list. Features: basic operations, history dekhna, clear history, scientific mode." },
      tasks: [
        { id: "w4d6t1", text: { en: "Plan the project", hi: "Project plan करो" }, type: "think" },
        { id: "w4d6t2", text: { en: "Code the complete calculator", hi: "पूरा calculator code करो" }, type: "code" },
        { id: "w4d6t3", text: { en: "Add history feature", hi: "History feature add करो" }, type: "code" },
        { id: "w4d6t4", text: { en: "Test and share with Claude", hi: "Test करो और Claude को share करो" }, type: "learn" }
      ],
      realAppConnection: null, thinkingQuestions: []
    },
    { day: 7, dayInWeek: 7, type: "rest", title: { en: "Rest Day — Recharge! 🌺", hi: "आराम का दिन — Recharge करो! 🌺" }, duration: "0 hours", timeBlocks: [], topics: [], resources: [], claudePrompt: { en: "", hi: "" }, tasks: [], realAppConnection: null, thinkingQuestions: [] }
  ]
};
