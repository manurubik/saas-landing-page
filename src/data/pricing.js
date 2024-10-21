export const pricingPlans = [
  {
    title: "Plan Gratis",
    price: 0,
    description: "Para individuos y aficionados",
    features: [
      "Hasta 3 formularios por mes",
      "Creador de formularios básico impulsado por IA",
      "Personalización básica de formularios",
      "Exportación de datos en formato CSV",
    ],
    isPopular: false,
  },
  {
    title: "Plan Hobby",
    price: 15,
    description:
      "Perfecto para negocios en crecimiento que necesitan funciones avanzadas.",
    features: [
      "Hasta 100 formularios por mes",
      "Exportación de datos en formatos CSV y Excel",
      "Lógica condicional y ramificación",
      "Análisis e informes básicos",
    ],
    isPopular: true,
  },
  {
    title: "Plan Pro",
    price: 89,
    description:
      "Para grandes empresas y negocios con necesidades personalizadas.",
    features: [
      "Formularios ilimitados por mes",
      "Sugerencias de formularios premium impulsadas por IA",
      "Lógica condicional y ramificación avanzadas",
      "Acceso a API para integraciones personalizadas",
    ],
    isPopular: false,
  },
];
