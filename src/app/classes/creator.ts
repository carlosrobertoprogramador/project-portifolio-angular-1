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

export class Creator {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: string;
  fullName: string;
  modified: Date;
  resourceURI: string;
  urls: URL[];
  thumbnail: Image;
  comics: ResourceLists;
  stories: ResourceLists;
  events: ResourceLists;
  series: ResourceLists;
}
