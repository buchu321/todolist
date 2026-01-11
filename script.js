const imageGrid = document.getElementById("imageGrid");

for (let i = 1; i <= 8; i++) {
  const img = document.createElement("img");
  img.src = `images/${i}.png`;
  img.alt = `Image ${i}`;
  img.onclick = () => window.location.href = `page${i}.html`;
  imageGrid.appendChild(img);
}
