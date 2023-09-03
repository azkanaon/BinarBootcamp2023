
    function cekTypeNumber(number){
      return typeof number === "number";
    }
    function getAngkaTerbesarKedua(data){
      // pengecekan untuk nilai masukkan tidak ada
      if(data == undefined){
        return "ERROR : Argumen tidak boleh kosong";
      }

      // pengecekan tipe data masukkan
      if(Array.isArray(data)){
        // pengecekan tipe data dalam array
        if(data.every(cekTypeNumber)){
          // sorting descending
          data.sort((a, b) => b - a);
          // var tampung untuk menyimpan semua nilai unik
          let tampung = [];
          // loop pengecekan semua nilai yang ada pada array
          for(var i=0; i<data.length; i++){
            // jika ada data yang sama, maka lewati
            if(tampung.indexOf(data[i]) != -1){
              continue;
            // jika data beda, masukkan
            }else{
              tampung.push(data[i]);
            }
          }
          // karena secara descending di sortingnya, maka ketika saya mengambil nilai indeks 1 akan mendapatkan nilai terbesar kedua
          return tampung[1];
        }else{
          return "ERROR : Dalam array terdapat tipe data selain number"
        }
      }else{
        return "ERROR : Masukkan yang diberikan bukan sebuah array";
      }
    }




    const dataAngka = [9,4,7,7,4,3,2,2,8];
    const dataAngka2 = [9,4,7,7,4,3,2,"Eko",8];
    console.log(getAngkaTerbesarKedua(dataAngka));
    console.log(getAngkaTerbesarKedua(dataAngka2));
    console.log(getAngkaTerbesarKedua(0));
    console.log(getAngkaTerbesarKedua({}));
    console.log(getAngkaTerbesarKedua());