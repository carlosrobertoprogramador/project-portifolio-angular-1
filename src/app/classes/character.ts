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

export class Character {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: URL[];
  thumbnail: Image;
  comics: ResourceLists;
  stories: ResourceLists;
  events: ResourceLists;
  series: ResourceLists;
}
