
function changeWord(selectedText, changedText, text){
  // cek apakah kata ada di dalam kalimat atau tidak
  if(text.includes(selectedText)){
    return text.replace(selectedText, changedText);
  }else{
    return "Kata tidak ada pada kalimat !";
  }
}
  
const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord('mencintai', 'membenci', kalimat1));
console.log(changeWord('bromo', 'semeru', kalimat2));

