import React, { useEffect, useState } from "react";
useEffect(() => {
fetch("/data.json")
.then((res) => res.json())
.then((data) => setColleges(data))
.catch((err) => console.error("Failed to load data.json", err));
}, []);


const filtered = colleges.filter((c) =>
c.name.toLowerCase().includes(query.toLowerCase()) ||
c.location.toLowerCase().includes(query.toLowerCase())
);

function App() {

  return (
  <div className="app">
    <Header />


    <main className="main">
      <section className="left">
        <div className="controls">
          <input
          className="search"
          placeholder="Search by college or location"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          />
          <p className="hint">Select a college to see detailed presentation notes.</p>
        </div>


        <div className="grid">
          {filtered.map((c) => (
          <CollegeCard key={c.id} college={c} onSelect={() => setSelected(c)} />
          ))}
        </div>
      </section>


      <aside className="right">
        {selected ? (
        <CollegeDetail college={selected} />
        ) : (
        <div className="placeholder">
          <h2>No college selected</h2>
          <p>Click a card on the left to view details here. Use this space to prepare your presentation outline (30 points) and website notes (20 points).</p>
        </div>
        )}
      </aside>
    </main>


    <footer className="footer">
      <small>Prepared for G11 College Presentation — Due: 2025-11-28 / Presentation: by 2025-12-06</small>
    </footer>
  </div>
  );
}

export default App;