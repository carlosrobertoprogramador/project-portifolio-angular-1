import { Character } from './character';

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

class ComicSummary {
  name: string
  resourceURI: string;
}

export class Storie {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  type:string;
  modified: Date;
  thumbnail: Image;
  comics: ResourceLists;
  series: ResourceLists;
  events: ResourceLists;
  characters: Character[];
  creators: Character[];
  originalissue: ComicSummary;
}
