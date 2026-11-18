import type { Subject } from "@/data/types";
import { makeChapter2, type Fact2 } from "../make";

const chapter = (id: string, title: string, f: Fact2[]) => makeChapter2(id, title, f, "Fill in the blank", "Choose the correct sentence");

export const subject: Subject = {
  id: "english",
  name: "English",
  emoji: "📖",
  chapters: [
    chapter("alphabet-review", "The Alphabet", [
      ["There are ", "26", " letters in the English alphabet.", "20", "24", "30"],
      ["The first letter of the English alphabet is ", "A", ".", "B", "Z", "D"],
      ["The small letter of B is ", "b", ".", "d", "p", "q"],
      ["The letter just after D is ", "E", ".", "C", "F", "G"],
      ["The five vowel letters are ", "a, e, i, o, u", ".", "b, c, d, f, g", "a, b, c, d, e", "p, q, r, s, t"],
    ]),
    chapter("simple-words", "Little Words", [
      ["The word 'cat' has ", "three", " letters.", "two", "four", "five"],
      ["The first letter in 'sun' is ", "s", ".", "u", "n", "t"],
      ["The missing letter in 'p_n' to make 'pen' is ", "e", ".", "a", "i", "o"],
      ["The word that rhymes with 'cat' is ", "hat", ".", "sun", "dog", "pen"],
      ["We use a ", "pen", " to write.", "cup", "shoe", "ball"],
    ]),
    chapter("greetings", "Hello, Friends!", [
      ["When we meet someone in the morning, we say ", "Good morning", ".", "Good night", "Goodbye", "Sorry"],
      ["When someone helps us, we say ", "Thank you", ".", "Go away", "Good night", "No thanks"],
      ["When we make a mistake, we can say ", "Sorry", ".", "Welcome", "Good evening", "Hello"],
      ["A polite request can begin with ", "Please", ".", "Never", "Stop", "Goodbye"],
      ["When we leave, we can say ", "Goodbye", ".", "Welcome", "Good morning", "Come in"],
    ]),
    chapter("rain-rhyme", "Rain, Rain!", [
      ["Rain falls from ", "clouds", ".", "chairs", "books", "shoes"],
      ["We can use an ", "umbrella", " to stay dry in rain.", "eraser", "apple", "onion"],
      ["The word that rhymes with 'rain' is ", "train", ".", "tree", "sun", "fish"],
      ["The word that rhymes with 'day' is ", "play", ".", "book", "milk", "leaf"],
      ["Rain gives plants ", "water", ".", "plastic", "soap", "sandwiches"],
    ]),
    chapter("thirsty-crow", "The Thirsty Crow", [
      ["In this story, the thirsty bird was a ", "crow", ".", "hen", "duck", "parrot"],
      ["The crow found some water in a ", "pot", ".", "bag", "shoe", "basket"],
      ["At first, the water level was too ", "low", ".", "high", "hot", "salty"],
      ["The crow dropped small ", "stones", " into the pot.", "leaves", "feathers", "flowers"],
      ["After the water rose, the crow could ", "drink", ".", "read", "write", "sew"],
    ]),
    chapter("kind-child", "A Kind Child", [
      ["In our story, Mina shared her lunch with a ", "friend", ".", "stone", "chair", "pencil"],
      ["Sharing food with a hungry friend is a ", "kind", " act.", "cruel", "rude", "selfish"],
      ["Before eating, Mina washed her ", "hands", ".", "shoes", "bag", "books"],
      ["Her friend said, '", "Thank you", "!' after getting help.", "Go away", "Be quiet", "Stop helping"],
      ["After lunch, they put waste in the ", "bin", ".", "pond", "road", "drinking water"],
    ]),
    chapter("naming-words", "Naming Words", [
      ["A naming word is called a ", "noun", ".", "verb", "full stop", "vowel"],
      ["In 'Ravi runs', the name of a person is ", "Ravi", ".", "runs", "run", "running"],
      ["In 'The cat sleeps', the animal name is ", "cat", ".", "The", "sleeps", "sleep"],
      ["In 'This is a book', the thing named is a ", "book", ".", "This", "is", "a"],
      ["Patna is the name of a ", "place", ".", "fruit", "bird", "colour"],
    ]),
    chapter("action-words", "Action Words", [
      ["A word that tells an action is a ", "verb", ".", "noun", "letter", "vowel"],
      ["We ", "read", " a book.", "drink", "wear", "eat"],
      ["We ", "drink", " water.", "write", "wear", "draw"],
      ["Birds can ", "fly", " in the sky.", "write", "cook", "read"],
      ["We ", "hear", " sounds with our ears.", "see", "taste", "smell"],
    ]),
    chapter("a-an-plurals", "A, An and More Than One", [
      ["We say '", "an", " apple'.", "a", "am", "are"],
      ["We say '", "a", " ball'.", "an", "is", "are"],
      ["More than one cat are called ", "cats", ".", "cates", "cat", "caties"],
      ["More than one box are called ", "boxes", ".", "boxs", "boxies", "box"],
      ["More than one child are called ", "children", ".", "childs", "childes", "child"],
    ]),
    chapter("simple-sentences", "Making Sentences", [
      ["A sentence begins with a ", "capital letter", ".", "full stop", "comma", "small letter"],
      ["A telling sentence ends with a ", "full stop", ".", "question mark", "comma", "capital letter"],
      ["A question ends with a ", "question mark", ".", "full stop", "comma", "small letter"],
      ["The correct sentence is 'I ", "am", " happy.'", "is", "are", "be"],
      ["The correct sentence is 'They ", "are", " playing.'", "am", "is", "be"],
    ]),
  ],
};
