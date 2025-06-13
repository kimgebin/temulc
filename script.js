const dataLC = [
  { nama: "Cherry 🍒", usia: 24, kota: "Medan", harga: 250000, layanan: "karaoke, massage", deskripsi: "Friendly, good at karaoke & massage", verif: true },
  { nama: "Angel ⭐", usia: 26, kota: "Bandung", harga: 400000, layanan: "dancer", deskripsi: "Charming, skilled dancer", verif: true },
  { nama: "Vina", usia: 23, kota: "Jakarta", harga: 500000, layanan: "companionship", deskripsi: "Expert in companionship", verif: true },
  { nama: "Lala", usia: 27, kota: "Bandung", harga: 450000, layanan: "conversation, spa", deskripsi: "Warm, loves conversation, spa", verif: true },
  { nama: "Bunga 🌼", usia: 25, kota: "Surabaya", harga: 380000, layanan: "bars, clubs", deskripsi: "Energetic, great at bars & clubs", verif: true },
  { nama: "Ririn", usia: 22, kota: "Bekasi", harga: 300000, layanan: "listener", deskripsi: "Sweet, good listener, shy", verif: true },
  { nama: "Siska", usia: 28, kota: "Tangerang", harga: 550000, layanan: "dining", deskripsi: "Sophisticated, likes fine dining", verif: true },
  { nama: "Dea", usia: 23, kota: "Makassar", harga: 220000, layanan: "music, movies", deskripsi: "Joyful, loves music & movies", verif: true },
  { nama: "Naomi", usia: 26, kota: "Semarang", harga: 300000, layanan: "events", deskripsi: "Outgoing, experienced with events", verif: true },
  { nama: "Lisa", usia: 24, kota: "Yogyakarta", harga: 410000, layanan: "conversation, culture", deskripsi: "Elegant, conversational, cultured", verif: true },
];

function tampilkanLC(list) {
  const div = document.getElementById("daftarLC");
  div.innerHTML = "";
  list.forEach(lc => {
    div.innerHTML += `
      <div class="card">
        <img src="https://placehold.co/300x200?text=${encodeURIComponent(lc.nama)}" />
        <div class="nama">${lc.nama}, ${lc.usia} th</div>
        <div class="harga">Rp ${lc.harga.toLocaleString()}/jam</div>
        <div class="deskripsi">${lc.deskripsi}</div>
        <div class="verif">${lc.verif ? "✔️ Terverifikasi" : "❌ Belum Verifikasi"}</div>
        <button class="booking-btn">Booking</button>
      </div>
    `;
  });
}

function terapkanFilter() {
  const kota = document.getElementById("filterKota").value.toLowerCase();
  const harga = parseInt(document.getElementById("filterHarga").value);
  const layanan = document.getElementById("filterLayanan").value.toLowerCase();
  let hasil = dataLC.filter(lc =>
    (kota === "" || lc.kota.toLowerCase().includes(kota)) &&
    (isNaN(harga) || lc.harga <= harga) &&
    (layanan === "" || lc.layanan.toLowerCase().includes(layanan))
  );
  tampilkanLC(hasil);
}

// Populate filter options
window.onload = function() {
  const semuaKota = [...new Set(dataLC.map(lc => lc.kota))];
  const kotaSelect = document.getElementById("filterKota");
  semuaKota.forEach(k => {
    kotaSelect.innerHTML += `<option value="${k}">${k}</option>`;
  });

  const hargaSelect = document.getElementById("filterHarga");
  [300000, 400000, 500000, 600000].forEach(h => {
    hargaSelect.innerHTML += `<option value="${h}">Rp ${h.toLocaleString()}</option>`;
  });

  const layananSelect = document.getElementById("filterLayanan");
  const semuaLayanan = [...new Set(dataLC.flatMap(l => l.layanan.split(", ")))];
  semuaLayanan.forEach(l => {
    layananSelect.innerHTML += `<option value="${l}">${l}</option>`;
  });

  tampilkanLC(dataLC);
};
