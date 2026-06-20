const stories = [
  {
    id: 1,
    category: "Bangladesh",
    title: "Dhaka transport plan puts bus routes, metro links under one map",
    summary: "A new city mobility proposal aims to connect bus corridors with metro stations and river terminals across the capital.",
    body: "Urban planners say Dhaka's next phase of transport reform depends on making transfers predictable, fares simpler, and footpaths safer near major stations. The plan also recommends more public dashboards so commuters can see route changes before they happen.",
    time: "12 min ago",
    author: "Staff Correspondent",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1400&q=80",
    views: 9820
  },
  {
    id: 2,
    category: "Politics",
    title: "Election dialogue resumes with focus on observer access",
    summary: "Parties returned to the table today as negotiators discussed polling-center security, media movement, and transparent result reporting.",
    body: "The latest round of talks centered on creating confidence in the voting process. Civil society groups urged all sides to publish clear commitments and avoid last-minute procedural changes.",
    time: "28 min ago",
    author: "Political Desk",
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=1400&q=80",
    views: 12140
  },
  {
    id: 3,
    category: "Business",
    title: "Garment exporters look to higher-value orders after steady quarter",
    summary: "Factory owners say buyers are returning with tighter compliance demands and stronger interest in technical textiles.",
    body: "Industry leaders believe Bangladesh can protect its export position by investing in design, speed, worker training, and greener production. Smaller suppliers are asking for easier financing to modernize equipment.",
    time: "43 min ago",
    author: "Business Reporter",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=80",
    views: 8740
  },
  {
    id: 4,
    category: "Sports",
    title: "Tigers prepare pace-heavy plan for next international series",
    summary: "Coaches are testing new-ball combinations as Bangladesh looks for better control in the middle overs.",
    body: "The team management wants bowlers who can attack early without leaking runs at the death. Selectors are also tracking domestic performers before finalizing the squad.",
    time: "1 hr ago",
    author: "Sports Desk",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1400&q=80",
    views: 15430
  },
  {
    id: 5,
    category: "Culture",
    title: "New theatre festival brings young directors to national stage",
    summary: "The weeklong programme features experimental productions, music, and conversations with playwrights from across the country.",
    body: "Organizers say the festival is designed to make theatre more accessible to students and first-time audiences. Several performances will include post-show discussions on language, history, and public memory.",
    time: "2 hrs ago",
    author: "Arts Correspondent",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1400&q=80",
    views: 6210
  },
  {
    id: 6,
    category: "Tech",
    title: "Local startups pitch farm data tools for flood-prone districts",
    summary: "Founders are building SMS alerts, satellite mapping, and low-cost advisory platforms for small farmers.",
    body: "Agritech teams say the challenge is not only prediction, but delivery. Farmers need advice that arrives in Bangla, works on basic phones, and reflects local field conditions.",
    time: "2 hrs ago",
    author: "Technology Desk",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
    views: 6930
  },
  {
    id: 7,
    category: "Bangladesh",
    title: "Coastal clinics expand mobile care before monsoon peak",
    summary: "Health teams are adding boat-based visits and emergency medicine stocks in several vulnerable unions.",
    body: "Local officials say the expanded service will prioritize pregnant women, children, and elderly residents. The model relies on community health workers who can report shortages quickly.",
    time: "3 hrs ago",
    author: "District Desk",
    image: "https://images.unsplash.com/photo-1523958203904-cdcb402031fd?auto=format&fit=crop&w=1400&q=80",
    views: 7150
  },
  {
    id: 8,
    category: "Business",
    title: "Remittance inflow keeps banks optimistic despite import pressure",
    summary: "Analysts say steady wage-earner transfers are supporting liquidity while businesses watch dollar availability closely.",
    body: "Bankers expect the coming weeks to be shaped by festival spending, import settlements, and central-bank guidance. Economists have urged clear communication to protect confidence.",
    time: "4 hrs ago",
    author: "Economy Desk",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
    views: 10370
  },
  {
    id: 9,
    category: "Politics",
    title: "Parliamentary committee asks ministries for project delay reports",
    summary: "The committee requested updated cost, timeline, and contractor details for major public works projects.",
    body: "Lawmakers said citizens should be able to compare original deadlines with current progress. Officials have been asked to submit written responses before the next hearing.",
    time: "5 hrs ago",
    author: "Parliament Reporter",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1400&q=80",
    views: 5340
  },
  {
    id: 10,
    category: "Sports",
    title: "Women's football league draws record crowd in final round",
    summary: "Supporters filled the stands as two title contenders met in a fast, physical match under floodlights.",
    body: "Players described the atmosphere as a sign that investment in women's football is beginning to pay off. Clubs are calling for stronger youth pipelines and more televised fixtures.",
    time: "6 hrs ago",
    author: "Sports Reporter",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1400&q=80",
    views: 7640
  },
  {
    id: 11,
    category: "Culture",
    title: "Bookstores report strong sales for new Bangla fiction releases",
    summary: "Publishers credit younger readers, campus events, and social-media discussions for a lively season.",
    body: "Independent bookstores say readers are asking for contemporary city stories, historical novels, and translated literature. Several authors are planning district tours.",
    time: "7 hrs ago",
    author: "Books Desk",
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1400&q=80",
    views: 4860
  },
  {
    id: 12,
    category: "Tech",
    title: "Universities open robotics labs for school-level mentoring",
    summary: "Engineering students will guide school teams through sensors, coding basics, and competition design.",
    body: "Mentors say early exposure can help students connect math and science with practical problem-solving. The labs will host weekend sessions throughout the year.",
    time: "8 hrs ago",
    author: "Campus Desk",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
    views: 5980
  },
  {
  id: 13,
  category: "Politics",
  title: "Your news title here",
  summary: "Short summary shown on the card.",
  body: "Full article text shown when readers click Read.",
  time: "Just now",
  author: "LiveNews24 Desk",
  image: "https://your-image-url.jpg",
  views: 1000
  }
];

