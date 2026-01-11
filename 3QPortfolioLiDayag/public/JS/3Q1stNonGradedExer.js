/* ------------------------ the main part of the code ------------------------------ */
// do not change anything in this main part of the code
process.stdin.on('data', function (data){ 
    let input = data.toString().trim(); // remove all excess spaces
   
    console.log(removeElements(input));
    process.exit();
  });
  // complete removeElements() and it should return a value. See Instructions below   
  /*------------------------- end of the main part of the code ---------------------- */ /*  Instructions
     
     Complete the function removeElements() that accepts a numeric value, and do the following:    - call getArray() and assign the return value to a variable. The variable name will be up to you, and it will be an array.
     - remove all elements equal to the value given to the function while counting how many they are.  
     - console.log how many was the counted removed elements.
     - sort the array without the removed elements, then return it to the calling statement as a string data type.    Note: discover how to use the array.join() method for as a way to convert an array to a string.
  */
  function removeElements (a){
    // type your answers inside this function    return
    let arr = getArray();
    let count = 0;
    a = Number(a);
    
    arr = arr.filter(num => {
        if (Number(num) === a){
            count++;
            return false;
        }
        return true;
        
    })
    console.log(count);  
    arr.sort((x,y) => x - y);
    
    return arr.join(",")
  }
  // DO NOT REMOVE THIS PART OF THE CODE
  // returns an array to removeElements() function
  function getArray() {
      let dString = "97,99,26,81,10,79,81,26,10,79,81,7,8,100,53,84,96,31,10,79,81,25,29,88,74,4,41,24,25,29,88,74,51,99,51,38,1,63,89,97,87,15,82,9,96,69,82,24,49,100,13,93,49,38,72,2,89,42,70,48";
      const dArray = dString.split(",");
      return dArray;
  }
  