document.addEventListener("DOMContentLoaded", function () {
  const data = [
    { no: 1, nama: "Ibnu Fadhilah", jabatan: "Penanggung Jawab" },
    { no: 2, nama: "Umar Ma'ruf", jabatan: "Ketua Pelaksana" },
    { no: 3, nama: "Maulana Hafiizh", jabatan: "Wakil Ketua Pelaksana" },
    { no: 4, nama: "Salsabila Musyaffa", jabatan: "Sekretaris 1" },
    { no: 5, nama: "Hasna Khalilah", jabatan: "Sekretaris 2" },
    { no: 6, nama: "Nur Aini", jabatan: "Bendahara 1" },
    { no: 7, nama: "Riska Amellia", jabatan: "Bendahara 2" },
    { no: 8, nama: "Ibnu Firgiawan", jabatan: "Ketua Divisi Acara" },
    { no: 9, nama: "Ram Prashad", jabatan: "Wakil Ketua Divisi Acara" },
    { no: 10, nama: "Annisa Arie", jabatan: "Sub Divisi Rundown" },
    { no: 11, nama: "Annisa Rizky", jabatan: "Sub Divisi Rundown" },
    { no: 12, nama: "Ilham Adi", jabatan: "Sub Divisi Rundown" },
    { no: 13, nama: "Randi Septriarso", jabatan: "Sub Divisi Konsep" },
    { no: 14, nama: "Azzahra Nabilla", jabatan: "Sub Divisi Konsep" },
    { no: 15, nama: "Marcella Febriansyah", jabatan: "Sub Divisi Konsep" },
    { no: 16, nama: "Najwa Salsabila", jabatan: "Sub Divisi Konsep" },
    { no: 17, nama: "Muhammad Fahri", jabatan: "Sub Divisi Timekeeper" },
    { no: 18, nama: "Siti Fathimah", jabatan: "Sub Divisi Timekeeper" },
    { no: 19, nama: "Muhamad Reivaldy", jabatan: "Sub Divisi Pengisi Acara" },
    { no: 20, nama: "Muhammad Ridwan", jabatan: "Sub Divisi Pengisi Acara" },
    { no: 21, nama: "-", jabatan: "Sub Divisi Liaison Officer" },
    { no: 22, nama: "-", jabatan: "Sub Divisi Liaison Officer" },
    { no: 23, nama: "-", jabatan: "Sub Divisi Liaison Officer" },
    { no: 24, nama: "Satria Aji", jabatan: "Ketua Divisi Humas" },
    { no: 25, nama: "Nelsia Indryanni", jabatan: "Wakil Ketua Divisi Humas" },
    { no: 26, nama: "Adinda Olivia", jabatan: "Sub Divisi Tim SMA" },
    { no: 27, nama: "Fajri Nur", jabatan: "Sub Divisi Tim SMA" },
    { no: 28, nama: "Ummi Sa'adah", jabatan: "Sub Divisi Tim SMA" },
    { no: 29, nama: "Hanifah Dita", jabatan: "Sub Divisi Tim SMA" },
    { no: 30, nama: "Selvi Dwi", jabatan: "Sub Divisi Tim SMK" },
    { no: 31, nama: "Dimas Kamislihi", jabatan: "Sub Divisi Tim SMK" },
    { no: 32, nama: "Dhani Pandu", jabatan: "Sub Divisi Tim SMK" },
    { no: 33, nama: "Mega Amelia", jabatan: "Sub Divisi Tim SMK" },
    { no: 34, nama: "Adellia Astari", jabatan: "Sub Divisi Broadcast" },
    { no: 35, nama: "Wafiq Nurul", jabatan: "Sub Divisi Broadcast" },
    { no: 36, nama: "Ishaq Usuludin", jabatan: "Sub Divisi Broadcast" },
    { no: 37, nama: "Muhammad Sugianto", jabatan: "Ketua Divsi DPD" },
    { no: 38, nama: "Noval Cahya", jabatan: "Wakil Ketua Divisi DPD" },
    { no: 39, nama: "Alifah Putri", jabatan: "Sub Divisi Desain" },
    { no: 40, nama: "Hawa Meylani", jabatan: "Sub Divisi Desain" },
    { no: 41, nama: "Yessi Yasmin", jabatan: "Sub Divisi Desain" },
    { no: 42, nama: "Syahrul Abdullah", jabatan: "Sub Divisi Desain" },
    { no: 43, nama: "Syarifah Robaniah", jabatan: "Sub Divisi Dokumentasi" },
    { no: 44, nama: "Asy Syifa'eka", jabatan: "Sub Divisi Dokumentasi" },
    { no: 45, nama: "Cahya Salsatun", jabatan: "Sub Divisi Dokumentasi" },
    { no: 46, nama: "Adinda Maharani", jabatan: "Sub Divisi Publikasi" },
    { no: 47, nama: "Siti Fadiah", jabatan: "Sub Divisi Publikasi" },
    { no: 48, nama: "Jihan Adiningrum", jabatan: "Sub Divisi Publikasi" },
    { no: 49, nama: "Siti Dwi", jabatan: "Sub Divisi Publikasi" },
    { no: 50, nama: "Anjah Achmad", jabatan: "Ketua Divisi Mentoring" },
    { no: 51, nama: "Nabila Intan", jabatan: "Wakil Ketua Divisi Mentoring" },
    { no: 52, nama: "Mochammad Evan", jabatan: "Sub Divisi Syuro" },
    { no: 53, nama: "(Ikhwan)", jabatan: "Sub Divisi Syuro" },
    { no: 54, nama: "(Ikhwan)", jabatan: "Sub Divisi Syuro" },
    { no: 55, nama: "(Ikhwan)", jabatan: "Sub Divisi Syuro" },
    { no: 56, nama: "(Ikhwan)", jabatan: "Sub Divisi Syuro" },
    { no: 57, nama: "Fathimah Na'ilah", jabatan: "Sub Divisi Syuro" },
    { no: 58, nama: "Anisa Mufida", jabatan: "Sub Divisi Syuro" },
    { no: 59, nama: "Fahra Maulida", jabatan: "Sub Divisi Syuro" },
    { no: 59, nama: "Navela Dwita", jabatan: "Sub Divisi Syuro" },
    { no: 59, nama: "Sabrina Anggraeni", jabatan: "Sub Divisi Syuro" },
    { no: 60, nama: "Ananda Putra", jabatan: "Sub Divisi Wawancara" },
    { no: 59, nama: "(Ikhwan)", jabatan: "Sub Divisi Wawancara" },
    { no: 59, nama: "(Ikhwan)", jabatan: "Sub Divisi Wawancara" },
    { no: 59, nama: "(Ikhwan)", jabatan: "Sub Divisi Wawancara" },
    { no: 59, nama: "(Ikhwan)", jabatan: "Sub Divisi Wawancara" },
    { no: 59, nama: "Natha Mariza", jabatan: "Sub Divisi Wawancara" },
    { no: 59, nama: "Jihan Rahima", jabatan: "Sub Divisi Wawancara" },
    { no: 59, nama: "Aisyah Haura", jabatan: "Sub Divisi Wawancara" },
    { no: 59, nama: "Humairoh", jabatan: "Sub Divisi Wawancara" },
    { no: 59, nama: "Ika Wulandari", jabatan: "Sub Divisi Wawancara" },
  ];

  const tableBody = document.getElementById("tableBody");

  data.forEach((item) => {
    const row = document.createElement("tr");

    for (const key in item) {
      if (item.hasOwnProperty(key)) {
        const cell = document.createElement("td");
        cell.textContent = item[key];

        cell.classList.add("border", "border-black");

        row.appendChild(cell);
      }
    }

    tableBody.appendChild(row);
  });
});
