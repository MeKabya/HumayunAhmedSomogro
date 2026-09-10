/* =========================================================
   Humayun Ahmed Somogro — EASY CUSTOMIZATION AREA
   Edit the values below to rebrand or reconfigure the site.
   ========================================================= */

const SITE_NAME = "Humayun Ahmed Somogro";
const CREATOR_NAME = "Kabya Saha";

// ==== REPLACE THIS with your own QR code image URL ====
const QR_CODE_URL = "PASTE_QR_CODE_IMAGE_URL_HERE";

/* =========================================================
   BOOK DATABASE — SINGLE SOURCE OF TRUTH
   ---------------------------------------------------------
   EDIT BOOK INFORMATION HERE.
   Everything on the website (cards, search, categories,
   counts, favorites, recently viewed) is generated
   automatically from this array. You never need to touch
   the HTML, search code, or category code.

   Field guide:
     id        -> unique number, never repeat
     title     -> BOOK NAME (shown bold on the card)
     author    -> AUTHOR NAME (defaults to "Humayun Ahmed")
     pages     -> PAGE COUNT (number, no quotes)
     category  -> CATEGORY (drives category filters + counts)
     image     -> COVER IMAGE URL — replace PASTE_..._HERE
     readLink  -> "READ NOW" DESTINATION — replace PASTE_..._HERE
   ========================================================= */
const books = [
  { id: 1,  title: "Himu",                          author: "Humayun Ahmed", pages: 176, category: "Fiction",   image: "PASTE_BOOK_COVER_IMAGE_URL_01_HERE", readLink: "PASTE_READ_NOW_LINK_01_HERE" },
  { id: 2,  title: "Moyurakkhi",                     author: "Humayun Ahmed", pages: 160, category: "Fiction",   image: "PASTE_BOOK_COVER_IMAGE_URL_02_HERE", readLink: "PASTE_READ_NOW_LINK_02_HERE" },
  { id: 3,  title: "Nondito Noroke",                 author: "Humayun Ahmed", pages: 132, category: "Fiction",   image: "PASTE_BOOK_COVER_IMAGE_URL_03_HERE", readLink: "PASTE_READ_NOW_LINK_03_HERE" },
  { id: 4,  title: "Elebele",                        author: "Humayun Ahmed", pages: 144, category: "Fiction",   image: "PASTE_BOOK_COVER_IMAGE_URL_04_HERE", readLink: "PASTE_READ_NOW_LINK_04_HERE" },
  { id: 5,  title: "Debi",                           author: "Humayun Ahmed", pages: 208, category: "Horror",    image: "PASTE_BOOK_COVER_IMAGE_URL_05_HERE", readLink: "PASTE_READ_NOW_LINK_05_HERE" },
  { id: 6,  title: "Nishithini",                     author: "Humayun Ahmed", pages: 192, category: "Horror",    image: "PASTE_BOOK_COVER_IMAGE_URL_06_HERE", readLink: "PASTE_READ_NOW_LINK_06_HERE" },
  { id: 7,  title: "Misir Ali Omnibus",               author: "Humayun Ahmed", pages: 384, category: "Mystery",   image: "PASTE_BOOK_COVER_IMAGE_URL_07_HERE", readLink: "PASTE_READ_NOW_LINK_07_HERE" },
  { id: 8,  title: "Nishad",                         author: "Humayun Ahmed", pages: 168, category: "Thriller",  image: "PASTE_BOOK_COVER_IMAGE_URL_08_HERE", readLink: "PASTE_READ_NOW_LINK_08_HERE" },
  { id: 9,  title: "Bhoy",                           author: "Humayun Ahmed", pages: 152, category: "Thriller",  image: "PASTE_BOOK_COVER_IMAGE_URL_09_HERE", readLink: "PASTE_READ_NOW_LINK_09_HERE" },
  { id: 10, title: "Shuvro",                         author: "Humayun Ahmed", pages: 176, category: "Romance",   image: "PASTE_BOOK_COVER_IMAGE_URL_10_HERE", readLink: "PASTE_READ_NOW_LINK_10_HERE" },
  { id: 11, title: "Tomake",                         author: "Humayun Ahmed", pages: 148, category: "Romance",   image: "PASTE_BOOK_COVER_IMAGE_URL_11_HERE", readLink: "PASTE_READ_NOW_LINK_11_HERE" },
  { id: 12, title: "Ei Shubhoshondhay",                author: "Humayun Ahmed", pages: 156, category: "Romance",   image: "PASTE_BOOK_COVER_IMAGE_URL_12_HERE", readLink: "PASTE_READ_NOW_LINK_12_HERE" },
  { id: 13, title: "Kobi",                           author: "Humayun Ahmed", pages: 224, category: "Drama",     image: "PASTE_BOOK_COVER_IMAGE_URL_13_HERE", readLink: "PASTE_READ_NOW_LINK_13_HERE" },
  { id: 14, title: "Shonkhonil Karagar",               author: "Humayun Ahmed", pages: 136, category: "Drama",     image: "PASTE_BOOK_COVER_IMAGE_URL_14_HERE", readLink: "PASTE_READ_NOW_LINK_14_HERE" },
  { id: 15, title: "Aguner Poroshmoni",                author: "Humayun Ahmed", pages: 168, category: "Drama",     image: "PASTE_BOOK_COVER_IMAGE_URL_15_HERE", readLink: "PASTE_READ_NOW_LINK_15_HERE" },
  { id: 16, title: "Bohubrihi",                       author: "Humayun Ahmed", pages: 144, category: "Adventure", image: "PASTE_BOOK_COVER_IMAGE_URL_16_HERE", readLink: "PASTE_READ_NOW_LINK_16_HERE" },
  { id: 17, title: "Rupa",                           author: "Humayun Ahmed", pages: 200, category: "Adventure", image: "PASTE_BOOK_COVER_IMAGE_URL_17_HERE", readLink: "PASTE_READ_NOW_LINK_17_HERE" },
  { id: 18, title: "Anil Bagchir Ekdin",               author: "Humayun Ahmed", pages: 112, category: "Sci-Fi",    image: "PASTE_BOOK_COVER_IMAGE_URL_18_HERE", readLink: "PASTE_READ_NOW_LINK_18_HERE" },
  { id: 19, title: "Tandra Bilash",                   author: "Humayun Ahmed", pages: 184, category: "Fantasy",   image: "PASTE_BOOK_COVER_IMAGE_URL_19_HERE", readLink: "PASTE_READ_NOW_LINK_19_HERE" },
  { id: 20, title: "Chander Alo Rate Ekhane Eso",       author: "Humayun Ahmed", pages: 196, category: "Fantasy",   image: "PASTE_BOOK_COVER_IMAGE_URL_20_HERE", readLink: "PASTE_READ_NOW_LINK_20_HERE" },
];

/* =========================================================
   UPCOMING BOOKS — edit / add as needed
   ========================================================= */
const upcomingBooks = [
  { id: 101, title: "Megher Opare Megh", author: "Humayun Ahmed", releaseDate: "Dec 2026", image: "PASTE_UPCOMING_COVER_URL_01_HERE" },
  { id: 102, title: "Shesh Bikeler Alo",  author: "Humayun Ahmed", releaseDate: "Jan 2027", image: "PASTE_UPCOMING_COVER_URL_02_HERE" },
  { id: 103, title: "Nirjon Prohor",      author: "Humayun Ahmed", releaseDate: "Mar 2027", image: "PASTE_UPCOMING_COVER_URL_03_HERE" },
  { id: 104, title: "Brishtir Nupur",     author: "Humayun Ahmed", releaseDate: "May 2027", image: "PASTE_UPCOMING_COVER_URL_04_HERE" },
];

/* =========================================================
   SAMPLE REVIEWS (seed data — shown alongside user reviews)
   ========================================================= */
const seedReviews = [
  { name: "Ayesha Rahman", rating: 5, text: "Himu made me fall in love with reading all over again. A timeless character.", date: "2026-06-12" },
  { name: "Tanvir Hasan",  rating: 5, text: "The Misir Ali stories are brilliantly logical yet deeply human. Highly recommend.", date: "2026-07-03" },
  { name: "Nusrat Jahan",  rating: 4, text: "Debi kept me up at night — genuinely unsettling in the best way.", date: "2026-07-20" },
];

/* =========================================================================
   END OF CUSTOMIZATION AREA — core application logic below
   ========================================================================= */

