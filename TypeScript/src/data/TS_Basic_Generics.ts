// Functions
export function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
}

// Generic classes
export class nameValue<T>  {
    private _value: T | undefined;

    constructor(private name: string) {}

    public getValue(): T | undefined {
        return this._value;
    }

    public setValue(_value: T) {
        this._value = _value;
    }

    public toString(): string {
        return `${this.name}: ${this._value}`;
    }
}