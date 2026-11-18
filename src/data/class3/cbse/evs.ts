import type { Subject } from "@/data/types";
import { makeChapter as chapter } from "../make";

export const subject: Subject = {
  id: "evs",
  name: "EVS",
  emoji: "🌳",
  chapters: [
    chapter("family-and-friends", "Family and Friends", [
      ["Families may be big or small, and every family deserves ___.", "respect", "teasing", "comparison", "unkindness"],
      ["Sharing household work shows ___.", "cooperation", "selfishness", "carelessness", "disrespect"],
      ["Older family members can share their stories and ___.", "experiences", "exam answers", "magic powers", "invisible toys"],
      ["Playing fairly with friends means following ___.", "rules", "only our own wishes", "angry orders", "unfair tricks"],
      ["When someone in the family needs help, we should ___.", "offer help", "laugh at them", "ignore them", "hide their things"],
    ]),
    chapter("going-to-the-mela", "Going to the Mela", [
      ["A mela is a ___ where people enjoy stalls, games and shows.", "fair", "hospital ward", "bedroom", "railway engine"],
      ["In a crowded place, children should stay close to their ___.", "trusted adult", "favourite stall", "nearest stranger", "moving vehicle"],
      ["Different kinds of transport help people ___ places.", "reach", "erase", "fold", "weigh"],
      ["If separated from family, a child should ask a ___ for help.", "police officer", "stranger offering a ride", "person asking them to hide", "shopkeeper's dog"],
      ["Waiting for our turn in a queue shows ___.", "patience", "selfishness", "carelessness", "anger"],
    ]),
    chapter("celebrating-festivals", "Celebrating Festivals", [
      ["Festivals bring people together to ___.", "celebrate", "quarrel", "waste water", "damage plants"],
      ["Different communities may celebrate ___ festivals.", "different", "only identical", "no", "only one person's"],
      ["Sharing food and greetings can spread ___.", "joy", "litter", "smoke", "fear"],
      ["A caring celebration avoids unnecessary noise and ___.", "waste", "kindness", "sharing", "friendship"],
      ["We should show ___ for other people's festivals.", "respect", "dislike", "mockery", "disrespect"],
    ]),
    chapter("getting-to-know-plants", "Getting to Know Plants", [
      ["The ___ usually hold a plant firmly in the soil.", "roots", "flowers", "fruits", "seeds"],
      ["The ___ supports a plant and carries water to its parts.", "stem", "fruit", "flower", "petal"],
      ["Most green plants make food mainly in their ___.", "leaves", "flowers", "fruits", "seeds"],
      ["A large plant with a strong, woody trunk is a ___.", "tree", "herb", "creeper", "blade of grass"],
      ["We can study plants safely by ___ them without damaging them.", "observing", "uprooting", "burning", "breaking"],
    ]),
    chapter("plants-and-animals-live-together", "Plants and Animals Live Together", [
      ["Many birds build nests in trees for ___.", "shelter", "cooking", "shopping", "writing"],
      ["Some animals get their food from ___.", "plants", "plastic bags", "glass bottles", "metal cans"],
      ["Bees and butterflies often visit flowers for ___.", "nectar", "stones", "plastic", "sand"],
      ["Some animals help plants by spreading their ___.", "seeds", "pots", "fences", "labels"],
      ["Protecting plants also helps animals that ___ them.", "depend on", "never use", "are made from", "turn into"],
    ]),
    chapter("living-in-harmony", "Living in Harmony", [
      ["Living in harmony means living together ___.", "peacefully", "cruelly", "selfishly", "carelessly"],
      ["We should watch wild animals from a ___ distance.", "safe", "touching", "chasing", "crowding"],
      ["Throwing stones at animals is ___.", "harmful", "kind", "helpful", "necessary"],
      ["Trees, ponds and other natural homes should be ___.", "protected", "destroyed", "filled with litter", "burnt"],
      ["If we find an injured animal, we should get help from a ___.", "responsible adult", "person who teases it", "crowd chasing it", "person throwing rubbish"],
    ]),
    chapter("water-a-precious-gift", "Water — A Precious Gift", [
      ["People need water for drinking, cooking and ___.", "washing", "making sunlight", "making air", "growing stones"],
      ["Rain fills many ponds, lakes and ___.", "rivers", "school bags", "cupboards", "pencil boxes"],
      ["We can save water by turning off a tap when it is ___.", "not needed", "needed for drinking", "filling a glass", "rinsing soap"],
      ["Water meant for drinking should be ___.", "safe and clean", "muddy", "soapy", "full of rubbish"],
      ["Throwing waste into water bodies causes ___.", "pollution", "cleaning", "water saving", "rainfall"],
    ]),
    chapter("food-we-eat", "Food We Eat", [
      ["Food gives our bodies energy to work and ___.", "play", "turn into metal", "stop growing", "live without water"],
      ["Rice and wheat are examples of ___.", "grains", "fruits", "milk products", "spices"],
      ["Pulses, eggs and milk are foods that help us ___.", "grow", "avoid water", "never rest", "skip handwashing"],
      ["Eating a variety of foods gives us different ___.", "nutrients", "toys", "colours of ink", "types of plastic"],
      ["We should wash our hands before ___.", "eating", "wearing shoes", "opening an umbrella", "looking at the sky"],
    ]),
    chapter("staying-healthy-and-happy", "Staying Healthy and Happy", [
      ["Regular physical play helps keep our bodies ___.", "fit", "dirty", "motionless", "weak"],
      ["Enough sleep helps the body ___ after a busy day.", "rest", "collect litter", "make plastic", "stop growing"],
      ["Brushing our teeth helps keep them ___.", "clean", "muddy", "sticky", "covered with food"],
      ["If we feel ill, we should tell a ___.", "trusted adult", "stranger", "toy", "pet bird"],
      ["Talking to someone we trust can help when we feel ___.", "worried", "wooden", "invisible", "weightless"],
    ]),
    chapter("this-world-of-things", "This World of Things", [
      ["Things around us are made from different ___.", "materials", "feelings", "songs", "shadows"],
      ["A wooden chair is mainly made from ___.", "wood", "water", "air", "cotton"],
      ["Clear glass is used for windows because it lets ___ pass through.", "light", "chairs", "stones", "shoes"],
      ["A soft cotton cloth can be ___ to make it smaller.", "folded", "shattered", "melted", "inflated"],
      ["We choose a material for an object by thinking about its ___.", "properties", "owner's birthday", "first letter", "shop's colour"],
    ]),
    chapter("making-things", "Making Things", [
      ["A potter shapes ___ to make pots.", "clay", "air", "sunlight", "smoke"],
      ["A weaver makes cloth using ___.", "threads", "bricks", "pebbles", "leaves"],
      ["A carpenter often works with ___.", "wood", "milk", "clouds", "water vapour"],
      ["Making useful objects requires practice and ___.", "skill", "carelessness", "littering", "quarrelling"],
      ["Children should use sharp tools only with ___.", "adult supervision", "secrecy", "haste", "horseplay"],
    ]),
    chapter("taking-charge-of-waste", "Taking Charge of Waste", [
      ["Using fewer unnecessary items helps ___ waste.", "reduce", "increase", "scatter", "hide"],
      ["Using a sturdy bag many times is an example of ___.", "reuse", "littering", "burning waste", "wasting"],
      ["Turning used materials into new products is called ___.", "recycling", "littering", "dumping", "hoarding"],
      ["Fruit and vegetable peels can be used to make ___.", "compost", "glass", "steel", "plastic"],
      ["Separating waste at home makes waste management ___.", "easier", "impossible", "unnecessary", "harmful"],
    ]),
  ],
};
