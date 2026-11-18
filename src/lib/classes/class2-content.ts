export type Q = { q: string; options: string[]; a: number; type?: string };

export type Lecture = { id: string; subject: string; title: string; emoji: string; video: string; practice: Q[] };

const yt = (id: string) => `https://www.youtube.com/watch?v=${id}`;

export const lectures: Lecture[] = [
  { id: "nouns", subject: "English", title: "Naming Words (Nouns)", emoji: "🏷️", video: yt("xLYEBrBlfdU"), practice: [
    { type: "Find noun", q: "Which is a naming word?", options: ["Run", "Table", "Happy"], a: 1 },
    { type: "Find noun", q: "‘The dog is barking.’ Naming word?", options: ["dog", "is", "barking"], a: 0 },
    { type: "True / False", q: "‘Delhi’ is a naming word.", options: ["True", "False"], a: 0 },
  ] },
  { id: "days", subject: "English", title: "Days & Months", emoji: "📅", video: yt("Fe9bnYRzFvk"), practice: [
    { type: "Next", q: "Monday, Tuesday, __ ?", options: ["Friday", "Wednesday", "Sunday"], a: 1 },
    { type: "Count", q: "How many months in a year?", options: ["10", "12", "7"], a: 1 },
    { type: "Last", q: "Last month of the year?", options: ["December", "January", "June"], a: 0 },
  ] },
  { id: "place", subject: "Maths", title: "Place Value – Tens & Ones", emoji: "🔟", video: yt("_dHu5TFxPtk"), practice: [
    { type: "Tens", q: "In 47, tens digit is?", options: ["4", "7", "47"], a: 0 },
    { type: "Ones", q: "In 85, ones digit is?", options: ["8", "5", "0"], a: 1 },
    { type: "Make", q: "3 tens + 6 ones = ?", options: ["63", "36", "9"], a: 1 },
  ] },
  { id: "add", subject: "Maths", title: "Addition with Carry", emoji: "➕", video: yt("8hz0fAQV0ac"), practice: [
    { type: "Add", q: "27 + 15 = ?", options: ["42", "32", "41"], a: 0 },
    { type: "Add", q: "48 + 36 = ?", options: ["74", "84", "82"], a: 1 },
    { type: "Add", q: "59 + 21 = ?", options: ["70", "80", "81"], a: 1 },
  ] },
  { id: "tables", subject: "Maths", title: "Tables 2 to 10", emoji: "✖️", video: yt("oPINS56lDes"), practice: [
    { type: "Table", q: "2 × 6 = ?", options: ["12", "8", "14"], a: 0 },
    { type: "Table", q: "5 × 4 = ?", options: ["25", "20", "15"], a: 1 },
    { type: "Table", q: "3 × 7 = ?", options: ["21", "24", "18"], a: 0 },
  ] },
  { id: "matra", subject: "Hindi", title: "मात्राएँ (आ, इ, ई)", emoji: "✍️", video: yt("ehSiGAMx7V4"), practice: [
    { type: "मात्रा", q: "‘राजा’ में कौन-सी मात्रा है?", options: ["आ (ा)", "इ (ि)", "उ (ु)"], a: 0 },
    { type: "मात्रा", q: "‘दिल’ में कौन-सी मात्रा है?", options: ["ई (ी)", "इ (ि)", "ए (े)"], a: 1 },
    { type: "सही शब्द", q: "सही शब्द चुनो", options: ["मीठा", "मिठा", "मीठ"], a: 0 },
  ] },
  { id: "vilom", subject: "Hindi", title: "विलोम शब्द", emoji: "🔄", video: yt("75QLc0chiZc"), practice: [
    { type: "विलोम", q: "‘ऊपर’ का विलोम?", options: ["नीचे", "आगे", "पास"], a: 0 },
    { type: "विलोम", q: "‘सुख’ का विलोम?", options: ["खुशी", "दुख", "हँसी"], a: 1 },
    { type: "विलोम", q: "‘काला’ का विलोम?", options: ["लाल", "सफ़ेद", "नीला"], a: 1 },
  ] },
  { id: "homes", subject: "EVS", title: "Animals & Their Homes", emoji: "🏡", video: yt("Iido68T4czc"), practice: [
    { type: "Home", q: "🐦 Bird lives in a?", options: ["Nest", "Den", "Kennel"], a: 0 },
    { type: "Home", q: "🦁 Lion lives in a?", options: ["Hive", "Den", "Stable"], a: 1 },
    { type: "Home", q: "🐝 Bee lives in a?", options: ["Hive", "Burrow", "Shed"], a: 0 },
  ] },
  { id: "helpers", subject: "EVS", title: "Our Helpers", emoji: "👮", video: yt("jt2q1cHsH6E"), practice: [
    { type: "Who", q: "Who treats sick people?", options: ["Doctor", "Farmer", "Tailor"], a: 0 },
    { type: "Who", q: "Who grows crops?", options: ["Postman", "Farmer", "Cobbler"], a: 1 },
    { type: "Who", q: "Who brings letters?", options: ["Postman", "Barber", "Cook"], a: 0 },
  ] },
  { id: "transport", subject: "EVS", title: "Means of Transport", emoji: "🚌", video: yt("biX7NNxw_w8"), practice: [
    { type: "Where", q: "✈️ Aeroplane moves on?", options: ["Land", "Water", "Air"], a: 2 },
    { type: "Where", q: "🚢 Ship moves on?", options: ["Water", "Air", "Road"], a: 0 },
    { type: "Odd one", q: "Which moves on road?", options: ["🚌 Bus", "⛵ Boat", "🚁 Helicopter"], a: 0 },
  ] },
];

