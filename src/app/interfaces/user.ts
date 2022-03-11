interface Address {
    street: string;
    city: string;
}

export interface User {
    id?: string;
    name: string;
    username: string;
    email: string;
    address: Address;
}
