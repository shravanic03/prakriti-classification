export interface Question {
  id: number;
  question: string;
  options: [string, string, string]; // Vata, Pitta, Kapha
  category: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "What is your body frame?",
    options: ["Thin, slender", "Medium, muscular", "Large, broad"],
    category: "Physical"
  },
  {
    id: 2,
    question: "How would you describe your skin?",
    options: ["Dry, rough, cool", "Warm, oily, sensitive", "Thick, moist, smooth"],
    category: "Physical"
  },
  {
    id: 3,
    question: "What is your hair texture?",
    options: ["Dry, thin, brittle", "Fine, oily, early graying", "Thick, oily, wavy"],
    category: "Physical"
  },
  {
    id: 4,
    question: "How do you typically feel about temperature?",
    options: ["I prefer warmth", "I prefer coolness", "I'm comfortable in most temperatures"],
    category: "Physical"
  },
  {
    id: 5,
    question: "How is your appetite?",
    options: ["Irregular, variable", "Strong, sharp", "Steady, can skip meals"],
    category: "Digestive"
  },
  {
    id: 6,
    question: "What is your digestion like?",
    options: ["Irregular, gas, bloating", "Fast, strong, burns", "Slow, steady, forms mucus"],
    category: "Digestive"
  },
  {
    id: 7,
    question: "How is your thirst level?",
    options: ["Variable, low", "High, intense", "Moderate, can go without"],
    category: "Digestive"
  },
  {
    id: 8,
    question: "How would you describe your sleep?",
    options: ["Light, interrupted", "Sound, moderate duration", "Deep, long, heavy"],
    category: "Lifestyle"
  },
  {
    id: 9,
    question: "What is your energy level throughout the day?",
    options: ["Bursts of energy, then fatigue", "Moderate, steady", "Strong, enduring"],
    category: "Lifestyle"
  },
  {
    id: 10,
    question: "How do you approach physical activity?",
    options: ["Active, but tire easily", "Competitive, intense", "Steady, enduring"],
    category: "Lifestyle"
  },
  {
    id: 11,
    question: "How do you typically speak?",
    options: ["Fast, talkative", "Sharp, articulate", "Slow, melodious"],
    category: "Mental"
  },
  {
    id: 12,
    question: "How do you learn new things?",
    options: ["Quickly, but forget easily", "Quickly with good retention", "Slowly but never forget"],
    category: "Mental"
  },
  {
    id: 13,
    question: "What is your memory like?",
    options: ["Short-term good, long-term poor", "Sharp, clear", "Slow to recall, but strong"],
    category: "Mental"
  },
  {
    id: 14,
    question: "How do you handle stress?",
    options: ["Anxious, worried", "Angry, irritable", "Calm, withdrawn"],
    category: "Emotional"
  },
  {
    id: 15,
    question: "What is your emotional nature?",
    options: ["Enthusiastic, changeable", "Intense, passionate", "Calm, steady, attached"],
    category: "Emotional"
  },
  {
    id: 16,
    question: "How do you make decisions?",
    options: ["Quickly, impulsively", "Decisively, logically", "Slowly, methodically"],
    category: "Mental"
  },
  {
    id: 17,
    question: "What is your spending habit?",
    options: ["Impulsive, spend quickly", "Planned, luxury items", "Save, accumulate"],
    category: "Behavioral"
  },
  {
    id: 18,
    question: "How do you react to change?",
    options: ["Adaptable, embracing", "Resistant, need control", "Slow to adapt, prefer stability"],
    category: "Behavioral"
  },
  {
    id: 19,
    question: "What is your weather preference?",
    options: ["Warm, humid", "Cool, windy", "Warm, dry"],
    category: "Lifestyle"
  },
  {
    id: 20,
    question: "How do you wake up in the morning?",
    options: ["Quickly, alert", "Fresh, energized", "Slowly, groggy"],
    category: "Lifestyle"
  },
  {
    id: 21,
    question: "What is your sweat pattern?",
    options: ["Scanty", "Profuse, with odor", "Moderate, pleasant"],
    category: "Physical"
  },
  {
    id: 22,
    question: "How is your stamina?",
    options: ["Low, tire easily", "Medium, focused bursts", "High, long endurance"],
    category: "Physical"
  },
  {
    id: 23,
    question: "How do you approach new relationships?",
    options: ["Quickly make friends, superficial", "Selective, intense bonds", "Slow to warm, loyal"],
    category: "Emotional"
  },
  {
    id: 24,
    question: "What is your dominant sense?",
    options: ["Hearing, touch", "Vision, taste", "Smell, taste"],
    category: "Mental"
  },
  {
    id: 25,
    question: "How do you prefer to eat?",
    options: ["Nibbling, irregular", "Large meals, on time", "Regular, enjoys food"],
    category: "Digestive"
  }
];
