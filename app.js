/* Victor's Football Lens - shared rendering. You normally never need to edit this file.
   Add or change content in js/data.js instead. */
(function () {
  var D = window.VFL;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  var fmt = function (d) {
    return new Date(d + 'T12:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  };
  var initials = function (s) { return s.split(/\s+/).map(function (w) { return w[0]; }).slice(0, 2).join('').toUpperCase(); };
  var byDateDesc = function (a, b) { return b.date.localeCompare(a.date); };
  var byDateAsc = function (a, b) { return a.date.localeCompare(b.date); };
  var news = D.news.slice().sort(byDateDesc);
  var pageEl = document.querySelector('[data-page]');
  var page = pageEl ? pageEl.getAttribute('data-page') : 'home';
  var main = $('#main');

  /* ---------- Shared pieces ---------- */
  var LOGO = '<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="19" fill="#e10600"/><circle cx="20" cy="20" r="12" fill="none" stroke="#fff" stroke-width="3"/><circle cx="20" cy="20" r="5" fill="#fff"/></svg>';
  var NAV = [['index.html', 'Home', 'home'], ['news.html', 'News', 'news'], ['players.html', 'Players', 'players'],
    ['fixtures.html', 'Fixtures', 'fixtures'], ['videos.html', 'Videos', 'videos'], ['about.html', 'About', 'about']];

  function header() {
    var links = NAV.map(function (n) {
      var on = (n[2] === page || (page === 'article' && n[2] === 'news')) ? ' class="on" aria-current="page"' : '';
      return '<a href="' + n[0] + '"' + on + '>' + n[1] + '</a>';
    }).join('');
    $('#site-header').innerHTML =
      '<a class="skip" href="#main">Skip to content</a>' +
      '<header class="hdr"><div class="wrap">' +
      '<a class="logo" href="index.html" aria-label="' + esc(D.site.name) + ' home">' + LOGO +
      '<span>Victor\'s Football<small>LENS</small></span></a>' +
      '<button class="burger" aria-label="Open menu" aria-expanded="false">&#9776;</button>' +
      '<nav class="nav" aria-label="Main">' + links + '</nav></div></header>';
    var b = $('.burger'), n = $('.nav');
    b.addEventListener('click', function () {
      var o = n.classList.toggle('open');
      b.setAttribute('aria-expanded', o);
    });
  }

  function footer() {
    var soc = D.site.social.map(function (s) {
      return '<a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.name) + '</a>';
    }).join('');
    $('#site-footer').innerHTML =
      '<footer class="ftr"><div class="wrap"><div class="fg"><div>' +
      '<a class="logo" href="index.html">' + LOGO + '<span>Victor\'s Football<small>LENS</small></span></a>' +
      '<p>' + esc(D.site.tagline) + '</p></div>' +
      '<div><h4>Explore</h4>' + NAV.map(function (n) { return '<a href="' + n[0] + '">' + n[1] + '</a>'; }).join('') + '</div>' +
      '<div><h4>Follow</h4>' + soc + '<a href="mailto:' + esc(D.site.email) + '">' + esc(D.site.email) + '</a></div></div>' +
      '<div class="copy">&copy; ' + new Date().getFullYear() + ' ' + esc(D.site.name) + '. All rights reserved.</div></div></footer>';
  }

  function media(n) {
    return n.image ? '<img src="' + esc(n.image) + '" alt="' + esc(n.title) + '" loading="lazy" decoding="async">'
      : '<div class="ph">' + esc(n.category) + '</div>';
  }
  function card(n) {
    return '<a class="card" href="article.html?id=' + encodeURIComponent(n.id) + '"><div class="thumb">' + media(n) +
      '<span class="tag">' + esc(n.category) + '</span></div><div class="cb"><h3>' + esc(n.title) + '</h3><p>' +
      esc(n.excerpt) + '</p><div class="meta">' + fmt(n.date) + ' &middot; ' + esc(n.author) + '</div></div></a>';
  }
  function mini(n) {
    return '<a class="mini" href="article.html?id=' + encodeURIComponent(n.id) + '"><div class="thumb">' + media(n) +
      '</div><div class="t"><span class="tag">' + esc(n.category) + '</span><h3>' + esc(n.title) + '</h3><div class="meta">' + fmt(n.date) + '</div></div></a>';
  }
  function videoCard(v) {
    var thumb = v.youtubeId
      ? '<img src="https://i.ytimg.com/vi/' + esc(v.youtubeId) + '/hqdefault.jpg" alt="' + esc(v.title) + '" loading="lazy">'
      : '<div class="ph">VIDEO</div>';
    return '<article class="card vid" data-yt="' + esc(v.youtubeId || '') + '"><div class="thumb" role="button" tabindex="0" aria-label="Play ' + esc(v.title) + '">' +
      thumb + '<div class="play"><i>&#9654;</i></div></div><div class="cb"><h3>' + esc(v.title) + '</h3><div class="meta">' +
      fmt(v.date) + '</div></div></article>';
  }
  function wireVideos(root) {
    root.querySelectorAll('.vid').forEach(function (el) {
      var t = el.querySelector('.thumb');
      var go = function () {
        var id = el.getAttribute('data-yt');
        if (!id) { t.innerHTML = '<div class="ph" style="font-size:1rem;text-align:center;padding:14px">Add a YouTube ID for this video in js/data.js</div>'; return; }
        t.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) +
          '?autoplay=1&rel=0" title="Video player" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
      };
      t.addEventListener('click', go);
      t.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
    });
  }
  function playerCard(p, i) {
    var pic = p.image ? '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + '" loading="lazy">' : '<span>' + esc(initials(p.name)) + '</span>';
    return '<button class="card pc" data-i="' + i + '" style="text-align:center;color:inherit;font:inherit"><div class="pic">' + pic +
      (p.number ? '<div class="num">' + esc(p.number) + '</div>' : '') + '</div><div class="cb"><h3>' + esc(p.name) +
      '</h3><div class="pos">' + esc(p.pos) + ' &middot; ' + esc(p.nationality) + '</div></div></button>';
  }
  function fixtureRow(f) {
    return '<div class="fx"><span class="h">' + esc(f.home) + '</span><span class="sc up">' + esc(f.time || 'TBC') +
      '</span><span>' + esc(f.away) + '</span><small>' + fmt(f.date) + ' &middot; ' + esc(f.comp) + '</small></div>';
  }
  function resultRow(r) {
    return '<div class="fx"><span class="h">' + esc(r.home) + '</span><span class="sc">' + esc(r.hs) + ' - ' + esc(r.as) +
      '</span><span>' + esc(r.away) + '</span><small>' + fmt(r.date) + ' &middot; ' + esc(r.comp) + '</small></div>';
  }
  function head(title, link, href) {
    return '<div class="sh"><h2>' + title + '</h2>' + (link ? '<a href="' + href + '">' + link + ' &rarr;</a>' : '') + '</div>';
  }
  function setMeta(title, desc, url) {
    document.title = title;
    var d = $('meta[name="description"]');
    if (d) d.setAttribute('content', desc);
    [['og:title', title], ['og:description', desc], ['og:url', url]].forEach(function (x) {
      var m = $('meta[property="' + x[0] + '"]');
      if (m) m.setAttribute('content', x[1]);
    });
    var c = $('link[rel="canonical"]');
    if (c && url) c.setAttribute('href', url);
  }

  /* ---------- Pages ---------- */
  var R = {};

  R.home = function () {
    var feat = news.filter(function (n) { return n.featured; })[0] || news[0];
    var rest = news.filter(function (n) { return n !== feat; });
    var upcoming = D.fixtures.slice().sort(byDateAsc).slice(0, 4);
    var recent = D.results.slice().sort(byDateDesc).slice(0, 4);
    var ticker = '';
    if (D.transfers && D.transfers.length) {
      var items = D.transfers.map(function (t) { return '<span><b>RUMOUR</b>' + esc(t) + '</span>'; }).join('');
      ticker = '<div class="ticker" aria-label="Transfer rumours"><div class="row">' + items + items + '</div></div>';
    }
    main.innerHTML = ticker +
      '<div class="wrap"><div class="hero"><a class="lead" href="article.html?id=' + encodeURIComponent(feat.id) + '"><div class="bg">' + media(feat) +
      '</div><div class="txt"><span class="tag">' + esc(feat.category) + '</span><h1>' + esc(feat.title) + '</h1><p>' + esc(feat.excerpt) +
      '</p><div class="meta" style="margin-top:10px">' + fmt(feat.date) + ' &middot; ' + esc(feat.author) + '</div></div></a>' +
      '<div class="side">' + rest.slice(0, 3).map(mini).join('') + '</div></div>' +
      '<section class="blk">' + head('Latest News', 'All news', 'news.html') + '<div class="grid g3">' + rest.slice(3, 9).map(card).join('') + '</div></section>' +
      '<section class="blk"><div class="cols"><div>' + head('Video Highlights', 'All videos', 'videos.html') +
      '<div class="grid g2" id="hv">' + D.videos.slice().sort(byDateDesc).slice(0, 2).map(videoCard).join('') + '</div></div>' +
      '<div><div class="sh"><h2>Matchday</h2><a href="fixtures.html">Full list &rarr;</a></div><div class="panel"><h3>Upcoming</h3>' +
      upcoming.map(fixtureRow).join('') + '</div><div class="panel" style="margin-top:16px"><h3>Latest Results</h3>' +
      recent.map(resultRow).join('') + '</div></div></div></section>' +
      '<section class="blk">' + head('Players to Watch', 'All players', 'players.html') + '<div class="grid g4" id="hp">' +
      D.players.slice(0, 4).map(playerCard).join('') + '</div></section></div>';
    wireVideos($('#hv'));
    wirePlayers($('#hp'), function () { return D.players.slice(0, 4); });
  };

  R.news = function () {
    var cats = ['All'].concat(D.categories);
    var state = { c: 'All', q: '' };
    main.innerHTML = '<div class="wrap"><div class="page-title"><h1>Football <span>News</span></h1><p>Match reports, analysis, transfer rumours and stories from around the game.</p></div>' +
      '<div class="bar" id="chips">' + cats.map(function (c, i) { return '<button class="chip' + (i ? '' : ' on') + '" data-c="' + esc(c) + '">' + esc(c) + '</button>'; }).join('') +
      '<input class="s" id="q" type="search" placeholder="Search news..." aria-label="Search news"></div><div class="grid g3" id="list"></div></div>';
    function draw() {
      var q = state.q.toLowerCase();
      var l = news.filter(function (n) {
        return (state.c === 'All' || n.category === state.c) && (!q || (n.title + ' ' + n.excerpt).toLowerCase().indexOf(q) > -1);
      });
      $('#list').innerHTML = l.length ? l.map(card).join('') : '<p class="empty">No stories found. Try another search or category.</p>';
    }
    $('#chips').addEventListener('click', function (e) {
      var b = e.target.closest('.chip'); if (!b) return;
      state.c = b.getAttribute('data-c');
      document.querySelectorAll('#chips .chip').forEach(function (x) { x.classList.toggle('on', x === b); });
      draw();
    });
    $('#q').addEventListener('input', function (e) { state.q = e.target.value; draw(); });
    var pre = new URLSearchParams(location.search).get('cat');
    if (pre && cats.indexOf(pre) > -1) { var btn = document.querySelector('#chips .chip[data-c="' + pre + '"]'); if (btn) btn.click(); } else draw();
  };

  R.article = function () {
    var id = new URLSearchParams(location.search).get('id');
    var n = news.filter(function (x) { return x.id === id; })[0];
    if (!n) {
      main.innerHTML = '<div class="wrap"><div class="page-title"><h1>Story not <span>found</span></h1><p>That article may have moved. <a href="news.html" style="color:var(--red)">Browse all news</a>.</p></div></div>';
      document.title = 'Story not found | ' + D.site.name; return;
    }
    var url = D.site.url + '/article.html?id=' + encodeURIComponent(n.id);
    setMeta(n.title + ' | ' + D.site.name, n.excerpt, url);
    var ld = document.createElement('script'); ld.type = 'application/ld+json';
    ld.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'NewsArticle', headline: n.title, datePublished: n.date,
      author: { '@type': 'Person', name: n.author }, publisher: { '@type': 'Organization', name: D.site.name },
      description: n.excerpt, image: n.image ? [n.image] : undefined, mainEntityOfPage: url
    });
    document.head.appendChild(ld);
    var related = news.filter(function (x) { return x.id !== n.id && x.category === n.category; }).concat(news.filter(function (x) { return x.id !== n.id && x.category !== n.category; })).slice(0, 3);
    var shareUrl = encodeURIComponent(url), shareTxt = encodeURIComponent(n.title);
    main.innerHTML = '<article class="art"><a class="tag" href="news.html?cat=' + encodeURIComponent(n.category) + '">' + esc(n.category) + '</a><h1>' + esc(n.title) +
      '</h1><div class="meta">By ' + esc(n.author) + ' &middot; ' + fmt(n.date) + '</div><div class="hero-img">' + media(n) + '</div>' +
      n.body.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') +
      '<div class="share"><a class="btn ghost" target="_blank" rel="noopener" href="https://wa.me/?text=' + shareTxt + '%20' + shareUrl + '">Share on WhatsApp</a>' +
      '<a class="btn ghost" target="_blank" rel="noopener" href="https://twitter.com/intent/tweet?text=' + shareTxt + '&url=' + shareUrl + '">Share on X</a></div></article>' +
      '<div class="wrap"><section class="blk">' + head('More Stories') + '<div class="grid g3">' + related.map(card).join('') + '</div></section></div>';
  };

  function wirePlayers(root, getList) {
    var dlg = $('#pdlg');
    if (!dlg) { dlg = document.createElement('dialog'); dlg.id = 'pdlg'; document.body.appendChild(dlg); }
    root.addEventListener('click', function (e) {
      var b = e.target.closest('.pc'); if (!b) return;
      var p = getList()[+b.getAttribute('data-i')];
      var age = p.born ? new Date().getFullYear() - p.born : '';
      var stats = Object.keys(p.stats || {}).map(function (k) { return '<div><b>' + esc(p.stats[k]) + '</b><span>' + esc(k) + '</span></div>'; }).join('');
      dlg.innerHTML = '<div class="dl"><button class="x" aria-label="Close">&times;</button><span class="tag">' + esc(p.pos) + '</span><h2 style="margin-top:10px">' + esc(p.name) +
        '</h2><div class="pos">' + esc(p.nationality) + (age ? ' &middot; Age ~' + age : '') + (p.club ? ' &middot; ' + esc(p.club) : '') + '</div>' +
        (stats ? '<div class="stats">' + stats + '</div>' : '') + '<p style="color:#ddd">' + esc(p.bio) + '</p></div>';
      dlg.showModal();
      dlg.querySelector('.x').addEventListener('click', function () { dlg.close(); });
    });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
  }

  R.players = function () {
    var pos = ['All'].concat(Array.from(new Set(D.players.map(function (p) { return p.pos; }))));
    var state = { p: 'All', q: '' }, shown = D.players;
    main.innerHTML = '<div class="wrap"><div class="page-title"><h1>Player <span>Profiles</span></h1><p>Meet the players we are following. Tap a card for the full profile.</p></div>' +
      '<div class="bar" id="chips">' + pos.map(function (c, i) { return '<button class="chip' + (i ? '' : ' on') + '" data-c="' + esc(c) + '">' + esc(c) + '</button>'; }).join('') +
      '<input class="s" id="q" type="search" placeholder="Search players..." aria-label="Search players"></div><div class="grid g4" id="list"></div></div>';
    var root = $('#list');
    function draw() {
      var q = state.q.toLowerCase();
      shown = D.players.filter(function (p) { return (state.p === 'All' || p.pos === state.p) && (!q || p.name.toLowerCase().indexOf(q) > -1); });
      root.innerHTML = shown.length ? shown.map(playerCard).join('') : '<p class="empty">No players found.</p>';
    }
    wirePlayers(root, function () { return shown; });
    $('#chips').addEventListener('click', function (e) {
      var b = e.target.closest('.chip'); if (!b) return;
      state.p = b.getAttribute('data-c');
      document.querySelectorAll('#chips .chip').forEach(function (x) { x.classList.toggle('on', x === b); });
      draw();
    });
    $('#q').addEventListener('input', function (e) { state.q = e.target.value; draw(); });
    draw();
  };

  R.fixtures = function () {
    main.innerHTML = '<div class="wrap"><div class="page-title"><h1>Fixtures &amp; <span>Results</span></h1><p>Upcoming matches and the latest scores.</p></div>' +
      '<div class="bar" id="tabs"><button class="chip on" data-t="f">Fixtures</button><button class="chip" data-t="r">Results</button></div><div id="list" class="panel"></div></div>';
    function group(items, row, sorter) {
      var by = {};
      items.slice().sort(sorter).forEach(function (i) { (by[i.comp] = by[i.comp] || []).push(i); });
      var keys = Object.keys(by);
      return keys.length ? keys.map(function (k) { return '<div class="comp">' + esc(k) + '</div>' + by[k].map(row).join(''); }).join('') : '<p class="empty">Nothing to show yet.</p>';
    }
    function draw(t) { $('#list').innerHTML = t === 'f' ? group(D.fixtures, fixtureRow, byDateAsc) : group(D.results, resultRow, byDateDesc); }
    $('#tabs').addEventListener('click', function (e) {
      var b = e.target.closest('.chip'); if (!b) return;
      document.querySelectorAll('#tabs .chip').forEach(function (x) { x.classList.toggle('on', x === b); });
      draw(b.getAttribute('data-t'));
    });
    draw('f');
  };

  R.videos = function () {
    main.innerHTML = '<div class="wrap"><div class="page-title"><h1>Video <span>Highlights</span></h1><p>Goals, skills and match moments. Tap a video to play.</p></div>' +
      '<div class="grid g3" id="list" style="margin-top:24px">' + D.videos.slice().sort(byDateDesc).map(videoCard).join('') + '</div></div>';
    wireVideos($('#list'));
  };

  R.about = function () { /* static content lives in about.html */ };

  header(); footer();
  if (R[page]) R[page]();
})();
