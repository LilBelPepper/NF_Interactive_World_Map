// Create interface that will determine what type each of these objects are. We will first assign some sample data to test how it works and then adjust it based on the info we get later from the API.

export interface Countryinformation {
    countryName: string;
    countryCapital: string;
    countryRegion: string;
    incomeLevel: string;
    latitude: string;
    longitude: string
}
