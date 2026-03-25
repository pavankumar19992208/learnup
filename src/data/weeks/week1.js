// Week 1: Python Basics — Variables & Data Types
export const week1 = {
  week: 1,
  title: { en: "Python Basics — Variables & Data Types", hi: "Python Basics — Variables और Data Types" },
  days: [
    {
      day: 1, dayInWeek: 1, type: "concept",
      title: { en: "Understanding Variables & Data Types", hi: "Variables और Data Types समझो" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Watch: What are variables? int, float, str, bool explained with examples", hi: "देखो: Variables क्या हैं? int, float, str, bool — examples के साथ" } },
        { time: "1:00–2:00", activity: { en: "Read Python docs on built-in types + take notes", hi: "Python docs पढ़ो built-in types पर + notes बनाओ" } },
        { time: "2:00–3:00", activity: { en: "Try 10 examples in Python REPL — create variables of each type", hi: "Python REPL में 10 examples try करो — हर type का variable बनाओ" } }
      ],
      topics: [
        { en: "What is a variable", hi: "Variable क्या है" },
        { en: "Data types: int, float, str, bool", hi: "Data types: int, float, str, bool" },
        { en: "type() function", hi: "type() function" },
        { en: "Variable naming rules", hi: "Variable naming rules" }
      ],
      resources: [
        { title: "Python Variables — W3Schools", url: "https://www.w3schools.com/python/python_variables.asp", type: "article" },
        { title: "Python for Beginners (Hindi)", url: "https://www.youtube.com/watch?v=gfDE2a7MKjA", type: "video" },
        { title: "Official Python Docs — Data Types", url: "https://docs.python.org/3/library/stdtypes.html", type: "docs" }
      ],
      claudePrompt: {
        en: "I am a complete beginner learning Python. Please explain variables and data types (int, float, str, bool) in very simple English with 5 examples for each type. Also explain the type() function and variable naming rules. Give me 5 practice questions at the end.",
        hi: "Main ek complete beginner hoon Python mein. Mujhe variables aur data types (int, float, str, bool) bahut simple Hindi mein samjhao with 5 examples har type ke liye. type() function aur variable naming rules bhi samjhao. Last mein 5 practice questions do."
      },
      tasks: [
        { id: "w1d1t1", text: { en: "Watch video on Python variables", hi: "Python variables का video देखो" }, type: "learn" },
        { id: "w1d1t2", text: { en: "Create 3 variables of each data type in Python", hi: "Python में हर data type के 3 variables बनाओ" }, type: "code" },
        { id: "w1d1t3", text: { en: "Use type() to check type of 10 different values", hi: "type() से 10 अलग values का type check करो" }, type: "code" },
        { id: "w1d1t4", text: { en: "Write notes on variable naming rules", hi: "Variable naming rules पर notes लिखो" }, type: "learn" }
      ],
      realAppConnection: {
        app: "Swiggy",
        concept: { en: "Variables", hi: "Variables" },
        explanation: {
          en: "When you open Swiggy, your name is stored in a string variable, your location in another string, the delivery time in an integer, and whether the restaurant is open in a boolean. Every piece of data you see is a variable!",
          hi: "जब तुम Swiggy खोलती हो, तुम्हारा नाम एक string variable में stored है, location दूसरे string में, delivery time एक integer में, और restaurant खुला है या नहीं — boolean में। जो भी data दिखता है, वो variable है!"
        }
      },
      thinkingQuestions: [
        { question: { en: "What data type would store a food item's price on Swiggy?", hi: "Swiggy पर खाने की price किस data type में store होगी?" }, claudePrompt: "Swiggy app mein food item ki price kis Python data type mein store hogi? float ya int? Kyon? Hindi mein samjhao." },
        { question: { en: "Is 'True' (with quotes) the same as True (without quotes)?", hi: "'True' (quotes के साथ) और True (बिना quotes) — same हैं?" }, claudePrompt: "Python mein 'True' with quotes aur True without quotes mein kya fark hai? Hindi mein simple example ke saath samjhao." }
      ]
    },
    {
      day: 2, dayInWeek: 2, type: "practice",
      title: { en: "String Operations Practice", hi: "String Operations प्रैक्टिस" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Learn string methods: upper(), lower(), strip(), replace(), split(), join()", hi: "String methods सीखो: upper(), lower(), strip(), replace(), split(), join()" } },
        { time: "1:00–2:00", activity: { en: "Practice string concatenation, f-strings, and formatting", hi: "String concatenation, f-strings, और formatting प्रैक्टिस करो" } },
        { time: "2:00–3:00", activity: { en: "Solve 10 string problems on your own", hi: "10 string problems खुद solve करो" } }
      ],
      topics: [
        { en: "String methods", hi: "String methods" },
        { en: "String concatenation", hi: "String concatenation" },
        { en: "f-strings and .format()", hi: "f-strings और .format()" },
        { en: "String slicing", hi: "String slicing" }
      ],
      resources: [
        { title: "Python Strings — W3Schools", url: "https://www.w3schools.com/python/python_strings.asp", type: "article" },
        { title: "String Methods Reference", url: "https://www.w3schools.com/python/python_ref_string.asp", type: "docs" },
        { title: "Python String Practice — HackerRank", url: "https://www.hackerrank.com/domains/python?filters%5Bsubdomains%5D%5B%5D=py-strings", type: "practice" }
      ],
      claudePrompt: {
        en: "Teach me Python string operations in simple English. Cover: string methods (upper, lower, strip, replace, split, join), f-strings, string slicing with index examples. Give me 10 practice problems to solve.",
        hi: "Mujhe Python string operations simple Hindi mein sikhao. Cover karo: string methods (upper, lower, strip, replace, split, join), f-strings, string slicing index examples ke saath. 10 practice problems do."
      },
      tasks: [
        { id: "w1d2t1", text: { en: "Practice all string methods with examples", hi: "सभी string methods examples के साथ practice करो" }, type: "code" },
        { id: "w1d2t2", text: { en: "Create a greeting message using f-strings", hi: "f-strings से greeting message बनाओ" }, type: "code" },
        { id: "w1d2t3", text: { en: "Extract first name from full name using slicing", hi: "Slicing से full name में से first name निकालो" }, type: "code" },
        { id: "w1d2t4", text: { en: "Solve 5 string problems from HackerRank", hi: "HackerRank से 5 string problems solve करो" }, type: "code" }
      ],
      realAppConnection: {
        app: "WhatsApp",
        concept: { en: "Strings", hi: "Strings" },
        explanation: {
          en: "Every message you send on WhatsApp is a string. When you search for a contact, it uses string matching. When WhatsApp shows 'typing...' — that's string concatenation in action!",
          hi: "WhatsApp पर हर message एक string है। जब contact search करती हो, वो string matching use करता है। 'typing...' दिखाना — वो string concatenation है!"
        }
      },
      thinkingQuestions: [
        { question: { en: "How would WhatsApp search find 'priya' when you type 'Pri'?", hi: "WhatsApp search 'Pri' टाइप करने पर 'priya' कैसे ढूंढता है?" }, claudePrompt: "WhatsApp mein jab main 'Pri' type karti hoon to 'priya' kaise dhundta hai? Kya yeh Python string methods se connected hai? Hindi mein samjhao." }
      ]
    },
    {
      day: 3, dayInWeek: 3, type: "practice",
      title: { en: "Numbers & Math Operations", hi: "Numbers और Math Operations" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Learn int vs float, arithmetic operators (+, -, *, /, //, %, **)", hi: "int vs float सीखो, arithmetic operators (+, -, *, /, //, %, **)" } },
        { time: "1:00–2:00", activity: { en: "Practice math module: sqrt, ceil, floor, pow, random", hi: "math module practice: sqrt, ceil, floor, pow, random" } },
        { time: "2:00–3:00", activity: { en: "Build a simple calculator in Python", hi: "Python में simple calculator बनाओ" } }
      ],
      topics: [
        { en: "Arithmetic operators", hi: "Arithmetic operators" },
        { en: "int vs float", hi: "int vs float" },
        { en: "math module", hi: "math module" },
        { en: "Type conversion (int to float, etc.)", hi: "Type conversion (int se float, etc.)" }
      ],
      resources: [
        { title: "Python Numbers — W3Schools", url: "https://www.w3schools.com/python/python_numbers.asp", type: "article" },
        { title: "Python Math Module", url: "https://www.w3schools.com/python/module_math.asp", type: "docs" }
      ],
      claudePrompt: {
        en: "Teach me Python numbers and math operations. Cover: int vs float, all arithmetic operators (especially // and ** and %), math module (sqrt, ceil, floor), and type conversion between numbers. Give me a calculator project to build.",
        hi: "Mujhe Python numbers aur math operations sikhao. Cover karo: int vs float, saare arithmetic operators (especially // aur ** aur %), math module (sqrt, ceil, floor), aur type conversion. Ek calculator project do build karne ke liye."
      },
      tasks: [
        { id: "w1d3t1", text: { en: "Practice all arithmetic operators", hi: "सभी arithmetic operators practice करो" }, type: "code" },
        { id: "w1d3t2", text: { en: "Use math module for 5 calculations", hi: "math module से 5 calculations करो" }, type: "code" },
        { id: "w1d3t3", text: { en: "Convert between int, float, and str", hi: "int, float, और str के बीच convert करो" }, type: "code" },
        { id: "w1d3t4", text: { en: "Build a basic calculator", hi: "Basic calculator बनाओ" }, type: "code" }
      ],
      realAppConnection: {
        app: "Paytm",
        concept: { en: "Numbers & Math", hi: "Numbers और Math" },
        explanation: {
          en: "When Paytm calculates your cashback (10% of ₹500 = ₹50), it uses arithmetic operators. Your wallet balance is a float. EMI calculations use the math module!",
          hi: "जब Paytm cashback calculate करता है (₹500 का 10% = ₹50), वो arithmetic operators use करता है। Wallet balance एक float है। EMI calculations math module use करती हैं!"
        }
      },
      thinkingQuestions: [
        { question: { en: "Why does Paytm show ₹99.99 instead of ₹100? (Hint: float)", hi: "Paytm ₹100 की जगह ₹99.99 क्यों दिखाता है? (Hint: float)" }, claudePrompt: "Paytm mein ₹99.99 kyon dikhata hai ₹100 ki jagah? Kya yeh Python float se related hai? Hindi mein samjhao." }
      ]
    },
    {
      day: 4, dayInWeek: 4, type: "practice",
      title: { en: "Input/Output & Type Conversion", hi: "Input/Output और Type Conversion" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Learn input(), print(), and type conversion functions", hi: "input(), print(), और type conversion functions सीखो" } },
        { time: "1:00–2:00", activity: { en: "Practice taking user input and displaying formatted output", hi: "User input लो और formatted output दिखाओ" } },
        { time: "2:00–3:00", activity: { en: "Build an interactive program that asks questions and responds", hi: "Interactive program बनाओ जो सवाल पूछे और जवाब दे" } }
      ],
      topics: [
        { en: "input() function", hi: "input() function" },
        { en: "print() with formatting", hi: "print() formatting के साथ" },
        { en: "Type conversion: int(), float(), str(), bool()", hi: "Type conversion: int(), float(), str(), bool()" }
      ],
      resources: [
        { title: "Python Input/Output", url: "https://www.w3schools.com/python/python_user_input.asp", type: "article" },
        { title: "Python Type Casting", url: "https://www.w3schools.com/python/python_casting.asp", type: "article" }
      ],
      claudePrompt: {
        en: "Teach me Python input/output and type conversion. Show how input() works, how to convert input to int/float, print formatting with f-strings, and common errors when converting types. Give me 5 interactive programs to build.",
        hi: "Mujhe Python input/output aur type conversion sikhao. input() kaise kaam karta hai, input ko int/float mein convert karna, print formatting f-strings ke saath, aur common errors. 5 interactive programs do build karne ke liye."
      },
      tasks: [
        { id: "w1d4t1", text: { en: "Take user's name and age as input, display greeting", hi: "User का नाम और age input लो, greeting दिखाओ" }, type: "code" },
        { id: "w1d4t2", text: { en: "Build a temperature converter (C to F)", hi: "Temperature converter बनाओ (C से F)" }, type: "code" },
        { id: "w1d4t3", text: { en: "Handle error when user enters text instead of number", hi: "Handle करो जब user number की जगह text डाले" }, type: "code" },
        { id: "w1d4t4", text: { en: "Create a personalized story generator using inputs", hi: "Inputs से personalized story generator बनाओ" }, type: "code" }
      ],
      realAppConnection: {
        app: "Google Search",
        concept: { en: "Input/Output", hi: "Input/Output" },
        explanation: {
          en: "When you type in Google's search bar — that's input(). The search results displayed — that's print(). Google converts your text input into search queries (type conversion)!",
          hi: "Google के search bar में type करना — वो input() है। Search results दिखना — वो print() है। Google text input को search queries में convert करता है (type conversion)!"
        }
      },
      thinkingQuestions: [
        { question: { en: "What happens if Google search receives a number vs text?", hi: "Google search को number मिले vs text — क्या होगा?" }, claudePrompt: "Google search ko number vs text milne par kya alag hota hai? Kya yeh Python type conversion se related hai? Hindi mein samjhao." }
      ]
    },
    {
      day: 5, dayInWeek: 5, type: "combine",
      title: { en: "Combining Week 1 Concepts", hi: "Week 1 के सभी Concepts मिलाओ" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Review all Week 1 topics — variables, strings, numbers, I/O", hi: "Week 1 के सभी topics review करो — variables, strings, numbers, I/O" } },
        { time: "1:00–2:00", activity: { en: "Solve 5 mixed problems combining all concepts", hi: "5 mixed problems solve करो — सभी concepts मिलाकर" } },
        { time: "2:00–3:00", activity: { en: "Write a program using ALL Week 1 concepts together", hi: "एक program लिखो जिसमें Week 1 के सभी concepts हों" } }
      ],
      topics: [
        { en: "All Week 1 topics combined", hi: "Week 1 के सभी topics combined" }
      ],
      resources: [
        { title: "Python Exercises — W3Schools", url: "https://www.w3schools.com/python/python_exercises.asp", type: "practice" }
      ],
      claudePrompt: {
        en: "I have learned Python variables, data types, strings, numbers, math operations, input/output, and type conversion this week. Give me 5 problems that combine ALL these concepts together. Each problem should use at least 3 concepts.",
        hi: "Maine is hafte Python variables, data types, strings, numbers, math, input/output, aur type conversion seekha hai. Mujhe 5 problems do jo IN SAB concepts ko ek saath use kare. Har problem mein kam se kam 3 concepts hone chahiye."
      },
      tasks: [
        { id: "w1d5t1", text: { en: "Review notes from Day 1-4", hi: "Day 1-4 के notes review करो" }, type: "learn" },
        { id: "w1d5t2", text: { en: "Solve 5 mixed problems", hi: "5 mixed problems solve करो" }, type: "code" },
        { id: "w1d5t3", text: { en: "Build a student report card generator", hi: "Student report card generator बनाओ" }, type: "code" }
      ],
      realAppConnection: null,
      thinkingQuestions: []
    },
    {
      day: 6, dayInWeek: 6, type: "project",
      title: { en: "Mini Project: Personal Info Card Generator", hi: "Mini Project: Personal Info Card Generator" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–0:30", activity: { en: "Plan your project: what inputs, what output format", hi: "Project plan करो: कौन से inputs, output format क्या होगा" } },
        { time: "0:30–2:00", activity: { en: "Code the Personal Info Card Generator", hi: "Personal Info Card Generator code करो" } },
        { time: "2:00–3:00", activity: { en: "Test with different inputs, fix bugs, add formatting", hi: "Different inputs से test करो, bugs fix करो, formatting add करो" } }
      ],
      topics: [{ en: "All Week 1 topics in a real project", hi: "Week 1 के सभी topics एक real project में" }],
      resources: [],
      claudePrompt: {
        en: "Help me build a Personal Info Card Generator in Python. It should take user's name, age, city, hobby, and dream job as input. Then display a beautifully formatted card using f-strings with borders made of special characters. Use ALL concepts from this week: variables, strings, numbers, type conversion, input/output.",
        hi: "Mujhe ek Personal Info Card Generator build karne mein help karo Python mein. Yeh user ka naam, age, city, hobby, aur dream job input le. Phir f-strings se ek beautifully formatted card dikhaye jismein special characters ke borders hon. Is hafte ke SAARE concepts use karo: variables, strings, numbers, type conversion, input/output."
      },
      tasks: [
        { id: "w1d6t1", text: { en: "Plan the project on paper first", hi: "पहले कागज पर project plan करो" }, type: "think" },
        { id: "w1d6t2", text: { en: "Code the complete project", hi: "पूरा project code करो" }, type: "code" },
        { id: "w1d6t3", text: { en: "Test with at least 3 different inputs", hi: "कम से कम 3 अलग inputs से test करो" }, type: "code" },
        { id: "w1d6t4", text: { en: "Share your code with Claude for review", hi: "अपना code Claude को review के लिए भेजो" }, type: "learn" }
      ],
      realAppConnection: null,
      thinkingQuestions: []
    },
    {
      day: 7, dayInWeek: 7, type: "rest",
      title: { en: "Rest Day — Recharge! 🌺", hi: "आराम का दिन — Recharge करो! 🌺" },
      duration: "0 hours",
      timeBlocks: [],
      topics: [],
      resources: [],
      claudePrompt: { en: "", hi: "" },
      tasks: [],
      realAppConnection: null,
      thinkingQuestions: []
    }
  ]
};
