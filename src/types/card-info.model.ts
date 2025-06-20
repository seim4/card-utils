export interface CardInfo {
    cardNumber: string;
    // cardType: string;
    issuingBank?: string;
    isValid: boolean;
    // cardBrand: string | null;
    // cardNetwork: string | null;
    // cardScheme: string | null;
    // cardCategory: string | null;
    // countryCode: string | null;
    // countryName: string | null;
    bankName?: string;
    bankCode?: string;
}