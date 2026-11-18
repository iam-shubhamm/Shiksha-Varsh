import type { Subject } from "@/data/types";
import { makeChapter as chapter } from "../make";

export const subject: Subject = {
  id: "english",
  name: "English",
  emoji: "📖",
  chapters: [
    chapter("colours", "Colours", [
      ["The children use ___ to make their pictures colourful.", "crayons", "spoons", "shoes", "plates"],
      ["The colour words red, yellow and blue name different ___.", "colours", "sounds", "smells", "sizes"],
      ["When friends need the same colour, they can ___.", "share", "quarrel", "hide it", "tear it"],
      ["A picture made with crayons is a ___.", "drawing", "meal", "song", "race"],
      ["The lesson encourages us to be ___ with our friends.", "helpful", "rude", "selfish", "unkind"],
    ]),
    chapter("badal-and-moti", "Badal and Moti", [
      ["Badal's animal friend Moti is a ___.", "dog", "tiger", "camel", "lion"],
      ["Badal and Moti share a close ___.", "friendship", "quarrel", "competition", "argument"],
      ["When Badal is in danger in the water, Moti ___.", "helps him", "leaves him", "laughs at him", "hides from him"],
      ["Moti's actions show that he is ___.", "brave", "careless", "selfish", "cruel"],
      ["The story teaches us to ___ animals.", "care for", "frighten", "hurt", "tease"],
    ]),
    chapter("best-friends", "Best Friends", [
      ["The three friends in the story are a ___, a circle and a square.", "triangle", "spoon", "bird", "leaf"],
      ["A triangle has ___ sides.", "three", "two", "four", "five"],
      ["A square has ___ equal sides.", "four", "three", "five", "six"],
      ["A circle has ___ corners.", "no", "three", "four", "five"],
      ["The friends discover the value of ___.", "working together", "boasting", "fighting", "being selfish"],
    ]),
    chapter("out-in-the-garden", "Out in the Garden", [
      ["The poem describes a child playing in a ___.", "garden", "kitchen", "shop", "bus"],
      ["The child enjoys playing with a ___.", "ball", "pan", "broom", "plate"],
      ["To bounce a ball, we make it move down and ___.", "up again", "stay buried", "turn to ice", "vanish"],
      ["Outdoor play helps us stay ___.", "active", "motionless", "sleepy all day", "unwell"],
      ["While playing, we should take turns and follow ___.", "rules", "quarrels", "excuses", "insults"],
    ]),
    chapter("talking-toys", "Talking Toys", [
      ["The story imagines toys that can ___.", "talk", "grow roots", "lay eggs", "make rain"],
      ["The toys are waiting in a toy ___.", "shop", "pond", "nest", "field"],
      ["Different toys can be used for different kinds of ___.", "play", "cooking", "farming", "washing"],
      ["Making toys speak in a story is an example of ___.", "imagination", "measurement", "division", "weighing"],
      ["We should handle toys with ___ so that they last longer.", "care", "anger", "force", "carelessness"],
    ]),
    chapter("paper-boats", "Paper Boats", [
      ["The boats in this lesson are made of ___.", "paper", "stone", "glass", "iron"],
      ["A paper boat is made by ___ a sheet.", "folding", "burning", "eating", "washing"],
      ["A small paper boat can ___ on water.", "float", "grow roots", "fly by itself", "turn into a fish"],
      ["Making paper boats is a ___ activity.", "creative", "harmful", "cruel", "wasteful"],
      ["After playing, we should ___ paper boats from the water.", "collect", "hide", "push farther away", "leave all"],
    ]),
    chapter("the-big-laddoo", "The Big Laddoo", [
      ["The poem imagines an unusually large ___.", "laddoo", "shoe", "book", "chair"],
      ["A laddoo is a kind of ___.", "sweet", "vegetable", "tool", "vehicle"],
      ["An imaginary giant laddoo helps make the poem ___.", "playful", "frightening", "angry", "sad"],
      ["The word 'big' describes the laddoo's ___.", "size", "sound", "smell", "owner"],
      ["Imagining something much larger than usual is a way to create ___.", "humour", "rules", "measurements", "directions"],
    ]),
    chapter("thank-god", "Thank God", [
      ["The story connects a farmer with a ___.", "king", "pilot", "diver", "tailor"],
      ["The farmer expresses ___.", "gratitude", "jealousy", "hatred", "greed"],
      ["Saying 'thank you' is a way to show ___.", "thankfulness", "anger", "disrespect", "impatience"],
      ["The farmer looks for something ___ even in an unpleasant situation.", "positive", "cruel", "dishonest", "selfish"],
      ["The story encourages a ___ attitude.", "hopeful", "rude", "jealous", "careless"],
    ]),
    chapter("madhus-wish", "Madhu's Wish", [
      ["Madhu's wish is connected with things to ___.", "eat", "wear", "write with", "travel in"],
      ["After eating, Madhu feels ___.", "thirsty", "invisible", "weightless", "frozen"],
      ["The story shows the importance of drinking ___.", "water", "paint", "ink", "oil"],
      ["Being thirsty means wanting to ___.", "drink", "jump", "draw", "sing"],
      ["Madhu learns to value a basic ___.", "need", "ornament", "toy", "decoration"],
    ]),
    chapter("night", "Night", [
      ["The poem describes the world at ___.", "night", "noon", "breakfast time", "midday"],
      ["At night, the sky often looks ___.", "dark", "green", "orange", "striped"],
      ["Tiny points of light in the night sky are ___.", "stars", "leaves", "stones", "flowers"],
      ["Night is usually a time for ___.", "rest", "assembly", "school lunch", "morning exercise"],
      ["A poem about night can help us notice the beauty of ___.", "nature", "traffic rules", "shopping", "cooking"],
    ]),
    chapter("chanda-mama-counts-the-stars", "Chanda Mama Counts the Stars", [
      ["Chanda Mama is a familiar name for the ___.", "Moon", "Sun", "Earth", "rainbow"],
      ["Chanda Mama tries to count the ___.", "stars", "trees", "boats", "houses"],
      ["The many stars make counting them ___.", "difficult", "very quick", "boring", "a cooking task"],
      ["The title gives the Moon a ___ action.", "human", "plant", "machine", "fish"],
      ["The story encourages curiosity about the ___.", "night sky", "kitchen shelf", "school bag", "shoe rack"],
    ]),
    chapter("chandrayaan", "Chandrayaan", [
      ["Chandrayaan is connected with India's exploration of the ___.", "Moon", "ocean", "desert", "forest"],
      ["The organisation behind Chandrayaan is ___.", "ISRO", "a toy shop", "a railway station", "a post office"],
      ["Scientists and engineers work as a ___ on space missions.", "team", "quarrel", "queue of shoppers", "band of dancers"],
      ["A rocket helps carry a spacecraft into ___.", "space", "a classroom", "a pond", "a tunnel"],
      ["Learning about Chandrayaan encourages scientific ___.", "curiosity", "carelessness", "fear", "laziness"],
    ]),
  ],
};