(function () {
  "use strict";

  /* ---------------- State ---------------- */
  const state = {
    searchTerm: "",
    activeCategory: "All",
    showFavoritesOnly: false,
    favorites: loadFromStorage("boighor_favorites", []),
    recentlyViewed: loadFromStorage("boighor_recent", []),
    reviews: loadFromStorage("boighor_reviews", []),
    theme: (function () {
      try {
        return localStorage.getItem("boighor_theme") || "light";
      } catch (e) {
        return "light";
      }
    })(),
    selectedStar: 5,
  };

  /* ---------------- Storage helpers ---------------- */
  function loadFromStorage(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }
  function saveToStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      /* storage unavailable — fail silently */
    }
  }

  /* ---------------- DOM refs ---------------- */
  const bookContainer = document.getElementById("bookContainer");
  const emptyState = document.getElementById("emptyState");
  const bookCountEl = document.getElementById("bookCount");
  const searchMetaEl = document.getElementById("searchMeta");
  const searchInput = document.getElementById("searchInput");
  const searchClear = document.getElementById("searchClear");
  const categoryList = document.getElementById("categoryList");
  const favoritesToggle = document.getElementById("favoritesToggle");
  const clearSearchBtn = document.getElementById("clearSearchBtn");
  const footerCategories = document.getElementById("footerCategories");
  const recentSection = document.getElementById("recentSection");
  const recentRow = document.getElementById("recentRow");

  /* =========================================================
     SEARCH — automatically derived from book fields.
     No manual keyword lists required.
     ========================================================= */
  function normalize(str) {
    return String(str)
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ");
  }

  function matchesSearch(book, query) {
    const q = normalize(query);
    if (!q) return true;
    const searchableText = normalize(
      [book.title, book.author, book.category, book.pages].join(" ")
    );
    return searchableText.includes(q);
  }

  function matchesCategory(book, category) {
    return category === "All" || book.category === category;
  }

  /* =========================================================
     DYNAMIC FILTER PIPELINE
     ALL BOOKS -> SEARCH FILTER -> CATEGORY FILTER -> FAVORITES FILTER
     ========================================================= */
  function getFilteredBooks() {
    return books.filter((book) => {
      if (!matchesSearch(book, state.searchTerm)) return false;
      if (!matchesCategory(book, state.activeCategory)) return false;
      if (state.showFavoritesOnly && !state.favorites.includes(book.id)) return false;
      return true;
    });
  }

  /* =========================================================
     CATEGORY LIST — derived automatically from books array
     ========================================================= */
  function getCategoryCounts() {
    const counts = {};
    books.forEach((book) => {
      counts[book.category] = (counts[book.category] || 0) + 1;
    });
    return counts;
  }

  function renderCategories() {
    const counts = getCategoryCounts();
    const categories = ["All", ...Object.keys(counts).sort()];

    categoryList.innerHTML = "";
    categories.forEach((cat) => {
      const btn = document.createElement("button");
      btn.className = "category-chip" + (state.activeCategory === cat ? " active" : "");
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", state.activeCategory === cat ? "true" : "false");
      btn.dataset.category = cat;

      const label = document.createElement("span");
      label.textContent = cat;
      btn.appendChild(label);

      const countBadge = document.createElement("span");
      countBadge.className = "count";
      countBadge.textContent = cat === "All" ? books.length : counts[cat];
      btn.appendChild(countBadge);

      btn.addEventListener("click", () => {
        state.activeCategory = cat;
        renderCategories();
        renderBooks();
      });

      categoryList.appendChild(btn);
    });

    // Footer categories (read-only chips)
    if (footerCategories) {
      footerCategories.innerHTML = "";
      Object.keys(counts)
        .sort()
        .forEach((cat) => {
          const span = document.createElement("span");
          span.textContent = `${cat} (${counts[cat]})`;
          footerCategories.appendChild(span);
        });
    }
  }

  /* =========================================================
     BOOK CARD RENDERING (safe DOM APIs, no innerHTML injection
     of untrusted data)
     ========================================================= */
  function createBookCard(book) {
    const card = document.createElement("article");
    card.className = "book-card";
    card.dataset.id = book.id;

    // ---- Cover ----
    const cover = document.createElement("div");
    cover.className = "book-cover";

    const img = document.createElement("img");
    img.loading = "lazy";
    img.alt = `${book.title} book cover`;
    img.src = book.image;

    const fallback = document.createElement("div");
    fallback.className = "cover-fallback";
    fallback.hidden = true;
    fallback.innerHTML = `<span class="fallback-text">NO COVER<br>AVAILABLE</span>`;

    img.addEventListener("error", () => {
      img.hidden = true;
      fallback.hidden = false;
    });
    if (!book.image || book.image.startsWith("PASTE_")) {
      img.hidden = true;
      fallback.hidden = false;
    }

    cover.appendChild(img);
    cover.appendChild(fallback);

    // ---- Info ----
    const info = document.createElement("div");
    info.className = "book-info";

    const titleRow = document.createElement("div");
    titleRow.className = "book-title-row";

    const title = document.createElement("h3");
    title.className = "book-title";
    title.textContent = book.title;

    const favBtn = document.createElement("button");
    favBtn.className = "fav-btn" + (state.favorites.includes(book.id) ? " active" : "");
    favBtn.setAttribute("aria-label", "Toggle favorite for " + book.title);
    favBtn.setAttribute("aria-pressed", state.favorites.includes(book.id) ? "true" : "false");
    favBtn.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 21s-6.7-4.35-9.3-8.1C1 10.1 1.4 6.6 4.2 4.9c2.3-1.4 5-0.7 6.6 1.3.4.5.8 1 1.2 1.6.4-.6.8-1.1 1.2-1.6 1.6-2 4.3-2.7 6.6-1.3 2.8 1.7 3.2 5.2 1.5 8-2.6 3.75-9.3 8.1-9.3 8.1Z"></path></svg>`;
    favBtn.addEventListener("click", () => toggleFavorite(book.id, favBtn));

    titleRow.appendChild(title);
    titleRow.appendChild(favBtn);

    const categoryBadge = document.createElement("span");
    categoryBadge.className = "book-category-badge";
    categoryBadge.textContent = book.category;

    const meta = document.createElement("div");
    meta.className = "book-meta";
    meta.innerHTML = `
      <span>Pages: <strong>${book.pages}</strong></span>
      <span>Author: <strong>${escapeHtml(book.author)}</strong></span>
    `;

    const readNow = document.createElement("a");
    readNow.className = "read-now";
    readNow.href = book.readLink && !book.readLink.startsWith("PASTE_") ? book.readLink : "#";
    readNow.target = "_blank";
    readNow.rel = "noopener noreferrer";
    readNow.innerHTML = `READ NOW <span aria-hidden="true">&rarr;</span>`;
    readNow.addEventListener("click", (e) => {
      if (!book.readLink || book.readLink.startsWith("PASTE_")) {
        e.preventDefault();
      }
      addToRecentlyViewed(book.id);
    });

    info.appendChild(titleRow);
    info.appendChild(categoryBadge);
    info.appendChild(meta);
    info.appendChild(readNow);

    card.appendChild(cover);
    card.appendChild(info);

    return card;
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  /* =========================================================
     RENDER BOOKS (main list)
     ========================================================= */
  let revealObserver;

  function renderBooks() {
    const filtered = getFilteredBooks();

    bookContainer.innerHTML = "";

    if (filtered.length === 0) {
      emptyState.hidden = false;
    } else {
      emptyState.hidden = true;
      const fragment = document.createDocumentFragment();
      filtered.forEach((book) => fragment.appendChild(createBookCard(book)));
      bookContainer.appendChild(fragment);
    }

    updateBookCount(filtered.length);
    observeRevealCards();
  }

  function updateBookCount(filteredCount) {
    // Total count derived automatically from books.length
    bookCountEl.textContent = `${books.length} STORIES TO DISCOVER`;

    if (state.searchTerm || state.activeCategory !== "All" || state.showFavoritesOnly) {
      searchMetaEl.textContent = `${filteredCount} book${filteredCount === 1 ? "" : "s"} found`;
    } else {
      searchMetaEl.textContent = "";
    }
  }

  function observeRevealCards() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".book-card").forEach((c) => c.classList.add("in-view"));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // staggered entrance
              const delay = Array.from(bookContainer.children).indexOf(entry.target) * 60;
              setTimeout(() => entry.target.classList.add("in-view"), delay);
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
    }
    document.querySelectorAll(".book-card:not(.in-view)").forEach((card) => revealObserver.observe(card));
  }

  /* =========================================================
     SEARCH HANDLING
     ========================================================= */
  function handleSearch() {
    state.searchTerm = searchInput.value;
    searchClear.hidden = state.searchTerm.length === 0;
    renderBooks();
  }

  function clearSearch() {
    state.searchTerm = "";
    searchInput.value = "";
    searchClear.hidden = true;
    renderBooks();
    searchInput.focus();
  }

  /* =========================================================
     FAVORITES
     ========================================================= */
  function loadFavorites() {
    state.favorites = loadFromStorage("boighor_favorites", []);
  }
  function saveFavorites() {
    saveToStorage("boighor_favorites", state.favorites);
  }

  function toggleFavorite(id, btnEl) {
    const idx = state.favorites.indexOf(id);
    if (idx === -1) {
      state.favorites.push(id);
    } else {
      state.favorites.splice(idx, 1);
    }
    saveFavorites();

    if (btnEl) {
      btnEl.classList.toggle("active", state.favorites.includes(id));
      btnEl.setAttribute("aria-pressed", state.favorites.includes(id) ? "true" : "false");
      btnEl.classList.remove("pop");
      // force reflow to restart animation
      void btnEl.offsetWidth;
      btnEl.classList.add("pop");
    }

    if (state.showFavoritesOnly) renderBooks();
  }

  function toggleFavoritesFilter() {
    state.showFavoritesOnly = !state.showFavoritesOnly;
    favoritesToggle.classList.toggle("active", state.showFavoritesOnly);
    favoritesToggle.setAttribute("aria-pressed", state.showFavoritesOnly ? "true" : "false");
    renderBooks();
  }

  /* =========================================================
     RECENTLY VIEWED
     ========================================================= */
  function addToRecentlyViewed(id) {
    state.recentlyViewed = state.recentlyViewed.filter((existingId) => existingId !== id);
    state.recentlyViewed.unshift(id);
    state.recentlyViewed = state.recentlyViewed.slice(0, 5);
    saveToStorage("boighor_recent", state.recentlyViewed);
    renderRecentlyViewed();
  }

  function renderRecentlyViewed() {
    const recentBooks = state.recentlyViewed
      .map((id) => books.find((b) => b.id === id))
      .filter(Boolean);

    if (recentBooks.length === 0) {
      recentSection.hidden = true;
      return;
    }

    recentSection.hidden = false;
    recentRow.innerHTML = "";
    recentBooks.forEach((book) => {
      const card = document.createElement("div");
      card.className = "recent-card";
      card.tabIndex = 0;
      card.setAttribute("role", "link");
      card.setAttribute("aria-label", "Open " + book.title);

      const coverWrap = document.createElement("div");
      coverWrap.className = "recent-cover";
      const img = document.createElement("img");
      img.loading = "lazy";
      img.alt = book.title + " cover";
      img.src = book.image;
      img.addEventListener("error", () => {
        img.style.display = "none";
        coverWrap.style.display = "flex";
        coverWrap.style.alignItems = "center";
        coverWrap.style.justifyContent = "center";
        coverWrap.textContent = "No Cover";
        coverWrap.style.fontWeight = "600";
        coverWrap.style.color = "var(--muted)";
        coverWrap.style.fontSize = ".75rem";
      });
      if (!book.image || book.image.startsWith("PASTE_")) {
        img.dispatchEvent(new Event("error"));
      }
      coverWrap.appendChild(img);

      const titleEl = document.createElement("p");
      titleEl.className = "recent-title";
      titleEl.textContent = book.title;

      card.appendChild(coverWrap);
      card.appendChild(titleEl);

      const goToBook = () => {
        const el = bookContainer.querySelector(`[data-id="${book.id}"]`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.style.transition = "box-shadow .3s ease";
          el.style.boxShadow = "0 0 0 3px var(--accent)";
          setTimeout(() => (el.style.boxShadow = ""), 1200);
        } else {
          document.getElementById("explore").scrollIntoView({ behavior: "smooth" });
        }
      };
      card.addEventListener("click", goToBook);
      card.addEventListener("keypress", (e) => {
        if (e.key === "Enter") goToBook();
      });

      recentRow.appendChild(card);
    });
  }

  /* =========================================================
     THEME (DAY / NIGHT)
     ========================================================= */
  const themeToggle = document.getElementById("themeToggle");
  const mobileThemeToggle = document.getElementById("mobileThemeToggle");
  const mobileThemeLabel = document.getElementById("mobileThemeLabel");

  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("boighor_theme", theme);
    } catch (e) {
      /* storage unavailable — fail silently */
    }
    themeToggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    if (mobileThemeLabel) {
      mobileThemeLabel.textContent = theme === "dark" ? "Switch to Day Mode" : "Switch to Night Mode";
    }
  }

  function toggleTheme() {
    applyTheme(state.theme === "dark" ? "light" : "dark");
  }

  /* =========================================================
     HEADER / NAV
     ========================================================= */
  const siteHeader = document.getElementById("siteHeader");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-menu nav a");
  const sections = ["home", "reviews", "upcoming", "credits"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  function updateActiveNav() {
    let currentId = "home";
    const scrollPos = window.scrollY + 140;
    sections.forEach((sec) => {
      if (sec.offsetTop <= scrollPos) currentId = sec.id;
    });
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.dataset.nav === currentId);
    });
  }

  /* =========================================================
     MOBILE MENU
     ========================================================= */
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileMenuBackdrop = document.getElementById("mobileMenuBackdrop");

  function openMobileMenu() {
    mobileMenu.classList.add("open");
    mobileMenuBackdrop.classList.add("open");
    hamburgerBtn.classList.add("open");
    hamburgerBtn.setAttribute("aria-expanded", "true");
    mobileMenu.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  }
  function closeMobileMenu() {
    mobileMenu.classList.remove("open");
    mobileMenuBackdrop.classList.remove("open");
    hamburgerBtn.classList.remove("open");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
  }

  /* =========================================================
     SCROLL PROGRESS + BACK TO TOP + HEADER SHADOW
     ========================================================= */
  const scrollProgress = document.getElementById("scrollProgress");
  const backToTop = document.getElementById("backToTop");

  function handleScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = progress + "%";

    backToTop.classList.toggle("show", scrollTop > 480);
    siteHeader.style.boxShadow = scrollTop > 8 ? "0 8px 24px rgba(0,0,0,0.06)" : "none";

    updateActiveNav();
  }

  /* =========================================================
     SCROLL REVEAL for generic sections
     ========================================================= */
  function initRevealSections() {
    const revealEls = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("in-view"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    revealEls.forEach((el) => obs.observe(el));
  }

  /* =========================================================
     REVIEWS
     ========================================================= */
  const reviewGrid = document.getElementById("reviewGrid");
  const writeReviewBtn = document.getElementById("writeReviewBtn");
  const reviewPanel = document.getElementById("reviewPanel");
  const reviewForm = document.getElementById("reviewForm");
  const starInput = document.getElementById("starInput");
  const reviewRatingValue = document.getElementById("reviewRatingValue");

  function renderReviews() {
    const allReviews = [...seedReviews, ...state.reviews].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    reviewGrid.innerHTML = "";
    allReviews.forEach((review) => {
      const card = document.createElement("div");
      card.className = "review-card";

      const top = document.createElement("div");
      top.className = "review-top";

      const avatar = document.createElement("div");
      avatar.className = "review-avatar";
      avatar.textContent = review.name.trim().charAt(0).toUpperCase();

      const nameWrap = document.createElement("div");
      const nameEl = document.createElement("p");
      nameEl.className = "review-name";
      nameEl.textContent = review.name;
      const dateEl = document.createElement("p");
      dateEl.className = "review-date";
      dateEl.textContent = formatDate(review.date);
      nameWrap.appendChild(nameEl);
      nameWrap.appendChild(dateEl);

      top.appendChild(avatar);
      top.appendChild(nameWrap);

      const stars = document.createElement("div");
      stars.className = "review-stars";
      stars.setAttribute("aria-label", review.rating + " out of 5 stars");
      stars.textContent = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);

      const text = document.createElement("p");
      text.className = "review-text";
      text.textContent = review.text;

      card.appendChild(top);
      card.appendChild(stars);
      card.appendChild(text);
      reviewGrid.appendChild(card);
    });
  }

  function formatDate(dateStr) {
    const d = new Date(dateStr);
    if (isNaN(d)) return dateStr;
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  }

  function isReviewPanelOpen() {
    return reviewPanel.classList.contains("open");
  }
  function openReviewPanel() {
    reviewPanel.hidden = false;
    // allow the browser to register hidden=false before animating
    requestAnimationFrame(() => reviewPanel.classList.add("open"));
    writeReviewBtn.setAttribute("aria-expanded", "true");
    document.getElementById("reviewName").focus();
  }
  function closeReviewPanel() {
    reviewPanel.classList.remove("open");
    writeReviewBtn.setAttribute("aria-expanded", "false");
    setTimeout(() => {
      if (!isReviewPanelOpen()) reviewPanel.hidden = true;
    }, 350);
  }
  function toggleReviewPanel() {
    isReviewPanelOpen() ? closeReviewPanel() : openReviewPanel();
  }

  function setStarRating(value) {
    state.selectedStar = value;
    reviewRatingValue.value = value;
    document.querySelectorAll(".star-btn").forEach((btn) => {
      btn.classList.toggle("filled", Number(btn.dataset.value) <= value);
    });
  }

  function handleReviewSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("reviewName").value.trim();
    const text = document.getElementById("reviewText").value.trim();
    const rating = Number(reviewRatingValue.value) || 5;
    if (!name || !text) return;

    state.reviews.unshift({
      name,
      rating,
      text,
      date: new Date().toISOString(),
    });
    saveToStorage("boighor_reviews", state.reviews);
    renderReviews();
    reviewForm.reset();
    setStarRating(5);
    closeReviewPanel();
  }

  /* =========================================================
     UPCOMING BOOKS RENDER
     ========================================================= */
  function renderUpcomingBooks() {
    const upcomingRow = document.getElementById("upcomingRow");
    upcomingRow.innerHTML = "";
    upcomingBooks.forEach((book) => {
      const card = document.createElement("div");
      card.className = "upcoming-card";

      const coverWrap = document.createElement("div");
      coverWrap.className = "upcoming-cover";

      const img = document.createElement("img");
      img.loading = "lazy";
      img.alt = book.title + " cover";
      img.src = book.image;
      img.addEventListener("error", () => {
        coverWrap.style.display = "flex";
        coverWrap.style.alignItems = "center";
        coverWrap.style.justifyContent = "center";
        coverWrap.innerHTML = `<span style="font-weight:600;color:var(--muted);font-size:.8rem;">No Cover</span>`;
      });
      if (!book.image || book.image.startsWith("PASTE_")) {
        img.dispatchEvent(new Event("error"));
      } else {
        coverWrap.appendChild(img);
      }

      const badge = document.createElement("span");
      badge.className = "coming-soon-badge";
      badge.textContent = "COMING SOON";
      coverWrap.appendChild(badge);

      const body = document.createElement("div");
      body.className = "upcoming-body";
      body.innerHTML = `
        <p class="upcoming-title">${escapeHtml(book.title)}</p>
        <p class="upcoming-author">${escapeHtml(book.author)}</p>
        <p class="upcoming-date">Expected: ${escapeHtml(book.releaseDate)}</p>
      `;
      const btn = document.createElement("button");
      btn.className = "btn-disabled";
      btn.disabled = true;
      btn.textContent = "Coming Soon";
      body.appendChild(btn);

      card.appendChild(coverWrap);
      card.appendChild(body);
      upcomingRow.appendChild(card);
    });
  }

  /* =========================================================
     KEYBOARD SHORTCUTS
     ========================================================= */
  function handleGlobalKeydown(e) {
    const activeTag = document.activeElement.tagName;
    const isTyping = activeTag === "INPUT" || activeTag === "TEXTAREA";

    if (e.key === "/" && !isTyping) {
      e.preventDefault();
      searchInput.focus();
    }

    if (e.key === "Escape") {
      if (isReviewPanelOpen()) {
        closeReviewPanel();
      } else if (mobileMenu.classList.contains("open")) {
        closeMobileMenu();
      } else if (document.activeElement === searchInput && state.searchTerm) {
        clearSearch();
      }
    }
  }

  /* =========================================================
     INIT
     ========================================================= */
  function init() {
    // Theme
    applyTheme(state.theme);

    // QR code
    const qrImg = document.getElementById("qrCodeImg");
    if (qrImg) {
      qrImg.src = QR_CODE_URL;
      qrImg.addEventListener("error", () => {
        qrImg.style.display = "flex";
        qrImg.style.alignItems = "center";
        qrImg.style.justifyContent = "center";
      });
    }

    renderCategories();
    renderBooks();
    renderRecentlyViewed();
    renderReviews();
    renderUpcomingBooks();
    initRevealSections();

    // Search
    searchInput.addEventListener("input", handleSearch);
    searchClear.addEventListener("click", clearSearch);
    clearSearchBtn.addEventListener("click", () => {
      clearSearch();
      state.activeCategory = "All";
      state.showFavoritesOnly = false;
      favoritesToggle.classList.remove("active");
      renderCategories();
      renderBooks();
    });

    // Favorites
    favoritesToggle.addEventListener("click", toggleFavoritesFilter);

    // Theme toggles
    themeToggle.addEventListener("click", toggleTheme);
    if (mobileThemeToggle) mobileThemeToggle.addEventListener("click", toggleTheme);

    // Mobile menu
    hamburgerBtn.addEventListener("click", () => {
      mobileMenu.classList.contains("open") ? closeMobileMenu() : openMobileMenu();
    });
    mobileMenuBackdrop.addEventListener("click", closeMobileMenu);
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });

    // Nav smooth scroll (native CSS scroll-behavior handles most; ensure active state updates)
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Back to top
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Reviews (inline panel — no popup)
    writeReviewBtn.addEventListener("click", toggleReviewPanel);
    reviewForm.addEventListener("submit", handleReviewSubmit);
    starInput.querySelectorAll(".star-btn").forEach((btn) => {
      btn.addEventListener("click", () => setStarRating(Number(btn.dataset.value)));
    });
    setStarRating(5);

    // Keyboard shortcuts
    document.addEventListener("keydown", handleGlobalKeydown);

    // Loading screen
    window.addEventListener("load", () => {
      setTimeout(() => {
        document.getElementById("loadingScreen").classList.add("hide");
      }, 350);
    });
    // Fallback in case 'load' already fired
    setTimeout(() => {
      document.getElementById("loadingScreen").classList.add("hide");
    }, 1800);
  }

  document.addEventListener("DOMContentLoaded", init);

  // Safety net: if anything throws before the loading screen would
  // otherwise be hidden, hide it anyway so the site never gets stuck.
  window.addEventListener("error", () => {
    const ls = document.getElementById("loadingScreen");
    if (ls) ls.classList.add("hide");
  });
})();  { id: 7,  title: "Misir Ali Omnibus",               author: "Humayun Ahmed", pages: 384, category: "Mystery",   image: "PASTE_BOOK_COVER_IMAGE_URL_07_HERE", readLink: "PASTE_READ_NOW_LINK_07_HERE" },
  { id: 8,  title: "Nishad",                         author: "Humayun Ahmed", pages: 168, category: "Thriller",  image: "PASTE_BOOK_COVER_IMAGE_URL_08_HERE", readLink: "PASTE_READ_NOW_LINK_08_HERE" },
  { id: 9,  title: "Bhoy",                           author: "Humayun Ahmed", pages: 152, category: "Thriller",  image: "PASTE_BOOK_COVER_IMAGE_URL_09_HERE", readLink: "PASTE_READ_NOW_LINK_09_HERE" },
  { id: 10, title: "Shuvro",                         author: "Humayun Ahmed", pages: 176, category: "Romance",   image: "PASTE_BOOK_COVER_IMAGE_URL_10_HERE", readLink: "PASTE_READ_NOW_LINK_10_HERE" },
  { id: 11, title: "Tomake",                         author: "Humayun Ahmed", pages: 148, category: "Romance",   image: "PASTE_BOOK_COVER_IMAGE_URL_11_HERE", readLink: "PASTE_READ_NOW_LINK_11_HERE" },
  { id: 12, title: "Ei Shubhoshondhay",                author: "Humayun Ahmed", pages: 156, category: "Romance",   image: "PASTE_BOOK_COVER_IMAGE_URL_12_HERE", readLink: "PASTE_READ_NOW_LINK_12_HERE" },
  { id: 13, title: "Kobi",                           author: "Humayun Ahmed", pages: 224, category: "Drama",     image: "PASTE_BOOK_COVER_IMAGE_URL_13_HERE", readLink: "PASTE_READ_NOW_LINK_13_HERE" },
  { id: 14, title: "Shonkhonil Karagar",               author: "Humayun Ahmed", pages: 136, category: "Drama",     image: "PASTE_BOOK_COVER_IMAGE_URL_14_HERE", readLink: "PASTE_READ_NOW_LINK_14_HERE" },
  { id: 15, title: "Aguner Poroshmoni",                author: "Humayun Ahmed", pages: 168, category: "Drama",     image: "PASTE_BOOK_COVER_IMAGE_URL_15_HERE", readLink: "PASTE_READ_NOW_LINK_15_HERE" },
  { id: 16, title: "Bohubrihi",                       author: "Humayun Ahmed", pages: 144, category: "Adventure", image: "PASTE_BOOK_COVER_IMAGE_URL_16_HERE", readLink: "PASTE_READ_NOW_LINK_16_HERE" },
  { id: 17, title: "Rupa",                           author: "Humayun Ahmed", pages: 200, category: "Adventure", image: "PASTE_BOOK_COVER_IMAGE_URL_17_HERE", readLink: "PASTE_READ_NOW_LINK_17_HERE" },
  { id: 18, title: "Anil Bagchir Ekdin",               author: "Humayun Ahmed", pages: 112, category: "Sci-Fi",    image: "PASTE_BOOK_COVER_IMAGE_URL_18_HERE", readLink: "PASTE_READ_NOW_LINK_18_HERE" },
  { id: 19, title: "Tandra Bilash",                   author: "Humayun Ahmed", pages: 184, category: "Fantasy",   image: "PASTE_BOOK_COVER_IMAGE_URL_19_HERE", readLink: "PASTE_READ_NOW_LINK_19_HERE" },
  { id: 20, title: "Chander Alo Rate Ekhane Eso",       author: "Humayun Ahmed", pages: 196, category: "Fantasy",   image: "PASTE_BOOK_COVER_IMAGE_URL_20_HERE", readLink: "PASTE_READ_NOW_LINK_20_HERE" },
];

