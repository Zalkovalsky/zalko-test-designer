export class Option {
    constructor(public index: number, public value: string) {
        if (!value) {
            throw new Error('Cannot initialize Option without a value');
        }
    }
}