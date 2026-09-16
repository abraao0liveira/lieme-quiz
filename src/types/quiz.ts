export type TopicId = 'introducao' | 'lesao-corporal' | 'sexologia-forense';

export interface Topic {
  id: TopicId;
  name: string;
  shortName: string;
  description: string;
}

export interface Alternative {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  topicId: TopicId;
  statement: string;
  alternatives: Alternative[];
  correctAlternativeId: string;
  explanation: string;
  source?: string;
}
