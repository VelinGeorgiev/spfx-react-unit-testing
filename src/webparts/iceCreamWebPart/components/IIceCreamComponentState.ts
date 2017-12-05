import { IceCream } from "../iceCreamProviders/IceCream";

export interface IIceCreamComponentState {
    selectedIceCream: IceCream;
    iceCreamFlavoursList: Array<IceCream>;
    hasBoughtIceCream: boolean;
  }
  