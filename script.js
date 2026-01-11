// Your Supabase project URL and public anon key
const SUPABASE_URL = "https://nxbhrwztqivalyaxbodt.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54Ymhyd3p0cWl2YWx5YXhib2R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxNTAxNTQsImV4cCI6MjA4MzcyNjE1NH0.-h0URoccYncxURRs8fXNmAr-iw_SL6rk-NrP73u5ppU";

// Base path for bucket
const BASE_IMAGE_PATH = `${SUPABASE_URL}/storage/v1/object/public/images`;

const imageGrid = document.getElementById("imageGrid");

for (let i = 1; i <= 8; i++) {
  const img = document.createElement("img");
  img.src = `${BASE_IMAGE_PATH}/${i}.PNG`;
  img.alt = `Image ${i}`;
  img.onclick = () => window.location.href = `page${i}.html`;
  imageGrid.appendChild(img);
}