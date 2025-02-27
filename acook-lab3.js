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

    console.log(`Total Numbers: ${count}, Min Value: ${min}, Max Value: ${max}, Average: ${avg}`);
}

minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1])

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

countVowels("winter")