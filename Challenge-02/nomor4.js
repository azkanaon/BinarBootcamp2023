
    const dataPenjualanPakAldi = [
      {
        namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
        hargaSatuan : 760000,
        kategori : 'Sepatu Sport',
        totalJual : 90,
      },
      {
        namaProduct : 'Sepatu Warrior Tristan Black Brown High',
        hargaSatuan : 960000,
        kategori : 'Sepatu Sneaker',
        totalJual : 37,
      },
      {
        namaProduct : 'Sepatu Warrior Tristan Maroon High',
        hargaSatuan : 360000,
        kategori : 'Sepatu Sneaker',
        totalJual : 90,
      },
      {
        namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy',
        hargaSatuan : 120000,
        kategori : 'Sepatu Sneaker',
        totalJual : 90,
      },
    ]
    // contoh salah
    const dataPenjualanPakAldi2 = [
      {
        namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
        hargaSatuan : 760000,
        kategori : 'Sepatu Sport',
        totalJual : 90,
      },
      {
        namaProduct : 'Sepatu Warrior Tristan Black Brown High',
        hargaSatuan : 960000,
        kategori : 'Sepatu Sneaker',
        totalJual : 37,
      },
      0
    ]
    
    // function untuk peengecekan apakah type data nya objek atau bukan
    function cekObjek(arg) {
      return typeof arg == 'object' && arg != null && !Array.isArray(arg);
    }

    function getTotalPenjualan(data){
      // var untuk menyimpan hasil akhir
      let total = 0;
      // var tanda
      let tanda = false;
      // cek apakah masukkan adalah array atau bukan
      if(Array.isArray(data)){
        // loop khusus type data yang iteration (menggunakan for of)
        for (const iterator of data) {
          // cek apakah type data nya objek atau bukan
          if(cekObjek(iterator)){
            // jumlahkan semua total jual yang ada
            total += iterator.totalJual;
          // merubah tanda menjadi true, tanda bahwa terdapat indeks yang bukan sebuah objek
          }else{
            tanda = true;
          }
        }
        // jika tidak ada indeks yang bukan sebuah objek
        if(!tanda){
          return total;
        // error message
      }else{
        return "ERROR : Terdapat indeks yang bukan sebuah object";
      }
      // error message
      }else{
        return "ERROR : Masukkan bukan sebuah array";
      }
    }
    console.log(getTotalPenjualan(dataPenjualanPakAldi));
    console.log(getTotalPenjualan(dataPenjualanPakAldi2));
    console.log(getTotalPenjualan(0));