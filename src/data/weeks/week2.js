// Week 2: Lists, Tuples & Dictionaries
export const week2 = {
  week: 2,
  title: { en: "Collections — Lists, Tuples & Dictionaries", hi: "Collections — Lists, Tuples और Dictionaries" },
  days: [
    {
      day: 1, dayInWeek: 1, type: "concept",
      title: { en: "Understanding Lists & Tuples", hi: "Lists और Tuples समझो" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Learn what lists and tuples are, how to create them", hi: "Lists और tuples क्या हैं, कैसे बनाते हैं — सीखो" } },
        { time: "1:00–2:00", activity: { en: "Practice indexing, slicing, and basic list operations", hi: "Indexing, slicing, और basic list operations practice करो" } },
        { time: "2:00–3:00", activity: { en: "Understand difference between lists (mutable) and tuples (immutable)", hi: "Lists (mutable) और tuples (immutable) का difference समझो" } }
      ],
      topics: [
        { en: "Creating lists and tuples", hi: "Lists और tuples बनाना" },
        { en: "Indexing and slicing", hi: "Indexing और slicing" },
        { en: "Mutable vs immutable", hi: "Mutable vs immutable" },
        { en: "len(), in operator", hi: "len(), in operator" }
      ],
      resources: [
        { title: "Python Lists — W3Schools", url: "https://www.w3schools.com/python/python_lists.asp", type: "article" },
        { title: "Python Tuples — W3Schools", url: "https://www.w3schools.com/python/python_tuples.asp", type: "article" }
      ],
      claudePrompt: {
        en: "Teach me Python lists and tuples from scratch. Explain with food delivery examples (like a list of menu items). Cover creating, indexing, slicing, mutable vs immutable. Give 5 practice exercises.",
        hi: "Mujhe Python lists aur tuples scratch se sikhao. Food delivery examples se samjhao (jaise menu items ki list). Creating, indexing, slicing, mutable vs immutable cover karo. 5 practice exercises do."
      },
      tasks: [
        { id: "w2d1t1", text: { en: "Create 5 different lists and 3 tuples", hi: "5 अलग lists और 3 tuples बनाओ" }, type: "code" },
        { id: "w2d1t2", text: { en: "Practice indexing — get first, last, middle elements", hi: "Indexing practice — first, last, middle elements निकालो" }, type: "code" },
        { id: "w2d1t3", text: { en: "Try to modify a tuple — observe the error", hi: "Tuple modify करने की कोशिश करो — error देखो" }, type: "code" },
        { id: "w2d1t4", text: { en: "Write notes comparing lists vs tuples", hi: "Lists vs tuples compare करके notes लिखो" }, type: "learn" }
      ],
      realAppConnection: { app: "Zomato", concept: { en: "Lists", hi: "Lists" }, explanation: { en: "Your order history on Zomato is a list! Each restaurant's menu is a list of items. The 'Top Picks' section is a sliced list showing only the first 5 items.", hi: "Zomato पर तुम्हारी order history एक list है! हर restaurant का menu items की list है। 'Top Picks' section एक sliced list है जो सिर्फ पहले 5 items दिखाती है।" } },
      thinkingQuestions: [
        { question: { en: "Why is a restaurant's address a tuple and not a list?", hi: "Restaurant का address tuple क्यों है, list क्यों नहीं?" }, claudePrompt: "Restaurant ka address Python mein tuple kyon hona chahiye, list kyon nahi? Hindi mein samjhao." }
      ]
    },
    {
      day: 2, dayInWeek: 2, type: "practice",
      title: { en: "List Methods Deep Dive", hi: "List Methods गहराई से सीखो" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Learn: append, insert, remove, pop, sort, reverse, extend", hi: "सीखो: append, insert, remove, pop, sort, reverse, extend" } },
        { time: "1:00–2:00", activity: { en: "Practice list comprehensions", hi: "List comprehensions practice करो" } },
        { time: "2:00–3:00", activity: { en: "Solve 8 list manipulation problems", hi: "8 list manipulation problems solve करो" } }
      ],
      topics: [
        { en: "List methods (append, pop, sort, etc.)", hi: "List methods (append, pop, sort, etc.)" },
        { en: "List comprehensions", hi: "List comprehensions" },
        { en: "Nested lists", hi: "Nested lists" }
      ],
      resources: [
        { title: "Python List Methods", url: "https://www.w3schools.com/python/python_lists_methods.asp", type: "article" },
        { title: "List Comprehensions — Real Python", url: "https://realpython.com/list-comprehension-python/", type: "article" }
      ],
      claudePrompt: {
        en: "Teach me all Python list methods with simple examples. Then teach list comprehensions step by step. Give me 8 problems to practice — start easy, end hard.",
        hi: "Mujhe saare Python list methods simple examples ke saath sikhao. Phir list comprehensions step by step samjhao. 8 practice problems do — easy se hard tak."
      },
      tasks: [
        { id: "w2d2t1", text: { en: "Use each list method at least once", hi: "हर list method कम से कम एक बार use करो" }, type: "code" },
        { id: "w2d2t2", text: { en: "Write 3 list comprehensions", hi: "3 list comprehensions लिखो" }, type: "code" },
        { id: "w2d2t3", text: { en: "Create a nested list (matrix) and access elements", hi: "Nested list (matrix) बनाओ और elements access करो" }, type: "code" },
        { id: "w2d2t4", text: { en: "Sort a list of names alphabetically", hi: "Names की list alphabetically sort करो" }, type: "code" }
      ],
      realAppConnection: { app: "Instagram", concept: { en: "List Methods", hi: "List Methods" }, explanation: { en: "When you follow someone on Instagram, it's list.append(). Unfollow = list.remove(). Your feed is sorted by algorithm — that's list.sort() with a custom key!", hi: "Instagram पर follow करना = list.append()। Unfollow = list.remove()। Feed sorting = list.sort() custom key के साथ!" } },
      thinkingQuestions: [{ question: { en: "How does Instagram's 'suggested' list get created?", hi: "Instagram की 'suggested' list कैसे बनती है?" }, claudePrompt: "Instagram ki suggested list kaise banti hai? Kya yeh list operations se related hai? Hindi mein samjhao." }]
    },
    {
      day: 3, dayInWeek: 3, type: "practice",
      title: { en: "Dictionaries — Key-Value Power", hi: "Dictionaries — Key-Value की ताकत" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Learn dictionary creation, accessing, adding, updating values", hi: "Dictionary बनाना, access करना, add करना, update करना सीखो" } },
        { time: "1:00–2:00", activity: { en: "Practice dict methods: keys(), values(), items(), get(), update()", hi: "Dict methods practice: keys(), values(), items(), get(), update()" } },
        { time: "2:00–3:00", activity: { en: "Build a mini phone book using dictionaries", hi: "Dictionaries से mini phone book बनाओ" } }
      ],
      topics: [
        { en: "Creating dictionaries", hi: "Dictionaries बनाना" },
        { en: "Accessing and modifying values", hi: "Values access और modify करना" },
        { en: "Dictionary methods", hi: "Dictionary methods" },
        { en: "Nested dictionaries", hi: "Nested dictionaries" }
      ],
      resources: [
        { title: "Python Dictionaries — W3Schools", url: "https://www.w3schools.com/python/python_dictionaries.asp", type: "article" }
      ],
      claudePrompt: {
        en: "Teach me Python dictionaries completely. Use a student profile as example. Cover creation, accessing, methods (keys, values, items, get, update, pop), and nested dicts. Build a phone book project at the end.",
        hi: "Mujhe Python dictionaries poori tarah sikhao. Student profile example use karo. Creation, accessing, methods (keys, values, items, get, update, pop), aur nested dicts cover karo. End mein phone book project build karo."
      },
      tasks: [
        { id: "w2d3t1", text: { en: "Create a dictionary with your personal info", hi: "अपनी personal info का dictionary बनाओ" }, type: "code" },
        { id: "w2d3t2", text: { en: "Practice all dictionary methods", hi: "सभी dictionary methods practice करो" }, type: "code" },
        { id: "w2d3t3", text: { en: "Create a nested dict (student with subjects and marks)", hi: "Nested dict बनाओ (student with subjects and marks)" }, type: "code" },
        { id: "w2d3t4", text: { en: "Build a mini phone book — add, search, delete contacts", hi: "Mini phone book बनाओ — contacts add, search, delete करो" }, type: "code" }
      ],
      realAppConnection: { app: "Ola", concept: { en: "Dictionaries", hi: "Dictionaries" }, explanation: { en: "Every Ola ride is a dictionary: {'driver': 'Ramesh', 'car': 'Swift', 'rating': 4.5, 'fare': 250}. Your ride history is a list of dictionaries!", hi: "हर Ola ride एक dictionary है: {'driver': 'Ramesh', 'car': 'Swift', 'rating': 4.5, 'fare': 250}। Ride history = list of dictionaries!" } },
      thinkingQuestions: [{ question: { en: "Why is a dictionary better than a list for storing user profiles?", hi: "User profiles store करने के लिए dictionary list से बेहतर क्यों है?" }, claudePrompt: "User profiles store karne ke liye dictionary list se better kyon hai? Hindi mein example ke saath samjhao." }]
    },
    {
      day: 4, dayInWeek: 4, type: "practice",
      title: { en: "Sets & Nested Data Structures", hi: "Sets और Nested Data Structures" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Learn sets: creation, add, remove, union, intersection", hi: "Sets सीखो: creation, add, remove, union, intersection" } },
        { time: "1:00–2:00", activity: { en: "Practice nested structures: list of dicts, dict of lists", hi: "Nested structures practice: list of dicts, dict of lists" } },
        { time: "2:00–3:00", activity: { en: "Solve 6 problems using mixed data structures", hi: "Mixed data structures से 6 problems solve करो" } }
      ],
      topics: [
        { en: "Sets and set operations", hi: "Sets और set operations" },
        { en: "List of dictionaries", hi: "Dictionaries की list" },
        { en: "Dictionary of lists", hi: "Lists का dictionary" }
      ],
      resources: [
        { title: "Python Sets — W3Schools", url: "https://www.w3schools.com/python/python_sets.asp", type: "article" }
      ],
      claudePrompt: {
        en: "Teach me Python sets and nested data structures. Cover set operations (union, intersection, difference). Then show how to combine lists, dicts, tuples, sets together. Give real examples like a class of students with subjects.",
        hi: "Mujhe Python sets aur nested data structures sikhao. Set operations (union, intersection, difference) cover karo. Phir dikhao kaise lists, dicts, tuples, sets ko combine karte hain. Real examples do jaise students ki class with subjects."
      },
      tasks: [
        { id: "w2d4t1", text: { en: "Create sets and practice union, intersection", hi: "Sets बनाओ और union, intersection practice करो" }, type: "code" },
        { id: "w2d4t2", text: { en: "Build a list of student dictionaries", hi: "Students के dictionaries की list बनाओ" }, type: "code" },
        { id: "w2d4t3", text: { en: "Access deeply nested data (3 levels deep)", hi: "Deeply nested data access करो (3 levels deep)" }, type: "code" },
        { id: "w2d4t4", text: { en: "Find common friends between two users using sets", hi: "Sets से दो users के common friends ढूंढो" }, type: "code" }
      ],
      realAppConnection: { app: "Amazon", concept: { en: "Nested Data Structures", hi: "Nested Data Structures" }, explanation: { en: "Amazon product = dict with nested lists (images, reviews) and nested dicts (seller info, pricing). Your cart is a list of product dicts. Wishlist uses sets to avoid duplicates!", hi: "Amazon product = dict with nested lists (images, reviews) aur nested dicts (seller info, pricing). Cart = list of product dicts. Wishlist sets use karti hai duplicates avoid karne ke liye!" } },
      thinkingQuestions: [{ question: { en: "Why does Amazon's wishlist never show duplicates?", hi: "Amazon की wishlist में duplicates क्यों नहीं दिखते?" }, claudePrompt: "Amazon ki wishlist mein duplicates kyon nahi dikhte? Kya yeh Python sets se related hai? Hindi mein samjhao." }]
    },
    {
      day: 5, dayInWeek: 5, type: "combine",
      title: { en: "Combining Collections Together", hi: "सभी Collections मिलाओ" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Review lists, tuples, dicts, sets — key differences", hi: "Lists, tuples, dicts, sets review — key differences" } },
        { time: "1:00–2:00", activity: { en: "Solve 5 problems using multiple collection types", hi: "Multiple collection types से 5 problems solve करो" } },
        { time: "2:00–3:00", activity: { en: "Build a student database combining all collection types", hi: "सभी collection types मिलाकर student database बनाओ" } }
      ],
      topics: [{ en: "All collection types combined", hi: "सभी collection types combined" }],
      resources: [{ title: "Python Collections Overview", url: "https://www.w3schools.com/python/python_lists.asp", type: "article" }],
      claudePrompt: {
        en: "I've learned lists, tuples, dictionaries, and sets. Give me 5 problems that combine multiple collection types. Then help me build a student database that uses all types together.",
        hi: "Maine lists, tuples, dictionaries, aur sets seekhe hain. 5 problems do jo multiple collection types combine kare. Phir student database build karne mein help karo jo saare types use kare."
      },
      tasks: [
        { id: "w2d5t1", text: { en: "Review notes from this week", hi: "इस हफ्ते के notes review करो" }, type: "learn" },
        { id: "w2d5t2", text: { en: "Solve 5 mixed collection problems", hi: "5 mixed collection problems solve करो" }, type: "code" },
        { id: "w2d5t3", text: { en: "Build a student database program", hi: "Student database program बनाओ" }, type: "code" }
      ],
      realAppConnection: null, thinkingQuestions: []
    },
    {
      day: 6, dayInWeek: 6, type: "project",
      title: { en: "Mini Project: Contact Book App", hi: "Mini Project: Contact Book App" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–0:30", activity: { en: "Plan: features — add, search, update, delete, list all", hi: "Plan: features — add, search, update, delete, list all" } },
        { time: "0:30–2:00", activity: { en: "Code the Contact Book App", hi: "Contact Book App code करो" } },
        { time: "2:00–3:00", activity: { en: "Test thoroughly and add error handling", hi: "अच्छे से test करो और error handling add करो" } }
      ],
      topics: [{ en: "Complete project using collections", hi: "Collections का complete project" }],
      resources: [],
      claudePrompt: {
        en: "Help me build a Contact Book App in Python. Features: add contact (name, phone, email), search by name, update contact, delete contact, list all contacts. Use a list of dictionaries to store contacts. Guide me step by step.",
        hi: "Mujhe Contact Book App build karne mein help karo Python mein. Features: contact add (name, phone, email), name se search, contact update, delete, sab contacts list. List of dictionaries use karo. Step by step guide karo."
      },
      tasks: [
        { id: "w2d6t1", text: { en: "Plan the project structure", hi: "Project structure plan करो" }, type: "think" },
        { id: "w2d6t2", text: { en: "Code the complete Contact Book", hi: "पूरी Contact Book code करो" }, type: "code" },
        { id: "w2d6t3", text: { en: "Test all features (add, search, update, delete)", hi: "सभी features test करो (add, search, update, delete)" }, type: "code" },
        { id: "w2d6t4", text: { en: "Share code with Claude for review", hi: "Code Claude को review के लिए भेजो" }, type: "learn" }
      ],
      realAppConnection: null, thinkingQuestions: []
    },
    {
      day: 7, dayInWeek: 7, type: "rest",
      title: { en: "Rest Day — Recharge! 🌺", hi: "आराम का दिन — Recharge करो! 🌺" },
      duration: "0 hours", timeBlocks: [], topics: [], resources: [],
      claudePrompt: { en: "", hi: "" }, tasks: [],
      realAppConnection: null, thinkingQuestions: []
    }
  ]
};
