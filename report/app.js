    const SUPABASE_URL = "https://nxbhrwztqivalyaxbodt.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54Ymhyd3p0cWl2YWx5YXhib2R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgxNTAxNTQsImV4cCI6MjA4MzcyNjE1NH0.-h0URoccYncxURRs8fXNmAr-iw_SL6rk-NrP73u5ppU";

const BUCKET_NAME = "images";
const REPORT_FILE = "dayReport.json";

const weekSelect = document.getElementById("weekSelect");
const table = document.getElementById("reportTable");

let reportData = {};
let allDays = [];
let allTasks = [];

/* ---------------- FETCH REPORT ---------------- */
async function fetchReport() {
  const res = await fetch(
    `${SUPABASE_URL}/storage/v1/object/public/${BUCKET_NAME}/${REPORT_FILE}?t=${Date.now()}`,
    { cache: "no-store" }
  );

  reportData = await res.json();
  allDays = Object.keys(reportData)
    .map(Number)
    .sort((a, b) => a - b);

  extractTasks();
  buildWeekOptions();
  renderWeek("current");
}

/* ---------------- GET TASK LIST ---------------- */
function extractTasks() {
  const firstDay = reportData[allDays[0]];
  allTasks = [];

  for (const section in firstDay) {
    for (const task in firstDay[section]) {
      allTasks.push(`${section}.${task}`);
    }
  }
}

/* ---------------- WEEK DROPDOWN ---------------- */
function buildWeekOptions() {
  weekSelect.innerHTML = "";

  const currentOpt = document.createElement("option");
  currentOpt.value = "current";
  currentOpt.textContent = "Current Week";
  weekSelect.appendChild(currentOpt);

  const totalWeeks = Math.ceil(allDays.length / 7);

  for (let i = 1; i <= totalWeeks; i++) {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = `Week ${i}`;
    weekSelect.appendChild(opt);
  }

  weekSelect.addEventListener("change", e => {
    renderWeek(e.target.value);
  });
}

/* ---------------- RENDER WEEK ---------------- */
function renderWeek(week) {
  let daysToShow = [];

  if (week === "current") {
    daysToShow = allDays.slice(-7);
  } else {
    const start = (week - 1) * 7;
    daysToShow = allDays.slice(start, start + 7);
  }

  renderTable(daysToShow);
}

/* ---------------- TABLE ---------------- */
function renderTable(days) {
  table.innerHTML = "";

  /* Header row */
  const header = document.createElement("tr");
  const dayTh = document.createElement("th");
  dayTh.textContent = "Day";
  dayTh.className = "day-col";
  header.appendChild(dayTh);

  allTasks.forEach(task => {
    const th = document.createElement("th");
    th.textContent = task;
    header.appendChild(th);
  });

  table.appendChild(header);

  /* Day rows */
  days.forEach(dayNum => {
    const row = document.createElement("tr");

    const dayCell = document.createElement("td");
    dayCell.textContent = dayNum;
    dayCell.className = "day-col";
    row.appendChild(dayCell);

    allTasks.forEach(task => {
      const [section, key] = task.split(".");
      const val = reportData[dayNum][section][key];

      const td = document.createElement("td");
      td.textContent = val ? "✔" : "✖";
      td.className = val ? "true" : "false";

      row.appendChild(td);
    });

    table.appendChild(row);
  });
}

/* ---------------- INIT ---------------- */
fetchReport();
