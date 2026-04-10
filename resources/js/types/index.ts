export type * from './auth';
export type * from './navigation';
export type * from './ui';

export type productMat = 'wooden' | 'stuffed';

export interface Toy {
    id: number;
    name:string;
    price:number;
    type:productMat;
    image:string;
    description?:string;
}

export interface CartItem extends Toy {
    quantity:number
}