/* =========================================================
   UPCOMING BOOKS — edit / add as needed
   ========================================================= */
const upcomingBooks = [
  { id: 101, title: "Megher Opare Megh", author: "Humayun Ahmed", releaseDate: "Dec 2026", image: "PASTE_UPCOMING_COVER_URL_01_HERE" },
  { id: 102, title: "Shesh Bikeler Alo",  author: "Humayun Ahmed", releaseDate: "Jan 2027", image: "PASTE_UPCOMING_COVER_URL_02_HERE" },
  { id: 103, title: "Nirjon Prohor",      author: "Humayun Ahmed", releaseDate: "Mar 2027", image: "PASTE_UPCOMING_COVER_URL_03_HERE" },
  { id: 104, title: "Brishtir Nupur",     author: "Humayun Ahmed", releaseDate: "May 2027", image: "PASTE_UPCOMING_COVER_URL_04_HERE" },
];

/* =========================================================
   SAMPLE REVIEWS (seed data — shown alongside user reviews)
   ========================================================= */
const seedReviews = [
  { name: "Ayesha Rahman", rating: 5, text: "Himu made me fall in love with reading all over again. A timeless character.", date: "2026-06-12" },
  { name: "Tanvir Hasan",  rating: 5, text: "The Misir Ali stories are brilliantly logical yet deeply human. Highly recommend.", date: "2026-07-03" },
  { name: "Nusrat Jahan",  rating: 4, text: "Debi kept me up at night — genuinely unsettling in the best way.", date: "2026-07-20" },
];

