export interface Band {
  id: string;
  name: string;
  origin: string;
  years?: number;
  website: string;
  disbandingYear: string;
}

export interface BandBE {
  id: string;
  BandName: string;
  BandOrigin: string;
  BandYears?: number;
  BandWebsite: string;
  BandDisbandingYear: string;
}
