const testimonials = [
  {
    name: "Suraj Awasthi",
    photoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwwWnOmv6F43UgGkbZSO7FAncFAxXhJLUjfw&s",
    text: "By so these am so rapid blush songs begin. Nor but mean time one over.",
  },
  {
    name: "Athex Sarkar",
    photoUrl:
      "https://media.gettyimages.com/id/1442770580/photo/doha-qatar-lionel-messi-of-argentina-poses-during-the-official-fifa-world-cup-qatar-2022.jpg?s=612x612&w=gi&k=20&c=KtgxAwFhg8Ye5HMygjzlqwTqnR8x-v1TQso1wvI2zLg=",
    text: "Delivered dejection necessary objection do mr prevailed. Mr feeling do chiefly cordial in do.",
  },
  {
    name: "Don Marget",
    photoUrl:
      "https://i.pinimg.com/originals/70/b3/1a/70b31afe7b5fc7803bf650d74adf5a5e.jpg",
    text: "Interest our nor received followed was. Cultivated an up solicitude mr unpleasant.",
  },
];
const imgElement = document.querySelector("img");
const textElement = document.querySelector(".testimonial_content");
const authorElement = document.querySelector(".author");

const prevButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");

let idx = 0;

function updateTestimonial() {
  console.log("idx: " + idx);
  const { name, photoUrl, text } = testimonials[idx];
  imgElement.src = photoUrl;
  textElement.innerText = text;
  authorElement.innerText = name;

  prevButton.disabled = idx === 0;
  nextButton.disabled = idx === testimonials.length - 1;
}

prevButton.addEventListener("click", () => {
  idx = idx - 1;
  updateTestimonial();
});

nextButton.addEventListener("click", () => {
  idx = idx + 1;
  updateTestimonial();
});