/* =========================================================================
   END OF CUSTOMIZATION AREA — core application logic below
   ========================================================================= */

(function () {
  "use strict";

  /* ---------------- State ---------------- */
  const state = {
    searchTerm: "",
    activeCategory: "All",
    showFavoritesOnly: false,
    favorites: loadFromStorage("boighor_favorites", []),
    recentlyViewed: loadFromStorage("boighor_recent", []),
    reviews: loadFromStorage("boighor_reviews", []),
    theme: localStorage.getItem("boighor_theme") || "light",
    selectedStar: 5,
  };

  /* ---------------- Storage helpers ---------------- */
  function loadFromStorage(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }
  function saveToStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      /* storage unavailable — fail silently */
    }
  }

  /* ---------------- DOM refs ---------------- */
  const bookContainer = document.getElementById("bookContainer");
  const emptyState = document.getElementById("emptyState");
  const bookCountEl = document.getElementById("bookCount");
  const searchMetaEl = document.getElementById("searchMeta");
  const searchInput = document.getElementById("searchInput");
  const searchClear = document.getElementById("searchClear");
  const categoryList = document.getElementById("categoryList");
  const favoritesToggle = document.getElementById("favoritesToggle");
  const clearSearchBtn = document.getElementById("clearSearchBtn");
  const footerCategories = document.getElementById("footerCategories");
  const recentSection = document.getElementById("recentSection");
  const recentRow = document.getElementById("recentRow");

  /* =========================================================
     SEARCH — automatically derived from book fields.
     No manual keyword lists required.
     ========================================================= */
  function normalize(str) {
    return String(str)
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ");
  }

  function matchesSearch(book, query) {
    const q = normalize(query);
    if (!q) return true;
    const searchableText = normalize(
      [book.title, book.author, book.category, book.pages].join(" ")
    );
    return searchableText.includes(q);
  }

  function matchesCategory(book, category) {
    return category === "All" || book.category === category;
  }

  /* =========================================================
     DYNAMIC FILTER PIPELINE
     ALL BOOKS -> SEARCH FILTER -> CATEGORY FILTER -> FAVORITES FILTER
     ========================================================= */
  function getFilteredBooks() {
    return books.filter((book) => {
      if (!matchesSearch(book, state.searchTerm)) return false;
      if (!matchesCategory(book, state.activeCategory)) return false;
      if (state.showFavoritesOnly && !state.favorites.includes(book.id)) return false;
      return true;
    });
  }

  /* =========================================================
     CATEGORY LIST — derived automatically from books array
     ========================================================= */
  function getCategoryCounts() {
    const counts = {};
    books.forEach((book) => {
      counts[book.category] = (counts[book.category] || 0) + 1;
    });
    return counts;
  }

  function renderCategories() {
    const counts = getCategoryCounts();
    const categories = ["All", ...Object.keys(counts).sort()];

    categoryList.innerHTML = "";
    categories.forEach((cat) => {
      const btn = document.createElement("button");
      btn.className = "category-chip" + (state.activeCategory === cat ? " active" : "");
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", state.activeCategory === cat ? "true" : "false");
      btn.dataset.category = cat;

      const label = document.createElement("span");
      label.textContent = cat;
      btn.appendChild(label);

      const countBadge = document.createElement("span");
      countBadge.className = "count";
      countBadge.textContent = cat === "All" ? books.length : counts[cat];
      btn.appendChild(countBadge);

      btn.addEventListener("click", () => {
        state.activeCategory = cat;
        renderCategories();
        renderBooks();
      });

      categoryList.appendChild(btn);
    });

    // Footer categories (read-only chips)
    if (footerCategories) {
      footerCategories.innerHTML = "";
      Object.keys(counts)
        .sort()
        .forEach((cat) => {
          const span = document.createElement("span");
          span.textContent = `${cat} (${counts[cat]})`;
          footerCategories.appendChild(span);
        });
    }
  }

  /* =========================================================
     BOOK CARD RENDERING (safe DOM APIs, no innerHTML injection
     of untrusted data)
     ========================================================= */
  function createBookCard(book) {
    const card = document.createElement("article");
    card.className = "book-card";
    card.dataset.id = book.id;

    // ---- Cover ----
    const cover = document.createElement("div");
    cover.className = "book-cover";

    const img = document.createElement("img");
    img.loading = "lazy";
    img.alt = `${book.title} book cover`;
    img.src = book.image;

    const fallback = document.createElement("div");
    fallback.className = "cover-fallback";
    fallback.hidden = true;
    fallback.innerHTML = `<span class="fallback-text">NO COVER<br>AVAILABLE</span>`;

    img.addEventListener("error", () => {
      img.hidden = true;
      fallback.hidden = false;
    });
    if (!book.image || book.image.startsWith("PASTE_")) {
      img.hidden = true;
      fallback.hidden = false;
    }

    cover.appendChild(img);
    cover.appendChild(fallback);

    // ---- Info ----
    const info = document.createElement("div");
    info.className = "book-info";

    const titleRow = document.createElement("div");
    titleRow.className = "book-title-row";

    const title = document.createElement("h3");
    title.className = "book-title";
    title.textContent = book.title;

    const favBtn = document.createElement("button");
    favBtn.className = "fav-btn" + (state.favorites.includes(book.id) ? " active" : "");
    favBtn.setAttribute("aria-label", "Toggle favorite for " + book.title);
    favBtn.setAttribute("aria-pressed", state.favorites.includes(book.id) ? "true" : "false");
    favBtn.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 21s-6.7-4.35-9.3-8.1C1 10.1 1.4 6.6 4.2 4.9c2.3-1.4 5-0.7 6.6 1.3.4.5.8 1 1.2 1.6.4-.6.8-1.1 1.2-1.6 1.6-2 4.3-2.7 6.6-1.3 2.8 1.7 3.2 5.2 1.5 8-2.6 3.75-9.3 8.1-9.3 8.1Z"></path></svg>`;
    favBtn.addEventListener("click", () => toggleFavorite(book.id, favBtn));

    titleRow.appendChild(title);
    titleRow.appendChild(favBtn);

    const categoryBadge = document.createElement("span");
    categoryBadge.className = "book-category-badge";
    categoryBadge.textContent = book.category;

    const meta = document.createElement("div");
    meta.className = "book-meta";
    meta.innerHTML = `
      <span>Pages: <strong>${book.pages}</strong></span>
      <span>Author: <strong>${escapeHtml(book.author)}</strong></span>
    `;

    const readNow = document.createElement("a");
    readNow.className = "read-now";
    readNow.href = book.readLink && !book.readLink.startsWith("PASTE_") ? book.readLink : "#";
    readNow.target = "_blank";
    readNow.rel = "noopener noreferrer";
    readNow.innerHTML = `READ NOW <span aria-hidden="true">&rarr;</span>`;
    readNow.addEventListener("click", (e) => {
      if (!book.readLink || book.readLink.startsWith("PASTE_")) {
        e.preventDefault();
      }
      addToRecentlyViewed(book.id);
    });

    info.appendChild(titleRow);
    info.appendChild(categoryBadge);
    info.appendChild(meta);
    info.appendChild(readNow);

    card.appendChild(cover);
    card.appendChild(info);

    return card;
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  /* =========================================================
     RENDER BOOKS (main list)
     ========================================================= */
  let revealObserver;

  function renderBooks() {
    const filtered = getFilteredBooks();

    bookContainer.innerHTML = "";

    if (filtered.length === 0) {
      emptyState.hidden = false;
    } else {
      emptyState.hidden = true;
      const fragment = document.createDocumentFragment();
      filtered.forEach((book) => fragment.appendChild(createBookCard(book)));
      bookContainer.appendChild(fragment);
    }

    updateBookCount(filtered.length);
    observeRevealCards();
  }

  function updateBookCount(filteredCount) {
    // Total count derived automatically from books.length
    bookCountEl.textContent = `${books.length} STORIES TO DISCOVER`;

    if (state.searchTerm || state.activeCategory !== "All" || state.showFavoritesOnly) {
      searchMetaEl.textContent = `${filteredCount} book${filteredCount === 1 ? "" : "s"} found`;
    } else {
      searchMetaEl.textContent = "";
    }
  }

  function observeRevealCards() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".book-card").forEach((c) => c.classList.add("in-view"));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // staggered entrance
              const delay = Array.from(bookContainer.children).indexOf(entry.target) * 60;
              setTimeout(() => entry.target.classList.add("in-view"), delay);
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
    }
    document.querySelectorAll(".book-card:not(.in-view)").forEach((card) => revealObserver.observe(card));
  }

  /* =========================================================
     SEARCH HANDLING
     ========================================================= */
  function handleSearch() {
    state.searchTerm = searchInput.value;
    searchClear.hidden = state.searchTerm.length === 0;
    renderBooks();
  }

  function clearSearch() {
    state.searchTerm = "";
    searchInput.value = "";
    searchClear.hidden = true;
    renderBooks();
    searchInput.focus();
  }

  /* =========================================================
     FAVORITES
     ========================================================= */
  function loadFavorites() {
    state.favorites = loadFromStorage("boighor_favorites", []);
  }
  function saveFavorites() {
    saveToStorage("boighor_favorites", state.favorites);
  }

  function toggleFavorite(id, btnEl) {
    const idx = state.favorites.indexOf(id);
    if (idx === -1) {
      state.favorites.push(id);
    } else {
      state.favorites.splice(idx, 1);
    }
    saveFavorites();

    if (btnEl) {
      btnEl.classList.toggle("active", state.favorites.includes(id));
      btnEl.setAttribute("aria-pressed", state.favorites.includes(id) ? "true" : "false");
      btnEl.classList.remove("pop");
      // force reflow to restart animation
      void btnEl.offsetWidth;
      btnEl.classList.add("pop");
    }

    if (state.showFavoritesOnly) renderBooks();
  }

  function toggleFavoritesFilter() {
    state.showFavoritesOnly = !state.showFavoritesOnly;
    favoritesToggle.classList.toggle("active", state.showFavoritesOnly);
    favoritesToggle.setAttribute("aria-pressed", state.showFavoritesOnly ? "true" : "false");
    renderBooks();
  }

  /* =========================================================
     RECENTLY VIEWED
     ========================================================= */
  function addToRecentlyViewed(id) {
    state.recentlyViewed = state.recentlyViewed.filter((existingId) => existingId !== id);
    state.recentlyViewed.unshift(id);
    state.recentlyViewed = state.recentlyViewed.slice(0, 5);
    saveToStorage("boighor_recent", state.recentlyViewed);
    renderRecentlyViewed();
  }

  function renderRecentlyViewed() {
    const recentBooks = state.recentlyViewed
      .map((id) => books.find((b) => b.id === id))
      .filter(Boolean);

    if (recentBooks.length === 0) {
      recentSection.hidden = true;
      return;
    }

    recentSection.hidden = false;
    recentRow.innerHTML = "";
    recentBooks.forEach((book) => {
      const card = document.createElement("div");
      card.className = "recent-card";
      card.tabIndex = 0;
      card.setAttribute("role", "link");
      card.setAttribute("aria-label", "Open " + book.title);

      const coverWrap = document.createElement("div");
      coverWrap.className = "recent-cover";
      const img = document.createElement("img");
      img.loading = "lazy";
      img.alt = book.title + " cover";
      img.src = book.image;
      img.addEventListener("error", () => {
        img.style.display = "none";
        coverWrap.style.display = "flex";
        coverWrap.style.alignItems = "center";
        coverWrap.style.justifyContent = "center";
        coverWrap.textContent = "No Cover";
        coverWrap.style.fontWeight = "600";
        coverWrap.style.color = "var(--muted)";
        coverWrap.style.fontSize = ".75rem";
      });
      if (!book.image || book.image.startsWith("PASTE_")) {
        img.dispatchEvent(new Event("error"));
      }
      coverWrap.appendChild(img);

      const titleEl = document.createElement("p");
      titleEl.className = "recent-title";
      titleEl.textContent = book.title;

      card.appendChild(coverWrap);
      card.appendChild(titleEl);

      const goToBook = () => {
        const el = bookContainer.querySelector(`[data-id="${book.id}"]`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.style.transition = "box-shadow .3s ease";
          el.style.boxShadow = "0 0 0 3px var(--accent)";
          setTimeout(() => (el.style.boxShadow = ""), 1200);
        } else {
          document.getElementById("explore").scrollIntoView({ behavior: "smooth" });
        }
      };
      card.addEventListener("click", goToBook);
      card.addEventListener("keypress", (e) => {
        if (e.key === "Enter") goToBook();
      });

      recentRow.appendChild(card);
    });
  }

  /* =========================================================
     THEME (DAY / NIGHT)
     ========================================================= */
  const themeToggle = document.getElementById("themeToggle");
  const mobileThemeToggle = document.getElementById("mobileThemeToggle");
  const mobileThemeLabel = document.getElementById("mobileThemeLabel");

  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("boighor_theme", theme);
    themeToggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    if (mobileThemeLabel) {
      mobileThemeLabel.textContent = theme === "dark" ? "Switch to Day Mode" : "Switch to Night Mode";
    }
  }

  function toggleTheme() {
    applyTheme(state.theme === "dark" ? "light" : "dark");
  }

  /* =========================================================
     HEADER / NAV
     ========================================================= */
  const siteHeader = document.getElementById("siteHeader");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-menu nav a");
  const sections = ["home", "reviews", "upcoming", "credits"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  function updateActiveNav() {
    let currentId = "home";
    const scrollPos = window.scrollY + 140;
    sections.forEach((sec) => {
      if (sec.offsetTop <= scrollPos) currentId = sec.id;
    });
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.dataset.nav === currentId);
    });
  }

  /* =========================================================
     MOBILE MENU
     ========================================================= */
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileMenuBackdrop = document.getElementById("mobileMenuBackdrop");

  function openMobileMenu() {
    mobileMenu.classList.add("open");
    mobileMenuBackdrop.classList.add("open");
    hamburgerBtn.classList.add("open");
    hamburgerBtn.setAttribute("aria-expanded", "true");
    mobileMenu.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  }
  function closeMobileMenu() {
    mobileMenu.classList.remove("open");
    mobileMenuBackdrop.classList.remove("open");
    hamburgerBtn.classList.remove("open");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
  }

  /* =========================================================
     SCROLL PROGRESS + BACK TO TOP + HEADER SHADOW
     ========================================================= */
  const scrollProgress = document.getElementById("scrollProgress");
  const backToTop = document.getElementById("backToTop");

  function handleScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = progress + "%";

    backToTop.classList.toggle("show", scrollTop > 480);
    siteHeader.style.boxShadow = scrollTop > 8 ? "0 8px 24px rgba(0,0,0,0.06)" : "none";

    updateActiveNav();
  }

  /* =========================================================
     SCROLL REVEAL for generic sections
     ========================================================= */
  function initRevealSections() {
    const revealEls = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("in-view"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    revealEls.forEach((el) => obs.observe(el));
  }

  /* =========================================================
     REVIEWS
     ========================================================= */
  const reviewGrid = document.getElementById("reviewGrid");
  const writeReviewBtn = document.getElementById("writeReviewBtn");
  const reviewPanel = document.getElementById("reviewPanel");
  const reviewForm = document.getElementById("reviewForm");
  const starInput = document.getElementById("starInput");
  const reviewRatingValue = document.getElementById("reviewRatingValue");

  function renderReviews() {
    const allReviews = [...seedReviews, ...state.reviews].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    reviewGrid.innerHTML = "";
    allReviews.forEach((review) => {
      const card = document.createElement("div");
      card.className = "review-card";

      const top = document.createElement("div");
      top.className = "review-top";

      const avatar = document.createElement("div");
      avatar.className = "review-avatar";
      avatar.textContent = review.name.trim().charAt(0).toUpperCase();

      const nameWrap = document.createElement("div");
      const nameEl = document.createElement("p");
      nameEl.className = "review-name";
      nameEl.textContent = review.name;
      const dateEl = document.createElement("p");
      dateEl.className = "review-date";
      dateEl.textContent = formatDate(review.date);
      nameWrap.appendChild(nameEl);
      nameWrap.appendChild(dateEl);

      top.appendChild(avatar);
      top.appendChild(nameWrap);

      const stars = document.createElement("div");
      stars.className = "review-stars";
      stars.setAttribute("aria-label", review.rating + " out of 5 stars");
      stars.textContent = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);

      const text = document.createElement("p");
      text.className = "review-text";
      text.textContent = review.text;

      card.appendChild(top);
      card.appendChild(stars);
      card.appendChild(text);
      reviewGrid.appendChild(card);
    });
  }

  function formatDate(dateStr) {
    const d = new Date(dateStr);
    if (isNaN(d)) return dateStr;
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  }

  function isReviewPanelOpen() {
    return reviewPanel.classList.contains("open");
  }
  function openReviewPanel() {
    reviewPanel.hidden = false;
    // allow the browser to register hidden=false before animating
    requestAnimationFrame(() => reviewPanel.classList.add("open"));
    writeReviewBtn.setAttribute("aria-expanded", "true");
    document.getElementById("reviewName").focus();
  }
  function closeReviewPanel() {
    reviewPanel.classList.remove("open");
    writeReviewBtn.setAttribute("aria-expanded", "false");
    setTimeout(() => {
      if (!isReviewPanelOpen()) reviewPanel.hidden = true;
    }, 350);
  }
  function toggleReviewPanel() {
    isReviewPanelOpen() ? closeReviewPanel() : openReviewPanel();
  }

  function setStarRating(value) {
    state.selectedStar = value;
    reviewRatingValue.value = value;
    document.querySelectorAll(".star-btn").forEach((btn) => {
      btn.classList.toggle("filled", Number(btn.dataset.value) <= value);
    });
  }

  function handleReviewSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("reviewName").value.trim();
    const text = document.getElementById("reviewText").value.trim();
    const rating = Number(reviewRatingValue.value) || 5;
    if (!name || !text) return;

    state.reviews.unshift({
      name,
      rating,
      text,
      date: new Date().toISOString(),
    });
    saveToStorage("boighor_reviews", state.reviews);
    renderReviews();
    reviewForm.reset();
    setStarRating(5);
    closeReviewPanel();
  }

  /* =========================================================
     UPCOMING BOOKS RENDER
     ========================================================= */
  function renderUpcomingBooks() {
    const upcomingRow = document.getElementById("upcomingRow");
    upcomingRow.innerHTML = "";
    upcomingBooks.forEach((book) => {
      const card = document.createElement("div");
      card.className = "upcoming-card";

      const coverWrap = document.createElement("div");
      coverWrap.className = "upcoming-cover";

      const img = document.createElement("img");
      img.loading = "lazy";
      img.alt = book.title + " cover";
      img.src = book.image;
      img.addEventListener("error", () => {
        coverWrap.style.display = "flex";
        coverWrap.style.alignItems = "center";
        coverWrap.style.justifyContent = "center";
        coverWrap.innerHTML = `<span style="font-weight:600;color:var(--muted);font-size:.8rem;">No Cover</span>`;
      });
      if (!book.image || book.image.startsWith("PASTE_")) {
        img.dispatchEvent(new Event("error"));
      } else {
        coverWrap.appendChild(img);
      }

      const badge = document.createElement("span");
      badge.className = "coming-soon-badge";
      badge.textContent = "COMING SOON";
      coverWrap.appendChild(badge);

      const body = document.createElement("div");
      body.className = "upcoming-body";
      body.innerHTML = `
        <p class="upcoming-title">${escapeHtml(book.title)}</p>
        <p class="upcoming-author">${escapeHtml(book.author)}</p>
        <p class="upcoming-date">Expected: ${escapeHtml(book.releaseDate)}</p>
      `;
      const btn = document.createElement("button");
      btn.className = "btn-disabled";
      btn.disabled = true;
      btn.textContent = "Coming Soon";
      body.appendChild(btn);

      card.appendChild(coverWrap);
      card.appendChild(body);
      upcomingRow.appendChild(card);
    });
  }

  /* =========================================================
     KEYBOARD SHORTCUTS
     ========================================================= */
  function handleGlobalKeydown(e) {
    const activeTag = document.activeElement.tagName;
    const isTyping = activeTag === "INPUT" || activeTag === "TEXTAREA";

    if (e.key === "/" && !isTyping) {
      e.preventDefault();
      searchInput.focus();
    }

    if (e.key === "Escape") {
      if (isReviewPanelOpen()) {
        closeReviewPanel();
      } else if (mobileMenu.classList.contains("open")) {
        closeMobileMenu();
      } else if (document.activeElement === searchInput && state.searchTerm) {
        clearSearch();
      }
    }
  }

  /* =========================================================
     INIT
     ========================================================= */
  function init() {
    // Theme
    applyTheme(state.theme);

    // QR code
    const qrImg = document.getElementById("qrCodeImg");
    if (qrImg) {
      qrImg.src = QR_CODE_URL;
      qrImg.addEventListener("error", () => {
        qrImg.style.display = "flex";
        qrImg.style.alignItems = "center";
        qrImg.style.justifyContent = "center";
      });
    }

    renderCategories();
    renderBooks();
    renderRecentlyViewed();
    renderReviews();
    renderUpcomingBooks();
    initRevealSections();

    // Search
    searchInput.addEventListener("input", handleSearch);
    searchClear.addEventListener("click", clearSearch);
    clearSearchBtn.addEventListener("click", () => {
      clearSearch();
      state.activeCategory = "All";
      state.showFavoritesOnly = false;
      favoritesToggle.classList.remove("active");
      renderCategories();
      renderBooks();
    });

    // Favorites
    favoritesToggle.addEventListener("click", toggleFavoritesFilter);

    // Theme toggles
    themeToggle.addEventListener("click", toggleTheme);
    if (mobileThemeToggle) mobileThemeToggle.addEventListener("click", toggleTheme);

    // Mobile menu
    hamburgerBtn.addEventListener("click", () => {
      mobileMenu.classList.contains("open") ? closeMobileMenu() : openMobileMenu();
    });
    mobileMenuBackdrop.addEventListener("click", closeMobileMenu);
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });

    // Nav smooth scroll (native CSS scroll-behavior handles most; ensure active state updates)
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Back to top
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Reviews (inline panel — no popup)
    writeReviewBtn.addEventListener("click", toggleReviewPanel);
    reviewForm.addEventListener("submit", handleReviewSubmit);
    starInput.querySelectorAll(".star-btn").forEach((btn) => {
      btn.addEventListener("click", () => setStarRating(Number(btn.dataset.value)));
    });
    setStarRating(5);

    // Keyboard shortcuts
    document.addEventListener("keydown", handleGlobalKeydown);

    // Loading screen
    window.addEventListener("load", () => {
      setTimeout(() => {
        document.getElementById("loadingScreen").classList.add("hide");
      }, 350);
    });
    // Fallback in case 'load' already fired
    setTimeout(() => {
      document.getElementById("loadingScreen").classList.add("hide");
    }, 1800);
  }

  document.addEventListener("DOMContentLoaded", init);
})();  { id: 7,  title: "Misir Ali Omnibus",               author: "Humayun Ahmed", pages: 384, category: "Mystery",   image: "PASTE_BOOK_COVER_IMAGE_URL_07_HERE", readLink: "PASTE_READ_NOW_LINK_07_HERE" },
  { id: 8,  title: "Nishad",                         author: "Humayun Ahmed", pages: 168, category: "Thriller",  image: "PASTE_BOOK_COVER_IMAGE_URL_08_HERE", readLink: "PASTE_READ_NOW_LINK_08_HERE" },
  { id: 9,  title: "Bhoy",                           author: "Humayun Ahmed", pages: 152, category: "Thriller",  image: "PASTE_BOOK_COVER_IMAGE_URL_09_HERE", readLink: "PASTE_READ_NOW_LINK_09_HERE" },
  { id: 10, title: "Shuvro",                         author: "Humayun Ahmed", pages: 176, category: "Romance",   image: "PASTE_BOOK_COVER_IMAGE_URL_10_HERE", readLink: "PASTE_READ_NOW_LINK_10_HERE" },
  { id: 11, title: "Tomake",                         author: "Humayun Ahmed", pages: 148, category: "Romance",   image: "PASTE_BOOK_COVER_IMAGE_URL_11_HERE", readLink: "PASTE_READ_NOW_LINK_11_HERE" },
  { id: 12, title: "Ei Shubhoshondhay",                author: "Humayun Ahmed", pages: 156, category: "Romance",   image: "PASTE_BOOK_COVER_IMAGE_URL_12_HERE", readLink: "PASTE_READ_NOW_LINK_12_HERE" },
  { id: 13, title: "Kobi",                           author: "Humayun Ahmed", pages: 224, category: "Drama",     image: "PASTE_BOOK_COVER_IMAGE_URL_13_HERE", readLink: "PASTE_READ_NOW_LINK_13_HERE" },
  { id: 14, title: "Shonkhonil Karagar",               author: "Humayun Ahmed", pages: 136, category: "Drama",     image: "PASTE_BOOK_COVER_IMAGE_URL_14_HERE", readLink: "PASTE_READ_NOW_LINK_14_HERE" },
  { id: 15, title: "Aguner Poroshmoni",                author: "Humayun Ahmed", pages: 168, category: "Drama",     image: "PASTE_BOOK_COVER_IMAGE_URL_15_HERE", readLink: "PASTE_READ_NOW_LINK_15_HERE" },
  { id: 16, title: "Bohubrihi",                       author: "Humayun Ahmed", pages: 144, category: "Adventure", image: "PASTE_BOOK_COVER_IMAGE_URL_16_HERE", readLink: "PASTE_READ_NOW_LINK_16_HERE" },
  { id: 17, title: "Rupa",                           author: "Humayun Ahmed", pages: 200, category: "Adventure", image: "PASTE_BOOK_COVER_IMAGE_URL_17_HERE", readLink: "PASTE_READ_NOW_LINK_17_HERE" },
  { id: 18, title: "Anil Bagchir Ekdin",               author: "Humayun Ahmed", pages: 112, category: "Sci-Fi",    image: "PASTE_BOOK_COVER_IMAGE_URL_18_HERE", readLink: "PASTE_READ_NOW_LINK_18_HERE" },
  { id: 19, title: "Tandra Bilash",                   author: "Humayun Ahmed", pages: 184, category: "Fantasy",   image: "PASTE_BOOK_COVER_IMAGE_URL_19_HERE", readLink: "PASTE_READ_NOW_LINK_19_HERE" },
  { id: 20, title: "Chander Alo Rate Ekhane Eso",       author: "Humayun Ahmed", pages: 196, category: "Fantasy",   image: "PASTE_BOOK_COVER_IMAGE_URL_20_HERE", readLink: "PASTE_READ_NOW_LINK_20_HERE" },
];

