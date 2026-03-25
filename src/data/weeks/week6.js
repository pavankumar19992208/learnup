// Week 6: OOP & APIs
export const week6 = {
  week: 6,
  title: { en: "Object-Oriented Programming & APIs", hi: "Object-Oriented Programming और APIs" },
  days: [
    {
      day: 1, dayInWeek: 1, type: "concept",
      title: { en: "Classes & Objects Basics", hi: "Classes और Objects Basics" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Learn what classes and objects are — real world analogy", hi: "Classes और objects क्या हैं — real world example से समझो" } },
        { time: "1:00–2:00", activity: { en: "Practice creating classes with __init__ and self", hi: "__init__ और self से classes बनाने की practice" } },
        { time: "2:00–3:00", activity: { en: "Create objects and call methods", hi: "Objects बनाओ और methods call करो" } }
      ],
      topics: [{ en: "Classes and Objects", hi: "Classes और Objects" }, { en: "__init__ method", hi: "__init__ method" }, { en: "self keyword", hi: "self keyword" }, { en: "Instance variables", hi: "Instance variables" }],
      resources: [{ title: "Python Classes — W3Schools", url: "https://www.w3schools.com/python/python_classes.asp", type: "article" }, { title: "Python OOP — Real Python", url: "https://realpython.com/python3-object-oriented-programming/", type: "article" }],
      claudePrompt: { en: "Teach me Python OOP from scratch. Explain classes and objects using a Student example. Cover __init__, self, instance variables, methods. Make it super simple. Give 5 exercises.", hi: "Mujhe Python OOP scratch se sikhao. Classes aur objects Student example se samjhao. __init__, self, instance variables, methods cover karo. Bahut simple rakho. 5 exercises do." },
      tasks: [
        { id: "w6d1t1", text: { en: "Create a Student class", hi: "Student class बनाओ" }, type: "code" },
        { id: "w6d1t2", text: { en: "Create a Car class with methods", hi: "Methods वाली Car class बनाओ" }, type: "code" },
        { id: "w6d1t3", text: { en: "Create 5 objects from your classes", hi: "Classes से 5 objects बनाओ" }, type: "code" },
        { id: "w6d1t4", text: { en: "Write notes on OOP vs procedural", hi: "OOP vs procedural पर notes लिखो" }, type: "learn" }
      ],
      realAppConnection: { app: "Instagram", concept: { en: "Classes & Objects", hi: "Classes और Objects" }, explanation: { en: "Every Instagram profile is an object of class User! class User has attributes: username, bio, followers_count, posts_list. Methods: post(), follow(), like(). Every user you see is user1 = User('priya')!", hi: "हर Instagram profile एक User class का object है! class User में attributes: username, bio, followers_count। Methods: post(), follow(), like()। हर user = User('priya')!" } },
      thinkingQuestions: [{ question: { en: "If Instagram is built with classes, what would the Post class look like?", hi: "Instagram Post class कैसी दिखेगी?" }, claudePrompt: "Instagram ki Post class kaise dikhegi? Attributes aur methods kya honge? Hindi mein samjhao." }]
    },
    {
      day: 2, dayInWeek: 2, type: "practice",
      title: { en: "Methods, Properties & Magic Methods", hi: "Methods, Properties और Magic Methods" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Learn instance methods, class methods, static methods", hi: "Instance, class, static methods सीखो" } },
        { time: "1:00–2:00", activity: { en: "Practice __str__, __repr__, __len__ magic methods", hi: "__str__, __repr__, __len__ magic methods practice करो" } },
        { time: "2:00–3:00", activity: { en: "Build a BankAccount class with all method types", hi: "BankAccount class बनाओ सभी method types के साथ" } }
      ],
      topics: [{ en: "Method types", hi: "Method types" }, { en: "Magic/Dunder methods", hi: "Magic/Dunder methods" }, { en: "@property decorator", hi: "@property decorator" }],
      resources: [{ title: "Python Class Methods", url: "https://realpython.com/instance-class-and-static-methods-demystified/", type: "article" }],
      claudePrompt: { en: "Teach me Python OOP methods: instance, class, static methods. Then magic methods (__str__, __repr__, __len__). Use BankAccount example. Give 6 exercises.", hi: "Mujhe Python OOP methods sikhao: instance, class, static. Phir magic methods (__str__, __repr__, __len__). BankAccount example use karo. 6 exercises do." },
      tasks: [
        { id: "w6d2t1", text: { en: "Add methods to your Student class", hi: "Student class में methods add करो" }, type: "code" },
        { id: "w6d2t2", text: { en: "Implement __str__ for 3 classes", hi: "3 classes में __str__ implement करो" }, type: "code" },
        { id: "w6d2t3", text: { en: "Build a BankAccount class", hi: "BankAccount class बनाओ" }, type: "code" },
        { id: "w6d2t4", text: { en: "Use @property for controlled access", hi: "Controlled access के लिए @property use करो" }, type: "code" }
      ],
      realAppConnection: { app: "Paytm", concept: { en: "Methods", hi: "Methods" }, explanation: { en: "BankAccount class: deposit() method, withdraw() method, check_balance() property, __str__ shows 'Account: Priya | Balance: ₹5000'. Real banking apps work exactly like this!", hi: "BankAccount class: deposit() method, withdraw() method, check_balance() property, __str__ shows 'Account: Priya | Balance: ₹5000'। Real banking apps ऐसे ही काम करती हैं!" } },
      thinkingQuestions: [{ question: { en: "Why can't you access bank balance directly without a method?", hi: "Bank balance directly access क्यों नहीं कर सकते, method के बिना?" }, claudePrompt: "Bank balance direct access kyon nahi kar sakte, method ke bina? Encapsulation se samjhao Hindi mein." }]
    },
    {
      day: 3, dayInWeek: 3, type: "practice",
      title: { en: "Inheritance & Polymorphism", hi: "Inheritance और Polymorphism" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Learn inheritance: parent class, child class, super()", hi: "Inheritance सीखो: parent class, child class, super()" } },
        { time: "1:00–2:00", activity: { en: "Practice polymorphism and method overriding", hi: "Polymorphism और method overriding practice करो" } },
        { time: "2:00–3:00", activity: { en: "Build a shape hierarchy (Shape → Circle, Rectangle)", hi: "Shape hierarchy बनाओ (Shape → Circle, Rectangle)" } }
      ],
      topics: [{ en: "Inheritance", hi: "Inheritance" }, { en: "super() function", hi: "super() function" }, { en: "Method overriding", hi: "Method overriding" }, { en: "Polymorphism", hi: "Polymorphism" }],
      resources: [{ title: "Python Inheritance — W3Schools", url: "https://www.w3schools.com/python/python_inheritance.asp", type: "article" }],
      claudePrompt: { en: "Teach me Python inheritance and polymorphism. Use Vehicle → Car, Bike example. Cover parent/child class, super(), method overriding. Give 6 exercises.", hi: "Mujhe Python inheritance aur polymorphism sikhao. Vehicle → Car, Bike example use karo. Parent/child class, super(), method overriding cover karo. 6 exercises do." },
      tasks: [
        { id: "w6d3t1", text: { en: "Create parent-child class hierarchy", hi: "Parent-child class hierarchy बनाओ" }, type: "code" },
        { id: "w6d3t2", text: { en: "Override methods in child classes", hi: "Child classes में methods override करो" }, type: "code" },
        { id: "w6d3t3", text: { en: "Use super() to extend parent methods", hi: "super() से parent methods extend करो" }, type: "code" },
        { id: "w6d3t4", text: { en: "Build Shape → Circle, Rectangle hierarchy", hi: "Shape → Circle, Rectangle hierarchy बनाओ" }, type: "code" }
      ],
      realAppConnection: { app: "Ola/Uber", concept: { en: "Inheritance", hi: "Inheritance" }, explanation: { en: "class Vehicle (parent) → class Auto, class Mini, class Sedan (children). All have ride() but each calculates fare differently — that's polymorphism! Same method name, different behavior.", hi: "class Vehicle (parent) → class Auto, Mini, Sedan (children)। सबमें ride() है लेकिन fare अलग calculate होता है — यही polymorphism है!" } },
      thinkingQuestions: [{ question: { en: "How does Ola use the same 'Book' button for Auto, Mini, and Sedan?", hi: "Ola एक ही 'Book' button Auto, Mini, Sedan सब के लिए कैसे use करता है?" }, claudePrompt: "Ola ek hi 'Book' button Auto, Mini, Sedan sab ke liye kaise use karta hai? Polymorphism se samjhao Hindi mein." }]
    },
    {
      day: 4, dayInWeek: 4, type: "practice",
      title: { en: "APIs & Requests Library", hi: "APIs और Requests Library" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Learn what APIs are, HTTP methods (GET, POST), JSON responses", hi: "APIs क्या हैं, HTTP methods (GET, POST), JSON responses सीखो" } },
        { time: "1:00–2:00", activity: { en: "Practice requests library: get(), post(), response.json()", hi: "requests library practice: get(), post(), response.json()" } },
        { time: "2:00–3:00", activity: { en: "Fetch data from 3 free APIs", hi: "3 free APIs से data fetch करो" } }
      ],
      topics: [{ en: "What are APIs", hi: "APIs क्या हैं" }, { en: "HTTP methods", hi: "HTTP methods" }, { en: "requests library", hi: "requests library" }, { en: "JSON parsing", hi: "JSON parsing" }],
      resources: [{ title: "Python Requests Library", url: "https://www.w3schools.com/python/module_requests.asp", type: "article" }, { title: "Free Public APIs", url: "https://github.com/public-apis/public-apis", type: "docs" }],
      claudePrompt: { en: "Teach me APIs in Python. What APIs are, HTTP methods, how to use requests library. Show me how to fetch data from free APIs (weather, jokes, random facts). Make it very simple.", hi: "Mujhe Python mein APIs sikhao. APIs kya hain, HTTP methods, requests library kaise use karna hai. Free APIs se data fetch karna dikhao (weather, jokes, facts). Bahut simple rakho." },
      tasks: [
        { id: "w6d4t1", text: { en: "Install and import requests library", hi: "requests library install और import करो" }, type: "code" },
        { id: "w6d4t2", text: { en: "Fetch a random joke from API", hi: "API से random joke fetch करो" }, type: "code" },
        { id: "w6d4t3", text: { en: "Get weather data for your city", hi: "अपने शहर का weather data लो" }, type: "code" },
        { id: "w6d4t4", text: { en: "Parse JSON response and display formatted data", hi: "JSON response parse करो और formatted data दिखाओ" }, type: "code" }
      ],
      realAppConnection: { app: "Any App with Internet", concept: { en: "APIs", hi: "APIs" }, explanation: { en: "Every time Swiggy loads restaurants, Instagram loads posts, YouTube loads videos — they're calling APIs! Your phone app sends a GET request, server sends JSON back. That's it!", hi: "हर बार Swiggy restaurants load करता है, Instagram posts, YouTube videos — वो APIs call कर रहे हैं! Phone GET request भेजता है, server JSON वापस भेजता है। बस!" } },
      thinkingQuestions: [{ question: { en: "When Instagram shows 'Loading...' — what's happening behind the scenes?", hi: "Instagram 'Loading...' दिखाता है — पीछे क्या हो रहा है?" }, claudePrompt: "Instagram 'Loading...' dikhata hai tab peeche kya ho raha hai? API call ke context mein Hindi mein samjhao." }]
    },
    {
      day: 5, dayInWeek: 5, type: "combine",
      title: { en: "Combining OOP & APIs", hi: "OOP और APIs मिलाओ" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–1:00", activity: { en: "Review OOP + APIs together", hi: "OOP + APIs together review करो" } },
        { time: "1:00–2:00", activity: { en: "Build API wrapper classes", hi: "API wrapper classes बनाओ" } },
        { time: "2:00–3:00", activity: { en: "Solve 5 combined problems", hi: "5 combined problems solve करो" } }
      ],
      topics: [{ en: "OOP + APIs combined", hi: "OOP + APIs combined" }],
      resources: [],
      claudePrompt: { en: "I've learned OOP and APIs. Help me build API wrapper classes — a WeatherService class that fetches weather, a JokeService class that fetches jokes. Combine OOP with API calls.", hi: "Maine OOP aur APIs seekha hai. API wrapper classes build karne mein help karo — WeatherService class jo weather fetch kare, JokeService class jokes ke liye. OOP aur API combine karo." },
      tasks: [
        { id: "w6d5t1", text: { en: "Review Week 6 notes", hi: "Week 6 notes review करो" }, type: "learn" },
        { id: "w6d5t2", text: { en: "Build an API wrapper class", hi: "API wrapper class बनाओ" }, type: "code" },
        { id: "w6d5t3", text: { en: "Solve 5 combined problems", hi: "5 combined problems solve करो" }, type: "code" }
      ],
      realAppConnection: null, thinkingQuestions: []
    },
    {
      day: 6, dayInWeek: 6, type: "project",
      title: { en: "Mini Project: Weather App with OOP", hi: "Mini Project: Weather App with OOP" },
      duration: "3 hours",
      timeBlocks: [
        { time: "0:00–0:30", activity: { en: "Plan: API choice, class structure, features", hi: "Plan: API choice, class structure, features" } },
        { time: "0:30–2:00", activity: { en: "Code the Weather App", hi: "Weather App code करो" } },
        { time: "2:00–3:00", activity: { en: "Add multi-city support, error handling, save history", hi: "Multi-city, error handling, save history add करो" } }
      ],
      topics: [{ en: "Full project with OOP + APIs", hi: "OOP + APIs का full project" }],
      resources: [{ title: "OpenWeatherMap Free API", url: "https://openweathermap.org/api", type: "docs" }],
      claudePrompt: { en: "Help me build a Weather App using Python OOP + APIs. Create WeatherService class, City class. Features: search city weather, 5-day forecast, save favorite cities, error handling for API failures.", hi: "Mujhe Weather App build karne mein help karo Python OOP + APIs se. WeatherService class, City class banao. Features: city weather search, 5-day forecast, favorite cities save, API failures ke liye error handling." },
      tasks: [
        { id: "w6d6t1", text: { en: "Plan classes and API structure", hi: "Classes aur API structure plan करो" }, type: "think" },
        { id: "w6d6t2", text: { en: "Code the Weather App", hi: "Weather App code करो" }, type: "code" },
        { id: "w6d6t3", text: { en: "Handle API errors gracefully", hi: "API errors gracefully handle करो" }, type: "code" },
        { id: "w6d6t4", text: { en: "Test and share with Claude", hi: "Test करो और Claude को share करो" }, type: "learn" }
      ],
      realAppConnection: null, thinkingQuestions: []
    },
    { day: 7, dayInWeek: 7, type: "rest", title: { en: "Rest Day — Recharge! 🌺", hi: "आराम का दिन — Recharge करो! 🌺" }, duration: "0 hours", timeBlocks: [], topics: [], resources: [], claudePrompt: { en: "", hi: "" }, tasks: [], realAppConnection: null, thinkingQuestions: [] }
  ]
};
