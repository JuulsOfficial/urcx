const daten = {
  name: "Julien",
  zug: "Union Pacific",
  start: "Saint Denis",
  ziel: "Valentine",
  route: "Nordlinie",
  zeit: new Date().toLocaleString()
};

fetch('/api/save', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(daten)
})
.then(res => res.json())
.then(data => alert(data.message));
