import { IceCream } from "../iceCreamProviders/IceCream";

export interface IIceCreamComponentState {
    selectedIceCream: IceCream;
    quantity: number;
    iceCreamFlavoursList: Array<IceCream>;
    hasBoughtIceCream: boolean;
  }
  