// Week 3: Conditions & Loops
export const week3 = {
  week: 3,
  title: { en: "Control Flow — Conditions & Loops", hi: "Control Flow — Conditions और Loops" },
  days: [
    {
      day: 1, dayInWeek: 1, type: "concept",
      title: { en: "If-Else Conditions", hi: "If-Else Conditions समझो" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Learn if, elif, else with comparison operators (==, !=, >, <, >=, <=)", hi: "if, elif, else सीखो comparison operators के साथ (==, !=, >, <, >=, <=)" } },
        { time: "1:00–2:00", activity: { en: "Practice logical operators: and, or, not", hi: "Logical operators practice: and, or, not" } },
        { time: "2:00–3:00", activity: { en: "Build a grade calculator using if-elif-else", hi: "if-elif-else से grade calculator बनाओ" } }
      ],
      topics: [{ en: "if, elif, else statements", hi: "if, elif, else statements" }, { en: "Comparison operators", hi: "Comparison operators" }, { en: "Logical operators: and, or, not", hi: "Logical operators: and, or, not" }],
      resources: [
        { title: "Python If-Else — W3Schools", url: "https://www.w3schools.com/python/python_conditions.asp", type: "article" }
      ],
      claudePrompt: { en: "Teach me Python if-elif-else from scratch. Use Swiggy delivery examples (if restaurant open, elif closing soon, else closed). Cover comparison and logical operators. Give 5 exercises.", hi: "Mujhe Python if-elif-else scratch se sikhao. Swiggy delivery examples use karo (agar restaurant khula, elif band hone wala, else band). Comparison aur logical operators cover karo. 5 exercises do." },
      tasks: [
        { id: "w3d1t1", text: { en: "Write 5 if-else examples", hi: "5 if-else examples लिखो" }, type: "code" },
        { id: "w3d1t2", text: { en: "Practice comparison and logical operators", hi: "Comparison और logical operators practice करो" }, type: "code" },
        { id: "w3d1t3", text: { en: "Build a grade calculator", hi: "Grade calculator बनाओ" }, type: "code" },
        { id: "w3d1t4", text: { en: "Write a program to check voting eligibility", hi: "Voting eligibility check करने का program लिखो" }, type: "code" }
      ],
      realAppConnection: { app: "Swiggy", concept: { en: "If-Else", hi: "If-Else" }, explanation: { en: "Swiggy uses if-else everywhere: if restaurant is open → show menu, elif closing soon → show warning, else → show 'Currently Unavailable'. Filters = nested if-else!", hi: "Swiggy हर जगह if-else use करता है: if restaurant खुला → menu दिखाओ, elif बंद होने वाला → warning दिखाओ, else → 'Currently Unavailable'। Filters = nested if-else!" } },
      thinkingQuestions: [{ question: { en: "How does Swiggy decide which restaurants to show you?", hi: "Swiggy कैसे decide करता है कौन से restaurants दिखाना है?" }, claudePrompt: "Swiggy kaise decide karta hai kaunse restaurants dikhane hain? Kya yeh if-else conditions se hota hai? Hindi mein samjhao." }]
    },
    {
      day: 2, dayInWeek: 2, type: "practice",
      title: { en: "Nested Conditions & Ternary Operator", hi: "Nested Conditions और Ternary Operator" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Learn nested if-else and best practices", hi: "Nested if-else और best practices सीखो" } },
        { time: "1:00–2:00", activity: { en: "Practice ternary operator (one-line if-else)", hi: "Ternary operator practice (one-line if-else)" } },
        { time: "2:00–3:00", activity: { en: "Solve 8 condition-based problems", hi: "8 condition-based problems solve करो" } }
      ],
      topics: [{ en: "Nested conditions", hi: "Nested conditions" }, { en: "Ternary operator", hi: "Ternary operator" }],
      resources: [{ title: "Python Nested If", url: "https://www.w3schools.com/python/gloss_python_if_nested.asp", type: "article" }],
      claudePrompt: { en: "Teach me nested if-else and Python ternary operator. Use ATM machine example (check balance, then check amount, then check daily limit). Give 8 problems.", hi: "Mujhe nested if-else aur Python ternary operator sikhao. ATM machine example use karo. 8 problems do." },
      tasks: [
        { id: "w3d2t1", text: { en: "Write 3 nested condition programs", hi: "3 nested condition programs लिखो" }, type: "code" },
        { id: "w3d2t2", text: { en: "Convert 5 regular if-else to ternary", hi: "5 regular if-else को ternary में convert करो" }, type: "code" },
        { id: "w3d2t3", text: { en: "Build an ATM simulator", hi: "ATM simulator बनाओ" }, type: "code" },
        { id: "w3d2t4", text: { en: "Solve 5 problems from HackerRank", hi: "HackerRank से 5 problems solve करो" }, type: "code" }
      ],
      realAppConnection: { app: "Paytm", concept: { en: "Nested Conditions", hi: "Nested Conditions" }, explanation: { en: "Paytm payment flow: if balance enough → if UPI linked → if correct PIN → payment success. Each step is a nested condition!", hi: "Paytm payment flow: if balance enough → if UPI linked → if correct PIN → payment success। हर step nested condition है!" } },
      thinkingQuestions: [{ question: { en: "How many conditions does Paytm check before completing a payment?", hi: "Payment complete करने से पहले Paytm कितनी conditions check करता है?" }, claudePrompt: "Paytm payment complete karne se pehle kitni conditions check karta hai? Hindi mein samjhao." }]
    },
    {
      day: 3, dayInWeek: 3, type: "practice",
      title: { en: "For Loops — Iterate Everything", hi: "For Loops — सब पर Iterate करो" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Learn for loops with range(), lists, strings, dicts", hi: "For loops सीखो — range(), lists, strings, dicts के साथ" } },
        { time: "1:00–2:00", activity: { en: "Practice enumerate(), zip(), nested for loops", hi: "enumerate(), zip(), nested for loops practice करो" } },
        { time: "2:00–3:00", activity: { en: "Solve 8 for-loop problems", hi: "8 for-loop problems solve करो" } }
      ],
      topics: [{ en: "for loop syntax", hi: "for loop syntax" }, { en: "range() function", hi: "range() function" }, { en: "Looping through collections", hi: "Collections पर loop" }, { en: "enumerate() and zip()", hi: "enumerate() और zip()" }],
      resources: [{ title: "Python For Loops — W3Schools", url: "https://www.w3schools.com/python/python_for_loops.asp", type: "article" }],
      claudePrompt: { en: "Teach me Python for loops completely. Show loops with range, lists, strings, dicts. Then teach enumerate and zip. Use Instagram feed scrolling as example. Give 8 problems.", hi: "Mujhe Python for loops poore sikhao. range, lists, strings, dicts ke saath loops dikhao. Phir enumerate aur zip sikhao. Instagram feed scrolling example use karo. 8 problems do." },
      tasks: [
        { id: "w3d3t1", text: { en: "Loop through a list and print each item", hi: "List पर loop करो और हर item print करो" }, type: "code" },
        { id: "w3d3t2", text: { en: "Use range() to print numbers 1 to 100", hi: "range() से 1 से 100 numbers print करो" }, type: "code" },
        { id: "w3d3t3", text: { en: "Loop through a dictionary and print key-value pairs", hi: "Dictionary पर loop करो, key-value pairs print करो" }, type: "code" },
        { id: "w3d3t4", text: { en: "Build a multiplication table generator", hi: "Multiplication table generator बनाओ" }, type: "code" }
      ],
      realAppConnection: { app: "Instagram", concept: { en: "For Loops", hi: "For Loops" }, explanation: { en: "Instagram's feed = for post in feed_list: display(post). Stories bar = for story in stories: show_circle(story). Every scroll triggers a loop!", hi: "Instagram feed = for post in feed_list: display(post)। Stories bar = for story in stories: show_circle(story)। हर scroll एक loop trigger करता है!" } },
      thinkingQuestions: [{ question: { en: "How does Instagram show 'infinite scroll' — is it really infinite?", hi: "Instagram 'infinite scroll' कैसे दिखाता है — क्या सच में infinite है?" }, claudePrompt: "Instagram infinite scroll kaise karta hai? Kya yeh sach mein infinite hai ya loop se relate karta hai? Hindi mein samjhao." }]
    },
    {
      day: 4, dayInWeek: 4, type: "practice",
      title: { en: "While Loops & Loop Control", hi: "While Loops और Loop Control" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Learn while loops, break, continue, else with loops", hi: "While loops, break, continue, else with loops सीखो" } },
        { time: "1:00–2:00", activity: { en: "Practice: infinite loops, countdown, input validation", hi: "Practice: infinite loops, countdown, input validation" } },
        { time: "2:00–3:00", activity: { en: "Solve 8 while loop problems", hi: "8 while loop problems solve करो" } }
      ],
      topics: [{ en: "while loop", hi: "while loop" }, { en: "break and continue", hi: "break और continue" }, { en: "Infinite loops", hi: "Infinite loops" }],
      resources: [{ title: "Python While Loops", url: "https://www.w3schools.com/python/python_while_loops.asp", type: "article" }],
      claudePrompt: { en: "Teach me Python while loops, break, continue. Show a game loop example (while player_alive: play()). Explain infinite loops and when to use break. Give 8 problems.", hi: "Mujhe Python while loops, break, continue sikhao. Game loop example dikhao (while player_alive: play()). Infinite loops aur break kab use karna hai samjhao. 8 problems do." },
      tasks: [
        { id: "w3d4t1", text: { en: "Write a countdown timer using while loop", hi: "While loop से countdown timer लिखो" }, type: "code" },
        { id: "w3d4t2", text: { en: "Build a number guessing game", hi: "Number guessing game बनाओ" }, type: "code" },
        { id: "w3d4t3", text: { en: "Use break and continue in loops", hi: "Loops में break और continue use करो" }, type: "code" },
        { id: "w3d4t4", text: { en: "Create an input validation loop", hi: "Input validation loop बनाओ" }, type: "code" }
      ],
      realAppConnection: { app: "YouTube", concept: { en: "While Loops", hi: "While Loops" }, explanation: { en: "YouTube autoplay = while autoplay_on: play_next_video(). The video keeps playing (while loop) until you turn off autoplay (break)!", hi: "YouTube autoplay = while autoplay_on: play_next_video()। Video चलता रहता है (while loop) जब तक autoplay बंद नहीं करो (break)!" } },
      thinkingQuestions: [{ question: { en: "What would happen if YouTube's autoplay loop had no break condition?", hi: "अगर YouTube के autoplay loop में break condition न हो तो क्या होगा?" }, claudePrompt: "Agar YouTube ke autoplay loop mein break condition na ho to kya hoga? Infinite loop kaise relate karta hai? Hindi mein samjhao." }]
    },
    {
      day: 5, dayInWeek: 5, type: "combine",
      title: { en: "Combining Conditions & Loops", hi: "Conditions और Loops मिलाओ" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Review all Week 3 topics", hi: "Week 3 के सभी topics review करो" } },
        { time: "1:00–2:00", activity: { en: "Solve 5 problems combining if-else with loops", hi: "if-else और loops मिलाकर 5 problems solve करो" } },
        { time: "2:00–3:00", activity: { en: "Build a menu-driven program", hi: "Menu-driven program बनाओ" } }
      ],
      topics: [{ en: "All Week 3 combined", hi: "Week 3 सब combined" }],
      resources: [],
      claudePrompt: { en: "I've learned if-else, nested conditions, for loops, while loops, break, continue. Give me 5 problems combining all of these. Then help me build a menu-driven student management program.", hi: "Maine if-else, nested conditions, for loops, while loops, break, continue seekha hai. 5 problems do jo sab combine kare. Phir menu-driven student management program banana help karo." },
      tasks: [
        { id: "w3d5t1", text: { en: "Review Week 3 notes", hi: "Week 3 notes review करो" }, type: "learn" },
        { id: "w3d5t2", text: { en: "Solve 5 mixed problems", hi: "5 mixed problems solve करो" }, type: "code" },
        { id: "w3d5t3", text: { en: "Build a menu-driven program", hi: "Menu-driven program बनाओ" }, type: "code" }
      ],
      realAppConnection: null, thinkingQuestions: []
    },
    {
      day: 6, dayInWeek: 6, type: "project",
      title: { en: "Mini Project: Quiz Game", hi: "Mini Project: Quiz Game" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–0:30", activity: { en: "Plan: questions list, scoring, lives system", hi: "Plan: questions list, scoring, lives system" } },
        { time: "0:30–2:00", activity: { en: "Code the Quiz Game", hi: "Quiz Game code करो" } },
        { time: "2:00–3:00", activity: { en: "Test, add difficulty levels, polish", hi: "Test करो, difficulty levels add करो, polish करो" } }
      ],
      topics: [{ en: "Complete project with conditions + loops", hi: "Conditions + loops का complete project" }],
      resources: [],
      claudePrompt: { en: "Help me build a Quiz Game in Python. Features: 10 questions stored as list of dicts, 3 lives, score tracking, difficulty levels (easy/hard), play again option. Use while loop for game, for loop for questions, if-else for checking answers.", hi: "Mujhe Quiz Game build karne mein help karo Python mein. Features: 10 questions list of dicts mein, 3 lives, score tracking, difficulty levels, play again option. While loop game ke liye, for loop questions ke liye, if-else answers check karne ke liye." },
      tasks: [
        { id: "w3d6t1", text: { en: "Plan game structure", hi: "Game structure plan करो" }, type: "think" },
        { id: "w3d6t2", text: { en: "Code the complete Quiz Game", hi: "पूरा Quiz Game code करो" }, type: "code" },
        { id: "w3d6t3", text: { en: "Add score tracking and lives system", hi: "Score tracking और lives system add करो" }, type: "code" },
        { id: "w3d6t4", text: { en: "Test and share with Claude", hi: "Test करो और Claude को share करो" }, type: "learn" }
      ],
      realAppConnection: null, thinkingQuestions: []
    },
    { day: 7, dayInWeek: 7, type: "rest", title: { en: "Rest Day — Recharge! 🌺", hi: "आराम का दिन — Recharge करो! 🌺" }, duration: "0 hours", timeBlocks: [], topics: [], resources: [], claudePrompt: { en: "", hi: "" }, tasks: [], realAppConnection: null, thinkingQuestions: [] }
  ]
};
