import { CardInfo } from "./types/card-info.model";

export abstract class CardUtils {

    /**
     * Validates a card number using the Luhn algorithm.
     * @param cardNumber The card number to validate.
     * @returns True if the card number is valid, false otherwise.
     */
    static isValidCardNumber(cardNumber: string): boolean {

        if (cardNumber == null || cardNumber == undefined || typeof cardNumber !== 'string')
            return false;
        
        if (cardNumber.length < 12 || cardNumber.length > 19)
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

    /**
     * Extracts the issuing bank from a card number.
     * @param cardNumber The card number to extract the issuing bank from.
     * @returns The issuing bank as a string, or undefined if not found.
     */
    static getIssuingBank(cardNumber: string): string | undefined {



        return undefined;
    }

    /**
     * Gets card information.
     * @param cardNumber The card number to get information for.
     * @returns An object containing card information or undefined if invalid.
     */
    static getCardInfo(cardNumber: string): CardInfo | undefined {

        const valid = this.isValidCardNumber(cardNumber);

        if (!valid)
            return undefined;

        const issuingBank = this.getIssuingBank(cardNumber);

        return {
            cardNumber: cardNumber,
            isValid: valid,
            issuingBank: issuingBank,
        };
    }

}