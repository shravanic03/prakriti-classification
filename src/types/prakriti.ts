export interface QuestionResponse {
  questionId: number;
  answer: number; // 0, 1, or 2 corresponding to Vata, Pitta, Kapha
}

export interface PrakritiResult {
  vata: number;
  pitta: number;
  kapha: number;
  dominant: 'Vata' | 'Pitta' | 'Kapha';
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface DoshaInfo {
  name: string;
  percentage: number;
  color: string;
  description: string;
  traits: string[];
}
