export abstract class CardUtils {

    static validate(cardNumber: string): boolean {

        if (!cardNumber || typeof cardNumber !== 'string' || cardNumber == undefined)
            return false;
        
        cardNumber = cardNumber.trim().replace(/\s+/g, '');

        let sum = 0;
        const length = cardNumber.length;

        for (let i = length - 2, isEven = true; i >= 0; i--, isEven = !isEven) {
            let digit = parseInt(cardNumber[i]);

            if (isEven) {
                digit *= 2;
                if (digit > 9) digit -= 9;
            }

            sum += digit;
        }

        const verificationDigit = parseInt(cardNumber[length - 1]);

        return (sum + verificationDigit) % 10 === 0;
    }

}