import { IceCream } from "./IceCream";

export interface IIceCreamProvider {

    getAll(): Promise<Array<IceCream>>;

    buy(id: number): Promise<void>;
}