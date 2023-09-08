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
    hargaJual: "68000",
    totalTerjual: 20,
    sisaStok: 56,
  },
];



const getInfoPenjualan = (data) => {

  // variabel untuk menampung keuntunganPenjualan dan modalPenjualan
  let keuntungan = 0;
  let modal = 0;
  let flag = false;
  // loop untuk mengambil nilai untung dan modal
  data.map((value) => {
    // cek tipe data hargaBeli dan hargaJual
    if(typeof(value.hargaBeli) !== 'number' || typeof(value.hargaJual) !== 'number'){
      // cek apakah masukkan sebuah angka atau huruf
      // jika huruf maka error
      if(!isNaN(value.hargaJual) && !isNaN(value.hargaBeli)){
        // ubah nilai menjadi tipe number
        value.hargaJual = parseInt(value.hargaJual)
        value.hargaBeli = parseInt(value.hargaBeli)
      }else{
        flag = true;
      }
      value.hargaBeli = parseInt(value.hargaBeli)
    }
    // setiap kali loop, keuntungan bertambah
    keuntungan += (value.hargaJual - value.hargaBeli) * value.totalTerjual; 
    // setiap kali loop, modal bertambah
    modal += value.hargaBeli * (value.totalTerjual + value.sisaStok);
  });

  // pemberitahuan bahwa masukkan bukan angka
  if(flag){
    return "Harga Barang / Harga Jual bukan sebuah angka";
  }

  // menentukan persentase keuntungan
  // rumus yang saya gunakan adalah keuntungan dibagi modal dikali 100%
  // toFixed(2) digunakan agar hanya ada 2 angka dibelakang koma
  const persentaseKeuntungan = ((keuntungan / modal) * 100).toFixed(2);


  // mencari produk terlaris (dilihat dari jumlah buku yang terjual)
  // menggunakan reduce karena lebih enak jika untuk perbandingan
  const produkTerlaris = data.reduce((maxProduk, produk) => {
    // jika index saat ini lebih besar totalJualnya dari index sebelumnya, maka return value dengan index saat ini
    if (produk.totalTerjual > maxProduk.totalTerjual) {
      return produk;
    } else {
      return maxProduk;
    }
    // penggunaan data[0] untuk menginisialisasi nilai maxProduk
  }, data[0]);



  // untuk melakukan perhitungan totalJual untuk setiap nama penulis
  const dataPenulis = data.reduce((acc, currentValue)=>{
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
      // agar tidak ada ,00 pada mata uang
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
  }

  // proses konversi
  const keuntunganVersiRupiah = rupiah(keuntungan)
  const modalVersiRupiah = rupiah(modal)

  // output
  return {
    totalKeuntungan : keuntunganVersiRupiah,
    totalModal : modalVersiRupiah,
    persentaseKeuntungan : `${persentaseKeuntungan}%`,
    produkBukuTerlaris : produkTerlaris.namaProduk,
    penulisTerlaris : penulisTerlaris.penulis
  }
}


// print hasil akhir
console.log(getInfoPenjualan(dataPenjualanNovel));