export type Section = { heading: string; items: string[]; cols?: number };
export type Note = { id: string; title: string; subject: string; boards?: string[]; sections: Section[] };

const tens = ["Ten","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety","Hundred"];
const table = (n: number) => Array.from({ length: 10 }, (_, i) => `${n} × ${i + 1} = ${n * (i + 1)}`);

export const notes: Note[] = [
  { id: "n1", title: "Nouns, Pronouns & Action Words", subject: "English", sections: [
    { heading: "Naming words (Nouns)", items: ["👦 Person – Ravi, teacher, mother", "🏠 Place – school, park, Delhi", "🐶 Animal – dog, cat, cow", "📚 Thing – book, pen, ball"], cols: 2 },
    { heading: "Pronouns (instead of nouns)", items: ["I","We","You","He","She","It","They"], cols: 7 },
    { heading: "Action words (Verbs)", items: ["Run 🏃","Jump 🤸","Eat 🍽️","Write ✍️","Read 📖","Swim 🏊","Sing 🎤","Play ⚽"], cols: 4 },
    { heading: "One – Many", items: ["Cat – Cats","Box – Boxes","Baby – Babies","Man – Men","Child – Children","Tooth – Teeth"], cols: 3 },
    { heading: "Use a / an", items: ["a – ball, cat, dog", "an – apple, egg, owl, umbrella", "Rule: ‘an’ before a, e, i, o, u sound"], cols: 1 },
    { heading: "Practice", items: ["Write 5 naming words from your classroom.", "Fill: __ is my friend. (He / It)", "Make plural: bus → ____", "Fill a / an: __ orange, __ kite"], cols: 1 },
  ] },
  { id: "n2", title: "Numbers, Place Value & Tables", subject: "Maths", sections: [
    { heading: "Numbers 1 – 100 (tens)", items: tens.map((t, i) => `${(i + 1) * 10} – ${t}`), cols: 5 },
    { heading: "Place value", items: ["47 = 4 tens + 7 ones", "85 = 8 tens + 5 ones", "60 = 6 tens + 0 ones", "99 = 9 tens + 9 ones"], cols: 2 },
    { heading: "Even & Odd", items: ["Even: 2, 4, 6, 8, 10", "Odd: 1, 3, 5, 7, 9"], cols: 2 },
    { heading: "Table of 2", items: table(2), cols: 5 },
    { heading: "Table of 3", items: table(3), cols: 5 },
    { heading: "Table of 5", items: table(5), cols: 5 },
    { heading: "Table of 10", items: table(10), cols: 5 },
    { heading: "Practice", items: ["27 + 15 = ____", "64 − 28 = ____", "Write in tens & ones: 73", "Before 100 comes ____", "Is 17 even or odd? ____"], cols: 1 },
  ] },
  { id: "n3", title: "मात्राएँ और विलोम शब्द", subject: "Hindi", sections: [
    { heading: "मात्राएँ", items: ["ा – आ – राजा","ि – इ – दिल","ी – ई – मीठा","ु – उ – गुलाब","ू – ऊ – फूल","ृ – ऋ – कृपा","े – ए – मेला","ै – ऐ – पैसा","ो – ओ – मोर","ौ – औ – कौआ","ं – अं – पतंग"], cols: 3 },
    { heading: "विलोम शब्द", items: ["ऊपर – नीचे","सुख – दुख","दिन – रात","काला – सफ़ेद","बड़ा – छोटा","आगे – पीछे","सच – झूठ","हँसना – रोना"], cols: 4 },
    { heading: "एक – अनेक", items: ["लड़का – लड़के","कपड़ा – कपड़े","किताब – किताबें","चिड़िया – चिड़ियाँ"], cols: 2 },
    { heading: "गिनती ५० तक (दहाई)", items: ["10 – दस","20 – बीस","30 – तीस","40 – चालीस","50 – पचास"], cols: 5 },
    { heading: "अभ्यास", items: ["‘ा’ की मात्रा वाले पाँच शब्द लिखो।", "विलोम लिखो: अंदर – ____", "एक–अनेक: बच्चा – ____", "अपने बारे में 3 वाक्य लिखो।"], cols: 1 },
  ] },
  { id: "n4", title: "Animals, Helpers & Transport", subject: "EVS", sections: [
    { heading: "Animals & their homes", items: ["🐦 Bird – Nest","🦁 Lion – Den","🐝 Bee – Hive","🐎 Horse – Stable","🐕 Dog – Kennel","🐄 Cow – Shed","🐇 Rabbit – Burrow","🕷️ Spider – Web"], cols: 4 },
    { heading: "Our helpers", items: ["👨‍⚕️ Doctor – treats sick","👨‍🌾 Farmer – grows food","📮 Postman – brings letters","👮 Police – keeps us safe","🧑‍🚒 Fireman – puts out fire","🧵 Tailor – stitches clothes"], cols: 2 },
    { heading: "Means of transport", items: ["Land: 🚌 Bus, 🚗 Car, 🚆 Train","Water: 🚢 Ship, ⛵ Boat","Air: ✈️ Aeroplane, 🚁 Helicopter"], cols: 1 },
    { heading: "Good habits", items: ["🪥 Brush twice a day","🧼 Wash hands before eating","🥗 Eat healthy food","😴 Sleep early"], cols: 2 },
    { heading: "Practice", items: ["Where does a bee live? ____", "Name two water transports.", "Who keeps us safe? ____"], cols: 1 },
  ] },
  { id: "cb1", title: "Describing Words & Opposites", subject: "English", boards: ["cbse"], sections: [
    { heading: "Describing words", items: ["Big 🐘","Small 🐜","Tall 🦒","Red 🍎","Sweet 🍬","Soft 🧸","Hot ☀️","Cold ❄️"], cols: 4 },
    { heading: "Opposites", items: ["Rich – Poor","Early – Late","Full – Empty","Heavy – Light","Clean – Dirty","Strong – Weak"], cols: 3 },
  ] },
  { id: "ic1", title: "Sentences & Punctuation", subject: "English", boards: ["icse"], sections: [
    { heading: "Rules", items: ["Start a sentence with a capital letter.", "End a telling sentence with a full stop (.)", "End a question with a question mark (?)", "Use ! to show surprise or joy."], cols: 1 },
    { heading: "Examples", items: ["I like mangoes.","Where is my bag?","What a lovely day!","She is my sister."], cols: 2 },
  ] },
  { id: "bh1", title: "रंग, दिन और त्योहार", subject: "Hindi", boards: ["bihar"], sections: [
    { heading: "रंग", items: ["🔴 लाल","🟡 पीला","🟢 हरा","🔵 नीला","⚫ काला","⚪ सफ़ेद","🟠 नारंगी","🟣 बैंगनी"], cols: 4 },
    { heading: "सप्ताह के दिन", items: ["सोमवार","मंगलवार","बुधवार","गुरुवार","शुक्रवार","शनिवार","रविवार"], cols: 4 },
    { heading: "त्योहार", items: ["🪔 दीवाली","🎨 होली","☀️ छठ","🌙 ईद","🎄 क्रिसमस","🪁 मकर संक्रांति"], cols: 3 },
  ] },
];

