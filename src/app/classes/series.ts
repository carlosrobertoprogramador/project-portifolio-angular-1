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

export class Serie {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  urls: URL[];
  startYear: number;
  endYear: number;
  rating: string;
  modified: Date;
  thumbnail: Image;
  comics: ResourceLists;
  stories: ResourceLists;
  series: ResourceLists;
  events: ResourceLists;
  characters: ResourceLists;
  creators: ResourceLists;
  next: any;
  previous: any;
}