/* =========================================================
   UPCOMING BOOKS — edit / add as needed
   ========================================================= */
const upcomingBooks = [
  { id: 101, title: "Megher Opare Megh", author: "Humayun Ahmed", releaseDate: "Dec 2026", image: "PASTE_UPCOMING_COVER_URL_01_HERE" },
  { id: 102, title: "Shesh Bikeler Alo",  author: "Humayun Ahmed", releaseDate: "Jan 2027", image: "PASTE_UPCOMING_COVER_URL_02_HERE" },
  { id: 103, title: "Nirjon Prohor",      author: "Humayun Ahmed", releaseDate: "Mar 2027", image: "PASTE_UPCOMING_COVER_URL_03_HERE" },
  { id: 104, title: "Brishtir Nupur",     author: "Humayun Ahmed", releaseDate: "May 2027", image: "PASTE_UPCOMING_COVER_URL_04_HERE" },
];

/* =========================================================
   SAMPLE REVIEWS (seed data — shown alongside user reviews)
   ========================================================= */
const seedReviews = [
  { name: "Ayesha Rahman", rating: 5, text: "Himu made me fall in love with reading all over again. A timeless character.", date: "2026-06-12" },
  { name: "Tanvir Hasan",  rating: 5, text: "The Misir Ali stories are brilliantly logical yet deeply human. Highly recommend.", date: "2026-07-03" },
  { name: "Nusrat Jahan",  rating: 4, text: "Debi kept me up at night — genuinely unsettling in the best way.", date: "2026-07-20" },
];