const liveUpdates = [
  ["Now", "Traffic slow on Airport Road after evening rain; police advise extra travel time."],
  ["7:42 PM", "Commerce ministry schedules meeting with market committees on essentials pricing."],
  ["7:18 PM", "Bangladesh Meteorological Department forecasts scattered showers in Sylhet and Chattogram."],
  ["6:55 PM", "Education board opens online correction window for exam registration data."],
  ["6:21 PM", "Fire service reports successful drill at a major shopping complex in Dhaka."]
];

const state = {
  category: "All",
  query: "",
  visible: 6,
  saved: JSON.parse(localStorage.getItem("livenews24Saved") || "[]")
};

const els = {
  todayDate: document.querySelector("#todayDate"),
  liveClock: document.querySelector("#liveClock"),
  tickerText: document.querySelector("#tickerText"),
  leadStory: document.querySelector("#leadStory"),
  liveList: document.querySelector("#liveList"),
  searchInput: document.querySelector("#searchInput"),
  newsGrid: document.querySelector("#newsGrid"),
  storyCount: document.querySelector("#storyCount"),
  bookmarkCount: document.querySelector("#bookmarkCount"),
  filterLabel: document.querySelector("#filterLabel"),
  trendingList: document.querySelector("#trendingList"),
  savedList: document.querySelector("#savedList"),
  loadMore: document.querySelector("#loadMore"),
  emptyState: document.querySelector("#emptyState"),
  modal: document.querySelector("#articleModal"),
  modalContent: document.querySelector("#modalContent"),
  newsletter: document.querySelector("#newsletterModal"),
  menuButton: document.querySelector("#menuButton"),
  navLinks: document.querySelector("#navLinks")
};

function formatDateTime() {
  const now = new Date();
  els.todayDate.textContent = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(now);
  els.liveClock.textContent = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  }).format(now);
}

function filteredStories() {
  return stories.filter((story) => {
    const matchesCategory = state.category === "All" || story.category === state.category;
    const haystack = `${story.title} ${story.summary} ${story.category} ${story.author}`.toLowerCase();
    return matchesCategory && haystack.includes(state.query.toLowerCase());
  });
}

function renderLead() {
  const lead = stories[0];
  els.leadStory.style.setProperty("--lead-image", `url("${lead.image}")`);
  els.leadStory.innerHTML = `
    <div class="lead-copy">
      <span class="tag">${lead.category}</span>
      <h1>${lead.title}</h1>
      <p>${lead.summary}</p>
      <div class="story-actions">
        <button class="read-btn" type="button" data-read="${lead.id}">Read full story</button>
        <button class="save-btn" type="button" data-save="${lead.id}">${state.saved.includes(lead.id) ? "Saved" : "Save story"}</button>
        <span>${lead.time} by ${lead.author}</span>
      </div>
    </div>
  `;
}

function renderLiveUpdates() {
  els.liveList.innerHTML = liveUpdates.map(([time, text]) => `
    <div class="live-item">
      <time>${time}</time>
      <p>${text}</p>
    </div>
  `).join("");
  els.tickerText.textContent = liveUpdates.map(([, text]) => text).join("  |  ");
}

