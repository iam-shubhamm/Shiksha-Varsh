import type { UpperSubject } from "./upper/curriculum";

const primary = [
  {
    "grade": 1,
    "id": "english",
    "name": "English",
    "emoji": "🔤",
    "book": "Mridang 1 (NCERT)",
    "chapters": [
      "Two Little Hands",
      "Greetings",
      "Picture Time",
      "The Cap-seller and the Monkeys",
      "A Farm",
      "Fun with Pictures",
      "The Food we Eat",
      "The Four Seasons",
      "Anandi’s Rainbow"
    ]
  },
  {
    "grade": 1,
    "id": "hindi",
    "name": "Hindi",
    "emoji": "📖",
    "book": "Sarangi 1 (NCERT)",
    "chapters": [
      "मीना का परिवार",
      "दादा-दादी",
      "रीना का दिन",
      "रानी भी",
      "मिठाई",
      "तीन साथी",
      "वाह, मेरे घोड़े!",
      "खतरे में साँप",
      "आलू की सड़क",
      "झूलम-झूली",
      "भुट्टे",
      "फूली रोटी",
      "मेला",
      "बरखा और मेघा",
      "होली",
      "जन्मदिवस पर पेड़ लगाओ",
      "हवा",
      "कितनी प्यारी है ये दुनिया",
      "चाँद का बच्चा"
    ]
  },
  {
    "grade": 1,
    "id": "maths",
    "name": "Maths",
    "emoji": "🔢",
    "book": "Joyful Mathematics 1 (NCERT)",
    "chapters": [
      "Finding the Furry Cat!",
      "What is Long? What is Round?",
      "Mango Treat",
      "Making 10",
      "How Many?",
      "Vegetable Farm",
      "Lina’s Family",
      "Fun with Numbers",
      "Utsav",
      "How do I Spend my Day?",
      "How Many Times?",
      "How Much Can We Spend?",
      "So Many Toys"
    ]
  },
  {
    "grade": 2,
    "id": "english",
    "name": "English",
    "emoji": "🔤",
    "book": "Mridang 2 (NCERT)",
    "chapters": [
      "My Bicycle",
      "Picture Reading",
      "It is Fun",
      "Seeing without Seeing",
      "Come Back Soon",
      "Between Home and School",
      "This is My Town",
      "A Show of Clouds",
      "My Name",
      "The Crow",
      "The Smart Monkey",
      "Little Drops of Water",
      "We are all Indians"
    ]
  },
  {
    "grade": 2,
    "id": "hindi",
    "name": "Hindi",
    "emoji": "📖",
    "book": "Sarangi 2 (NCERT)",
    "chapters": [
      "नीमा की दादी",
      "घर",
      "माला की चाँदी की पायल",
      "माँ",
      "थाथू और मैं",
      "चींटा",
      "टिल्लू जी",
      "तीन दोस्त",
      "दुनिया रंग-बिरंगी",
      "कौन",
      "बैंगनी जोजो",
      "तोसिया का सपना",
      "तालाब",
      "बीज",
      "किसान",
      "मूली",
      "बरसात और मेंढक",
      "शेर और चूहे की दोस्ती",
      "आउट",
      "छुपन-छुपाई",
      "हाथी साइकिल चला रहा था",
      "चार दिशाएँ",
      "चंदा मामा",
      "गिरे ताल में चंदा मामा",
      "सबसे बड़ा छाता",
      "बादल"
    ]
  },
  {
    "grade": 2,
    "id": "maths",
    "name": "Maths",
    "emoji": "🔢",
    "book": "Joyful Mathematics 2 (NCERT)",
    "chapters": [
      "A Day at the Beach",
      "Shapes Around Us",
      "Fun with Numbers",
      "Shadow Story (Togalu)",
      "Playing with Lines",
      "Decoration for Festival",
      "Rani’s Gift",
      "Grouping and Sharing",
      "Which Season is it?",
      "Fun at the Fair",
      "Data Handling"
    ]
  }
];
export function getPrimarySubjects(grade: number): UpperSubject[] { return primary.filter(s => s.grade === grade); }
export function getPrimarySubject(grade: number, subject: string) { return getPrimarySubjects(grade).find(s => s.id === subject); }
