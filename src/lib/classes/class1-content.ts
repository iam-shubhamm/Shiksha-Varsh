export type Q = { q: string; options: string[]; a: number; type?: string };

export type Lecture = { id: string; subject: string; title: string; emoji: string; video: string; practice: Q[] };

const yt = (id: string) => `https://www.youtube.com/watch?v=${id}`;

export const lectures: Lecture[] = [
  { id: "abc", subject: "English", title: "A to Z Alphabet", emoji: "🔤", video: yt("hq3yfQnllfQ"), practice: [
    { type: "Next letter", q: "A, B, C, __ ?", options: ["E", "D", "F"], a: 1 },
    { type: "Picture", q: "🐘 Elephant starts with?", options: ["E", "L", "A"], a: 0 },
    { type: "True / False", q: "Z is the last letter.", options: ["True", "False"], a: 0 },
  ] },
  { id: "phonics", subject: "English", title: "ABC Phonics Song", emoji: "🍎", video: yt("Ypz3bsr6SZc"), practice: [
    { type: "Sound", q: "Which word starts with 'b' sound?", options: ["Ball", "Cat", "Sun"], a: 0 },
    { type: "Picture", q: "🦓 Zebra starts with?", options: ["Y", "Z", "X"], a: 1 },
    { type: "Missing letter", q: "M, __, O", options: ["P", "L", "N"], a: 2 },
  ] },
  { id: "count", subject: "Maths", title: "Counting 1 to 10", emoji: "🔢", video: yt("DR-cfDsHCGA"), practice: [
    { type: "Count", q: "🍎🍎🍎 = ?", options: ["2", "3", "4"], a: 1 },
    { type: "Next number", q: "6, 7, __ ?", options: ["8", "9", "5"], a: 0 },
    { type: "Backward", q: "10, 9, 8, __ ?", options: ["9", "6", "7"], a: 2 },
  ] },
  { id: "count100", subject: "Maths", title: "Counting 1 to 100", emoji: "💯", video: yt("JxaXmTokjqI"), practice: [
    { type: "Next number", q: "49, __ ?", options: ["50", "40", "59"], a: 0 },
    { type: "Bigger", q: "Which is bigger?", options: ["38", "83"], a: 1 },
    { type: "Tens", q: "10, 20, 30, __ ?", options: ["31", "40", "50"], a: 1 },
  ] },
  { id: "shapes", subject: "Maths", title: "Shapes Around Us", emoji: "🔺", video: yt("OEbRDtCAFdU"), practice: [
    { type: "Sides", q: "Triangle has how many sides?", options: ["3", "4", "0"], a: 0 },
    { type: "Real life", q: "A wheel looks like a?", options: ["Square", "Circle", "Triangle"], a: 1 },
    { type: "True / False", q: "A square has 4 equal sides.", options: ["True", "False"], a: 0 },
  ] },
  { id: "swar", subject: "Hindi", title: "स्वर – अ से अः", emoji: "📖", video: yt("HUoj5s5AnZg"), practice: [
    { type: "अगला अक्षर", q: "अ, आ, __ ?", options: ["इ", "उ", "ए"], a: 0 },
    { type: "चित्र", q: "🥭 आम किससे शुरू होता है?", options: ["अ", "आ", "इ"], a: 1 },
    { type: "सही / गलत", q: "स्वर 13 होते हैं।", options: ["सही", "गलत"], a: 0 },
  ] },
  { id: "vyanjan", subject: "Hindi", title: "व्यंजन – क से ज्ञ", emoji: "🕊️", video: yt("Hr4iyzjNJZk"), practice: [
    { type: "चित्र", q: "🕊️ कबूतर किससे शुरू होता है?", options: ["क", "ख", "ग"], a: 0 },
    { type: "अगला अक्षर", q: "क, ख, ग, __ ?", options: ["च", "घ", "ङ"], a: 1 },
    { type: "चित्र", q: "🐇 खरगोश किससे शुरू होता है?", options: ["ग", "ख", "क"], a: 1 },
  ] },
  { id: "family", subject: "EVS", title: "My Family", emoji: "👨‍👩‍👧", video: yt("FXqPs1IvtNs"), practice: [
    { type: "Who", q: "My father's father is my?", options: ["Uncle", "Grandfather", "Brother"], a: 1 },
    { type: "Picture", q: "👩 Mother is called?", options: ["Mom", "Dad", "Sister"], a: 0 },
    { type: "True / False", q: "We should love our family.", options: ["True", "False"], a: 0 },
  ] },
  { id: "plant", subject: "EVS", title: "Parts of a Plant", emoji: "🌱", video: yt("ql6OL7_qFgU"), practice: [
    { type: "Job", q: "Which part makes food?", options: ["Root", "Leaf", "Stem"], a: 1 },
    { type: "Where", q: "Roots are found?", options: ["In soil", "In air", "On flower"], a: 0 },
    { type: "Job", q: "Stem carries?", options: ["Water", "Stones", "Sand"], a: 0 },
  ] },
  { id: "colours", subject: "English", title: "Rainbow Colours", emoji: "🌈", video: yt("SLZcWGQQsmg"), practice: [
    { type: "Colour", q: "🍌 Banana is?", options: ["Red", "Yellow", "Blue"], a: 1 },
    { type: "Colour", q: "🌿 Leaf is?", options: ["Green", "Pink", "Black"], a: 0 },
    { type: "Count", q: "Rainbow has how many colours?", options: ["5", "7", "10"], a: 1 },
  ] },
];

