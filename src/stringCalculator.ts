const add = (number: string):number => {

    if(number === '') return 0;
    
    const numberArray = number.split(',');
    const sum = numberArray.reduce((a, b) => Number(a) + Number(b), 0);
    return sum;

}

export default add;