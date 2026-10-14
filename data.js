/* =====================================================================
   VICTOR'S FOOTBALL LENS - CONTENT FILE
   This is the only file you need to edit to update the website.
   Each list below holds items; copy one item, paste it at the top of
   the list, change the text, and save. Keep commas between items.
   The sample content below is placeholder text. Replace it with yours.
   ===================================================================== */
window.VFL = {

  site: {
    name: "Victor's Football Lens",
    tagline: "Football news, match analysis, player stories and highlights, seen through a sharper lens.",
    url: "https://www.victorsfootballlens.com", // change to your real web address
    email: "hello@victorsfootballlens.com",      // change to your real email
    social: [
      { name: "YouTube", url: "https://youtube.com" },
      { name: "Instagram", url: "https://instagram.com" },
      { name: "X (Twitter)", url: "https://x.com" },
      { name: "TikTok", url: "https://tiktok.com" }
    ]
  },

  // Allowed categories for news stories (used for filter buttons)
  categories: ["Match Analysis", "Transfers", "Stories", "Highlights", "Opinion"],

  // Scrolling red bar on the homepage. One short line per rumour.
  transfers: [
    "Sample rumour: Midfielder linked with a summer switch",
    "Sample rumour: Club said to be preparing a bid for a young striker",
    "Sample rumour: Veteran defender close to a contract extension",
    "Sample rumour: Winger attracting interest from three clubs"
  ],

  /* NEWS
     id: short unique name with no spaces (used in the page link)
     date: YYYY-MM-DD   featured: true puts a story in the big homepage slot
     image: optional picture link or file in the images folder, e.g. "images/story1.jpg"
     body: each line in quotes is one paragraph */
  news: [
    {
      id: "pressing-traps-explained",
      title: "How pressing traps are winning the midfield battle",
      category: "Match Analysis",
      date: "2026-10-12",
      author: "Victor",
      featured: true,
      image: "",
      excerpt: "A look at the tactical patterns that are deciding tight matches this season.",
      body: [
        "This is a sample article. Replace this text with your own match analysis. Explain what happened on the pitch and why it mattered.",
        "Break your analysis into short paragraphs. Readers on mobile phones prefer shorter blocks of text, with one idea in each.",
        "Finish with a clear takeaway so readers know what to watch for in the next game."
      ]
    },
    {
      id: "transfer-window-rumours",
      title: "Transfer rumours worth tracking this month",
      category: "Transfers",
      date: "2026-10-11",
      author: "Victor",
      image: "",
      excerpt: "Our round-up of the stories getting the most attention, and how likely they really are.",
      body: [
        "This is a sample transfer story. Always say where a rumour comes from and how reliable you think it is.",
        "Readers trust sites that separate confirmed deals from speculation, so label each item clearly."
      ]
    },
    {
      id: "rising-stars",
      title: "Five young players to follow this season",
      category: "Stories",
      date: "2026-10-09",
      author: "Victor",
      image: "",
      excerpt: "Fresh talents who could define the next few years of the game.",
      body: [
        "This is a sample feature. Introduce each player, explain what makes them special, and share a moment that shows it.",
        "Add a short closing paragraph asking readers who they would add to the list."
      ]
    },
    {
      id: "weekend-highlights-roundup",
      title: "Weekend highlights: the goals you may have missed",
      category: "Highlights",
      date: "2026-10-08",
      author: "Victor",
      image: "",
      excerpt: "A quick tour of the best strikes, saves and skills from the weekend.",
      body: [
        "This is a sample highlights post. Link to the matching video on the Videos page and describe the top moments in a few lines each."
      ]
    },
    {
      id: "why-the-derby-matters",
      title: "Why the derby still matters more than the table",
      category: "Opinion",
      date: "2026-10-06",
      author: "Victor",
      image: "",
      excerpt: "Form goes out of the window when the city stops for ninety minutes.",
      body: [
        "This is a sample opinion piece. Make your argument clearly and back it up with moments readers remember.",
        "Opinion pieces perform best when they invite readers to disagree. End with a question."
      ]
    },
    {
      id: "set-piece-routines",
      title: "Set pieces: the quiet revolution in tactics",
      category: "Match Analysis",
      date: "2026-10-04",
      author: "Victor",
      image: "",
      excerpt: "Corners and free kicks are becoming rehearsed plays, and the results show it.",
      body: [
        "This is a sample analysis article. Use clear examples from recent matches to show how routines are designed and why they work."
      ]
    },
    {
      id: "late-bloomers",
      title: "The late bloomers who found their best form after 28",
      category: "Stories",
      date: "2026-10-02",
      author: "Victor",
      image: "",
      excerpt: "Not every star arrives as a teenager. These careers took a different path.",
      body: [
        "This is a sample story. Tell it like a story: where the player started, the turning point, and where they are now."
      ]
    },
    {
      id: "goalkeeper-market",
      title: "The goalkeeper market: who is available and who is not",
      category: "Transfers",
      date: "2026-09-30",
      author: "Victor",
      image: "",
      excerpt: "A position that rarely makes headlines is suddenly very busy.",
      body: [
        "This is a sample transfer analysis article. Replace it with your own reporting and opinion."
      ]
    }
  ],

  /* PLAYERS
     stats: add or remove any labels you like, e.g. { "Goals": 12, "Assists": 7 }
     number: shirt number (optional)   born: birth year (age is worked out for you)
     image: optional picture; if empty a stylish initials card is shown */
  players: [
    { name: "Erling Haaland", pos: "Forward", nationality: "Norway", born: 2000, number: "", club: "", image: "",
      stats: { "Goals": "-", "Assists": "-", "Apps": "-" },
      bio: "Sample profile. Powerful, fast and relentless in front of goal. Add your own scouting notes, career highlights and the stats you want to show." },
    { name: "Jude Bellingham", pos: "Midfielder", nationality: "England", born: 2003, number: "", club: "", image: "",
      stats: { "Goals": "-", "Assists": "-", "Apps": "-" },
      bio: "Sample profile. A complete midfielder who arrives late in the box and drives play forward. Replace this with your own writing." },
    { name: "Lamine Yamal", pos: "Forward", nationality: "Spain", born: 2007, number: "", club: "", image: "",
      stats: { "Goals": "-", "Assists": "-", "Apps": "-" },
      bio: "Sample profile. A creative winger with confidence well beyond his years. Replace this with your own writing." },
    { name: "Victor Osimhen", pos: "Forward", nationality: "Nigeria", born: 1998, number: "", club: "", image: "",
      stats: { "Goals": "-", "Assists": "-", "Apps": "-" },
      bio: "Sample profile. A fearless striker known for movement, pressing and aerial power. Replace this with your own writing." },
    { name: "Mohamed Salah", pos: "Forward", nationality: "Egypt", born: 1992, number: "", club: "", image: "",
      stats: { "Goals": "-", "Assists": "-", "Apps": "-" },
      bio: "Sample profile. A prolific right-sided attacker with a long record of consistent output. Replace this with your own writing." },
    { name: "Bukayo Saka", pos: "Forward", nationality: "England", born: 2001, number: "", club: "", image: "",
      stats: { "Goals": "-", "Assists": "-", "Apps": "-" },
      bio: "Sample profile. A tireless winger who creates and scores in equal measure. Replace this with your own writing." }
  ],

  /* FIXTURES (upcoming). time can be "TBC". Delete a match once it is played
     and add it to RESULTS below. */
  fixtures: [
    { date: "2026-10-17", time: "15:00", comp: "Sample League", home: "Lagos Lions", away: "Abuja Eagles" },
    { date: "2026-10-17", time: "17:30", comp: "Sample League", home: "Kano Stars", away: "Enugu Rangers" },
    { date: "2026-10-18", time: "16:00", comp: "Sample League", home: "Port Harcourt United", away: "Ibadan City" },
    { date: "2026-10-21", time: "20:00", comp: "Sample Cup", home: "Abuja Eagles", away: "Kano Stars" }
  ],

  // RESULTS (finished matches). hs = home score, as = away score
  results: [
    { date: "2026-10-11", comp: "Sample League", home: "Enugu Rangers", away: "Lagos Lions", hs: 1, as: 2 },
    { date: "2026-10-10", comp: "Sample League", home: "Ibadan City", away: "Kano Stars", hs: 0, as: 0 },
    { date: "2026-10-04", comp: "Sample League", home: "Abuja Eagles", away: "Port Harcourt United", hs: 3, as: 1 },
    { date: "2026-10-03", comp: "Sample Cup", home: "Lagos Lions", away: "Ibadan City", hs: 2, as: 2 }
  ],

  /* VIDEOS
     youtubeId: the part after "v=" in a YouTube link.
     Example: youtube.com/watch?v=ABC123xyz  ->  youtubeId: "ABC123xyz"
     Upload to your own YouTube channel, then paste the ID here. */
  videos: [
    { title: "Sample video: Best goals of the weekend", youtubeId: "", date: "2026-10-12" },
    { title: "Sample video: Match analysis in 5 minutes", youtubeId: "", date: "2026-10-10" },
    { title: "Sample video: Skill moves breakdown", youtubeId: "", date: "2026-10-07" },
    { title: "Sample video: Top 10 saves this month", youtubeId: "", date: "2026-10-03" },
    { title: "Sample video: Transfer news round-up", youtubeId: "", date: "2026-10-01" },
    { title: "Sample video: Player spotlight", youtubeId: "", date: "2026-09-28" }
  ]
};
