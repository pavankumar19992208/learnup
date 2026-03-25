export const realApps = [
  {
    name: "Swiggy",
    icon: "🍔",
    color: "#FC8019",
    description: { en: "Food delivery app — perfect for learning conditions, functions, and data structures", hi: "Food delivery app — conditions, functions, और data structures सीखने के लिए perfect" },
    concepts: [
      { feature: { en: "Search Bar", hi: "Search Bar" }, concept: { en: "String methods + Functions", hi: "String methods + Functions" } },
      { feature: { en: "Filters (Veg/Non-Veg)", hi: "Filters (Veg/Non-Veg)" }, concept: { en: "If-Else conditions + filter()", hi: "If-Else conditions + filter()" } },
      { feature: { en: "Restaurant List", hi: "Restaurant List" }, concept: { en: "List of Dictionaries", hi: "List of Dictionaries" } },
      { feature: { en: "Cart Total", hi: "Cart Total" }, concept: { en: "sum() + Functions", hi: "sum() + Functions" } },
      { feature: { en: "Delivery Time Estimate", hi: "Delivery Time" }, concept: { en: "Variables + Math operations", hi: "Variables + Math operations" } },
      { feature: { en: "Coupon System", hi: "Coupon System" }, concept: { en: "If-Else + String matching", hi: "If-Else + String matching" } }
    ],
    questions: [
      { question: { en: "How does Swiggy sort restaurants by rating?", hi: "Swiggy rating से restaurants कैसे sort करता है?" }, claudePrompt: "Swiggy rating se restaurants kaise sort karta hai? Python sorted() function se samjhao Hindi mein." },
      { question: { en: "What data structure stores your order history?", hi: "Order history किस data structure में store होती है?" }, claudePrompt: "Swiggy order history kis data structure mein store hoti hai? List of dicts? Hindi mein samjhao." },
      { question: { en: "How does the 'Apply Coupon' feature work?", hi: "'Apply Coupon' feature कैसे काम करता है?" }, claudePrompt: "Swiggy mein Apply Coupon feature kaise kaam karta hai? Python if-else se samjhao Hindi mein." },
      { question: { en: "How does Swiggy calculate delivery charges?", hi: "Swiggy delivery charges कैसे calculate करता है?" }, claudePrompt: "Swiggy delivery charges kaise calculate karta hai? Python functions se samjhao Hindi mein." }
    ],
    task: { en: "Open Swiggy → Pick any restaurant → Note down 5 menu items with prices → Write Python code: create a list of dicts (name, price, veg/non-veg), add items to cart, calculate total with 5% tax, apply a coupon code 'SAVE50' for ₹50 off.", hi: "Swiggy खोलो → कोई restaurant चुनो → 5 menu items with prices note करो → Python code लिखो: list of dicts बनाओ (name, price, veg/non-veg), cart में add करो, 5% tax के साथ total calculate करो, coupon 'SAVE50' से ₹50 off।" }
  },
  {
    name: "Instagram",
    icon: "📸",
    color: "#E4405F",
    description: { en: "Social media app — great for learning loops, lists, and OOP", hi: "Social media app — loops, lists, और OOP सीखने के लिए great" },
    concepts: [
      { feature: { en: "Feed Scroll", hi: "Feed Scroll" }, concept: { en: "For loop + List", hi: "For loop + List" } },
      { feature: { en: "Like Button", hi: "Like Button" }, concept: { en: "Boolean toggle + Counter", hi: "Boolean toggle + Counter" } },
      { feature: { en: "Follow/Unfollow", hi: "Follow/Unfollow" }, concept: { en: "list.append() / list.remove()", hi: "list.append() / list.remove()" } },
      { feature: { en: "Stories", hi: "Stories" }, concept: { en: "Queue (FIFO) + Timer", hi: "Queue (FIFO) + Timer" } },
      { feature: { en: "User Profile", hi: "User Profile" }, concept: { en: "Class / Dictionary", hi: "Class / Dictionary" } },
      { feature: { en: "Search", hi: "Search" }, concept: { en: "String matching + filter()", hi: "String matching + filter()" } }
    ],
    questions: [
      { question: { en: "How does infinite scroll work without loading ALL posts?", hi: "Infinite scroll सारे posts load किए बिना कैसे काम करता है?" }, claudePrompt: "Instagram infinite scroll saare posts load kiye bina kaise kaam karta hai? Python loops aur pagination se samjhao Hindi mein." },
      { question: { en: "How does the like count update instantly?", hi: "Like count instantly कैसे update होता है?" }, claudePrompt: "Instagram par like count instantly kaise update hota hai? Variables aur API se samjhao Hindi mein." },
      { question: { en: "What is an Instagram User as a Python class?", hi: "Instagram User Python class के रूप में कैसा दिखेगा?" }, claudePrompt: "Instagram User ko Python class ke roop mein kaise likheinge? Attributes aur methods kya honge? Hindi mein samjhao." },
      { question: { en: "How does Instagram show 'mutual followers'?", hi: "Instagram 'mutual followers' कैसे दिखाता है?" }, claudePrompt: "Instagram mutual followers kaise dikhata hai? Python sets intersection se samjhao Hindi mein." }
    ],
    task: { en: "Open Instagram → Look at any profile → Write Python code: create a User class with attributes (username, bio, followers_list, following_list, posts_count). Add methods: follow(user), unfollow(user), get_mutual_followers(other_user). Test with 3 user objects.", hi: "Instagram खोलो → कोई profile देखो → Python code लिखो: User class बनाओ attributes के साथ (username, bio, followers_list, following_list). Methods: follow(user), unfollow(user), get_mutual_followers(other_user). 3 user objects से test करो।" }
  },
  {
    name: "WhatsApp",
    icon: "💬",
    color: "#25D366",
    description: { en: "Messaging app — perfect for strings, lists, and real-time concepts", hi: "Messaging app — strings, lists, और real-time concepts के लिए perfect" },
    concepts: [
      { feature: { en: "Messages", hi: "Messages" }, concept: { en: "Strings + List", hi: "Strings + List" } },
      { feature: { en: "Chat Search", hi: "Chat Search" }, concept: { en: "String methods (find, in)", hi: "String methods (find, in)" } },
      { feature: { en: "Group Members", hi: "Group Members" }, concept: { en: "Set (unique members)", hi: "Set (unique members)" } },
      { feature: { en: "Last Seen", hi: "Last Seen" }, concept: { en: "datetime module", hi: "datetime module" } },
      { feature: { en: "Read Receipts", hi: "Read Receipts" }, concept: { en: "Boolean flags", hi: "Boolean flags" } }
    ],
    questions: [
      { question: { en: "How does WhatsApp search messages so fast?", hi: "WhatsApp messages इतनी तेज़ी से search कैसे करता है?" }, claudePrompt: "WhatsApp messages itni tezi se search kaise karta hai? Python string methods se samjhao Hindi mein." },
      { question: { en: "How do blue ticks work?", hi: "Blue ticks कैसे काम करती हैं?" }, claudePrompt: "WhatsApp blue ticks kaise kaam karti hain? Python booleans se samjhao Hindi mein." },
      { question: { en: "How is group chat different from personal chat in code?", hi: "Code में group chat personal chat से कैसे अलग है?" }, claudePrompt: "Code mein group chat personal chat se kaise alag hai? Data structures se samjhao Hindi mein." },
      { question: { en: "How does 'Delete for Everyone' work?", hi: "'Delete for Everyone' कैसे काम करता है?" }, claudePrompt: "WhatsApp Delete for Everyone kaise kaam karta hai? Python list operations se samjhao Hindi mein." }
    ],
    task: { en: "Write Python code for a mini chat system: Chat class with messages list. Methods: send_message(text), search_messages(keyword), delete_message(index), get_unread_count(). Add timestamps using datetime.", hi: "Python code लिखो mini chat system का: Chat class with messages list। Methods: send_message(text), search_messages(keyword), delete_message(index), get_unread_count()। datetime से timestamps add करो।" }
  },
  {
    name: "YouTube",
    icon: "▶️",
    color: "#FF0000",
    description: { en: "Video platform — great for loops, sorting, and API concepts", hi: "Video platform — loops, sorting, और API concepts के लिए great" },
    concepts: [
      { feature: { en: "Autoplay", hi: "Autoplay" }, concept: { en: "While loop", hi: "While loop" } },
      { feature: { en: "Recommendations", hi: "Recommendations" }, concept: { en: "filter() + sorted() + AI", hi: "filter() + sorted() + AI" } },
      { feature: { en: "Search", hi: "Search" }, concept: { en: "String matching + API", hi: "String matching + API" } },
      { feature: { en: "Playlist", hi: "Playlist" }, concept: { en: "Ordered List", hi: "Ordered List" } },
      { feature: { en: "Subscribe Button", hi: "Subscribe Button" }, concept: { en: "Boolean toggle + API call", hi: "Boolean toggle + API call" } }
    ],
    questions: [
      { question: { en: "How does YouTube decide what to recommend?", hi: "YouTube कैसे decide करता है क्या recommend करना है?" }, claudePrompt: "YouTube kaise decide karta hai kya recommend karna hai? AI aur data structures se samjhao Hindi mein." },
      { question: { en: "How does the progress bar of a video work?", hi: "Video की progress bar कैसे काम करती है?" }, claudePrompt: "YouTube video ki progress bar kaise kaam karti hai? Python se samjhao Hindi mein." },
      { question: { en: "What data does a Video object contain?", hi: "Video object में कौन सा data होता है?" }, claudePrompt: "YouTube Video object mein kaun sa data hota hai? Python dictionary/class se samjhao Hindi mein." },
      { question: { en: "How does YouTube handle millions of videos?", hi: "YouTube millions of videos कैसे handle करता है?" }, claudePrompt: "YouTube millions of videos kaise handle karta hai? Data structures aur databases se samjhao Hindi mein." }
    ],
    task: { en: "Write Python code: Video class (title, views, likes, duration, channel). Create 10 video objects in a list. Implement: sort_by_views(), filter_by_duration(min, max), search(keyword), get_trending(top_n). Test all functions.", hi: "Python code लिखो: Video class (title, views, likes, duration, channel)। 10 video objects list में बनाओ। Implement करो: sort_by_views(), filter_by_duration(min, max), search(keyword), get_trending(top_n)। सब test करो।" }
  },
  {
    name: "Amazon",
    icon: "📦",
    color: "#FF9900",
    description: { en: "E-commerce — perfect for nested structures and OOP", hi: "E-commerce — nested structures और OOP के लिए perfect" },
    concepts: [
      { feature: { en: "Product Listing", hi: "Product Listing" }, concept: { en: "List of Dictionaries/Objects", hi: "List of Dictionaries/Objects" } },
      { feature: { en: "Shopping Cart", hi: "Shopping Cart" }, concept: { en: "List + Functions (add/remove)", hi: "List + Functions (add/remove)" } },
      { feature: { en: "Price Filter", hi: "Price Filter" }, concept: { en: "filter() + lambda", hi: "filter() + lambda" } },
      { feature: { en: "Reviews & Ratings", hi: "Reviews & Ratings" }, concept: { en: "List + avg calculation", hi: "List + avg calculation" } },
      { feature: { en: "Wishlist", hi: "Wishlist" }, concept: { en: "Set (no duplicates)", hi: "Set (no duplicates)" } }
    ],
    questions: [
      { question: { en: "How does Amazon calculate 'Average Rating'?", hi: "Amazon 'Average Rating' कैसे calculate करता है?" }, claudePrompt: "Amazon Average Rating kaise calculate karta hai? Python sum/len se samjhao Hindi mein." },
      { question: { en: "How does the price filter work?", hi: "Price filter कैसे काम करता है?" }, claudePrompt: "Amazon price filter kaise kaam karta hai? Python filter aur lambda se samjhao Hindi mein." },
      { question: { en: "What happens when you click 'Add to Cart'?", hi: "'Add to Cart' click करने पर क्या होता है?" }, claudePrompt: "Amazon mein Add to Cart click karne par kya hota hai? Python code se samjhao Hindi mein." },
      { question: { en: "How does Amazon handle out-of-stock items?", hi: "Amazon out-of-stock items कैसे handle करता है?" }, claudePrompt: "Amazon out-of-stock items kaise handle karta hai? Python if-else se samjhao Hindi mein." }
    ],
    task: { en: "Write Python code: Product class (name, price, rating, stock, category). ShoppingCart class (items list, add_item, remove_item, get_total, apply_discount). Create 8 products, add to cart, apply 10% discount, show final bill.", hi: "Python code लिखो: Product class (name, price, rating, stock, category)। ShoppingCart class (items list, add_item, remove_item, get_total, apply_discount)। 8 products बनाओ, cart में add करो, 10% discount, final bill दिखाओ।" }
  },
  {
    name: "Paytm",
    icon: "💰",
    color: "#00BAF2",
    description: { en: "Payment app — great for conditions, error handling, and security", hi: "Payment app — conditions, error handling, और security के लिए great" },
    concepts: [
      { feature: { en: "UPI Payment", hi: "UPI Payment" }, concept: { en: "Nested if-else + Error handling", hi: "Nested if-else + Error handling" } },
      { feature: { en: "Wallet Balance", hi: "Wallet Balance" }, concept: { en: "Float variable + @property", hi: "Float variable + @property" } },
      { feature: { en: "Transaction History", hi: "Transaction History" }, concept: { en: "List of dicts + File I/O", hi: "List of dicts + File I/O" } },
      { feature: { en: "PIN Verification", hi: "PIN Verification" }, concept: { en: "If-else + String matching", hi: "If-else + String matching" } }
    ],
    questions: [
      { question: { en: "How many if-else checks happen in one UPI payment?", hi: "एक UPI payment में कितने if-else checks होते हैं?" }, claudePrompt: "Ek UPI payment mein kitne if-else checks hote hain? Python nested conditions se samjhao Hindi mein." },
      { question: { en: "How does Paytm prevent negative balance?", hi: "Paytm negative balance कैसे prevent करता है?" }, claudePrompt: "Paytm negative balance kaise prevent karta hai? Python error handling se samjhao Hindi mein." },
      { question: { en: "What happens when payment fails mid-way?", hi: "Payment बीच में fail हो जाए तो क्या होता है?" }, claudePrompt: "Payment beech mein fail ho jaye to kya hota hai? Error handling aur rollback Python se samjhao Hindi mein." },
      { question: { en: "How is transaction history stored?", hi: "Transaction history कैसे store होती है?" }, claudePrompt: "Transaction history kaise store hoti hai? Python file handling se samjhao Hindi mein." }
    ],
    task: { en: "Write Python code: Wallet class (balance, pin). Methods: add_money(amount), pay(amount, pin), get_history(), check_balance(). Use try-except for all operations. Save transactions to JSON file. Test with valid and invalid scenarios.", hi: "Python code लिखो: Wallet class (balance, pin)। Methods: add_money(amount), pay(amount, pin), get_history(), check_balance()। सब operations में try-except use करो। Transactions JSON file में save करो। Valid और invalid scenarios test करो।" }
  },
  {
    name: "Ola/Uber",
    icon: "🚗",
    color: "#1C1C1C",
    description: { en: "Ride-hailing — excellent for OOP and inheritance", hi: "Ride-hailing — OOP और inheritance के लिए excellent" },
    concepts: [
      { feature: { en: "Ride Types", hi: "Ride Types" }, concept: { en: "Inheritance (Vehicle → Auto, Mini, Sedan)", hi: "Inheritance (Vehicle → Auto, Mini, Sedan)" } },
      { feature: { en: "Fare Calculation", hi: "Fare Calculation" }, concept: { en: "Polymorphism (different fare per type)", hi: "Polymorphism (different fare per type)" } },
      { feature: { en: "Driver Rating", hi: "Driver Rating" }, concept: { en: "Average + Conditional formatting", hi: "Average + Conditional formatting" } },
      { feature: { en: "ETA", hi: "ETA" }, concept: { en: "Math (distance/speed) + API", hi: "Math (distance/speed) + API" } }
    ],
    questions: [
      { question: { en: "How does Ola calculate fare differently for Auto vs Sedan?", hi: "Ola Auto vs Sedan के लिए fare अलग कैसे calculate करता है?" }, claudePrompt: "Ola Auto vs Sedan ke liye fare alag kaise calculate karta hai? Polymorphism se samjhao Hindi mein." },
      { question: { en: "What is surge pricing in Python terms?", hi: "Surge pricing Python terms में क्या है?" }, claudePrompt: "Surge pricing Python terms mein kya hai? Conditions aur variables se samjhao Hindi mein." },
      { question: { en: "How does the driver matching algorithm work?", hi: "Driver matching algorithm कैसे काम करता है?" }, claudePrompt: "Ola driver matching algorithm kaise kaam karta hai? Python sorting aur filtering se samjhao Hindi mein." },
      { question: { en: "How does Ola use a Vehicle parent class?", hi: "Ola Vehicle parent class कैसे use करता है?" }, claudePrompt: "Ola Vehicle parent class kaise use karta hai? Python inheritance se samjhao Hindi mein." }
    ],
    task: { en: "Write Python code: Vehicle parent class (base_fare, per_km). Child classes: Auto(Vehicle), Mini(Vehicle), Sedan(Vehicle) — each with different rates. RideManager: book_ride(pickup, drop, type), calculate_fare(distance), apply_surge(multiplier). Test with 5 rides.", hi: "Python code लिखो: Vehicle parent class (base_fare, per_km)। Child classes: Auto, Mini, Sedan — अलग rates। RideManager: book_ride, calculate_fare, apply_surge। 5 rides test करो।" }
  },
  {
    name: "Zomato",
    icon: "🍕",
    color: "#E23744",
    description: { en: "Restaurant discovery — great for data structures and sorting", hi: "Restaurant discovery — data structures और sorting के लिए great" },
    concepts: [
      { feature: { en: "Restaurant Cards", hi: "Restaurant Cards" }, concept: { en: "Dictionary with nested data", hi: "Dictionary with nested data" } },
      { feature: { en: "Sort by Rating/Cost", hi: "Sort by Rating/Cost" }, concept: { en: "sorted() + lambda", hi: "sorted() + lambda" } },
      { feature: { en: "Cuisine Filter", hi: "Cuisine Filter" }, concept: { en: "filter() + Sets", hi: "filter() + Sets" } },
      { feature: { en: "Review System", hi: "Review System" }, concept: { en: "List of dicts + avg calculation", hi: "List of dicts + avg calculation" } }
    ],
    questions: [
      { question: { en: "How does Zomato show 'Trending' restaurants?", hi: "Zomato 'Trending' restaurants कैसे दिखाता है?" }, claudePrompt: "Zomato Trending restaurants kaise dikhata hai? Python sorting se samjhao Hindi mein." },
      { question: { en: "How does the cuisine filter work with multiple selections?", hi: "Multiple selections के साथ cuisine filter कैसे काम करता है?" }, claudePrompt: "Multiple selections ke saath cuisine filter kaise kaam karta hai? Sets aur filter se samjhao Hindi mein." },
      { question: { en: "How is a restaurant's data structured?", hi: "Restaurant का data structure कैसा है?" }, claudePrompt: "Restaurant ka data structure kaisa hai? Python nested dict se samjhao Hindi mein." },
      { question: { en: "How does Zomato calculate delivery time?", hi: "Zomato delivery time कैसे calculate करता है?" }, claudePrompt: "Zomato delivery time kaise calculate karta hai? Math aur functions se samjhao Hindi mein." }
    ],
    task: { en: "Write Python code: Restaurant dict (name, rating, cuisines set, avg_cost, delivery_time, is_open). Create 10 restaurants as list of dicts. Implement: sort_by_rating(), filter_by_cuisine(cuisine), filter_by_cost(min, max), get_open_restaurants(). Display results formatted.", hi: "Python code लिखो: Restaurant dict (name, rating, cuisines, avg_cost, delivery_time, is_open)। 10 restaurants list of dicts में। sort_by_rating(), filter_by_cuisine(), filter_by_cost(), get_open_restaurants() implement करो।" }
  }
];
