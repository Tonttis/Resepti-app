# 🍳 RecipeHub

Moderni reseptienjakosovellus, joka on rakennettu **SvelteKitillä** ja sisältää käyttäjäautentikoinnin, reseptien hallinnan, arvostelut, kommentit ja hakutoiminnallisuuden.

##  Ominaisuudet

* **Käyttäjäautentikointi** – Rekisteröidy, kirjaudu sisään ja ulos turvallisilla sessioilla
* **Reseptien hallinta** – Luo, lue, muokkaa ja poista reseptejä
* **Arvostelujärjestelmä** – Arvostele reseptejä 1–5 tähdellä, keskiarvo lasketaan automaattisesti
* **Kommentit** – Lisää kommentteja resepteihin käyttäjätiedoin
* **Haku** – Etsi reseptejä ainesosien tai nimen perusteella
* **Responsiivinen ulkoasu** – Tyylikäs käyttöliittymä, joka toimii kaikilla laitteilla
* **Moderni UI** – Selkeä käyttöliittymä oranssilla teemalla

##  Esivaatimukset

* Node.js 20.19+ tai 22.12+
* Bun (suositeltu) tai npm
* MongoDB Atlas -tili

##  Asennus

### 1. Asenna Node.js (Docker-esimerkki)

```bash
# Docker has specific installation instructions for each OS
# Official guide: https://docker.com/get-started/

# Pull the Node.js Docker image
docker pull node:24-alpine

# Create a Node.js container and start a shell session
docker run -it --rm --entrypoint sh node:24-alpine

# Verify versions
node -v  # should print "v24.13.1"
npm -v   # should print "11.8.0"
```

### 2. Luo MongoDB Atlas -tili

Tilin luonti onnistuu täällä: [https://www.mongodb.com/](https://www.mongodb.com/)

### 3. Lataa projekti

Lataa ZIP-tiedosto GitHubista "<> Code" -napin alta.

### 4. Asenna riippuvuudet

```bash
bun install
# tai
npm install
```

### 5. Konfiguroi MongoDB

* Hae yhteysmerkkijonosi Atlasista
* Päivitä tiedosto `.env` projektin juureen:

```env
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/database"
```

### 6. Alusta tietokanta

```bash
bun run prisma:generate
bun run prisma:push
```

### 7. Käynnistä kehityspalvelin

```bash
bun run dev
```

### 8. Avaa selaimessa

[http://localhost:3000](http://localhost:3000)

---

##  Kehitys

### Saatavilla olevat komennot

```bash
# Käynnistä kehityspalvelin
bun run dev

# Rakenna tuotantoa varten
bun run build

# Esikatsele tuotantorakennetta
bun run preview

# Generoi Prisma-asiakas
bun run prisma:generate

# Pushaa tietokantakaavion muutokset
bun run prisma:push

# Tyyppitarkistus
bun run check
```

### Projektirakenne

```txt
Resepti-app/
├── prisma/
│   └── schema.prisma           # Tietokantakaavio
├── src/
│   ├── routes/
│   │   ├── +page.svelte        # Reseptien pääsyöte
│   │   ├── +layout.svelte      # Sovelluksen layout
│   │   └── api/                # API-päätepisteet
│   │       ├── auth/           # Autentikointi
│   │       └── recipes/        # Reseptien hallinta
│   ├── lib/
│   │   ├── db.js               # Prisma-asiakas
│   │   └── password.js         # Salasanojen hashaus
│   ├── app.html                # HTML-pohja
│   └── app.css                 # Globaalit tyylit
└── package.json                # Riippuvuudet
```

---

##  Tietokantakaavio

### User

* `id` – Uniikki tunniste (MongoDB ObjectId)
* `email` – Sähköposti (uniikki)
* `name` – Näyttönimi (valinnainen)
* `password` – Hashattu salasana
* `createdAt`, `updatedAt` – Aikaleimat

### Recipe

* `id` – Uniikki tunniste
* `title` – Reseptin otsikko
* `description` – Lyhyt kuvaus
* `ingredients` – Ainesosat (monirivinen merkkijono)
* `instructions` – Valmistusohjeet
* `cookTime` – Valmistusaika minuutteina
* `servings` – Annosmäärä
* `imageUrl` – Valinnainen kuvan URL
* `authorId` – Reseptin tekijä (viittaus User-malliin)
* `createdAt`, `updatedAt` – Aikaleimat

### Rating

* `id` – Uniikki tunniste
* `rating` – Arvosana (1–5)
* `userId` – Arvioinnin tehnyt käyttäjä
* `recipeId` – Arvioitu resepti
* Uniikki ehto kentille `[userId, recipeId]`

### Comment

* `id` – Uniikki tunniste
* `text` – Kommentin sisältö
* `userId` – Kommentin kirjoittaja
* `recipeId` – Kommentoitu resepti
* `createdAt`, `updatedAt` – Aikaleimat

---

##  Teknologiapino

* **Framework**: [SvelteKit](https://kit.svelte.dev/) 2.50
* **UI-kirjasto**: [Svelte](https://svelte.dev/) 5.51
* **Build-työkalu**: [Vite](https://vitejs.dev/) 7.3
* **Tietokanta**: [MongoDB](https://www.mongodb.com/) + [Prisma](https://www.prisma.io/)
* **Autentikointi**: Evästepohjaiset sessiot (HTTP-only)
* **Salasanan hashaus**: bcrypt
* **Kieli**: JavaScript (ESM)
* **Paketinhallinta**: Bun

---

##  Julkaisu

```bash
bun run build
bun run start
```

Tämä luo `.svelte-kit`-hakemiston optimoiduilla asseteilla.

---
