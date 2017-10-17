import { IceCream } from "./IceCream";
import { IIceCreamProvider } from "./IIceCreamProvider";

export class IceCreamFakeProvider implements IIceCreamProvider {

    public getAll(): Promise<Array<IceCream>> {
        
        return new Promise<Array<IceCream>>((resolve, reject) =>{

            let list = [
                {id: 1, flavour: "Cherry"},
                {id: 2, flavour: "Chocolate"},
                {id: 3, flavour: "Coffee and Cookie"},
                {id: 4, flavour: "Cookies"},
                {id: 5, flavour: "Grape"},
                {id: 6, flavour: "Green tea"},
                {id: 7, flavour: "Mango"},
                {id: 8, flavour: "Mint chocolate chip"},
                {id: 9, flavour: "Raspberry Ripple"},
                {id: 10, flavour: "Vanilla"}
            ] as Array<IceCream>;

            resolve(list);

        });
    }

    public buy(id: number): Promise<void> {

        return new Promise<void>((resolve, reject) =>{
            
            resolve();
        });
    }
}