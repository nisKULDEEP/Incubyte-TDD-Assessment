const add = (number: string):number => {

    if(number === '') return 0;
    
    let delimiter = /,|\n/; // Default delimiters are comma and newline
    let numberString = number;

    // Check if there is a custom delimiter
    if (number.startsWith("//")) {
      const parts = number.split("\n", 2);
      if (parts.length > 1) {
        delimiter = new RegExp(parts[0].substring(2)); // Extract the custom delimiter
        numberString = parts[1];
      }
    }

    const numberArray = numberString
      .split(delimiter)
      .map((num) => parseInt(num, 10));

  

    return numberArray.reduce((sum, num) => sum + num, 0);

}

export default add;