

const add = (number: string):number => {

    if(number === '') return 0;
    
    let delimiter = /,|\n/; 
    let numberString = number;

    if (number.startsWith("//")) {
      const parts = number.split("\n", 2);
      if (parts.length > 1) {
        const customDelimiter = parts[0].substring(2);
        delimiter = new RegExp(customDelimiter.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&'), 'g');
        numberString = parts[1];
      }
    }

    const numberArray = numberString
      .split(delimiter)
      .map((num) => parseInt(num, 10));

      const negatives = numberArray.filter((num) => num < 0);
      if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
      }

    return numberArray.reduce((sum, num) => sum + num, 0);

}

export default add;