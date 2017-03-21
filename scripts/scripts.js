var vowels = ["a","e","i","o","u","y"];
var specialChar = "!?.<>;:()+-=*&^%$#@!`,/]{}|_[";
var ourString = "You can put any string here and it will be translated into piglaten. Puncuation preservation coming soon.";

ourString = ourString.split(" ");
for(i=0; i<ourString.length; i++) {
  // Check if this word ends in puncuation or special characters.
  if(specialChar.indexOf(ourString[i][ourString[i].length-1]) > -1) {
    x = ourString[i][ourString[i].length-1];
    ourString[i] = ourString[i].slice(0, -1);
  } else {
    x = "";
  }
  // Check if this word starts with a vowel.
  if(vowels.indexOf(ourString[i][0].toLowerCase()) > -1) {
    ourString[i] += "ay"+x;
  // Check if this word starts with three consonants or a consonant followed by "qu".
  } else if((vowels.indexOf(ourString[i][0].toLowerCase()) === -1 &&
            vowels.indexOf(ourString[i][1].toLowerCase()) === -1 &&
            vowels.indexOf(ourString[i][2].toLowerCase()) === -1) ||
            (ourString[i].substring(1,3).toLowerCase() === "qu")) {
      ourString[i] = ourString[i].substring(3)+ourString[i].substring(0,3)+"ay"+x;
  // Checks if this word starts with two consonants.
  } else if(vowels.indexOf(ourString[i][0].toLowerCase()) === -1 && vowels.indexOf(ourString[i][1]) == -1) {
      ourString[i] = ourString[i].substring(2)+ourString[i].substring(0,2)+"ay"+x;
  // If none of the above check out, then this word starts with one consonant not followed by "qu".
  } else {
      ourString[i] = ourString[i].substring(1)+ourString[i][0]+"ay"+x;
  }
}
ourString = ourString.join(" ");
console.log(ourString);