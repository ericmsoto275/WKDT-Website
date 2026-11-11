// WKDT recordings library (podcasts.html)
//
// To add a recording: copy one line inside the right list below and fill it in.
//   title:       name shown on the dropdown
//   date:        YYYY-MM-DD (newest dates are listed first automatically)
//   description: optional one-liner (use '' for none)
//   spotify:     full Spotify link for the episode or show (use '' if none yet)
//   apple:       full Apple Podcasts link (use '' if none yet - the button is simply hidden)
// Buttons only appear for the links that are filled in.
const LIBRARY = {
    performances: [
    ],
    sportscasting: [
    ],
    podcasts: [
        { title: 'WKDT Test 1', date: '2026-11-10', description: 'Just a test.', spotify: 'https://open.spotify.com/episode/4kBNoqEN2vg34ukr1qJTcR', apple: '' },
    ],
    radioShows: [
    ],
};

function formatLibraryDate(isoDate) {
    const [y, m, d] = isoDate.split('-').map(Number);
    return new Date(y, m - 1, d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function isSafeLink(url) {
    return typeof url === 'string' && url.startsWith('https://');
}

function buildEntry(item) {
    const entry = document.createElement('details');
    entry.className = 'mediaEntry';

    const summary = document.createElement('summary');
    const title = document.createElement('span');
    title.className = 'mediaTitle';
    title.textContent = item.title;
    const date = document.createElement('time');
    date.className = 'mediaDate';
    date.dateTime = item.date;
    date.textContent = formatLibraryDate(item.date);
    summary.append(title, date);
    entry.appendChild(summary);

    const body = document.createElement('div');
    body.className = 'mediaBody';
    if (item.description) {
        const p = document.createElement('p');
        p.textContent = item.description;
        body.appendChild(p);
    }
    const links = document.createElement('div');
    links.className = 'mediaLinks';
    [['Listen on Spotify', item.spotify, 'spotifyLink'], ['Listen on Apple Podcasts', item.apple, 'appleLink']].forEach(([label, url, cls]) => {
        if (isSafeLink(url)) {
            const a = document.createElement('a');
            a.href = url;
            a.target = '_blank';
            a.rel = 'noopener';
            a.className = `button mediaLink ${cls}`;
            a.textContent = label;
            links.appendChild(a);
        }
    });
    if (!links.children.length) {
        const none = document.createElement('p');
        none.className = 'mediaEmpty';
        none.textContent = 'Listening links coming soon.';
        body.appendChild(none);
    } else {
        body.appendChild(links);
    }
    entry.appendChild(body);
    return entry;
}

function renderLibrary() {
    document.querySelectorAll('.mediaList').forEach(container => {
        const items = (LIBRARY[container.dataset.list] || []).slice().sort((a, b) => b.date.localeCompare(a.date));
        if (!items.length) {
            const empty = document.createElement('p');
            empty.className = 'mediaEmpty';
            empty.textContent = 'Nothing here yet.';
            container.appendChild(empty);
            return;
        }
        items.forEach(item => container.appendChild(buildEntry(item)));
    });
}
renderLibrary();
