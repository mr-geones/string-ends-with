function solution(str, ending){
  const a = str.length - ending.length;
  const b = str.length;
  const c = str.slice(a, b);
    
  if( c === ending) {
    return true;
  } 
  else {
    return false;
  }
}