export const quizSubjects = ["English", "Maths", "Hindi", "EVS"] as const;
export type QuizSubject = (typeof quizSubjects)[number];
export const levels = { easy: { label: "Easy", emoji: "🟢" }, medium: { label: "Medium", emoji: "🟡" }, hard: { label: "Hard", emoji: "🔴" } } as const;
export type Level = keyof typeof levels;

const Q = (q: string, options: string[], a: number): Q => ({ q, options, a });

export const quizBank: Record<QuizSubject, Record<Level, Q[]>> = {
  English: {
    easy: [Q("Which is a naming word?", ["Book", "Run", "Fast"], 0), Q("Which is an action word?", ["Chair", "Jump", "Red"], 1), Q("Plural of ‘pen’?", ["Pens", "Penes", "Pen"], 0), Q("__ apple", ["a", "an"], 1), Q("__ ball", ["a", "an"], 0), Q("Day after Sunday?", ["Monday", "Friday", "Saturday"], 0), Q("Opposite of ‘Up’?", ["Down", "Top", "Over"], 0), Q("Which is a pronoun?", ["She", "Tree", "Sing"], 0), Q("Opposite of ‘Happy’?", ["Sad", "Glad", "Big"], 0), Q("Correct spelling?", ["Scool", "School", "Skool"], 1)],
    medium: [Q("Plural of ‘box’?", ["Boxs", "Boxes", "Boxies"], 1), Q("Plural of ‘baby’?", ["Babys", "Babies", "Babyes"], 1), Q("‘Ravi is tall.’ Describing word?", ["Ravi", "is", "tall"], 2), Q("How many months in a year?", ["10", "12", "7"], 1), Q("__ umbrella", ["a", "an"], 1), Q("Pronoun for ‘Sita’?", ["He", "She", "It"], 1), Q("Pronoun for ‘the cat’?", ["It", "He", "We"], 0), Q("Opposite of ‘Full’?", ["Empty", "Heavy", "Long"], 0), Q("Which month comes after March?", ["April", "May", "June"], 0), Q("A question ends with?", [".", "?", ","], 1)],
    hard: [Q("Plural of ‘child’?", ["Childs", "Children", "Childes"], 1), Q("Plural of ‘tooth’?", ["Tooths", "Teeth", "Teeths"], 1), Q("Correct sentence?", ["i like milk.", "I like milk.", "I like milk"], 1), Q("Past of ‘go’?", ["Goed", "Went", "Gone"], 1), Q("Which is a describing word?", ["Sweet", "Eat", "Mango"], 0), Q("Fill: They __ playing.", ["is", "are", "am"], 1), Q("Fill: I __ a student.", ["am", "is", "are"], 0), Q("Rhymes with ‘cake’?", ["Lake", "Cook", "Cap"], 0), Q("Opposite of ‘Early’?", ["Late", "Soon", "Fast"], 0), Q("Shortest month?", ["February", "June", "April"], 0)],
  },
  Maths: {
    easy: [Q("12 + 5 = ?", ["17", "16", "18"], 0), Q("20 − 6 = ?", ["14", "16", "13"], 0), Q("2 × 3 = ?", ["5", "6", "8"], 1), Q("After 59 comes?", ["50", "60", "69"], 1), Q("Tens in 34?", ["3", "4", "34"], 0), Q("Which is even?", ["7", "8", "9"], 1), Q("10 × 2 = ?", ["12", "20", "30"], 1), Q("5 + 5 = ?", ["10", "15", "55"], 0), Q("Circle has how many corners?", ["0", "1", "4"], 0), Q("Which is smallest?", ["45", "54", "40"], 2)],
    medium: [Q("27 + 15 = ?", ["42", "32", "41"], 0), Q("50 − 23 = ?", ["27", "37", "33"], 0), Q("3 × 4 = ?", ["7", "12", "14"], 1), Q("5 × 6 = ?", ["30", "25", "35"], 0), Q("6 tens + 2 ones = ?", ["26", "62", "8"], 1), Q("Which is odd?", ["14", "21", "30"], 1), Q("₹10 + ₹5 + ₹2 = ?", ["₹17", "₹15", "₹12"], 0), Q("1 hour = ? minutes", ["60", "100", "30"], 0), Q("Number name of 45?", ["Fifty four", "Forty five", "Four five"], 1), Q("2, 4, 6, 8, __ ?", ["9", "10", "12"], 1)],
    hard: [Q("48 + 36 = ?", ["74", "84", "82"], 1), Q("91 − 47 = ?", ["44", "54", "46"], 0), Q("4 × 7 = ?", ["28", "24", "32"], 0), Q("9 × 3 = ?", ["27", "24", "36"], 0), Q("Biggest 2-digit number?", ["99", "100", "90"], 0), Q("Half of 30?", ["10", "15", "20"], 1), Q("5, 10, 15, __ ?", ["20", "25", "16"], 0), Q("Days in a week × 2 = ?", ["12", "14", "9"], 1), Q("Ascending: 32, 23, 41?", ["23, 32, 41", "41, 32, 23", "32, 23, 41"], 0), Q("12 ÷ 2 = ?", ["6", "5", "10"], 0)],
  },
  Hindi: {
    easy: [Q("‘राजा’ में कौन-सी मात्रा?", ["ा", "ि", "ु"], 0), Q("‘ऊपर’ का विलोम?", ["नीचे", "आगे", "पीछे"], 0), Q("🦚 मोर में कौन-सी मात्रा?", ["ो", "ौ", "े"], 0), Q("‘दिन’ का विलोम?", ["रात", "सुबह", "शाम"], 0), Q("🌸 ‘फूल’ में कौन-सी मात्रा?", ["ू", "ु", "ो"], 0), Q("सोमवार के बाद?", ["मंगलवार", "रविवार", "शुक्रवार"], 0), Q("‘बड़ा’ का विलोम?", ["छोटा", "मोटा", "लंबा"], 0), Q("🔴 लाल क्या है?", ["रंग", "फल", "दिन"], 0), Q("‘सच’ का विलोम?", ["झूठ", "सही", "अच्छा"], 0), Q("🪔 दीवाली क्या है?", ["त्योहार", "फल", "जानवर"], 0)],
    medium: [Q("‘दिल’ में कौन-सी मात्रा?", ["ि", "ी", "े"], 0), Q("सही शब्द?", ["मीठा", "मिठा", "मीठ"], 0), Q("‘सुख’ का विलोम?", ["दुख", "खुशी", "हँसी"], 0), Q("‘लड़का’ का अनेक?", ["लड़के", "लड़कों", "लड़की"], 0), Q("‘पैसा’ में कौन-सी मात्रा?", ["ै", "े", "ा"], 0), Q("‘आगे’ का विलोम?", ["पीछे", "ऊपर", "पास"], 0), Q("‘किताब’ का अनेक?", ["किताबें", "किताबो", "किताबा"], 0), Q("‘पतंग’ में क्या लगा है?", ["ं (अनुस्वार)", "ा", "ी"], 0), Q("‘काला’ का विलोम?", ["सफ़ेद", "लाल", "नीला"], 0), Q("सप्ताह में कितने दिन?", ["सात", "पाँच", "दस"], 0)],
    hard: [Q("‘कौआ’ में कौन-सी मात्रा?", ["ौ", "ो", "ू"], 0), Q("‘हँसना’ का विलोम?", ["रोना", "गाना", "सोना"], 0), Q("‘चिड़िया’ का अनेक?", ["चिड़ियाँ", "चिड़िये", "चिड़ियो"], 0), Q("‘कृपा’ में कौन-सी मात्रा?", ["ृ", "ु", "ि"], 0), Q("सही वाक्य?", ["राम खाना खाता है।", "राम खाना खाती है।", "राम खाना खाते है।"], 0), Q("‘गुलाब’ में कौन-सी मात्रा?", ["ु", "ू", "ो"], 0), Q("‘चालीस’ अंक में?", ["40", "14", "44"], 0), Q("‘अंदर’ का विलोम?", ["बाहर", "भीतर", "ऊपर"], 0), Q("‘मेला’ में कौन-सी मात्रा?", ["े", "ै", "ि"], 0), Q("सही शब्द?", ["पानी", "पानि", "पनी"], 0)],
  },
  EVS: {
    easy: [Q("🐦 Bird lives in a?", ["Nest", "Den", "Hive"], 0), Q("Who treats sick people?", ["Doctor", "Farmer", "Tailor"], 0), Q("✈️ Aeroplane moves in?", ["Air", "Water", "Road"], 0), Q("🐄 Cow lives in a?", ["Shed", "Nest", "Web"], 0), Q("We should brush teeth?", ["Twice a day", "Never", "Once a week"], 0), Q("🚢 Ship moves on?", ["Water", "Air", "Road"], 0), Q("Who grows food?", ["Farmer", "Postman", "Barber"], 0), Q("Which is healthy food?", ["🥗 Salad", "🍭 Candy", "🍟 Chips"], 0), Q("🐝 Bee makes?", ["Honey", "Milk", "Wool"], 0), Q("Which is a land transport?", ["🚌 Bus", "⛵ Boat", "✈️ Plane"], 0)],
    medium: [Q("🦁 Lion lives in a?", ["Den", "Kennel", "Stable"], 0), Q("Who brings letters?", ["Postman", "Cook", "Doctor"], 0), Q("Who puts out fire?", ["Fireman", "Tailor", "Teacher"], 0), Q("🐎 Horse lives in a?", ["Stable", "Hive", "Nest"], 0), Q("Which animal gives wool?", ["🐑 Sheep", "🐕 Dog", "🐓 Hen"], 0), Q("Water transport?", ["Boat", "Train", "Car"], 0), Q("Wash hands before?", ["Eating", "Sleeping only", "Never"], 0), Q("Who stitches clothes?", ["Tailor", "Cobbler", "Carpenter"], 0), Q("Which season is hottest?", ["Summer", "Winter", "Rainy"], 0), Q("Which is a pet animal?", ["🐕 Dog", "🦁 Lion", "🐯 Tiger"], 0)],
    hard: [Q("🐇 Rabbit lives in a?", ["Burrow", "Den", "Nest"], 0), Q("Who mends shoes?", ["Cobbler", "Tailor", "Potter"], 0), Q("Who makes furniture?", ["Carpenter", "Barber", "Farmer"], 0), Q("Which is a wild animal?", ["🐺 Wolf", "🐄 Cow", "🐐 Goat"], 0), Q("🕷️ Spider lives in a?", ["Web", "Hive", "Shed"], 0), Q("Fastest transport?", ["✈️ Aeroplane", "🚲 Cycle", "🛺 Rickshaw"], 0), Q("Animal that lives on land & water?", ["🐸 Frog", "🐄 Cow", "🐦 Sparrow"], 0), Q("We get cotton from?", ["Plants", "Animals", "Stones"], 0), Q("Traffic light: Red means?", ["Stop", "Go", "Wait slowly"], 0), Q("How many sense organs?", ["5", "3", "7"], 0)],
  },
};
