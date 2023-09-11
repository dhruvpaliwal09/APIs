const express = require("express");

const server = express();
server.use(express.json());

const movie = [
        {
          "id": "1",
          "name": "Inception",
          "directed_by": "Christopher Nolan",
          "produced_by": "Emma Thomas, Christopher Nolan",
          "release_date": "2010-07-16",
          "box_office": "$829.9 million",
          "imageUrl": "https://example.com/inception.jpg"
        },
        {
          "id": "2",
          "name": "The Shawshank Redemption",
          "directed_by": "Frank Darabont",
          "produced_by": "Niki Marvin",
          "release_date": "1994-09-23",
          "box_office": "$58.3 million",
          "imageUrl": "https://example.com/shawshank_redemption.jpg"
        },
        {
          "id": "3",
          "name": "The Godfather",
          "directed_by": "Francis Ford Coppola",
          "produced_by": "Albert S. Ruddy",
          "release_date": "1972-03-24",
          "box_office": "$246.1 million",
          "imageUrl": "https://example.com/godfather.jpg"
        },
        {
          "id": "4",
          "name": "Pulp Fiction",
          "directed_by": "Quentin Tarantino",
          "produced_by": "Lawrence Bender",
          "release_date": "1994-10-14",
          "box_office": "$214.2 million",
          "imageUrl": "https://example.com/pulp_fiction.jpg"
        },
        {
          "id": "5",
          "name": "Forrest Gump",
          "directed_by": "Robert Zemeckis",
          "produced_by": "Wendy Finerman, Steve Tisch, Steve Starkey",
          "release_date": "1994-07-06",
          "box_office": "$678.2 million",
          "imageUrl": "https://example.com/forrest_gump.jpg"
        },
        {
          "id": "6",
          "name": "The Dark Knight",
          "directed_by": "Christopher Nolan",
          "produced_by": "Emma Thomas, Charles Roven",
          "release_date": "2008-07-18",
          "box_office": "$1.005 billion",
          "imageUrl": "https://example.com/dark_knight.jpg"
        },
        {
          "id": "7",
          "name": "Fight Club",
          "directed_by": "David Fincher",
          "produced_by": "Arnon Milchan, Cean Chaffin, Ross Grayson Bell",
          "release_date": "1999-10-15",
          "box_office": "$101.2 million",
          "imageUrl": "https://example.com/fight_club.jpg"
        },
        {
          "id": "8",
          "name": "Gladiator",
          "directed_by": "Ridley Scott",
          "produced_by": "David Franzoni, Branko Lustig, Douglas Wick",
          "release_date": "2000-05-05",
          "box_office": "$460.5 million",
          "imageUrl": "https://example.com/gladiator.jpg"
        },
        {
          "id": "9",
          "name": "The Matrix",
          "directed_by": "The Wachowskis",
          "produced_by": "Joel Silver",
          "release_date": "1999-03-31",
          "box_office": "$463.5 million",
          "imageUrl": "https://example.com/matrix.jpg"
        },
        {
          "id": "10",
          "name": "Avatar",
          "directed_by": "James Cameron",
          "produced_by": "James Cameron, Jon Landau",
          "release_date": "2009-12-18",
          "box_office": "$2.798 billion",
          "imageUrl": "https://example.com/avatar.jpg"
        }
];

server.get("/", function (req, res) {
  console.log("Initial step");
  res.send("Ab ham all moves get karenge");
});

//yaha hamne movies ka pura data get kiya h
server.get("/movie", function (req, res) {
  console.log("pura movies ka data get kiya h");
  res.send(movie);
});

//ab ham ek movie lenge id se
server.get("/movie/:movieId", function (req, res) {
  const moviefound = movie.find((t) => t.id.toString() === req.params.movieId);
  if (moviefound) { 
    res.send(moviefound);
  } else {
    res.status(404).send("not found");
  }
});

//ab apan create karenge

server.post("/movie", function (req, res) {
  const newmovie = req.body;
  newmovie.id = Math.random();
  movie.push(newmovie);
});
 
//ab apan delete karenge by id
server.delete("/movie/:movieId", function (req, res) {
  const moviefound = movie.findIndex(
    (t) => t.id.toString() === req.params.movieId
  );
  console.log("testing here", req.params.movieId, moviefound);
  if (moviefound > -1) {
    movie.splice(moviefound, 1);
    res.send("delete hogya");
  } else {
    res.status(404).send("not found");
  }
});


//update karenge one movie by id

server.patch("/movie/:movieId", function(req,res){
const movieId=req.params.movieId
const data=req.body
const moviefound = movie.findIndex(
    (t) => t.id.toString() === movieId
  );
if(moviefound>-1){
    const previous=movie[moviefound]
    movie[moviefound]={
        ...previous,
        ...data,
        }
    res.send('successfully changed')
}
else{
    res.status(404).send('error found')
}
})
server.listen(6341);
