export abstract class CardUtils {

    static validate(cardNumber: string): boolean {

        const verificationDigit = parseInt(cardNumber.slice(-1));

        const cardNumberWithoutLastDigit = cardNumber.slice(0, -1);

        const reverse = cardNumberWithoutLastDigit.split('').reverse().join('');

        const oddDigits = reverse.split('')
            .filter((_, index) => index % 2 === 1)
            .map(digit => {

                let res = parseInt(digit) * 2;

                if (res > 9)
                    res -= 9;

                return res;
            });

        const sum = oddDigits.reduce((acc, digit) => acc + digit, 0);

        const valid = (sum + verificationDigit) % 10 === 0;

        return valid;
    }

}