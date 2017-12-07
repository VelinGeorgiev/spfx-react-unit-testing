import { IIceCreamProvider } from "../iceCreamProviders/IIceCreamProvider";
import IceCreamMultiplier from "../IceCreamMultiplier";

export interface IIceCreamComponentProps {
  title: string;
  iceCreamProvider: IIceCreamProvider;
  multiplier: IceCreamMultiplier;
}