export type Section = { heading: string; items: string[]; cols?: number };
export type Note = { id: string; title: string; subject: string; boards?: string[]; sections: Section[] };

const alphabet: [string, string][] = [["A","Apple 🍎"],["B","Ball ⚽"],["C","Cat 🐱"],["D","Dog 🐶"],["E","Elephant 🐘"],["F","Fish 🐟"],["G","Goat 🐐"],["H","Hat 🎩"],["I","Ice cream 🍦"],["J","Jug 🫖"],["K","Kite 🪁"],["L","Lion 🦁"],["M","Mango 🥭"],["N","Nest 🪺"],["O","Orange 🍊"],["P","Parrot 🦜"],["Q","Queen 👸"],["R","Rabbit 🐇"],["S","Sun ☀️"],["T","Tiger 🐯"],["U","Umbrella ☂️"],["V","Van 🚐"],["W","Watch ⌚"],["X","X-mas tree 🎄"],["Y","Yak 🐃"],["Z","Zebra 🦓"]];

const swar = ["अ – अनार","आ – आम","इ – इमली","ई – ईख","उ – उल्लू","ऊ – ऊन","ऋ – ऋषि","ए – एड़ी","ऐ – ऐनक","ओ – ओखली","औ – औरत","अं – अंगूर","अः – (विसर्ग)"];
const vyanjan = ["क – कबूतर","ख – खरगोश","ग – गमला","घ – घड़ी","ङ – (खाली)","च – चम्मच","छ – छतरी","ज – जहाज","झ – झंडा","ञ – (खाली)","ट – टमाटर","ठ – ठठेरा","ड – डमरू","ढ – ढोलक","ण – बाण","त – तरबूज","थ – थरमस","द – दवात","ध – धनुष","न – नल","प – पतंग","फ – फल","ब – बत्तख","भ – भालू","म – मछली","य – यज्ञ","र – रथ","ल – लट्टू","व – वन","श – शलगम","ष – षट्कोण","स – सपेरा","ह – हाथी"];
const sanyukt = ["क्ष – क्षत्रिय","त्र – त्रिशूल","ज्ञ – ज्ञानी","श्र – श्रमिक"];

const numberNames = ["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen","Twenty"];
const hindiNums = ["एक","दो","तीन","चार","पाँच","छह","सात","आठ","नौ","दस","ग्यारह","बारह","तेरह","चौदह","पंद्रह","सोलह","सत्रह","अठारह","उन्नीस","बीस"];

