// Site Configuration
export const siteConfig = {
  name: 'Dr. Luis Peña',
  fullName: 'Dr. Luis Alberto Peña Molina',
  title: 'Medicina General y Ultrasonido',
  location: {
    city: 'Tuxtla Gutiérrez',
    state: 'Chiapas',
    country: 'México',
  },
  contact: {
    whatsapp: '529611234567', // Reemplazar con número real
    phone: '+52 961 123 4567', // Reemplazar con número real
    email: 'contacto@drluispena.com',
  },
  schedule: {
    days: 'Lunes a Viernes',
    hours: '9:00 AM - 6:00 PM',
  },
  social: {
    facebook: 'https://facebook.com/drluispena',
    instagram: 'https://instagram.com/drluispena',
  },
  stats: {
    yearsExperience: 10,
    patientsAttended: 5000,
    ultrasoundTypes: 8,
  },
  credentials: {
    professionalLicense: '12345678',
    specialty: 'Ultrasonido Diagnóstico',
    university: 'Universidad de Ciencias Médicas',
  },
} as const;

// WhatsApp Message Templates
export const whatsappMessages = {
  default: 'Hola Dr. Luis Peña, me gustaría agendar una consulta.',
  appointment: 'Hola Dr. Luis Peña, me gustaría agendar una consulta de medicina general.',
  ultrasound: (type: string) => `Hola Dr. Luis Peña, me gustaría agendar un ultrasonido de ${type}.`,
  info: 'Hola Dr. Luis Peña, tengo algunas preguntas sobre sus servicios.',
} as const;

// GA4 Configuration
export const ga4Config = {
  measurementId: 'G-XXXXXXXXXX', // Reemplazar con ID real de GA4
  events: {
    WHATSAPP_CLICK: 'whatsapp_click',
    SERVICE_VIEW: 'service_view',
    CONTACT_VIEW: 'contact_view',
    NAV_CLICK: 'nav_click',
    SCROLL_DEPTH: 'scroll_depth',
  } as const,
};

// SEO Configuration
export const seoConfig = {
  titleTemplate: '%s | Dr. Luis Peña - Medicina General y Ultrasonido',
  defaultTitle: 'Dr. Luis Peña | Medicina General y Ultrasonido en Tuxtla Gutiérrez',
  defaultDescription: 'Dr. Luis Alberto Peña Molina - Médico General especializado en ultrasonido diagnóstico en Tuxtla Gutiérrez, Chiapas. Agenda tu consulta por WhatsApp.',
  keywords: [
    'médico general',
    'ultrasonido',
    'Tuxtla Gutiérrez',
    'Chiapas',
    'ultrasonido abdominal',
    'ultrasonido obstétrico',
    'ultrasonido tiroides',
    'ultrasonido mamario',
    'consulta médica',
    'Dr. Luis Peña',
    'medicina general',
    'diagnóstico por imagen',
  ],
} as const;
