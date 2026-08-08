import type { Specialty } from "../components/Specialty/Specialty.types";

export const SPECIALTIES: Specialty[] = [
  {
    "id": 1,
    "name": "Psicología",
    "href": "psicologia",
    "icon": "🧠",
    "description": "Atención psicológica integral para el bienestar mental y emocional de la comunidad.",
  },
  {
    "id": 2,
    "name": "Odontología",
    "href": 'odontologia',
    "icon": "🦷",
    "description": "Servicios dentales de calidad para una sonrisa saludable y un cuidado preventivo efectivo.",
  },
  {
    "id": 3,
    "name": "Fisioterapia",
    "href": 'fisioterapia',
    "icon": "🏃",
    "description": "Rehabilitación física y terapia especializada para recuperar movilidad y calidad de vida.",
  }
]


export const PROFILES = [
  {
    id: 1,
    name: "Vianney Arlette De Anda Estrada",
    cedula: "15487833",
    institution: "Universidad del Valle de México",
    approach: "TCC (Terapia Cognitivo Conductual), PBE",
    population: "Adolescentes y adultos",
    areas: "Manejo de emociones, burnout, depresión, ansiedad, duelo, relaciones, desarrollo personal y autoestima.",
    experience: "2 años",
    modality: "Virtual y presencial",
    schedule: "Sobre cita (L-V mañanas, sábados flexible)",
    message: "Soy psicóloga clínica y acompaño a mis consultantes a comprender lo que están viviendo desde un espacio seguro, sin juicios y con una mirada clara y práctica para construir una vida alineada con lo que realmente desean. Entenderte es el primer paso para transformarte, y no tienes que hacerlo solo(a).",
    imageUrl: "/vianney.jpg" 
  },
  {
    id: 2,
    name: "Paola Lizeth Doño Ramos",
    cedula: "En proceso",
    institution: "UNITEC",
    approach: "Cognitivo Conductual",
    population: "Adultos (20-75 años)",
    areas: "Depresión, ansiedad, estrés, burnout, separaciones/divorcios y duelos.",
    experience: "2 años",
    modality: "Híbrida",
    schedule: "L-J y Sábados por las mañanas (Miércoles y Martes solo en línea).",
    message: "Reconozco el esfuerzo que implica hablar de experiencias y emociones difíciles. El objetivo no es generar cambios inmediatos, sino avanzar a tu ritmo fortaleciendo las herramientas para afrontar situaciones de manera saludable. El cambio depende de la constancia y disposición para seguir avanzando.",
    imageUrl: "/paola.jpg"
  },
  {
    id: 3,
    name: "Andrea Deyanira Moreno Venegas",
    cedula: "15417284",
    institution: "UTEG Zapopan",
    approach: "Psicoanálisis",
    population: "Adolescentes, adultos, parejas y adultos mayores",
    areas: "Ansiedad, depresión, crisis financiera, problemas de autoestima y problemas escolares.",
    experience: "1 año y medio",
    modality: "Híbrida (Preferentemente presencial)",
    schedule: "9:00 am - 1:00 pm o 7:00 pm - 8:00 pm",
    message: "Sé que pedir ayuda puede ser una de las decisiones más difíciles. Por eso quiero ofrecerte un espacio donde puedas sentirte seguro, escuchado y comprendido, sin juicios. Te acompañaré a explorar tu historia y descubrir recursos que te permitan vivir con mayor tranquilidad.",
    imageUrl: "/andrea.jpg"
  },
  {
    id: 4,
    name: "Cinthia Rosario Alatorre Mercado",
    cedula: "14394617",
    institution: "Universidad América Latina",
    approach: "Gestalt",
    population: "General (Especialidad en niños de 3 a 12 años y parejas)",
    areas: "El 'aquí y ahora', conciencia de uno mismo, responsabilidad personal e integración de emociones, pensamientos y conductas.",
    experience: "6 años",
    modality: "Presencial, en línea o híbrida",
    schedule: "10:00 am - 1:00 pm y 4:00 pm - 9:00 pm",
    message: "Te doy la bienvenida a un espacio de confianza y respeto. Mi propósito es acompañarte a desarrollar una mayor conciencia de ti mismo, comprender tus emociones y descubrir nuevas maneras de relacionarte contigo y con los demás desde la autenticidad y la responsabilidad.",
    imageUrl: "/cinthia.jpg"
  }
];
