import { IceCream } from "./IceCream";
import { IIceCreamProvider } from "./IIceCreamProvider";

export class IceCreamRealProvider implements IIceCreamProvider {

    public getAll(): Promise<Array<IceCream>> {
        
        return new Promise<Array<IceCream>>((resolve, reject) =>{

            // ajax query here.
            resolve();

        });
    }

    public buy(id: number): Promise<void> {

        return new Promise<void>((resolve, reject) =>{
            
            // ajax query here.
            resolve();
        });
    }
}