export const notes: Note[] = [
  { id: "n1", title: "English Alphabet A to Z", subject: "English", sections: [
    { heading: "Capital letters", items: alphabet.map(([l]) => l), cols: 9 },
    { heading: "Small letters", items: alphabet.map(([l]) => l.toLowerCase()), cols: 9 },
    { heading: "A for Apple to Z for Zebra", items: alphabet.map(([l, w]) => `${l} ${l.toLowerCase()} – ${w}`), cols: 3 },
    { heading: "Vowels (स्वर) & Consonants", items: ["Vowels: A, E, I, O, U", "Consonants: बाकी 21 letters", "Total letters: 26"], cols: 1 },
    { heading: "Practice", items: ["Write A to Z in capital letters – 2 times", "Write a to z in small letters – 2 times", "Fill: A, __, C, __, E", "Fill: p, q, __, s, __"], cols: 1 },
  ] },
  { id: "n2", title: "Numbers 1 to 100", subject: "Maths", sections: [
    { heading: "Counting 1 – 100", items: Array.from({ length: 100 }, (_, i) => String(i + 1)), cols: 10 },
    { heading: "Number names 1 – 20", items: numberNames.map((n, i) => `${i + 1} – ${n}`), cols: 4 },
    { heading: "Tens", items: ["10 – Ten","20 – Twenty","30 – Thirty","40 – Forty","50 – Fifty","60 – Sixty","70 – Seventy","80 – Eighty","90 – Ninety","100 – Hundred"], cols: 5 },
    { heading: "Practice", items: ["Fill: 23, 24, __, 26, __", "Fill: 57, __, 59, __", "Before 40 comes __", "After 99 comes __", "Count by 10s: 10, 20, __, 40, __"], cols: 1 },
  ] },
  { id: "n3", title: "हिंदी वर्णमाला (पूरी)", subject: "Hindi", sections: [
    { heading: "स्वर (13)", items: swar, cols: 4 },
    { heading: "व्यंजन (33)", items: vyanjan, cols: 4 },
    { heading: "संयुक्त व्यंजन", items: sanyukt, cols: 4 },
    { heading: "गिनती १ – २०", items: hindiNums.map((n, i) => `${i + 1} – ${n}`), cols: 5 },
    { heading: "अभ्यास", items: ["अ से अः तक सभी स्वर दो बार लिखो।", "क से ज्ञ तक व्यंजन लिखो।", "खाली जगह भरो: क, __, ग, __", "‘म’ से तीन शब्द लिखो।"], cols: 1 },
  ] },
  { id: "n4", title: "Parts of a Plant", subject: "EVS", sections: [
    { heading: "Main parts", items: ["🌱 Root (जड़) – holds the plant in soil, takes water", "🪵 Stem (तना) – carries water & food, holds plant up", "🍃 Leaf (पत्ती) – makes food using sunlight", "🌸 Flower (फूल) – makes seeds, looks pretty", "🍎 Fruit (फल) – we eat it, has seeds inside", "🌰 Seed (बीज) – grows into a new plant"], cols: 1 },
    { heading: "A plant needs", items: ["☀️ Sunlight", "💧 Water", "🌬️ Air", "🟫 Soil"], cols: 4 },
    { heading: "We eat these parts", items: ["Root – Carrot 🥕, Radish", "Stem – Potato 🥔, Sugarcane", "Leaf – Spinach 🥬", "Flower – Cauliflower", "Fruit – Mango 🥭, Apple", "Seed – Peas, Rice"], cols: 2 },
    { heading: "Practice", items: ["Draw a plant and name its parts.", "Which part makes food? ______", "Which part is under the soil? ______"], cols: 1 },
  ] },
  { id: "cb1", title: "Days, Months & Seasons", subject: "English", boards: ["cbse"], sections: [
    { heading: "Days of the week", items: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], cols: 4 },
    { heading: "Months of the year", items: ["January","February","March","April","May","June","July","August","September","October","November","December"], cols: 4 },
    { heading: "Seasons", items: ["☀️ Summer","🌧️ Rainy","❄️ Winter","🌸 Spring"], cols: 4 },
  ] },
  { id: "ic1", title: "Opposites & Action Words", subject: "English", boards: ["icse"], sections: [
    { heading: "Opposites", items: ["Big – Small","Hot – Cold","Up – Down","Day – Night","Happy – Sad","Fast – Slow","Open – Close","Tall – Short"], cols: 4 },
    { heading: "Action words", items: ["Run 🏃","Jump 🤸","Eat 🍽️","Sleep 😴","Read 📖","Write ✍️","Sing 🎤","Dance 💃"], cols: 4 },
  ] },
  { id: "bh1", title: "फल, सब्ज़ी और जानवर", subject: "Hindi", boards: ["bihar"], sections: [
    { heading: "फल", items: ["🥭 आम","🍌 केला","🍎 सेब","🍇 अंगूर","🍊 संतरा","🍉 तरबूज","🍐 नाशपाती","🍍 अनानास"], cols: 4 },
    { heading: "सब्ज़ियाँ", items: ["🥔 आलू","🍅 टमाटर","🧅 प्याज़","🥕 गाजर","🥬 पालक","🍆 बैंगन","🥒 खीरा","🌽 मक्का"], cols: 4 },
    { heading: "जानवर", items: ["🐄 गाय","🐐 बकरी","🐕 कुत्ता","🐈 बिल्ली","🐘 हाथी","🦁 शेर","🐒 बंदर","🐎 घोड़ा"], cols: 4 },
  ] },
];

