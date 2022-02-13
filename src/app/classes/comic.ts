export class Comic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: Date;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObjects[];
  resourceURI: string;
  urls: URL[];
  series: ComicSerie;
  variants: ComicSummary[];
  collections: ComicSummary[];
  collectedIssues: ComicSummary[];
  dates: ComicDate[];
  prices: ComicPrice[];
  thumbnail: Image;
  images: Image[];
  creators: ResourceLists;
  characters: ResourceLists;
  stories: ResourceLists;
  events: ResourceLists;
}


class ResourceLists {
  available: number
  returned: number
  collectionURI: string
  items: any[]
}

class Image {
  path: string
  extension: string
}

class URL {
  type: string
  url: string
}

class TextObjects {
  type: string
  language: string
  text: string
}

class ComicDate {
  type: string
  language: string
  text: string
}

class ComicSerie {
  name: string
  resourceURI: string;
}

class ComicSummary {
  name: string
  resourceURI: string;
}

export class ComicPrice {
  price: number;
  type: string;
}
