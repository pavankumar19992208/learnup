// Week 5: File Handling & Error Handling
export const week5 = {
  week: 5,
  title: { en: "File Handling & Error Handling", hi: "File Handling और Error Handling" },
  days: [
    {
      day: 1, dayInWeek: 1, type: "concept",
      title: { en: "Reading & Writing Files", hi: "Files पढ़ना और लिखना" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Learn open(), read(), write(), close() and with statement", hi: "open(), read(), write(), close() और with statement सीखो" } },
        { time: "1:00–2:00", activity: { en: "Practice reading/writing text files", hi: "Text files read/write practice करो" } },
        { time: "2:00–3:00", activity: { en: "Work with file modes: r, w, a, r+", hi: "File modes: r, w, a, r+ के साथ काम करो" } }
      ],
      topics: [{ en: "File operations", hi: "File operations" }, { en: "with statement", hi: "with statement" }, { en: "File modes", hi: "File modes" }],
      resources: [{ title: "Python File Handling — W3Schools", url: "https://www.w3schools.com/python/python_file_handling.asp", type: "article" }],
      claudePrompt: { en: "Teach me Python file handling from zero. Cover open, read, write, close, with statement, file modes. Use diary/journal example. Give 5 exercises.", hi: "Mujhe Python file handling zero se sikhao. open, read, write, close, with statement, file modes cover karo. Diary/journal example use karo. 5 exercises do." },
      tasks: [
        { id: "w5d1t1", text: { en: "Create and write to a text file", hi: "Text file बनाओ और लिखो" }, type: "code" },
        { id: "w5d1t2", text: { en: "Read file contents and display", hi: "File contents पढ़ो और display करो" }, type: "code" },
        { id: "w5d1t3", text: { en: "Append data to existing file", hi: "Existing file में data append करो" }, type: "code" },
        { id: "w5d1t4", text: { en: "Build a simple diary program", hi: "Simple diary program बनाओ" }, type: "code" }
      ],
      realAppConnection: { app: "Google Docs", concept: { en: "File Handling", hi: "File Handling" }, explanation: { en: "Google Docs reads your file when you open it (read mode), lets you edit (write mode), and auto-saves (append mode). Every text app uses file handling!", hi: "Google Docs file खोलने पर read करता है (read mode), edit करने देता है (write mode), auto-save करता है (append mode)। हर text app file handling use करता है!" } },
      thinkingQuestions: [{ question: { en: "What happens if two people open the same Google Doc?", hi: "अगर दो लोग एक ही Google Doc खोलें तो क्या होगा?" }, claudePrompt: "Agar do log ek hi Google Doc kholein to kya hoga? File handling ke context mein Hindi mein samjhao." }]
    },
    {
      day: 2, dayInWeek: 2, type: "practice",
      title: { en: "CSV & JSON Files", hi: "CSV और JSON Files" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Learn csv module: reader, writer, DictReader, DictWriter", hi: "csv module सीखो: reader, writer, DictReader, DictWriter" } },
        { time: "1:00–2:00", activity: { en: "Learn json module: load, dump, loads, dumps", hi: "json module सीखो: load, dump, loads, dumps" } },
        { time: "2:00–3:00", activity: { en: "Build a student grades CSV manager", hi: "Student grades CSV manager बनाओ" } }
      ],
      topics: [{ en: "CSV file operations", hi: "CSV file operations" }, { en: "JSON file operations", hi: "JSON file operations" }],
      resources: [{ title: "Python CSV — W3Schools", url: "https://www.w3schools.com/python/python_csv.asp", type: "article" }, { title: "Python JSON", url: "https://www.w3schools.com/python/python_json.asp", type: "article" }],
      claudePrompt: { en: "Teach me how to work with CSV and JSON files in Python. Show csv module (reader, writer, DictReader) and json module (load, dump). Build a student grades manager using CSV.", hi: "Mujhe Python mein CSV aur JSON files ke saath kaam karna sikhao. csv module aur json module dikhao. Student grades manager build karo CSV se." },
      tasks: [
        { id: "w5d2t1", text: { en: "Create and read a CSV file", hi: "CSV file बनाओ और पढ़ो" }, type: "code" },
        { id: "w5d2t2", text: { en: "Work with JSON — save and load data", hi: "JSON से data save और load करो" }, type: "code" },
        { id: "w5d2t3", text: { en: "Convert between CSV and JSON", hi: "CSV और JSON के बीच convert करो" }, type: "code" },
        { id: "w5d2t4", text: { en: "Build a grades CSV manager", hi: "Grades CSV manager बनाओ" }, type: "code" }
      ],
      realAppConnection: { app: "Excel/Google Sheets", concept: { en: "CSV Files", hi: "CSV Files" }, explanation: { en: "Every spreadsheet you use is essentially a CSV file! When you download data from any website, it's usually CSV or JSON. APIs return JSON data.", hi: "हर spreadsheet basically एक CSV file है! किसी website से data download करो तो CSV या JSON मिलता है। APIs JSON data return करती हैं।" } },
      thinkingQuestions: [{ question: { en: "Why do APIs use JSON instead of CSV?", hi: "APIs CSV की जगह JSON क्यों use करती हैं?" }, claudePrompt: "APIs CSV ki jagah JSON kyon use karti hain? Hindi mein samjhao." }]
    },
    {
      day: 3, dayInWeek: 3, type: "practice",
      title: { en: "Error Handling — Try/Except", hi: "Error Handling — Try/Except" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Learn try, except, else, finally blocks", hi: "try, except, else, finally blocks सीखो" } },
        { time: "1:00–2:00", activity: { en: "Handle common errors: ValueError, TypeError, FileNotFoundError, KeyError", hi: "Common errors handle करो: ValueError, TypeError, FileNotFoundError, KeyError" } },
        { time: "2:00–3:00", activity: { en: "Practice writing robust code with error handling", hi: "Error handling से robust code लिखने की practice" } }
      ],
      topics: [{ en: "try-except blocks", hi: "try-except blocks" }, { en: "Common exception types", hi: "Common exception types" }, { en: "Custom exceptions", hi: "Custom exceptions" }],
      resources: [{ title: "Python Try Except — W3Schools", url: "https://www.w3schools.com/python/python_try_except.asp", type: "article" }],
      claudePrompt: { en: "Teach me Python error handling: try, except, else, finally. Show all common exceptions with examples. Explain when and why to use error handling. Give 6 exercises.", hi: "Mujhe Python error handling sikhao: try, except, else, finally. Common exceptions examples ke saath dikhao. Kab aur kyon error handling use karna hai samjhao. 6 exercises do." },
      tasks: [
        { id: "w5d3t1", text: { en: "Write try-except for 5 common errors", hi: "5 common errors के लिए try-except लिखो" }, type: "code" },
        { id: "w5d3t2", text: { en: "Handle file not found error gracefully", hi: "File not found error gracefully handle करो" }, type: "code" },
        { id: "w5d3t3", text: { en: "Create input validation with error handling", hi: "Error handling से input validation बनाओ" }, type: "code" },
        { id: "w5d3t4", text: { en: "Write code that never crashes (handles all errors)", hi: "ऐसा code लिखो जो कभी crash न हो" }, type: "code" }
      ],
      realAppConnection: { app: "Any App", concept: { en: "Error Handling", hi: "Error Handling" }, explanation: { en: "When Instagram says 'No internet connection' instead of crashing — that's error handling! Every app uses try-except to show friendly messages instead of crashing.", hi: "जब Instagram crash होने की जगह 'No internet connection' दिखाता है — वो error handling है! हर app try-except use करता है friendly messages दिखाने के लिए।" } },
      thinkingQuestions: [{ question: { en: "What would happen if Paytm had no error handling during payment?", hi: "अगर Paytm में payment के दौरान error handling न हो तो क्या होगा?" }, claudePrompt: "Agar Paytm mein payment ke dauraan error handling na ho to kya hoga? Hindi mein samjhao." }]
    },
    {
      day: 4, dayInWeek: 4, type: "practice",
      title: { en: "OS Module & File System Operations", hi: "OS Module और File System Operations" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Learn os module: listdir, mkdir, rename, remove, path operations", hi: "os module सीखो: listdir, mkdir, rename, remove, path operations" } },
        { time: "1:00–2:00", activity: { en: "Practice navigating and manipulating file system", hi: "File system navigate और manipulate practice करो" } },
        { time: "2:00–3:00", activity: { en: "Build a file organizer script", hi: "File organizer script बनाओ" } }
      ],
      topics: [{ en: "os module functions", hi: "os module functions" }, { en: "Path operations", hi: "Path operations" }, { en: "Directory manipulation", hi: "Directory manipulation" }],
      resources: [{ title: "Python OS Module", url: "https://www.w3schools.com/python/module_os.asp", type: "docs" }],
      claudePrompt: { en: "Teach me Python os module: directory operations, file operations, path manipulation. Help me build a file organizer that sorts files by extension into folders.", hi: "Mujhe Python os module sikhao: directory operations, file operations, path manipulation. File organizer build karne mein help karo jo files ko extension ke hisaab se folders mein sort kare." },
      tasks: [
        { id: "w5d4t1", text: { en: "List all files in a directory", hi: "Directory में सभी files list करो" }, type: "code" },
        { id: "w5d4t2", text: { en: "Create and delete folders programmatically", hi: "Programmatically folders बनाओ और delete करो" }, type: "code" },
        { id: "w5d4t3", text: { en: "Get file sizes and modification dates", hi: "File sizes और modification dates पता करो" }, type: "code" },
        { id: "w5d4t4", text: { en: "Build a file organizer script", hi: "File organizer script बनाओ" }, type: "code" }
      ],
      realAppConnection: { app: "File Manager", concept: { en: "OS Module", hi: "OS Module" }, explanation: { en: "Your phone's file manager app IS the os module in action! It lists files (os.listdir), creates folders (os.mkdir), deletes files (os.remove), shows file info (os.stat).", hi: "Phone का file manager app = os module in action! Files list करना (os.listdir), folders बनाना (os.mkdir), files delete (os.remove), file info (os.stat)।" } },
      thinkingQuestions: [{ question: { en: "How does your phone know how much storage is used?", hi: "Phone कैसे जानता है कितना storage use हुआ है?" }, claudePrompt: "Phone kaise jaanta hai kitna storage use hua hai? Kya yeh os module se related hai? Hindi mein samjhao." }]
    },
    {
      day: 5, dayInWeek: 5, type: "combine",
      title: { en: "Combining Files & Error Handling", hi: "Files और Error Handling मिलाओ" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Review all Week 5 topics", hi: "Week 5 के सभी topics review करो" } },
        { time: "1:00–2:00", activity: { en: "Solve 5 problems combining file operations with error handling", hi: "File operations + error handling से 5 problems solve करो" } },
        { time: "2:00–3:00", activity: { en: "Build a robust file processor", hi: "Robust file processor बनाओ" } }
      ],
      topics: [{ en: "All Week 5 combined", hi: "Week 5 सब combined" }],
      resources: [],
      claudePrompt: { en: "I've learned file handling (text, CSV, JSON), error handling (try-except), and os module. Give me 5 problems combining all. Help me build a robust file processor.", hi: "Maine file handling, error handling, aur os module seekha hai. 5 problems do sab combine karke. Robust file processor build karne mein help karo." },
      tasks: [
        { id: "w5d5t1", text: { en: "Review Week 5 notes", hi: "Week 5 notes review करो" }, type: "learn" },
        { id: "w5d5t2", text: { en: "Solve 5 mixed problems", hi: "5 mixed problems solve करो" }, type: "code" },
        { id: "w5d5t3", text: { en: "Build a robust file processor", hi: "Robust file processor बनाओ" }, type: "code" }
      ],
      realAppConnection: null, thinkingQuestions: []
    },
    {
      day: 6, dayInWeek: 6, type: "project",
      title: { en: "Mini Project: Expense Tracker", hi: "Mini Project: Expense Tracker" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–0:30", activity: { en: "Plan: CSV storage, categories, summary reports", hi: "Plan: CSV storage, categories, summary reports" } },
        { time: "0:30–2:00", activity: { en: "Code the Expense Tracker", hi: "Expense Tracker code करो" } },
        { time: "2:00–3:00", activity: { en: "Add summary reports and error handling", hi: "Summary reports और error handling add करो" } }
      ],
      topics: [{ en: "Full project with files + error handling", hi: "Files + error handling का full project" }],
      resources: [],
      claudePrompt: { en: "Help me build an Expense Tracker in Python. Features: add expense (amount, category, date), save to CSV, load expenses, show total by category, monthly summary. Use error handling for all file operations.", hi: "Mujhe Expense Tracker build karne mein help karo Python mein. Features: expense add, CSV mein save, expenses load, category-wise total, monthly summary. Saari file operations mein error handling use karo." },
      tasks: [
        { id: "w5d6t1", text: { en: "Plan the project", hi: "Project plan करो" }, type: "think" },
        { id: "w5d6t2", text: { en: "Code the complete Expense Tracker", hi: "पूरा Expense Tracker code करो" }, type: "code" },
        { id: "w5d6t3", text: { en: "Add category-wise summary", hi: "Category-wise summary add करो" }, type: "code" },
        { id: "w5d6t4", text: { en: "Test and share with Claude", hi: "Test करो और Claude को share करो" }, type: "learn" }
      ],
      realAppConnection: null, thinkingQuestions: []
    },
    { day: 7, dayInWeek: 7, type: "rest", title: { en: "Rest Day — Recharge! 🌺", hi: "आराम का दिन — Recharge करो! 🌺" }, duration: "0 hours", timeBlocks: [], topics: [], resources: [], claudePrompt: { en: "", hi: "" }, tasks: [], realAppConnection: null, thinkingQuestions: [] }
  ]
};
