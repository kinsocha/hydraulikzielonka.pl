// Centralna konfiguracja danych firmowych.
// Zmiana w jednym miejscu = zmiana na całej stronie.

export const siteConfig = {
  name: 'Hydraulik Zielonka',
  shortName: 'Hydraulik',
  tagline: 'Profesjonalne usługi hydrauliczne',

  // Kontakt — DO UZUPEŁNIENIA
  phone: '',        // np. '510 733 300'
  phoneTel: '',     // np. '+48510733300'
  email: '',        // np. 'kontakt@hydraulik-zielonka.pl'

  // Domena
  domain: 'hydraulik-zielonka.pl',
  url: 'https://hydraulik-zielonka.pl',

  // Liczby do sekcji statystyk
  successRate: 98,
  experienceYears: 15,
  clients: 500,

  // Social — DO UZUPEŁNIENIA
  social: {
    facebook: '',
    instagram: '',
  },

  // Główny obszar działania
  city: 'Zielonka',

  // Okolice z osobnymi podstronami
  mainAreas: ['Ząbki', 'Marki', 'Kobyłka', 'Wołomin'],

  // Pełny obszar dojazdu (sekcja Locations)
  allAreas: [
    'Zielonka',
    'Ząbki',
    'Marki',
    'Kobyłka',
    'Wołomin',
    'Rembertów',
    'Wesoła',
    'Radzymin',
    'Nieporęt',
  ],
} as const;

// Etykieta przycisku telefonu — gdy brak numeru, pokaż napis zastępczy.
export const phoneLabel = siteConfig.phone || 'Zadzwoń teraz';

export default siteConfig;
