export interface IPost {
  slug: string;
  image: {
    url: string;
  };
  title: string;
  excerpt: string;
  athuror: {
    slug: string;
    name: string;
    profile: {
      url: string;
    };
  };
}