function renderCards() {
  const results = filteredStories();
  const visibleStories = results.slice(0, state.visible);
  els.newsGrid.innerHTML = visibleStories.map((story) => `
    <article class="news-card">
      <div class="news-card__image" style="--image: url('${story.image}')"></div>
      <div class="news-card__body">
        <div class="meta">
          <span>${story.category}</span>
          <span>${story.time}</span>
        </div>
        <h3>${story.title}</h3>
        <p>${story.summary}</p>
        <div class="story-actions">
          <button class="read-btn" type="button" data-read="${story.id}">Read</button>
          <button class="save-btn" type="button" data-save="${story.id}">${state.saved.includes(story.id) ? "Saved" : "Save"}</button>
        </div>
      </div>
    </article>
  `).join("");

  els.emptyState.hidden = results.length > 0;
  els.loadMore.hidden = state.visible >= results.length;
  els.storyCount.textContent = results.length;
  els.filterLabel.textContent = state.category === "All" ? "All sections" : state.category;
}

function renderTrending() {
  const trending = [...stories].sort((a, b) => b.views - a.views).slice(0, 5);
  els.trendingList.innerHTML = trending.map((story) => `
    <li><button type="button" data-read="${story.id}">${story.title}</button></li>
  `).join("");
}

function renderSaved() {
  els.bookmarkCount.textContent = state.saved.length;
  if (!state.saved.length) {
    els.savedList.innerHTML = "<p>No saved stories yet.</p>";
    return;
  }

  els.savedList.innerHTML = state.saved.map((id) => stories.find((story) => story.id === id)).filter(Boolean).map((story) => `
    <button type="button" data-read="${story.id}">${story.title}</button>
  `).join("");
}

function renderAll() {
  renderLead();
  renderLiveUpdates();
  renderCards();
  renderTrending();
  renderSaved();
}

function setCategory(category) {
  state.category = category;
  state.visible = 6;
  document.querySelectorAll(".nav-link").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.category === category);
  });
  renderCards();
  els.navLinks.classList.remove("is-open");
}

function openArticle(id) {
  const story = stories.find((item) => item.id === Number(id));
  if (!story) return;

  els.modalContent.innerHTML = `
    <article class="article-detail">
      <img src="${story.image}" alt="">
      <div class="meta">
        <span>${story.category}</span>
        <span>${story.time}</span>
        <span>${story.author}</span>
      </div>
      <h2>${story.title}</h2>
      <p>${story.summary}</p>
      <p>${story.body}</p>
      <p>LiveNews24 will continue to update this developing story as more verified information becomes available from officials, field reporters, and public records.</p>
      <button class="save-btn" type="button" data-save="${story.id}">${state.saved.includes(story.id) ? "Saved" : "Save story"}</button>
    </article>
  `;
  els.modal.showModal();
}

function toggleSave(id) {
  const storyId = Number(id);
  if (state.saved.includes(storyId)) {
    state.saved = state.saved.filter((savedId) => savedId !== storyId);
  } else {
    state.saved = [storyId, ...state.saved];
  }
  localStorage.setItem("livenews24Saved", JSON.stringify(state.saved));
  renderAll();
}

document.addEventListener("click", (event) => {
  const readButton = event.target.closest("[data-read]");
  const saveButton = event.target.closest("[data-save]");
  const categoryLink = event.target.closest("[data-category-link]");

  if (readButton) openArticle(readButton.dataset.read);
  if (saveButton) toggleSave(saveButton.dataset.save);
  if (categoryLink) {
    event.preventDefault();
    setCategory(categoryLink.dataset.categoryLink);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

document.querySelectorAll(".nav-link").forEach((button) => {
  button.addEventListener("click", () => setCategory(button.dataset.category));
});

els.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  state.visible = 6;
  renderCards();
});

els.loadMore.addEventListener("click", () => {
  state.visible += 3;
  renderCards();
});

els.menuButton.addEventListener("click", () => {
  els.navLinks.classList.toggle("is-open");
});

document.querySelector("#themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("livenews24Theme", document.body.classList.contains("dark") ? "dark" : "light");
});

document.querySelector("[data-close-modal]").addEventListener("click", () => els.modal.close());
document.querySelector("[data-open-newsletter]").addEventListener("click", () => els.newsletter.showModal());
document.querySelector("[data-close-newsletter]").addEventListener("click", () => els.newsletter.close());
document.querySelector("[data-open-opinion]").addEventListener("click", () => openArticle(1));

document.querySelector("#newsletterForm").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#formNote").textContent = "Thanks. Your demo subscription is confirmed locally.";
  document.querySelector("#emailInput").value = "";
});

if (localStorage.getItem("livenews24Theme") === "dark") {
  document.body.classList.add("dark");
}

formatDateTime();
renderAll();
setInterval(formatDateTime, 1000);
