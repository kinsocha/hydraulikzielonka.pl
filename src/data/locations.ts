// Dane podstron lokalnych.
// Każda miejscowość = osobny URL = osobna podstrona.
// Hydraulik Zielonka obsługuje Zielonkę i sąsiednie miejscowości powiatu wołomińskiego.

export interface LocationData {
  slug: string;        // URL np. "hydraulik-zabki" -> /hydraulik-zabki
  name: string;        // "Ząbki"
  fullName: string;    // "Hydraulik Ząbki"
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
  areas: string[];     // osiedla / części miejscowości
  streets: string[];   // obsługiwane ulice
  description: string;
  testimonials: Array<{ text: string; location: string }>;
  faq: Array<{ question: string; answer: string }>;
}

export const locations: LocationData[] = [
  {
    slug: 'hydraulik-zabki',
    name: 'Ząbki',
    fullName: 'Hydraulik Ząbki',
    metaTitle: 'Hydraulik Ząbki – usługi hydrauliczne i udrażnianie | Hydraulik Zielonka',
    metaDescription:
      'Hydraulik Ząbki – naprawa instalacji, udrażnianie kanalizacji, montaż armatury. Szybki dojazd, wycena przed pracą, pogotowie hydrauliczne.',
    heroIntro:
      'Dojeżdżamy do Ząbek przy awariach instalacji, zatkanych odpływach i wymianie armatury. Pracujemy w blokach, kamienicach i domach jednorodzinnych. Wystarczy telefon i krótki opis problemu.',
    areas: ['Centrum', 'Drewnica', 'osiedle przy Łodygowej', 'okolice Szpitalnej'],
    streets: [
      'Piłsudskiego',
      'Wojska Polskiego',
      '11 Listopada',
      'Szwoleżerów',
      'Batorego',
      'Powstańców',
      'Kościelna',
      'Orla',
      'Łodygowa',
      'Andersena',
      'Skorupki',
      'Szpitalna',
      'Maczka',
      'Drewnicka',
    ],
    description:
      'Ząbki to gęsta zabudowa mieszkaniowa tuż przy granicy z Warszawą. Sporo tu nowych bloków i kamienic, w których piony bywają mocno obciążone. Najczęściej jeździmy do zatkanych zlewów, prysznicy i toalet, ale równie często do drobnych awarii: cieknący zawór, przeciekający syfon, niesprawne podejście pod pralkę. Dobieramy metodę do problemu – sprężynę elektryczną do punktowych zatorów, ciśnieniowe płukanie do osadów na dłuższych odcinkach. Przy nawracających zatorach proponujemy inspekcję kamerą, żeby zobaczyć przyczynę, a nie tylko usunąć skutek.',
    testimonials: [
      { text: 'Zator w łazience usunięty w godzinę, a przyjechali szybko po telefonie. Polecam.', location: 'Ząbki, Centrum' },
      { text: 'Wymiana baterii i naprawa spłuczki przy okazji. Konkretnie, bez bałaganu.', location: 'Ząbki' },
    ],
    faq: [
      {
        question: 'Ile kosztuje hydraulik w Ząbkach?',
        answer:
          'Koszt zależy od rodzaju usługi i dostępu do instalacji. Drobne naprawy zaczynają się od kilkudziesięciu złotych, udrażnianie zlewu lub WC od ok. 150 zł. Orientacyjną cenę podajemy przez telefon, przed przyjazdem.',
      },
      {
        question: 'Jak szybko dojedziecie do Ząbek?',
        answer:
          'Ząbki sąsiadują z Zielonką, więc dojazd jest krótki. Najczęściej jesteśmy na miejscu tego samego dnia, a w pilnych awariach staramy się reagować priorytetowo.',
      },
      {
        question: 'Czy zajmujecie się awariami po godzinach?',
        answer:
          'Tak. W nagłych przypadkach – pękł wąż, leje się woda, cofa kanalizacja – jesteśmy dostępni również wieczorami i w weekendy. Zadzwoń i opisz sytuację.',
      },
      {
        question: 'Naprawiacie też instalacje w blokach?',
        answer:
          'Tak. Pracujemy w blokach, kamienicach i domach jednorodzinnych. W częściach wspólnych współpracujemy z administracją i wystawiamy fakturę VAT.',
      },
      {
        question: 'Co zrobić, zanim przyjedziecie do zatkanego odpływu?',
        answer:
          'Najlepiej nie wlewać kolejnych porcji środków chemicznych – potrafią utrudnić pracę i uszkodzić rury. Warto zakręcić dopływ wody do danego przyboru i zostawić resztę nam.',
      },
    ],
  },
  {
    slug: 'hydraulik-marki',
    name: 'Marki',
    fullName: 'Hydraulik Marki',
    metaTitle: 'Hydraulik Marki – naprawy, udrażnianie, montaż | Hydraulik Zielonka',
    metaDescription:
      'Hydraulik Marki – udrażnianie kanalizacji, naprawa instalacji, wymiana armatury, pogotowie. Domy jednorodzinne, przyłącza, szybki dojazd.',
    heroIntro:
      'W Markach przeważa zabudowa jednorodzinna, dlatego często jeździmy do przyłączy, studzienek i instalacji w domach. Udrażniamy, naprawiamy i montujemy. Cenę podajemy zawsze przed przyjazdem.',
    areas: ['Centrum', 'Pustelnik', 'Struga', 'okolice Alei Piłsudskiego'],
    streets: [
      'Al. Marszałka Piłsudskiego',
      'Fabryczna',
      'Okólna',
      'Lisa Kuli',
      'Sosnowa',
      'Legionowa',
      'Słoneczna',
      'Bandurskiego',
      'Pomnikowa',
      'Spacerowa',
      'Kościuszki',
      'Zygmuntowska',
      'Duża',
      'Wczasowa',
    ],
    description:
      'Marki to głównie domy jednorodzinne, działki i mniejsze budynki wielorodzinne. To zmienia charakter zleceń. Częściej niż w bloku spotykamy tu zatory na przyłączach, problemy ze studzienkami i rurami zewnętrznymi. Na długich odcinkach sprężyna bywa za krótka – wtedy sprawdza się płukanie ciśnieniowe, które wypłukuje osady i piasek po opadach. Robimy też klasyczną robotę hydrauliczną: wymianę zaworów, naprawę przecieków, montaż armatury i podejść pod sprzęty AGD. Przy korzeniach wrastających w stare przyłącza pomaga inspekcja kamerą – pokazuje dokładnie, gdzie leży problem.',
    testimonials: [
      { text: 'Awaria w weekend, woda spod pralki. Odebrał telefon i przyjechał. Uratował mieszkanie, dziękuję!', location: 'Marki' },
      { text: 'Czyszczenie przyłącza do domu zrobione bez kopania. Sprawnie i uczciwie.', location: 'Marki, Pustelnik' },
    ],
    faq: [
      {
        question: 'Czyścicie przyłącza i rury zewnętrzne w domach w Markach?',
        answer:
          'Tak. Przy zabudowie jednorodzinnej to częste zlecenie. Czyścimy przyłącza do kanalizacji miejskiej i do szamba, studzienki oraz rury deszczowe metodą ciśnieniową.',
      },
      {
        question: 'Sprężyna nie dała rady – co dalej?',
        answer:
          'Na długich odcinkach rur zewnętrznych sprężyna elektryczna bywa za krótka. Wtedy używamy płukania hydrodynamicznego, które rozbija i wypłukuje osady na całej długości przewodu.',
      },
      {
        question: 'Jak szybko przyjedziecie do Marek?',
        answer:
          'Marki leżą blisko Zielonki, więc dojeżdżamy sprawnie – zwykle tego samego dnia. W pilnych awariach reagujemy priorytetowo.',
      },
      {
        question: 'Wystawiacie fakturę VAT?',
        answer:
          'Tak, dla klientów indywidualnych i firm. Możliwe są też cykliczne przeglądy instalacji, na przykład w wynajmowanych domach.',
      },
      {
        question: 'Robicie drobne naprawy, czy tylko duże zlecenia?',
        answer:
          'Robimy jedno i drugie. Cieknący kran, wymiana syfonu, podłączenie zmywarki – takie prace również wykonujemy podczas jednej wizyty.',
      },
    ],
  },
  {
    slug: 'hydraulik-kobylka',
    name: 'Kobyłka',
    fullName: 'Hydraulik Kobyłka',
    metaTitle: 'Hydraulik Kobyłka – usługi hydrauliczne i udrażnianie | Hydraulik Zielonka',
    metaDescription:
      'Hydraulik Kobyłka – naprawa i montaż instalacji, udrażnianie kanalizacji, inspekcja kamerą. Szybki dojazd, wycena przed pracą, faktura VAT.',
    heroIntro:
      'Do Kobyłki dojeżdżamy przy awariach, zatorach i pracach instalacyjnych w domach oraz blokach. Naprawiamy przecieki, wymieniamy armaturę i udrażniamy rury. Najpierw telefon, potem wycena.',
    areas: ['Centrum', 'Maciołki', 'Stefanówka', 'okolice dworca'],
    streets: [
      'Załuskiego',
      'Napoleona',
      'Jana Pawła II',
      'Ceglana',
      'Nadarzyńska',
      'Warszawska',
      'Wyzwolenia',
      'Poniatowskiego',
      'Sikorskiego',
      'Kościuszki',
      'Leśna',
      'Dworcowa',
      'Orszagha',
      'Załęże',
    ],
    description:
      'Kobyłka łączy starszą zabudowę z nowymi osiedlami domów i szeregowców. W starszych budynkach problemem bywa wiek rur i osady narastające latami, w nowszych – intensywna eksploatacja instalacji. Pomagamy przy zatkanych zlewach, brodzikach i toaletach, naprawiamy nieszczelne złącza i wymieniamy zużytą armaturę. Tam, gdzie zator wraca, robimy inspekcję kamerą i pokazujemy, co dzieje się w rurze. Pracujemy bez rozkuwania ścian tam, gdzie to możliwe. Dobieramy metodę do instalacji, a nie odwrotnie.',
    testimonials: [
      { text: 'Pion w bloku udrożniony od ręki, sprężyną i ciśnieniem. Porządna robota, polecam wspólnocie.', location: 'Kobyłka' },
      { text: 'Naprawa przeciekającej rury pod zlewem. Szybko, czysto, bez kombinowania.', location: 'Kobyłka, Centrum' },
    ],
    faq: [
      {
        question: 'Ile kosztuje udrażnianie w Kobyłce?',
        answer:
          'Udrażnianie zlewu lub WC zaczyna się zwykle od ok. 150 zł, czyszczenie pionu od ok. 300 zł. Cena zależy od dostępu do rur i skali problemu – podajemy ją przed przyjazdem.',
      },
      {
        question: 'Macie sprzęt do starych instalacji?',
        answer:
          'Tak. W starszych budynkach w Kobyłce trafiają się rury żeliwne i ceramiczne. Dobieramy do nich ciśnienie ostrożnie, żeby skutecznie wyczyścić rurę i jej nie uszkodzić.',
      },
      {
        question: 'Czy robicie inspekcję kamerą?',
        answer:
          'Tak. Inspekcja kamerą przydaje się przy nawracających zatorach i przed remontem. Pozwala zlokalizować pęknięcia, załamania i wrastające korzenie.',
      },
      {
        question: 'Jak szybko dojeżdżacie do Kobyłki?',
        answer:
          'Najczęściej tego samego dnia. W nagłych awariach – cofająca się kanalizacja, zalanie – staramy się przyjechać priorytetowo.',
      },
      {
        question: 'Czy wystawiacie fakturę dla wspólnoty?',
        answer:
          'Tak. Współpracujemy z administracjami i wspólnotami, wystawiamy faktury VAT i możemy umówić się na okresową konserwację pionów.',
      },
    ],
  },
  {
    slug: 'hydraulik-wolomin',
    name: 'Wołomin',
    fullName: 'Hydraulik Wołomin',
    metaTitle: 'Hydraulik Wołomin – naprawy, montaż, udrażnianie | Hydraulik Zielonka',
    metaDescription:
      'Hydraulik Wołomin – udrażnianie kanalizacji, naprawa instalacji, wymiana armatury, pogotowie hydrauliczne. Szybki dojazd, wycena przed pracą.',
    heroIntro:
      'W Wołominie obsługujemy bloki, kamienice, domy jednorodzinne i lokale usługowe. Udrażniamy, naprawiamy i montujemy. Krótki opis problemu przez telefon wystarczy, żeby podać orientacyjną cenę.',
    areas: ['Centrum', 'Sławek', 'Lipinki', 'okolice Alei Niepodległości'],
    streets: [
      'Legionów',
      '1 Maja',
      'Kościelna',
      'Wileńska',
      'Lipińska',
      'Sasina',
      'Geodetów',
      'Armii Krajowej',
      'Aleja Niepodległości',
      'Sikorskiego',
      'Warszawska',
      'Ogrodowa',
      'Moniuszki',
      'Duczkowska',
    ],
    description:
      'Wołomin to największa miejscowość w okolicy i bardzo zróżnicowana zabudowa. Bloki z wielkiej płyty, kamienice w centrum, osiedla domów na obrzeżach. Każdy typ budynku to inne instalacje i inne typowe usterki. W blokach najczęściej udrażniamy piony i podejścia kuchenne, w domach – przyłącza i rury zewnętrzne. Robimy też pełen zakres prac hydraulicznych: naprawę i wymianę zaworów, montaż umywalek, toalet i baterii, podłączenia pralek i zmywarek. Przy poważniejszych awariach reagujemy szybko, bo zalanie potrafi narobić więcej szkody niż sama usterka.',
    testimonials: [
      { text: 'Punktualnie, czysto i bez niespodzianek w rachunku. Polecam.', location: 'Wołomin' },
      { text: 'Zatkany pion w bloku, problem ciągnął się tygodniami. Tym razem zrobione porządnie.', location: 'Wołomin, Centrum' },
    ],
    faq: [
      {
        question: 'Jakie usługi hydrauliczne wykonujecie w Wołominie?',
        answer:
          'Pełen zakres: udrażnianie kanalizacji, naprawę i wymianę instalacji, montaż armatury, podłączenia AGD, inspekcję kamerą oraz pogotowie przy awariach.',
      },
      {
        question: 'Jak szybko przyjedziecie do Wołomina?',
        answer:
          'Wołomin jest nieco dalej niż Ząbki czy Marki, ale nadal w naszym standardowym obszarze. Zwykle dojeżdżamy tego samego dnia, a w pilnych przypadkach priorytetowo.',
      },
      {
        question: 'Udrażniacie piony w blokach z wielkiej płyty?',
        answer:
          'Tak. To częste zlecenie w Wołominie. Łączymy sprężynę elektryczną z płukaniem ciśnieniowym, żeby usunąć korek i wypłukać osady z całego odcinka.',
      },
      {
        question: 'Naprawiacie awarie po godzinach pracy?',
        answer:
          'Tak. Przy pilnych awariach – pęknięta rura, zalanie, cofająca się kanalizacja – jesteśmy dostępni również wieczorami i w weekendy.',
      },
      {
        question: 'Czy podajecie cenę przed przyjazdem?',
        answer:
          'Tak. Po krótkim opisie problemu podajemy orientacyjny koszt jeszcze przez telefon. Bez ukrytych opłat, możliwa faktura VAT.',
      },
    ],
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug === slug);
}

export default locations;
