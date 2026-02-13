import {
  Stethoscope,
  Activity,
  Heart,
  Layers,
  Scan,
  User,
  Baby,
  UserCircle,
  type LucideIcon,
} from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: 'general' | 'ultrasound';
}

export const services: Service[] = [
  {
    id: 'medicina-general',
    title: 'Medicina General',
    description: 'Consulta médica integral para adultos y niños. Prevención, diagnóstico y tratamiento de enfermedades comunes. Atención personalizada para toda la familia.',
    icon: Stethoscope,
    category: 'general',
  },
  {
    id: 'ultrasonido-tiroides',
    title: 'Ultrasonido de Tiroides',
    description: 'Evaluación detallada de la glándula tiroides para detectar nódulos, quistes o alteraciones funcionales. Estudio no invasivo y confiable.',
    icon: Activity,
    category: 'ultrasound',
  },
  {
    id: 'ultrasonido-mamario',
    title: 'Ultrasonido Mamario',
    description: 'Estudio no invasivo para la detección temprana de alteraciones en tejido mamario. Complemento ideal para estudios de prevención.',
    icon: Heart,
    category: 'ultrasound',
  },
  {
    id: 'ultrasonido-tejidos-blandos',
    title: 'Ultrasonido de Tejidos Blandos',
    description: 'Diagnóstico de masas, quistes y alteraciones en músculos, tendones y tejido subcutáneo. Ideal para evaluación de ganglios y masas superficiales.',
    icon: Layers,
    category: 'ultrasound',
  },
  {
    id: 'ultrasonido-abdominal',
    title: 'Ultrasonido Abdominal Completo',
    description: 'Evaluación completa de hígado, vía biliar, páncreas, bazo, riñones y vejiga urinaria. Un solo estudio para revisar múltiples órganos.',
    icon: Scan,
    category: 'ultrasound',
  },
  {
    id: 'ultrasonido-renal',
    title: 'Ultrasonido Renal',
    description: 'Estudio especializado para evaluar riñones, uréteres y vejiga. Detección de cálculos, quistes y alteraciones en el sistema urinario.',
    icon: Activity,
    category: 'ultrasound',
  },
  {
    id: 'ultrasonido-ginecologico',
    title: 'Ultrasonido Ginecológico',
    description: 'Evaluación de útero y ovarios (anexos). Diagnóstico de condiciones ginecológicas y seguimiento de tratamientos.',
    icon: User,
    category: 'ultrasound',
  },
  {
    id: 'ultrasonido-obstetrico',
    title: 'Ultrasonido Obstétrico',
    description: 'Seguimiento del embarazo con imágenes de alta calidad. Control del desarrollo fetal y bienestar materno en cada etapa.',
    icon: Baby,
    category: 'ultrasound',
  },
  {
    id: 'ultrasonido-prostata',
    title: 'Ultrasonido de Próstata',
    description: 'Estudio especializado para evaluar la próstata. Detección temprana de hiperplasia benigna o alteraciones que requieran atención.',
    icon: UserCircle,
    category: 'ultrasound',
  },
];

export const generalServices = services.filter(s => s.category === 'general');
export const ultrasoundServices = services.filter(s => s.category === 'ultrasound');
