export interface CategoryTypes {
    _id: string,
    name: string;
    __v: number;
}
export interface GameItemTypes {
    _id: string;
    status: string;
    name: string;
    thumbnail: string;
    category: CategoryTypes;
}

export interface BanksTypes {
    _id: string;
    name: string;
    bankName: string;
    noRekening: string;
}

export interface PaymentItemTypes {
    _id: string;
    type: string;
    status: string;
    banks: BanksTypes[];
}

export interface NominalsTypes {
    _id: string;
    coinQuantity: number;
    coinName: string;
    price: number;
}

export interface LocalFormTypes {
    email: string;
    name: string;
    password: string;
    phoneNumber: string;
    username: string;
}

export interface LoginTypes {
    email: string;
    password: string;
}

export interface UserTypes {
    id: string;
    email: string;
    avatar: string;
    phoneNumber: string;
    username: string;
}

export interface JWTPayloadTypes {
    player: UserTypes;
    iat: number;
}

export interface CheckoutTypes {
    voucher: string,
    nominal: string,
    payment: string,
    bank: string,
    name: string,
    accountUser: string
}

export interface HistoryTransactionTypes {
    _id: string;
    accountUser: string;
    historyVoucherTopup: {
        gameName: string;
        coinName: string;
        coinQuantity: number;
        thumbnail: string;
        category: string;
        price: string;
    };
    category: {
        name: string;
    };
    historyPayment: {
        type: string;
        bankName: string;
        name: string;
        noRekening: string;
    }
    value: number;
    tax: number;
    status: string;
    name: string;
}

export interface TopUpCategoryTypes {
    _id: string;
    value: number;
    name: string
}