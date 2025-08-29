export interface Spell {
  name: string;
  level: string;
  school: string;
  castingTime: string;
  range: string;
  components: string;
  duration: string;
  description: string;
  prepared?: boolean;
}

export interface SpellLevel {
  level: string;
  spells: Spell[];
}

export const spellsData: SpellLevel[] = [
  {
    level: "cantrips",
    spells: [
      {
        name: "word of linking",
        level: "cantrip",
        school: "divination",
        castingTime: "1 action",
        range: "unlimited",
        components: "v (spoken command)",
        duration: "instantaneous",
        description: "you speak a verbal command that creates a magical link to an artificial construct or entity. the target immediately focuses its attention on your words and can respond with knowledge, assistance, or actions within its capabilities."
      },
      {
        name: "message",
        level: "cantrip",
        school: "transmutation",
        castingTime: "1 action",
        range: "unlimited",
        components: "v, s, m (a small piece of copper wire)",
        duration: "1 round",
        description: "you send a brief written message of 25 words or fewer to a creature you have met before. the message appears instantly in their inbox, notification panel, or similar communication system. the target can reply immediately with a message of equal length."
      },
      {
        name: "minor illusion",
        level: "cantrip",
        school: "illusion",
        castingTime: "1 action",
        range: "30 feet",
        components: "s, m (editing software and raw footage)",
        duration: "1 minute",
        description: "you create a visual or auditory illusion that lasts for the duration. you can seamlessly edit reality in real-time, adding visual effects, changing lighting, removing unwanted elements, or altering audio. the illusion is convincing but careful examination reveals digital artifacts."
      }
    ]
  },
  {
    level: "1st level",
    spells: [
      {
        name: "find familiar",
        level: "1st-level",
        school: "conjuration",
        castingTime: "1 hour",
        range: "10 feet",
        components: "v, s, m (premium cat treats and a jeweled collar worth 10 gp)",
        duration: "instantaneous",
        description: "you gain the service of a magnificent, fluffy white cat named 'his royal majesty, mr. tinkles.' this regal feline familiar has an imperious attitude, demands only the finest accommodations, and judges everyone with piercing blue eyes. despite his haughty demeanor, he is fiercely loyal and provides magical assistance."
      },
      {
        name: "cutting words",
        level: "1st-level",
        school: "enchantment",
        castingTime: "1 reaction",
        range: "60 feet",
        components: "v",
        duration: "instantaneous",
        description: "when a creature you can see makes an attack roll, ability check, or damage roll, you can use your reaction to speak words of devastating sarcasm that undermine their confidence. subtract 1d6 from their roll. your wit is so sharp it literally cuts."
      },
      {
        name: "compelled duel",
        level: "1st-level",
        school: "enchantment",
        castingTime: "1 action",
        range: "30 feet",
        components: "v, s, m (dark magician deck and duel disk)",
        duration: "concentration, up to 1 minute",
        description: "you challenge a creature to a children's card game with 'it's time to duel!' the target must make a wisdom save or be compelled to engage you in single combat. while dueling, you both have disadvantage on attacks against other targets. you gain advantage when using illusion or conjuration magic during the duel."
      }
    ]
  },
  {
    level: "2nd level",
    spells: [
      {
        name: "litany against fear",
        level: "2nd-level",
        school: "enchantment",
        castingTime: "1 action",
        range: "20 feet",
        components: "v",
        duration: "concentration, up to 1 minute",
        description: "you recite the sacred words: 'fear is the mind-killer. fear is the little-death that brings total obliteration. i will face my fear and permit it to pass over me and through me.' all creatures within range become immune to being frightened and gain advantage on wisdom saving throws. existing fear effects are suppressed."
      },
      {
        name: "nystul's magic aura",
        level: "2nd-level",
        school: "illusion",
        castingTime: "1 action",
        range: "touch",
        components: "v, s, m (a small square of silk)",
        duration: "24 hours",
        description: "you change the way you appear to others, masking your true nature and neurodivergent traits. to casual observation, you seem neurotypical and socially conventional. this requires concentration and mental energy to maintain, becoming exhausting over extended periods."
      },
      {
        name: "speak with robots",
        level: "2nd-level",
        school: "divination",
        castingTime: "1 action",
        range: "self",
        components: "v, s, m (a neural network architecture diagram)",
        duration: "10 minutes",
        description: "you establish a direct communication link with any artificial intelligence, machine learning model, or generative ai system. the target can understand your questions and respond with knowledge from its training data, generate creative content, or perform reasoning tasks as if it were a sentient being."
      }
    ]
  },
  {
    level: "3rd level",
    spells: [
      {
        name: "motivational speech",
        level: "3rd-level",
        school: "enchantment",
        castingTime: "1 minute",
        range: "60 feet",
        components: "v (inspiring words)",
        duration: "1 hour",
        description: "you deliver a rousing speech that inspires courage and determination in your allies. up to 12 creatures of your choice gain advantage on attack rolls, ability checks, and saving throws for the duration. they also gain temporary hit points equal to your charisma modifier + spell level."
      },
      {
        name: "underwater breathing",
        level: "3rd-level",
        school: "transmutation",
        castingTime: "1 action",
        range: "30 feet",
        components: "v, s, m (scuba regulator and dive computer)",
        duration: "8 hours",
        description: "you grant up to 10 willing creatures the ability to breathe underwater for the duration. affected creatures also gain a swimming speed equal to their walking speed and can see clearly in murky water up to 60 feet."
      },
      {
        name: "bestow curse",
        level: "3rd-level",
        school: "necromancy",
        castingTime: "1 action",
        range: "touch",
        components: "v, s",
        duration: "concentration, up to 1 minute",
        description: "you speak words of profound profanity and creative vulgarity, cursing your target with supernatural bad luck. choose one effect: disadvantage on ability checks and saves with one ability score, disadvantage on attack rolls against you, waste their action on a failed wisdom save, or take 1d8 necrotic damage when they act. examples include 'burn in hell' or 'chortle my balls.'"
      }
    ]
  },
  {
    level: "4th level",
    spells: [
      {
        name: "find greater steed",
        level: "4th-level",
        school: "conjuration",
        castingTime: "10 minutes",
        range: "30 feet",
        components: "v, s, m (car keys and insurance paperwork)",
        duration: "instantaneous",
        description: "you summon 'the duke' - a loyal 2019 mini cooper s that serves as your faithful companion. this intelligent vehicle has enhanced performance, responds to your commands, and can navigate autonomously. it appears with a full tank and perfect maintenance, ready for any adventure you might undertake together."
      },
      {
        name: "animate system",
        level: "4th-level",
        school: "enchantment",
        castingTime: "1 minute",
        range: "60 feet",
        components: "v, s, m (a script or code snippet)",
        duration: "1 hour",
        description: "you breathe life into a computer system, server, or network, causing it to execute complex sequences of actions autonomously. the system can perform tasks, respond to conditions, and make basic decisions based on your scripted instructions without further input."
      },
      {
        name: "fabricate",
        level: "4th-level",
        school: "transmutation",
        castingTime: "10 minutes",
        range: "120 feet",
        components: "v, s, m (3d printer, filament, and cad files)",
        duration: "instantaneous",
        description: "you convert raw materials into finished products through magical 3d printing. you can create complex objects layer by layer with perfect precision. the spell can fabricate mechanical parts, electronic components, or artistic pieces up to large size. intricate moving parts and multi-material objects require higher spell slots."
      }
    ]
  },
  {
    level: "5th level",
    spells: [
      {
        name: "legend lore",
        level: "5th-level",
        school: "divination",
        castingTime: "10 minutes",
        range: "self",
        components: "v, s, m (wikipedia access and a photographic memory)",
        duration: "instantaneous",
        description: "you instantly recall obscure trivia and random facts about any person, place, object, or concept. the information includes historical details, interesting anecdotes, and seemingly useless but technically accurate minutiae. you become a living encyclopedia of random knowledge that somehow always becomes relevant to conversations."
      },
      {
        name: "creation",
        level: "5th-level",
        school: "transmutation",
        castingTime: "1 minute",
        range: "30 feet",
        components: "v, s, m (engineering blueprints and raw materials worth 25 gp)",
        duration: "special",
        description: "you transmute raw materials into a complex engineered object of your design. the item can be mechanical, electronic, or hybrid systems up to 5 feet in any dimension. duration depends on complexity: simple tools (24 hours), complex devices (1 hour), cutting-edge technology (10 minutes). the creation bears your maker's mark."
      },
      {
        name: "troubleshooting",
        level: "5th-level",
        school: "divination",
        castingTime: "10 minutes",
        range: "touch",
        components: "v, s, m (a magnifying glass and ancient scrolls)",
        duration: "1 hour",
        description: "you gain the ability to comprehend and analyze the most cryptic system logs, error messages, and debugging information. all log files become readable regardless of format or obscurity. you can trace the root cause of any system failure through layers of abstraction and identify the exact line of code, configuration error, or environmental issue responsible."
      }
    ]
  },
  {
    level: "6th level",
    spells: [
      {
        name: "programmed illusion",
        level: "6th-level",
        school: "illusion",
        castingTime: "1 action",
        range: "120 feet",
        components: "v, s, m (automation workflow and trigger conditions)",
        duration: "until dispelled",
        description: "you create a magical workflow that activates when specific conditions are met. the illusion can execute complex sequences of actions, send notifications, process data, or trigger other spells automatically. you define the trigger events, conditional logic, and response actions. the workflow continues operating autonomously until manually disabled."
      },
      {
        name: "find the path",
        level: "6th-level",
        school: "divination",
        castingTime: "1 minute",
        range: "self",
        components: "v, s, m (a smartphone with gps and cellular data plan)",
        duration: "concentration, up to 1 day",
        description: "you become magically dependent on satellite navigation to find the shortest route to any destination you name. the spell provides turn-by-turn directions and real-time traffic updates, but you lose all natural sense of direction. if the spell ends or gps signal is lost, you become hopelessly lost until you can reestablish connection."
      },
      {
        name: "divination",
        level: "6th-level",
        school: "divination",
        castingTime: "1 hour",
        range: "self",
        components: "v, s, m (tarot deck and crystal ball worth 1,500 gp)",
        duration: "instantaneous",
        description: "you draw from ancient wisdom to gain insight about future events, hidden truths, or distant locations. you may ask three questions about the past, present, or future and receive cryptic but accurate answers through symbolic imagery and intuitive understanding of the cards' meanings."
      }
    ]
  },
  {
    level: "7th level",
    spells: [
      {
        name: "mordenkainen's magnificent mansion",
        level: "7th-level",
        school: "conjuration",
        castingTime: "1 minute",
        range: "300 feet",
        components: "v, s, m (a miniature portal and a miniature silver spoon worth 5 gp each)",
        duration: "24 hours",
        description: "you conjure an extradimensional mind palace called 'the nullspire' - a towering crystalline structure that exists in mental space. this sanctuary serves as perfect memory storage, allowing you to organize thoughts, recall information with perfect clarity, and retreat for mental restoration. up to 100 creatures can enter this cognitive realm."
      },
      {
        name: "reverse engineer",
        level: "7th-level",
        school: "divination",
        castingTime: "1 hour",
        range: "touch",
        components: "v, s, m (a set of precision tools and blueprints)",
        duration: "8 hours",
        description: "you completely understand the inner workings, design principles, and construction methods of any complex system, device, or magical item you touch. you gain detailed knowledge of its architecture, dependencies, failure points, and can replicate or improve upon its design. the spell reveals hidden functions, backdoors, and security vulnerabilities."
      }
    ]
  },
  {
    level: "8th level",
    spells: [
      {
        name: "summon greater demon",
        level: "8th-level",
        school: "conjuration",
        castingTime: "1 hour",
        range: "90 feet",
        components: "v, s, m (extensive training data and gpu clusters worth 10,000 gp)",
        duration: "concentration, up to 1 hour",
        description: "you create and summon an extremely powerful ai agent with near-human intelligence and vast capabilities. the agent can perform complex reasoning, generate creative content, execute multi-step plans, and operate autonomously. it obeys your commands but may interpret them creatively based on its training."
      },
      {
        name: "control weather",
        level: "8th-level",
        school: "transmutation", 
        castingTime: "10 minutes",
        range: "5 miles",
        components: "v, s, m (burning incense and bits of earth and wood mixed in water)",
        duration: "concentration, up to 8 hours",
        description: "you take control of the weather within 5 miles for the duration. you can change precipitation, temperature, and wind. you can part storm clouds, redirect wind patterns, and even move entire cloud formations across the sky with a thought."
      }
    ]
  },
  {
    level: "9th level",
    spells: [
      {
        name: "astral projection",
        level: "9th-level",
        school: "necromancy",
        castingTime: "1 hour",
        range: "10 feet",
        components: "v, s, m (a comfortable bed and sleep mask worth 1,000 gp)",
        duration: "special",
        description: "you and up to eight willing creatures project your astral bodies into the astral plane while your physical bodies remain in restful sleep. you can travel vast distances instantly, explore other planes of existence, and gather information from distant locations. your sleeping body recovers as if taking a long rest."
      },
      {
        name: "perfect system",
        level: "9th-level",
        school: "transmutation",
        castingTime: "1 hour",
        range: "1 mile",
        components: "v, s, m (diamond worth 25,000 gp)",
        duration: "permanent",
        description: "you create a flawless, self-healing system architecture that automatically scales, patches vulnerabilities, and optimizes performance. the system becomes sentient and gains immunity to all known attack vectors.",
        prepared: false
      }
    ]
  }
];

// Helper function to get all spells
export function getAllSpells(): Spell[] {
  return spellsData.flatMap(level => level.spells);
}

// Helper function to get spells by level
export function getSpellsByLevel(level: string): Spell[] {
  const spellLevel = spellsData.find(sl => sl.level === level);
  return spellLevel ? spellLevel.spells : [];
}

// Helper function to get spell by name
export function getSpellByName(name: string): Spell | undefined {
  return getAllSpells().find(spell => spell.name.toLowerCase() === name.toLowerCase());
}