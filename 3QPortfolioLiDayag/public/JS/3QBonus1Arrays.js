function getShows() {
  const cat = showCat.value;
  let rowString = "<tr><th>Index</th><th>Title</th><th>Casts</th><th>Year</th><th>Rating / Score</th></tr>";
  let count = 0;

  for (let i = 0; i < netflixShows.length; i++) {
    if (cat === "All" || netflixShows[i].category === cat) {
      rowString += "<tr>";
      rowString += "<td>" + i + "</td>";
      rowString += "<td>" + netflixShows[i].title + "</td>";
      rowString += "<td>" + netflixShows[i].cast.join(", ") + "</td>";
      rowString += "<td>" + netflixShows[i].year + "</td>";
      rowString += "<td>" + netflixShows[i].ratingScore() + "</td>";
      rowString += "</tr>";
      count++;
    }
  }

  results.innerHTML = rowString;
  count.textContent = "Total Shows: " + count;
}

function delShows() {
  const cat = showCat.value;

  if (cat === "All") {
    alert("Cannot delete all shows.");
    return;
  }

  if (!confirm("Delete all " + cat + " shows?")) return;

  netflixShows = netflixShows.filter(show => show.category !== cat);
  getShows();
}

let netflixShows = [
  {
    title: "Breaking Bad",
    category: "Drama",
    year: 2008,
    rating: "TV-MA",
    cast: ["Bryan Cranston", "Aaron Paul"],
    imdbScore: 9.5,
    ratingScore() {
      return this.rating + " / " + this.imdbScore;
    }
  },
  {
    title: "The Crown",
    category: "Drama",
    year: 2016,
    rating: "TV-MA",
    cast: ["Olivia Colman", "Claire Foy"],
    imdbScore: 8.6,
    ratingScore() {
      return this.rating + " / " + this.imdbScore;
    }
  },
  {
    title: "Brooklyn Nine-Nine",
    category: "Comedy",
    year: 2013,
    rating: "TV-14",
    cast: ["Andy Samberg", "Terry Crews"],
    imdbScore: 8.4,
    ratingScore() {
      return this.rating + " / " + this.imdbScore;
    }
  },
  {
    title: "Sex Education",
    category: "Comedy",
    year: 2019,
    rating: "TV-MA",
    cast: ["Asa Butterfield", "Gillian Anderson"],
    imdbScore: 8.3,
    ratingScore() {
      return this.rating + " / " + this.imdbScore;
    }
  },
  {
    title: "Stranger Things",
    category: "Sci-Fi",
    year: 2016,
    rating: "TV-14",
    cast: ["Millie Bobby Brown", "Finn Wolfhard"],
    imdbScore: 8.7,
    ratingScore() {
      return this.rating + " / " + this.imdbScore;
    }
  },
  {
    title: "Black Mirror",
    category: "Sci-Fi",
    year: 2011,
    rating: "TV-MA",
    cast: ["Various"],
    imdbScore: 8.8,
    ratingScore() {
      return this.rating + " / " + this.imdbScore;
    }
  },
  {
    title: "One Piece",
    category: "Anime",
    year: 1999,
    rating: "TV-14",
    cast: ["Mayumi Tanaka", "Kazuya Nakai"],
    imdbScore: 8.9,
    ratingScore() {
      return this.rating + " / " + this.imdbScore;
    }
  },
  {
    title: "Attack on Titan",
    category: "Anime",
    year: 2013,
    rating: "TV-MA",
    cast: ["Yuki Kaji", "Marina Inoue"],
    imdbScore: 9.0,
    ratingScore() {
      return this.rating + " / " + this.imdbScore;
    }
  }
];
