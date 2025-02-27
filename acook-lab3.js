// Andrew Cook
// ITMD 441

//Exercise 1
function minMaxAverage(lst) {
    let max =  null;
    let min = null;
    let count = 0;
    let sum = 0;

    for(let number of lst)
    {
        if(max === null || number > max)
        {
            max = number;
        }
        else if(min === null || number < min)
        {
            min = number;
        }

        count++;
        sum += number;
    }

    let avg = sum/count;

    console.log(`Total Numbers: ${count}, Min Value: ${min}, Max Value: ${max}, Average: ${avg.toFixed(2)}`);
}

minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1])
minMaxAverage(Array(Math.floor(Math.random() * 100)).fill(0).map((_) => Math.floor(Math.random() * 100)));
minMaxAverage(Array(Math.floor(Math.random() * 100)).fill(0).map((_) => Math.floor(Math.random() * 100)));

//Exercise 2
function countVowels(str)
{
    let vowels = 'aeiou'
    let count = 0;

    for(let character of str)
    {
        let i = 0;
        while(i < vowels.length && i != -1)
        {
            if(character === vowels[i])
            {
                count++;
                i = -1;
            }
            else
            {
                i++;
            }
        }
    }

    console.log(`${str}: ${count} vowels`);
}

countVowels("winter");
countVowels("");
countVowels("Drew");

//Exercise 3
function sortNumbers(lst)
{
    for(let i = 1; i < lst.length; i++)
    {
        let j = i;
        while(lst[j] < lst[j-1] && j > 0)
        {
            let temp = lst[j];
            lst[j] = lst[j-1];
            lst[j-1] = temp;
            j--;
        }
    }
    console.log(lst);
}

sortNumbers([9,4,6,2]);
sortNumbers(Array(Math.floor(Math.random() * 10)).fill(0).map((_) => Math.floor(Math.random() * 100)));
sortNumbers(Array(Math.floor(Math.random() * 10)).fill(0).map((_) => Math.floor(Math.random() * 100)));

//Exercise 4
function celsiusToFahrenheit(celsiusTemp)
{
    let fahrenheitTemp = (celsiusTemp * 9/5) + 32;
    console.log(`${celsiusTemp.toFixed(1)} Celsius = ${fahrenheitTemp.toFixed(1)} Fahrenheit`);
}

celsiusToFahrenheit(30);
celsiusToFahrenheit(40);
celsiusToFahrenheit(15);