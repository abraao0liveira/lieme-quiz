import type { Topic } from '../types/quiz';

export const topics: Topic[] = [
  {
    id: 'introducao',
    name: 'Introdução à Medicina Legal',
    shortName: 'Introdução',
    description: 'Perícia, corpo de delito, necropsia e documentos médico-legais.',
  },
  {
    id: 'lesao-corporal',
    name: 'Lesão Corporal',
    shortName: 'Lesão Corporal',
    description: 'Traumatologia forense: instrumentos, tipos de lesão e classificação legal.',
  },
  {
    id: 'sexologia-forense',
    name: 'Sexologia Forense',
    shortName: 'Sexologia Forense',
    description: 'Crimes contra a dignidade sexual, exame himenal e perversões sexuais.',
  },
];

export const topicsById: Record<string, Topic> = Object.fromEntries(
  topics.map((topic) => [topic.id, topic]),
);
