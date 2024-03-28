// Sample data for nursery rhymes
const nurseryRhymes = [
  {
    title: "Twinkle Twinkle Little Star",
    thumbnail: "twinkle.png",
    description: "A classic nursery rhyme about a star."
  },
  {
    title: "Old MacDonald Had a Farm",
    thumbnail: "macdonald.png",
    description: "A popular nursery rhyme about a farm."
  },
  // Add more nursery rhymes here
];

// Function to create video cards
function createVideoCard(rhyme) {
  const videoCard = document.createElement("div");
  videoCard.classList.add("video-card");

  const title = document.createElement("div");
  title.classList.add("video-title");
  title.innerText = rhyme.title;
  videoCard.appendChild(title);

  const thumbnail = document.createElement("img");
  thumbnail.classList.add("video-thumbnail");
  thumbnail.src = rhyme.thumbnail;
  videoCard.appendChild(thumbnail);

  const description = document.createElement("div");
  description.classList.add("video-description");
  description.innerText = rhyme.description;
  videoCard.appendChild(description);

  return videoCard;
}

// Function to load nursery rhymes
function loadNurseryRhymes() {
  const videosContainer = document.getElementById("videos");

  nurseryRhymes.forEach(function(rhyme) {
    const videoCard = createVideoCard(rhyme);
    videosContainer.appendChild(videoCard);
  });
}

// Call the function to load nursery rhymes
loadNurseryRhymes();