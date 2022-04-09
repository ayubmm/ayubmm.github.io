const menu = {
  makanan: [
    { nama: "Nasi Ayam", harga: 15000 },
    { nama: "Mie Kwetiaw", harga: 12000 },
    { nama: "Sate Kambing", harga: 20000 },
  ],
  minuman: [
    { nama: "Teh", harga: 2000 },
    { nama: "Jeruk", harga: 2000 },
    { nama: "Air Putih", harga: 0 },
  ],
};

function pesanMakanan() {
  const indexMakanan = prompt(
    `Silahkan pilih makanan dengan angka:\n1. ${menu.makanan[0].nama} (Rp.${menu.makanan[0].harga})\n2. ${menu.makanan[1].nama} (Rp.${menu.makanan[1].harga})\n3. ${menu.makanan[2].nama} (Rp.${menu.makanan[2].harga})`
  );

  if (indexMakanan === null) {
    const respon = confirm(`Anda yakin membatalkan pesanan makanan?`);
    if (respon) {
      return { nama: "-", harga: 0 };
    } else {
      return pesanMakanan();
    }
  }

  // Index array mulai dari 0 sedangkan menu mulai dari 1, maka minus 1
  if (menu.makanan[indexMakanan - 1] === undefined) {
    alert(
      `Pesanan anda (makanan: ${indexMakanan}) gagal diproses!\nSilahkan pilih makanan sesuai menu!`
    );
    return pesanMakanan();
  }

  // Index array mulai dari 0 sedangkan menu mulai dari 1, maka minus 1
  return menu.makanan[indexMakanan - 1];
}

function pesanMinuman() {
  const indexMinuman = prompt(
    `Silahkan pilih minuman dengan angka:\n1. ${menu.minuman[0].nama} (Rp.${menu.minuman[0].harga})\n2. ${menu.minuman[1].nama} (Rp.${menu.minuman[1].harga})\n3. ${menu.minuman[2].nama} Putih (Rp.${menu.minuman[2].harga})`
  );

  if (indexMinuman === null) {
    const respon = confirm(`Anda yakin membatalkan pesanan minuman?`);
    if (respon) {
      return { nama: "-", harga: 0 };
    } else {
      return pesanMinuman();
    }
    // Index array mulai dari 0 sedangkan menu mulai dari 1, maka minus 1
  }

  if (menu.minuman[indexMinuman - 1] === undefined) {
    alert(
      `Pesanan anda (minuman: ${indexMinuman}) gagal diproses!\nSilahkan pilih minuman sesuai menu!`
    );
    return pesanMinuman();
  }

  // Index array mulai dari 0 sedangkan menu mulai dari 1, maka minus 1
  return menu.minuman[indexMinuman - 1];
}

let pesananSaya = { makanan: pesanMakanan(), minuman: pesanMinuman() };

const totalPesananSaya = pesananSaya.makanan.harga + pesananSaya.minuman.harga;

if (totalPesananSaya > 0 || pesananSaya.minuman.nama !== "-" || pesananSaya.makanan.nama !== "-") {
  alert(
    `Pesanan anda berhasil diproses\n\nMakanan : ${pesananSaya.makanan.nama}\nMinuman : ${pesananSaya.minuman.nama}\nTotal harga : Rp.${totalPesananSaya}`
  );
} else {
  alert("Pesanan dibatalkan!");
}