export const quizSubjects = ["English", "Maths", "Hindi", "EVS"] as const;
export type QuizSubject = (typeof quizSubjects)[number];
export const levels = { easy: { label: "Easy", emoji: "🟢" }, medium: { label: "Medium", emoji: "🟡" }, hard: { label: "Hard", emoji: "🔴" } } as const;
export type Level = keyof typeof levels;

const Q = (q: string, options: string[], a: number): Q => ({ q, options, a });

export const quizBank: Record<QuizSubject, Record<Level, Q[]>> = {
  English: {
    easy: [Q("Which comes after B?", ["C", "D", "A"], 0), Q("🐱 Cat starts with?", ["K", "C", "T"], 1), Q("A, B, C, __ ?", ["E", "D", "F"], 1), Q("🍎 Apple starts with?", ["A", "P", "E"], 0), Q("Small letter of ‘M’?", ["n", "m", "w"], 1), Q("Last letter of alphabet?", ["Y", "X", "Z"], 2), Q("🦓 Zebra starts with?", ["Y", "Z", "X"], 1), Q("🍌 Banana colour?", ["Yellow", "Blue", "Black"], 0), Q("🐶 Dog says?", ["Meow", "Woof", "Moo"], 1), Q("First letter of alphabet?", ["A", "B", "Z"], 0)],
    medium: [Q("Which is a vowel?", ["B", "E", "K"], 1), Q("Opposite of ‘Hot’?", ["Cold", "Warm", "Big"], 0), Q("How many letters in A–Z?", ["24", "26", "28"], 1), Q("Opposite of ‘Big’?", ["Tall", "Small", "Fat"], 1), Q("Fill: p, q, __, s", ["r", "t", "o"], 0), Q("Which is an action word?", ["Run", "Red", "Ball"], 0), Q("Rainbow has how many colours?", ["5", "7", "10"], 1), Q("Opposite of ‘Day’?", ["Night", "Sun", "Morning"], 0), Q("Which is a colour?", ["Green", "Jump", "Cup"], 0), Q("What do we say in the morning?", ["Good night", "Good morning", "Bye"], 1)],
    hard: [Q("How many vowels are there?", ["5", "6", "4"], 0), Q("Correct spelling?", ["Aple", "Apple", "Appel"], 1), Q("Fill: c _ t (cat)", ["a", "o", "i"], 0), Q("Which day comes after Monday?", ["Sunday", "Tuesday", "Friday"], 1), Q("Plural of ‘cat’?", ["Cats", "Cates", "Catz"], 0), Q("Which word rhymes with ‘ball’?", ["Tall", "Bat", "Bell"], 0), Q("First month of the year?", ["March", "January", "June"], 1), Q("Missing letter: X, __, Z", ["W", "Y", "V"], 1), Q("Correct spelling?", ["Elefant", "Elephant", "Eliphant"], 1), Q("‘She’ is used for a?", ["Boy", "Girl", "Table"], 1)],
  },
  Maths: {
    easy: [Q("2 + 3 = ?", ["4", "5", "6"], 1), Q("1, 2, 3, __ ?", ["5", "4", "6"], 1), Q("🍎🍎🍎 = ?", ["2", "3", "4"], 1), Q("Triangle has how many sides?", ["3", "4", "0"], 0), Q("5 − 1 = ?", ["4", "6", "3"], 0), Q("Which is bigger?", ["2", "9"], 1), Q("1 + 1 = ?", ["2", "3", "1"], 0), Q("How many fingers on one hand? ✋", ["4", "5", "10"], 1), Q("Which shape is a ⚽ ball?", ["Square", "Circle", "Triangle"], 1), Q("After 7 comes?", ["6", "8", "9"], 1)],
    medium: [Q("7 + 5 = ?", ["11", "12", "13"], 1), Q("10 − 4 = ?", ["6", "5", "4"], 0), Q("What comes before 50?", ["51", "49", "40"], 1), Q("10, 20, 30, __ ?", ["31", "40", "50"], 1), Q("Which is bigger?", ["38", "83"], 1), Q("After 99 comes?", ["98", "100", "90"], 1), Q("🐦 3 birds, 1 flew away. Left?", ["2", "3", "1"], 0), Q("A square has how many corners?", ["3", "4", "5"], 1), Q("Double of 4?", ["6", "8", "10"], 1), Q("9 + 0 = ?", ["0", "9", "10"], 1)],
    hard: [Q("15 + 6 = ?", ["21", "20", "22"], 0), Q("20 − 8 = ?", ["11", "12", "13"], 1), Q("Smallest number?", ["45", "54", "40"], 2), Q("2, 4, 6, __ ?", ["7", "8", "10"], 1), Q("Number name of 18?", ["Eighteen", "Eighty", "Eight"], 0), Q("How many tens in 70?", ["7", "70", "10"], 0), Q("5 + 5 + 5 = ?", ["10", "15", "20"], 1), Q("Between 59 and 61?", ["60", "62", "58"], 0), Q("Which is the biggest?", ["99", "89", "98"], 0), Q("Half of 10?", ["2", "5", "8"], 1)],
  },
  Hindi: {
    easy: [Q("‘अ’ से क्या बनता है?", ["अनार", "कमल", "घर"], 0), Q("अ, आ, __ ?", ["इ", "उ", "ए"], 0), Q("🥭 आम किससे शुरू होता है?", ["अ", "आ", "इ"], 1), Q("🕊️ कबूतर किससे शुरू होता है?", ["क", "ख", "ग"], 0), Q("क, ख, ग, __ ?", ["च", "घ", "ङ"], 1), Q("🐘 हाथी किससे शुरू होता है?", ["ह", "स", "ब"], 0), Q("🐶 कुत्ता क्या बोलता है?", ["म्याऊँ", "भौं-भौं", "मूँ"], 1), Q("🐄 गाय हमें क्या देती है?", ["दूध", "शहद", "अंडा"], 0), Q("🍌 केले का रंग?", ["पीला", "नीला", "काला"], 0), Q("‘एक’ के बाद?", ["दो", "चार", "पाँच"], 0)],
    medium: [Q("स्वर कितने होते हैं?", ["13", "33", "10"], 0), Q("व्यंजन कितने होते हैं?", ["13", "33", "26"], 1), Q("‘क’ के बाद कौन आता है?", ["ग", "ख", "घ"], 1), Q("‘दो’ के बाद?", ["तीन", "चार", "एक"], 0), Q("संयुक्त व्यंजन कौन-सा है?", ["क्ष", "क", "म"], 0), Q("🐟 मछली किससे शुरू होती है?", ["न", "म", "भ"], 1), Q("☀️ सूरज कब निकलता है?", ["सुबह", "रात", "कभी नहीं"], 0), Q("🐇 खरगोश किससे शुरू होता है?", ["ग", "ख", "क"], 1), Q("‘उ’ से क्या बनता है?", ["उल्लू", "इमली", "आम"], 0), Q("प, फ, ब, __ ?", ["भ", "म", "य"], 0)],
    hard: [Q("‘बड़ा’ का उल्टा?", ["छोटा", "मोटा", "लंबा"], 0), Q("‘दिन’ का उल्टा?", ["सुबह", "रात", "शाम"], 1), Q("सही शब्द चुनो", ["कलम", "कलमा", "कलाम"], 0), Q("‘ज्ञ’ से क्या बनता है?", ["ज्ञानी", "जहाज", "झंडा"], 0), Q("अंतिम स्वर कौन-सा है?", ["औ", "अः", "अं"], 1), Q("‘पाँच’ के बाद?", ["चार", "छह", "सात"], 1), Q("फल कौन-सा है?", ["आलू", "आम", "प्याज़"], 1), Q("‘गर्म’ का उल्टा?", ["ठंडा", "गीला", "सूखा"], 0), Q("व्यंजन का अंतिम अक्षर?", ["स", "ह", "ष"], 1), Q("‘दस’ अंक में?", ["10", "12", "100"], 0)],
  },
  EVS: {
    easy: [Q("Sun gives us?", ["Light", "Rain", "Snow"], 0), Q("How many legs does a cat have?", ["2", "4", "6"], 1), Q("Where do fish live?", ["🌳 Tree", "🌊 Water", "🏜️ Desert"], 1), Q("My father's father is my?", ["Uncle", "Grandfather", "Brother"], 1), Q("We see with our?", ["Ears", "Eyes", "Nose"], 1), Q("Cow gives us?", ["Milk", "Honey", "Wool"], 0), Q("What do bees make?", ["🍯 Honey", "🥛 Milk", "🍞 Bread"], 0), Q("Which animal is the biggest?", ["🐘 Elephant", "🐭 Mouse", "🐱 Cat"], 0), Q("We smell with our?", ["Nose", "Eyes", "Hands"], 0), Q("Which is a fruit?", ["🍎 Apple", "🚗 Car", "🏠 House"], 0)],
    medium: [Q("Which part of plant makes food?", ["Root", "Leaf", "Stem"], 1), Q("Roots are found?", ["In soil", "In air", "On flower"], 0), Q("How many days in a week?", ["5", "7", "10"], 1), Q("Plants need?", ["Water", "Toys", "TV"], 0), Q("We hear with our?", ["Ears", "Hands", "Legs"], 0), Q("Carrot is which part of plant?", ["Root", "Leaf", "Flower"], 0), Q("🌈 Rainbow comes after?", ["Rain", "Night", "Snow"], 0), Q("Which is a healthy food?", ["🍎 Apple", "🍭 Candy", "🍟 Chips"], 0), Q("Which animal gives wool?", ["🐑 Sheep", "🐕 Dog", "🐈 Cat"], 0), Q("We should brush teeth?", ["Twice a day", "Never", "Once a year"], 0)],
    hard: [Q("Stem carries?", ["Water", "Stones", "Sand"], 0), Q("Which season is coldest?", ["Summer", "Winter", "Rainy"], 1), Q("Potato is which part of plant?", ["Stem", "Root", "Leaf"], 0), Q("Which animal lives in water and on land?", ["🐸 Frog", "🐄 Cow", "🐦 Bird"], 0), Q("How many sense organs do we have?", ["3", "5", "7"], 1), Q("Which is a domestic animal?", ["🐄 Cow", "🦁 Lion", "🐯 Tiger"], 0), Q("Seeds grow into?", ["New plants", "Stones", "Animals"], 0), Q("Spinach is which part?", ["Leaf", "Root", "Fruit"], 0), Q("We should throw waste in?", ["Dustbin", "Road", "River"], 0), Q("Mother's mother is my?", ["Aunt", "Grandmother", "Sister"], 1)],
  },
};
