const isPrime = (number) =>
{
    let isPrime = true;
    if(number===1)
    {
        console.log("Number is neither prime nor composite")
    }
    else if (number >1)
    {
        for(let i=2;i<number;i++)
        {
            if(number%i==0)
            {
                isPrime = false
                break;
            }
        }``

        return isPrime
    }

}

const isArmstrong = (n) =>
 {
    let armstrong=0
    let temp = n;

    while(temp>0)
    {
        let a=temp%10;

        temp=parseInt(temp/10); 

        armstrong = armstrong+a*a*a;
    }

    return n===armstrong
    
}

console.log(isArmstrong(153))

console.log(isPrime(5))