/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

max=(obj1,obj2) =>{
  if(Object.keys(obj1).length>Object.keys(obj2).length){
    return obj1;
  }
  return obj2;
}

function isAnagram(str1, str2) {
  let obj1={};
  let obj2={};
  for(let i=0;i<str1.length;i++){
    if(obj1[str1[i].toLowerCase()]){
      obj1[str1[i].toLowerCase()]++;
    }
    else{
      obj1[str1[i].toLowerCase()]=1;
    }
  }
  for(let i=0;i<str2.length;i++){
    if(obj2[str2[i].toLowerCase()]){
      obj2[str2[i].toLowerCase()]++;
    }
    else{
      obj2[str2[i].toLowerCase()]=1;
    }
  }
  for(let key in max(obj1,obj2)){
    if(obj1[key]!==obj2[key]){
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
