import "./App.css";

import Movies from "./components/moviesfolder/Movies";

const movie = [
  {
    title: "Spider-Man",
    genre: "Action",
    year: 2015,
    desc: "When Dr. Strange`s spell to restore Spider-Man`s identity goes awry, Peter is forced to overcome his greatest challenge yet.",
    img: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/spider-man--no-way-home-the-extended-version-et00338079-1661326501.jpg",
  },
  {
    title: "Sita Ramam",
    genre: "Action",
    year: 2022,
    desc: "A long-lost letter must find its way to the recipient twenty years later. A rabble-rouser learns a lesson in humility and love along the way.",
    img: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sita-ramam-et00329656-30-05-2022-06-32-41.jpg",
  },
  {
    title: "Vikrant Rona",
    genre: "Action",
    year: 2020,
    desc: "Almost half a century ago, a remote village in the middle of a tropical rainforest starts witnessing a series of unexplainable events which they attribute to the supernatural. ",
    img: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/vikrant-rona-et00128225-1657019014.jpg",
  },
  {
    title: "Karthikeya 2",
    genre: "Action",
    year: 2022,
    desc: "The second franchise of mystic thriller narrates protagonist Karthikeya`s pursuit of the truth. It leads him to find out the power of Indian ancient belief system and Tatva of Lord Sri Krishna.",
    img: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/karthikeya-2-et00307869-1660635952.jpg",
  },
  {
    title: "Raksha Bandhan",
    genre: "Comedy",
    year: 2022,
    desc: "Raksha Bandhan is a story that celebrates family values, togetherness, love, even sacrifice_but most importantly, it is a story that celebrates one of the most precious and unique kind of familial bond - relationship between a brother and his sisters!",
    img: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/raksha-bandhan-et00136643-1657007364.jpg",
  },
];

function App() {
  return (
    <div>
      <div className="text-centre">
        <h1 className="title">Movies App</h1>
        <p className="m-0">This is a simple react js Movies app</p>
      </div>
      <div className="container">
        <Movies
          title={movie[0].title}
          year={movie[0].year}
          img={movie[0].img}
          desc={movie[0].desc}
          genre={movie[0].genre}
        />
        <Movies
          title={movie[1].title}
          year={movie[1].year}
          img={movie[1].img}
          desc={movie[1].desc}
          genre={movie[1].genre}
        />
        <Movies
          title={movie[2].title}
          year={movie[2].year}
          img={movie[2].img}
          desc={movie[2].desc}
          genre={movie[2].genre}
        />
        <Movies
          title={movie[3].title}
          year={movie[3].year}
          img={movie[3].img}
          desc={movie[3].desc}
          genre={movie[3].genre}
        />
        <Movies
          title={movie[4].title}
          year={movie[4].year}
          img={movie[4].img}
          desc={movie[4].desc}
          genre={movie[4].genre}
        />
      </div>
    </div>
  );
}

export default App;
