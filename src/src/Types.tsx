export type TransactionType = {
    id: number;
    title: string;
    amount: number;
}

export type TransactionsArray = {
    transactions?: TransactionType[];
}