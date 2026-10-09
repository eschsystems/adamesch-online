export interface SubclassFeature {
  name: string;
  description: string;
}

export interface Subclass {
  key: string; // class name, used as the tab label
  subclass: string; // subclass archetype
  level: number; // class level
  castingAbility: string;
  saveDC: number;
  spellAttack: string;
  tagline: string;
  features: SubclassFeature[];
}

// subclasses split out from the "generalist" multiclass build
// (sorcerer 3 / warlock 3 / wizard 4 / druid 3 / artificer 3 / paladin 1)
export const subclasses: Subclass[] = [
  {
    key: "wizard",
    subclass: "order of scribes",
    level: 4,
    castingAbility: "intelligence",
    saveDC: 19,
    spellAttack: "+11",
    tagline: "the most 'computer whisperer' class on the sheet — a spellbook run like a magical ide.",
    features: [
      {
        name: "wizardly quill",
        description: "conjure an inkless quill that copies any text you've seen. scribing a spell into the book takes 2 minutes per spell level instead of 2 hours."
      },
      {
        name: "awakened spellbook",
        description: "the spellbook is your focus. once per turn you can swap a wizard spell's damage type for any that appears elsewhere in the book. ritual casting takes +1 minute instead of +10."
      },
      {
        name: "arcane recovery",
        description: "after a short rest, once per long rest, recover wizard spell slots totaling up to 2 slot levels."
      }
    ]
  },
  {
    key: "druid",
    subclass: "circle of the land — forest",
    level: 3,
    castingAbility: "wisdom",
    saveDC: 16,
    spellAttack: "+8",
    tagline: "a warforged druid whose 'wild shape' is re-skinned as deploying nanobot swarms that mimic beast forms.",
    features: [
      {
        name: "wild shape",
        description: "2 uses per short or long rest. transform into a beast of cr ¼ or lower (no fly or swim speed at this level)."
      },
      {
        name: "land spell — forest",
        description: "barkskin and spider climb are always prepared and don't count against your prepared limit."
      },
      {
        name: "natural recovery",
        description: "after a short rest, once per long rest, recover druid spell slots totaling up to 2 slot levels."
      }
    ]
  },
  {
    key: "sorcerer",
    subclass: "shadow magic",
    level: 3,
    castingAbility: "charisma",
    saveDC: 18,
    spellAttack: "+10",
    tagline: "the starting class — saving-throw proficiencies (con + cha) and a well of raw, shadow-stolen power originate here.",
    features: [
      {
        name: "innate sorcery",
        description: "bonus action: for 1 minute you have advantage on sorcerer spell attacks and your save dc is +1. two uses per long rest."
      },
      {
        name: "font of magic",
        description: "3 sorcery points, convertible to and from spell slots (1st = 2 sp · 2nd = 3 sp · 3rd = 5 sp)."
      },
      {
        name: "metamagic",
        description: "subtle spell (cast with no verbal or somatic components — dimir-perfect) and twinned spell (target a second creature with a single-target spell)."
      },
      {
        name: "eyes of the dark",
        description: "60 ft. darkvision; spend 2 sorcery points to cast darkness without a slot, and see through your own darkness."
      },
      {
        name: "strength of the grave",
        description: "when dropped to 0 hp (not radiant, not a crit), make a cha save to drop to 1 hp instead. once per long rest."
      }
    ]
  },
  {
    key: "artificer",
    subclass: "alchemist",
    level: 3,
    castingAbility: "intelligence",
    saveDC: 19,
    spellAttack: "+11",
    tagline: "literal smart-home-isms and back-room potion-brewing — a coin that whispers wifi credentials, a mug that drips on demand.",
    features: [
      {
        name: "magical tinkering",
        description: "touch a tiny nonmagical object to give it light, a recorded message, a sound, a sensory effect, or a visual marking. up to 5 active at once."
      },
      {
        name: "infuse item",
        description: "know 4 infusions; keep 2 infused items active, imbued during a long rest."
      },
      {
        name: "the right tool for the job",
        description: "spend 1 hour with tinker's tools to conjure any one set of artisan's tools, which persists until replaced."
      },
      {
        name: "experimental elixir",
        description: "on a long rest, brew up to 5 elixirs — healing, swiftness, resilience, boldness, flight, or transformation."
      }
    ]
  },
  {
    key: "paladin",
    subclass: "oath of the crown (planned)",
    level: 1,
    castingAbility: "charisma",
    saveDC: 18,
    spellAttack: "+10",
    tagline: "you don't worship the crown; you ARE the crown of yourself. oath features unlock only if you ever take paladin to level 3.",
    features: [
      {
        name: "lay on hands",
        description: "a pool of 5 hp. as a bonus action, touch a creature to restore hp one-for-one, or spend 5 to neutralize a disease or poison."
      },
      {
        name: "weapon mastery",
        description: "use the mastery property of 2 weapons — suggested longsword (sap) and hand crossbow (vex)."
      },
      {
        name: "divine sense",
        description: "bonus action: sense celestials, fiends, and undead within 60 ft. four uses per long rest."
      }
    ]
  },
  {
    key: "warlock",
    subclass: "the fathomless",
    level: 3,
    castingAbility: "charisma (pact magic)",
    saveDC: 18,
    spellAttack: "+10",
    tagline: "deep-sea / cosmic-ocean horror running on a separate pact-magic pool — dimir-meets-cthulhu, with a waterlogged grimoire.",
    features: [
      {
        name: "pact of the tome",
        description: "a book of shadows holding 3 cantrips from any class list and 2 ritual spells you can cast as rituals."
      },
      {
        name: "devil's sight",
        description: "see normally in magical and nonmagical darkness up to 120 ft."
      },
      {
        name: "mask of many faces",
        description: "cast disguise self at will, no slot — shifting masks of drowned souls."
      },
      {
        name: "tentacle of the deeps",
        description: "bonus action: summon a 10-ft. spectral tentacle within 60 ft. attack for 1d8 cold and reduce a target's speed by 10 ft."
      },
      {
        name: "gift of the sea",
        description: "swim speed 40 ft. and breathe underwater indefinitely."
      }
    ]
  }
];
