import { IColorProvider } from "./IColorProvider";

export class ColorRestProvider implements IColorProvider {

    public async getColor(): Promise<{ color: string }> {

        const response = await fetch('http://localhost:8000');
        return await response.json();
    }
}
  