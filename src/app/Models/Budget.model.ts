export class Budget {
    id: number;
    purpose: string;
    description: string;
    approver: string;
    adancedAmount: number;
    estimatedCost: number;
    date: Date;
constructor(id: number, purpose: string, description: string, approver: string,  adancedAmount: number,estimatedCost: number, date: Date) {
        this.id = id;
        this.purpose = purpose;
        this.description = description;
        this.approver = approver;
        this.adancedAmount = adancedAmount;
        this.estimatedCost = estimatedCost;
        this.date = date;
    }
}