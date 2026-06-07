# Hydraulik Zielonka

Strona firmowa Hydraulik Zielonka w Astro 5, zbudowana na szkielecie i-hydraulik.pl
(czysty CSS bez Tailwinda, jasna paleta kremowo-niebiesko-pomarańczowa).

## Uruchomienie
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # produkcja -> dist/
```

## Struktura
- `src/pages/index.astro` - strona główna (samodzielny dokument, wszystkie sekcje)
- `src/pages/hydraulik-*.astro` - podstrony lokalne: Ząbki, Marki, Kobyłka, Wołomin
- `src/styles/sections.css` - style sekcji (wspólne dla wszystkich stron)
- `src/styles/index-style.css` - style hero + makiety telefonu (strona główna)
- `src/styles/global.css` - style bazowe (dla layoutu/przyszłych stron)
- `src/layouts/Layout.astro` - layout pomocniczy

## DO UZUPEŁNIENIA
- Numer telefonu: pole `const phone = ''` w nagłówku KAŻDEGO pliku w `src/pages/`
  (index.astro oraz 4 podstrony). Wpisz np. `const phone = '500 600 700';`
- Schema LocalBusiness w `index.astro`: ocena i liczba opinii to wartości
  przykładowe - podmień na własne lub usuń blok `aggregateRating`.
- Ikony usług to emoji. Jeśli chcesz grafiki PNG, podmień w `index.astro`.
