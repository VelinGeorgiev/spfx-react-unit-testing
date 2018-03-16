import { IColorProvider } from "../providers/IColorProvider";

export class RedColorFakeProvider implements IColorProvider {

    public getColor(): Promise<{ color: string }> {
        return new Promise<{ color: string }>((resolve, reject) => {
            return resolve({ "color": "red" });
        });
    }
}
