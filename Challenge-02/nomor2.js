
    // menggunakan arrow function
    const checkTypeNumber = (givenNumber)=> {
      // cek apakah masukkan merupakan tipe number atau bukan
      if(typeof givenNumber =="number" ){
        // jika mod 2 hasilnya 0 maka masuk genap
        if(givenNumber % 2 == 0){
          return "GENAP";
        }else{
          return "GANJIL";
        }
      }else{
        return "Error : invalid data type";
      }
    }

    console.log(checkTypeNumber(1));
    console.log(checkTypeNumber("1"));
    console.log(checkTypeNumber(null));
    console.log(checkTypeNumber(2));
    console.log(checkTypeNumber(undefined));
