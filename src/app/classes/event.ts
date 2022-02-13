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

export class Event {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  urls: URL[];
  modified: Date;
  start: Date;
  end: Date;
  thumbnail: Image;
  comics: ResourceLists;
  stories: ResourceLists;
  series: ResourceLists;
  characters: ResourceLists;
  creators: ResourceLists;
  next: any;
  previous: any;
}
