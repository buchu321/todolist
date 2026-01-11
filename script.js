// Your Supabase project URL and public anon key
const SUPABASE_URL = "https://nxbhrwztqivalyaxbodt.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54Ymhyd3p0cWl2YWx5YXhib2R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxNTAxNTQsImV4cCI6MjA4MzcyNjE1NH0.-h0URoccYncxURRs8fXNmAr-iw_SL6rk-NrP73u5ppU";

// Base path for bucket
const BASE_IMAGE_PATH = `${SUPABASE_URL}/storage/v1/object/public/images`;

const imageGrid = document.getElementById("imageGrid");

for (let i = 1; i <= 8; i++) {
  const img = document.createElement("img");
  img.src = `${BASE_IMAGE_PATH}/${i}.png`;
  img.alt = `Image ${i}`;
  img.onclick = () => window.location.href = `page${i}.html`;
  imageGrid.appendChild(img);
}

// https://nxbhrwztqivalyaxbodt.supabase.co/storage/v1/object/sign/images/1.PNG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNTQwNTY5Ny04NWQyLTRlY2MtOWM5MS0zY2Q1Njg5ZjdlNDEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvMS5QTkciLCJpYXQiOjE3NjgxNTQyMjMsImV4cCI6MTc5OTY5MDIyM30.2SPqBqMeeA2kEA3KjnGh3DFZ97AGC03BMINlm6qyME0
// https://nxbhrwztqivalyaxbodt.supabase.co/storage/v1/object/sign/images/2.PNG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNTQwNTY5Ny04NWQyLTRlY2MtOWM5MS0zY2Q1Njg5ZjdlNDEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvMi5QTkciLCJpYXQiOjE3NjgxNTQ1ODUsImV4cCI6MTc5OTY5MDU4NX0.Xq1074ztpba-0e2y3cs_MxiKuXav6yFfBQBCqE7zes4
// https://nxbhrwztqivalyaxbodt.supabase.co/storage/v1/object/sign/images/3.PNG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lNTQwNTY5Ny04NWQyLTRlY2MtOWM5MS0zY2Q1Njg5ZjdlNDEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvMy5QTkciLCJpYXQiOjE3NjgxNTUwMzAsImV4cCI6MTc5OTY5MTAzMH0.x8iTVlHP0Bj5xpNSOlYx9fSXYzrU82fcERzGwbbQ0fk
// https://nxbhrwztqivalyaxbodt.supabase.co/storage/v1/object/public/images/1.PNG

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54Ymhyd3p0cWl2YWx5YXhib2R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxNTAxNTQsImV4cCI6MjA4MzcyNjE1NH0.-h0URoccYncxURRs8fXNmAr-iw_SL6rk-NrP73u5ppU

// https://nxbhrwztqivalyaxbodt.supabase.co