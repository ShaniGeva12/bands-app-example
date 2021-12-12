export interface AddBandRequest{
    name: string,
    origin: string,
    activeYears: number,
    website: string,
    isDisbanding: boolean,
    disbandingYear?: string
}

export interface BandItem{
    id: number,
    name: string,
    origin: string,
    activeYears: number,
    website: string,
    isDisbanding: boolean,
    disbandingYear?: string
}