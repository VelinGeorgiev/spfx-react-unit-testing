export interface IColorProvider {
    
    getColor(): Promise<{ color: string }>;
}
  