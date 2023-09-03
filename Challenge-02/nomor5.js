const dataPenjualanNovel = [
  {
    idProduct: 'BOOK002421',
    namaProduk: 'Pulang - Pergi',
    penulis: 'Tere Liye',
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: 'BOOK002351',
    namaProduk: 'Selamat Tinggal',
    penulis: 'Tere Liye',
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Garis Waktu',
    penulis: 'Fiersa Besari',
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: 'BOOK002931',
    namaProduk: 'Laskar Pelangi',
    penulis: 'Andrea Hirata',
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

// variabel untuk menampung keuntunganPenjualan dan modalPenjualan
let keuntungan = 0;
let modal = 0;

// loop untuk mengambil nilai untung dan modal
dataPenjualanNovel.map((value) => {
  // setiap kali loop, keuntungan bertambah
  keuntungan += (value.hargaJual - value.hargaBeli) * value.totalTerjual; 
  // setiap kali loop, modal bertambah
  modal += value.hargaBeli * (value.totalTerjual + value.sisaStok);
});

// menentukan persentase keuntungan
// rumus yang saya gunakan adalah keuntungan dibagi modal dikali 100%
// toFixed(2) digunakan agar hanya ada 2 angka dibelakang koma
const persentaseKeuntungan = ((keuntungan / modal) * 100).toFixed(2);


// mencari produk terlaris (dilihat dari jumlah buku yang terjual)
// menggunakan reduce karena lebih enak jika untuk perbandingan
const produkTerlaris = dataPenjualanNovel.reduce((maxProduk, produk) => {
  // jika index saat ini lebih besar totalJualnya dari index sebelumnya, maka return value dengan index saat ini
  if (produk.totalTerjual > maxProduk.totalTerjual) {
    return produk;
  } else {
    return maxProduk;
  }
  // penggunaan dataPenjualanNovel[0] untuk menginisialisasi nilai maxProduk
}, dataPenjualanNovel[0]);

// untuk melakukan perhitungan totalJual untuk setiap nama penulis
const dataPenulis = dataPenjualanNovel.reduce((acc, currentValue)=>{
  // mencari apakah data akumulator(acc) sudah memiliki penulis dengan nilai yang sama dengan currentValue.penulis
  const cekData = acc.find(item=>item.penulis === currentValue.penulis);
  // jika ada, maka masukkan totalJual dari currentValue ke cekData totalJual
  if(cekData){
    cekData.totalTerjual += currentValue.totalTerjual;
  // jika tidak ada, maka buat object baru dengan penulis dan totalJual dari currentValue
  }else{
    acc.push({penulis: currentValue.penulis, totalTerjual: currentValue.totalTerjual});
  }
  return acc;
  // penggunaan [] sebagai inisialisasi acc
}, [])

// kode mirip dengan produkTerlaris tetapi untuk penulisTerlaris
// penulisTerlaris dihitung dari penjualan buku dari setiap penulis
const penulisTerlaris = dataPenulis.reduce((acc, current) =>{
  if(current.totalTerjual > acc.totalTerjual){
    return current;
  }else{
    return acc;
  }
})

// konversi nilai number ke mata uang IDR
const rupiah = (number)=>{
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number);
}

// proses konversi
const keuntunganVersiRupiah = rupiah(keuntungan)
const modalVersiRupiah = rupiah(modal)

// variabel akhir
let finalResult = {}
// memasukkan semua nilai yang didapat ke final resultq
finalResult.totalKeuntungan = keuntunganVersiRupiah;
finalResult.totalModal = modalVersiRupiah;
finalResult.persentaseKeuntungan = `${persentaseKeuntungan}%`;
finalResult.produkBukuTerlaris = produkTerlaris.namaProduk;
finalResult.penulisTerlaris = penulisTerlaris.penulis;

// print hasil akhir
console.log(finalResult);




const angka = [1,2,3,4,5]
const result = angka.map(value => value**2)

console.log(result);