/* =========================================================================
   END OF CUSTOMIZATION AREA — core application logic below
   ========================================================================= */

(function () {
  "use strict";

  /* ---------------- State ---------------- */
  const state = {
    searchTerm: "",
    activeCategory: "All",
    showFavoritesOnly: false,
    favorites: loadFromStorage("boighor_favorites", []),
    recentlyViewed: loadFromStorage("boighor_recent", []),
    reviews: loadFromStorage("boighor_reviews", []),
    theme: localStorage.getItem("boighor_theme") || "light",
    selectedStar: 5,
  };

  /* ---------------- Storage helpers ---------------- */
  function loadFromStorage(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }
  function saveToStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      /* storage unavailable — fail silently */
    }
  }

  /* ---------------- DOM refs ---------------- */
  const bookContainer = document.getElementById("bookContainer");
  const emptyState = document.getElementById("emptyState");
  const bookCountEl = document.getElementById("bookCount");
  const searchMetaEl = document.getElementById("searchMeta");
  const searchInput = document.getElementById("searchInput");
  const searchClear = document.getElementById("searchClear");
  const categoryList = document.getElementById("categoryList");
  const favoritesToggle = document.getElementById("favoritesToggle");
  const clearSearchBtn = document.getElementById("clearSearchBtn");
  const footerCategories = document.getElementById("footerCategories");
  const recentSection = document.getElementById("recentSection");
  const recentRow = document.getElementById("recentRow");

  /* =========================================================
     SEARCH — automatically derived from book fields.
     No manual keyword lists required.
     ========================================================= */
  function normalize(str) {
    return String(str)
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ");
  }

  function matchesSearch(book, query) {
    const q = normalize(query);
    if (!q) return true;
    const searchableText = normalize(
      [book.title, book.author, book.category, book.pages].join(" ")
    );
    return searchableText.includes(q);
  }

  function matchesCategory(book, category) {
    return category === "All" || book.category === category;
  }

  /* =========================================================
     DYNAMIC FILTER PIPELINE
     ALL BOOKS -> SEARCH FILTER -> CATEGORY FILTER -> FAVORITES FILTER
     ========================================================= */
  function getFilteredBooks() {
    return books.filter((book) => {
      if (!matchesSearch(book, state.searchTerm)) return false;
      if (!matchesCategory(book, state.activeCategory)) return false;
      if (state.showFavoritesOnly && !state.favorites.includes(book.id)) return false;
      return true;
    });
  }

  /* =========================================================
     CATEGORY LIST — derived automatically from books array
     ========================================================= */
  function getCategoryCounts() {
    const counts = {};
    books.forEach((book) => {
      counts[book.category] = (counts[book.category] || 0) + 1;
    });
    return counts;
  }

  function renderCategories() {
    const counts = getCategoryCounts();
    const categories = ["All", ...Object.keys(counts).sort()];

    categoryList.innerHTML = "";
    categories.forEach((cat) => {
      const btn = document.createElement("button");
      btn.className = "category-chip" + (state.activeCategory === cat ? " active" : "");
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", state.activeCategory === cat ? "true" : "false");
      btn.dataset.category = cat;

      const label = document.createElement("span");
      label.textContent = cat;
      btn.appendChild(label);

      const countBadge = document.createElement("span");
      countBadge.className = "count";
      countBadge.textContent = cat === "All" ? books.length : counts[cat];
      btn.appendChild(countBadge);

      btn.addEventListener("click", () => {
        state.activeCategory = cat;
        renderCategories();
        renderBooks();
      });

      categoryList.appendChild(btn);
    });

    // Footer categories (read-only chips)
    if (footerCategories) {
      footerCategories.innerHTML = "";
      Object.keys(counts)
        .sort()
        .forEach((cat) => {
          const span = document.createElement("span");
          span.textContent = `${cat} (${counts[cat]})`;
          footerCategories.appendChild(span);
        });
    }
  }

  /* =========================================================
     BOOK CARD RENDERING (safe DOM APIs, no innerHTML injection
     of untrusted data)
     ========================================================= */
  function createBookCard(book) {
    const card = document.createElement("article");
    card.className = "book-card";
    card.dataset.id = book.id;

    // ---- Cover ----
    const cover = document.createElement("div");
    cover.className = "book-cover";

    const img = document.createElement("img");
    img.loading = "lazy";
    img.alt = `${book.title} book cover`;
    img.src = book.image;

    const fallback = document.createElement("div");
    fallback.className = "cover-fallback";
    fallback.hidden = true;
    fallback.innerHTML = `<span class="fallback-mark">BOI GHOR</span><span class="fallback-text">NO COVER<br>AVAILABLE</span>`;

    img.addEventListener("error", () => {
      img.hidden = true;
      fallback.hidden = false;
    });
    if (!book.image || book.image.startsWith("PASTE_")) {
      img.hidden = true;
      fallback.hidden = false;
      fallback.querySelector(".fallback-text").textContent = "BOOK COVER";
    }

    cover.appendChild(img);
    cover.appendChild(fallback);

    // ---- Info ----
    const info = document.createElement("div");
    info.className = "book-info";

    const titleRow = document.createElement("div");
    titleRow.className = "book-title-row";

    const title = document.createElement("h3");
    title.className = "book-title";
    title.textContent = book.title;

    const favBtn = document.createElement("button");
    favBtn.className = "fav-btn" + (state.favorites.includes(book.id) ? " active" : "");
    favBtn.setAttribute("aria-label", "Toggle favorite for " + book.title);
    favBtn.setAttribute("aria-pressed", state.favorites.includes(book.id) ? "true" : "false");
    favBtn.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 21s-6.7-4.35-9.3-8.1C1 10.1 1.4 6.6 4.2 4.9c2.3-1.4 5-0.7 6.6 1.3.4.5.8 1 1.2 1.6.4-.6.8-1.1 1.2-1.6 1.6-2 4.3-2.7 6.6-1.3 2.8 1.7 3.2 5.2 1.5 8-2.6 3.75-9.3 8.1-9.3 8.1Z"></path></svg>`;
    favBtn.addEventListener("click", () => toggleFavorite(book.id, favBtn));

    titleRow.appendChild(title);
    titleRow.appendChild(favBtn);

    const categoryBadge = document.createElement("span");
    categoryBadge.className = "book-category-badge";
    categoryBadge.textContent = book.category;

    const meta = document.createElement("div");
    meta.className = "book-meta";
    meta.innerHTML = `
      <span>Pages: <strong>${book.pages}</strong></span>
      <span>Author: <strong>${escapeHtml(book.author)}</strong></span>
    `;

    const readNow = document.createElement("a");
    readNow.className = "read-now";
    readNow.href = book.readLink && !book.readLink.startsWith("PASTE_") ? book.readLink : "#";
    readNow.target = "_blank";
    readNow.rel = "noopener noreferrer";
    readNow.innerHTML = `READ NOW <span aria-hidden="true">&rarr;</span>`;
    readNow.addEventListener("click", (e) => {
      if (!book.readLink || book.readLink.startsWith("PASTE_")) {
        e.preventDefault();
      }
      addToRecentlyViewed(book.id);
    });

    info.appendChild(titleRow);
    info.appendChild(categoryBadge);
    info.appendChild(meta);
    info.appendChild(readNow);

    card.appendChild(cover);
    card.appendChild(info);

    return card;
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  /* =========================================================
     RENDER BOOKS (main list)
     ========================================================= */
  let revealObserver;

  function renderBooks() {
    const filtered = getFilteredBooks();

    bookContainer.innerHTML = "";

    if (filtered.length === 0) {
      emptyState.hidden = false;
    } else {
      emptyState.hidden = true;
      const fragment = document.createDocumentFragment();
      filtered.forEach((book) => fragment.appendChild(createBookCard(book)));
      bookContainer.appendChild(fragment);
    }

    updateBookCount(filtered.length);
    observeRevealCards();
  }

  function updateBookCount(filteredCount) {
    // Total count derived automatically from books.length
    bookCountEl.textContent = `${books.length} STORIES TO DISCOVER`;

    if (state.searchTerm || state.activeCategory !== "All" || state.showFavoritesOnly) {
      searchMetaEl.textContent = `${filteredCount} book${filteredCount === 1 ? "" : "s"} found`;
    } else {
      searchMetaEl.textContent = "";
    }
  }

  function observeRevealCards() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".book-card").forEach((c) => c.classList.add("in-view"));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // staggered entrance
              const delay = Array.from(bookContainer.children).indexOf(entry.target) * 60;
              setTimeout(() => entry.target.classList.add("in-view"), delay);
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
    }
    document.querySelectorAll(".book-card:not(.in-view)").forEach((card) => revealObserver.observe(card));
  }

  /* =========================================================
     SEARCH HANDLING
     ========================================================= */
  function handleSearch() {
    state.searchTerm = searchInput.value;
    searchClear.hidden = state.searchTerm.length === 0;
    renderBooks();
  }

  function clearSearch() {
    state.searchTerm = "";
    searchInput.value = "";
    searchClear.hidden = true;
    renderBooks();
    searchInput.focus();
  }

  /* =========================================================
     FAVORITES
     ========================================================= */
  function loadFavorites() {
    state.favorites = loadFromStorage("boighor_favorites", []);
  }
  function saveFavorites() {
    saveToStorage("boighor_favorites", state.favorites);
  }

  function toggleFavorite(id, btnEl) {
    const idx = state.favorites.indexOf(id);
    if (idx === -1) {
      state.favorites.push(id);
    } else {
      state.favorites.splice(idx, 1);
    }
    saveFavorites();

    if (btnEl) {
      btnEl.classList.toggle("active", state.favorites.includes(id));
      btnEl.setAttribute("aria-pressed", state.favorites.includes(id) ? "true" : "false");
      btnEl.classList.remove("pop");
      // force reflow to restart animation
      void btnEl.offsetWidth;
      btnEl.classList.add("pop");
    }

    if (state.showFavoritesOnly) renderBooks();
  }

  function toggleFavoritesFilter() {
    state.showFavoritesOnly = !state.showFavoritesOnly;
    favoritesToggle.classList.toggle("active", state.showFavoritesOnly);
    favoritesToggle.setAttribute("aria-pressed", state.showFavoritesOnly ? "true" : "false");
    renderBooks();
  }

  /* =========================================================
     RECENTLY VIEWED
     ========================================================= */
  function addToRecentlyViewed(id) {
    state.recentlyViewed = state.recentlyViewed.filter((existingId) => existingId !== id);
    state.recentlyViewed.unshift(id);
    state.recentlyViewed = state.recentlyViewed.slice(0, 5);
    saveToStorage("boighor_recent", state.recentlyViewed);
    renderRecentlyViewed();
  }

  function renderRecentlyViewed() {
    const recentBooks = state.recentlyViewed
      .map((id) => books.find((b) => b.id === id))
      .filter(Boolean);

    if (recentBooks.length === 0) {
      recentSection.hidden = true;
      return;
    }

    recentSection.hidden = false;
    recentRow.innerHTML = "";
    recentBooks.forEach((book) => {
      const card = document.createElement("div");
      card.className = "recent-card";
      card.tabIndex = 0;
      card.setAttribute("role", "link");
      card.setAttribute("aria-label", "Open " + book.title);

      const coverWrap = document.createElement("div");
      coverWrap.className = "recent-cover";
      const img = document.createElement("img");
      img.loading = "lazy";
      img.alt = book.title + " cover";
      img.src = book.image;
      img.addEventListener("error", () => {
        img.style.display = "none";
        coverWrap.style.display = "flex";
        coverWrap.style.alignItems = "center";
        coverWrap.style.justifyContent = "center";
        coverWrap.textContent = "BOI GHOR";
        coverWrap.style.fontWeight = "800";
        coverWrap.style.color = "var(--accent)";
        coverWrap.style.fontSize = ".75rem";
      });
      if (!book.image || book.image.startsWith("PASTE_")) {
        img.dispatchEvent(new Event("error"));
      }
      coverWrap.appendChild(img);

      const titleEl = document.createElement("p");
      titleEl.className = "recent-title";
      titleEl.textContent = book.title;

      card.appendChild(coverWrap);
      card.appendChild(titleEl);

      const goToBook = () => {
        const el = bookContainer.querySelector(`[data-id="${book.id}"]`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.style.transition = "box-shadow .3s ease";
          el.style.boxShadow = "0 0 0 3px var(--accent)";
          setTimeout(() => (el.style.boxShadow = ""), 1200);
        } else {
          document.getElementById("explore").scrollIntoView({ behavior: "smooth" });
        }
      };
      card.addEventListener("click", goToBook);
      card.addEventListener("keypress", (e) => {
        if (e.key === "Enter") goToBook();
      });

      recentRow.appendChild(card);
    });
  }

  /* =========================================================
     THEME (DAY / NIGHT)
     ========================================================= */
  const themeToggle = document.getElementById("themeToggle");
  const mobileThemeToggle = document.getElementById("mobileThemeToggle");
  const mobileThemeLabel = document.getElementById("mobileThemeLabel");

  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("boighor_theme", theme);
    themeToggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    if (mobileThemeLabel) {
      mobileThemeLabel.textContent = theme === "dark" ? "Switch to Day Mode" : "Switch to Night Mode";
    }
  }

  function toggleTheme() {
    applyTheme(state.theme === "dark" ? "light" : "dark");
  }

  /* =========================================================
     HEADER / NAV
     ========================================================= */
  const siteHeader = document.getElementById("siteHeader");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-menu nav a");
  const sections = ["home", "reviews", "upcoming", "credits"]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  function updateActiveNav() {
    let currentId = "home";
    const scrollPos = window.scrollY + 140;
    sections.forEach((sec) => {
      if (sec.offsetTop <= scrollPos) currentId = sec.id;
    });
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.dataset.nav === currentId);
    });
  }

  /* =========================================================
     MOBILE MENU
     ========================================================= */
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileMenuBackdrop = document.getElementById("mobileMenuBackdrop");

  function openMobileMenu() {
    mobileMenu.classList.add("open");
    mobileMenuBackdrop.classList.add("open");
    hamburgerBtn.classList.add("open");
    hamburgerBtn.setAttribute("aria-expanded", "true");
    mobileMenu.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  }
  function closeMobileMenu() {
    mobileMenu.classList.remove("open");
    mobileMenuBackdrop.classList.remove("open");
    hamburgerBtn.classList.remove("open");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
  }

  /* =========================================================
     SCROLL PROGRESS + BACK TO TOP + HEADER SHADOW
     ========================================================= */
  const scrollProgress = document.getElementById("scrollProgress");
  const backToTop = document.getElementById("backToTop");

  function handleScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = progress + "%";

    backToTop.classList.toggle("show", scrollTop > 480);
    siteHeader.style.boxShadow = scrollTop > 8 ? "0 8px 24px rgba(0,0,0,0.06)" : "none";

    updateActiveNav();
  }

  /* =========================================================
     SCROLL REVEAL for generic sections
     ========================================================= */
  function initRevealSections() {
    const revealEls = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("in-view"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    revealEls.forEach((el) => obs.observe(el));
  }

  /* =========================================================
     HERO PARTICLES (decorative, respects reduced motion)
     ========================================================= */
  function initHeroParticles() {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const container = document.getElementById("heroParticles");
    const count = window.innerWidth < 600 ? 10 : 22;
    for (let i = 0; i < count; i++) {
      const span = document.createElement("span");
      span.style.left = Math.random() * 100 + "%";
      span.style.top = 60 + Math.random() * 40 + "%";
      span.style.animationDuration = 6 + Math.random() * 8 + "s";
      span.style.animationDelay = Math.random() * 6 + "s";
      span.style.opacity = (0.2 + Math.random() * 0.3).toFixed(2);
      container.appendChild(span);
    }
  }

  /* =========================================================
     REVIEWS
     ========================================================= */
  const reviewGrid = document.getElementById("reviewGrid");
  const writeReviewBtn = document.getElementById("writeReviewBtn");
  const reviewModalBackdrop = document.getElementById("reviewModalBackdrop");
  const reviewModalClose = document.getElementById("reviewModalClose");
  const reviewForm = document.getElementById("reviewForm");
  const starInput = document.getElementById("starInput");
  const reviewRatingValue = document.getElementById("reviewRatingValue");

  function renderReviews() {
    const allReviews = [...seedReviews, ...state.reviews].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    reviewGrid.innerHTML = "";
    allReviews.forEach((review) => {
      const card = document.createElement("div");
      card.className = "review-card";

      const top = document.createElement("div");
      top.className = "review-top";

      const avatar = document.createElement("div");
      avatar.className = "review-avatar";
      avatar.textContent = review.name.trim().charAt(0).toUpperCase();

      const nameWrap = document.createElement("div");
      const nameEl = document.createElement("p");
      nameEl.className = "review-name";
      nameEl.textContent = review.name;
      const dateEl = document.createElement("p");
      dateEl.className = "review-date";
      dateEl.textContent = formatDate(review.date);
      nameWrap.appendChild(nameEl);
      nameWrap.appendChild(dateEl);

      top.appendChild(avatar);
      top.appendChild(nameWrap);

      const stars = document.createElement("div");
      stars.className = "review-stars";
      stars.setAttribute("aria-label", review.rating + " out of 5 stars");
      stars.textContent = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);

      const text = document.createElement("p");
      text.className = "review-text";
      text.textContent = review.text;

      card.appendChild(top);
      card.appendChild(stars);
      card.appendChild(text);
      reviewGrid.appendChild(card);
    });
  }

  function formatDate(dateStr) {
    const d = new Date(dateStr);
    if (isNaN(d)) return dateStr;
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  }

  function openReviewModal() {
    reviewModalBackdrop.hidden = false;
    document.body.classList.add("no-scroll");
    document.getElementById("reviewName").focus();
  }
  function closeReviewModal() {
    reviewModalBackdrop.hidden = true;
    document.body.classList.remove("no-scroll");
  }

  function setStarRating(value) {
    state.selectedStar = value;
    reviewRatingValue.value = value;
    document.querySelectorAll(".star-btn").forEach((btn) => {
      btn.classList.toggle("filled", Number(btn.dataset.value) <= value);
    });
  }

  function handleReviewSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("reviewName").value.trim();
    const text = document.getElementById("reviewText").value.trim();
    const rating = Number(reviewRatingValue.value) || 5;
    if (!name || !text) return;

    state.reviews.unshift({
      name,
      rating,
      text,
      date: new Date().toISOString(),
    });
    saveToStorage("boighor_reviews", state.reviews);
    renderReviews();
    reviewForm.reset();
    setStarRating(5);
    closeReviewModal();
  }

  /* =========================================================
     UPCOMING BOOKS RENDER
     ========================================================= */
  function renderUpcomingBooks() {
    const upcomingRow = document.getElementById("upcomingRow");
    upcomingRow.innerHTML = "";
    upcomingBooks.forEach((book) => {
      const card = document.createElement("div");
      card.className = "upcoming-card";

      const coverWrap = document.createElement("div");
      coverWrap.className = "upcoming-cover";

      const img = document.createElement("img");
      img.loading = "lazy";
      img.alt = book.title + " cover";
      img.src = book.image;
      img.addEventListener("error", () => {
        coverWrap.style.display = "flex";
        coverWrap.style.alignItems = "center";
        coverWrap.style.justifyContent = "center";
        coverWrap.innerHTML = `<span style="font-weight:800;color:var(--accent);font-size:.8rem;letter-spacing:1px;">BOI GHOR</span>`;
      });
      if (!book.image || book.image.startsWith("PASTE_")) {
        img.dispatchEvent(new Event("error"));
      } else {
        coverWrap.appendChild(img);
      }

      const badge = document.createElement("span");
      badge.className = "coming-soon-badge";
      badge.textContent = "COMING SOON";
      coverWrap.appendChild(badge);

      const body = document.createElement("div");
      body.className = "upcoming-body";
      body.innerHTML = `
        <p class="upcoming-title">${escapeHtml(book.title)}</p>
        <p class="upcoming-author">${escapeHtml(book.author)}</p>
        <p class="upcoming-date">Expected: ${escapeHtml(book.releaseDate)}</p>
      `;
      const btn = document.createElement("button");
      btn.className = "btn-disabled";
      btn.disabled = true;
      btn.textContent = "Coming Soon";
      body.appendChild(btn);

      card.appendChild(coverWrap);
      card.appendChild(body);
      upcomingRow.appendChild(card);
    });
  }

  /* =========================================================
     KEYBOARD SHORTCUTS
     ========================================================= */
  function handleGlobalKeydown(e) {
    const activeTag = document.activeElement.tagName;
    const isTyping = activeTag === "INPUT" || activeTag === "TEXTAREA";

    if (e.key === "/" && !isTyping) {
      e.preventDefault();
      searchInput.focus();
    }

    if (e.key === "Escape") {
      if (!reviewModalBackdrop.hidden) {
        closeReviewModal();
      } else if (mobileMenu.classList.contains("open")) {
        closeMobileMenu();
      } else if (document.activeElement === searchInput && state.searchTerm) {
        clearSearch();
      }
    }
  }

  /* =========================================================
     INIT
     ========================================================= */
  function init() {
    // Theme
    applyTheme(state.theme);

    // QR code
    const qrImg = document.getElementById("qrCodeImg");
    if (qrImg) {
      qrImg.src = QR_CODE_URL;
      qrImg.addEventListener("error", () => {
        qrImg.style.display = "flex";
        qrImg.style.alignItems = "center";
        qrImg.style.justifyContent = "center";
      });
    }

    renderCategories();
    renderBooks();
    renderRecentlyViewed();
    renderReviews();
    renderUpcomingBooks();
    initRevealSections();
    initHeroParticles();

    // Search
    searchInput.addEventListener("input", handleSearch);
    searchClear.addEventListener("click", clearSearch);
    clearSearchBtn.addEventListener("click", () => {
      clearSearch();
      state.activeCategory = "All";
      state.showFavoritesOnly = false;
      favoritesToggle.classList.remove("active");
      renderCategories();
      renderBooks();
    });

    // Favorites
    favoritesToggle.addEventListener("click", toggleFavoritesFilter);

    // Theme toggles
    themeToggle.addEventListener("click", toggleTheme);
    if (mobileThemeToggle) mobileThemeToggle.addEventListener("click", toggleTheme);

    // Mobile menu
    hamburgerBtn.addEventListener("click", () => {
      mobileMenu.classList.contains("open") ? closeMobileMenu() : openMobileMenu();
    });
    mobileMenuBackdrop.addEventListener("click", closeMobileMenu);
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });

    // Nav smooth scroll (native CSS scroll-behavior handles most; ensure active state updates)
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Back to top
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Reviews
    writeReviewBtn.addEventListener("click", openReviewModal);
    reviewModalClose.addEventListener("click", closeReviewModal);
    reviewModalBackdrop.addEventListener("click", (e) => {
      if (e.target === reviewModalBackdrop) closeReviewModal();
    });
    reviewForm.addEventListener("submit", handleReviewSubmit);
    starInput.querySelectorAll(".star-btn").forEach((btn) => {
      btn.addEventListener("click", () => setStarRating(Number(btn.dataset.value)));
    });
    setStarRating(5);

    // Keyboard shortcuts
    document.addEventListener("keydown", handleGlobalKeydown);

    // Loading screen
    window.addEventListener("load", () => {
      setTimeout(() => {
        document.getElementById("loadingScreen").classList.add("hide");
      }, 350);
    });
    // Fallback in case 'load' already fired
    setTimeout(() => {
      document.getElementById("loadingScreen").classList.add("hide");
    }, 1800);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
