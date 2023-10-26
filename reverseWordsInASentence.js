
  var str1 = "This is a sunny day"
  function reverseWordsInSentence(str1) {
  let reverseWordArr = str1.split(" ").map(word => word.split("").reverse().join(""));
  return reverseWordArr.join(" ");
}
        
        const reversedSentence = reverseWordsInSentence(str1);
        console.log('Reversed sentence: ' + reversedSentence);
    