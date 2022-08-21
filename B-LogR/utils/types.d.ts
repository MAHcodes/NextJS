export interface IAuthor {
    slug: string;
    name: string;
    profile: {
      url: string;
    };
}

export interface IPost {
  slug: string;
  image: {
    url: string;
  };
  title: string;
  excerpt: string;
  athuror: IAuthor;
  description: {
    html: string
  };
}

export interface IList {
  slug: string;
  name: string;
}

export interface IAuthor {
  name: string;
  slug: string;
  bio: string;
  profile: {
    url: string;
  };
  posts: {
    slug: string;
    title: string;
    image: {
      url: string;
    };
    excerpt: string;
    athuror: {
      name: string;
      slug: string;
      profile: {
        url: string;
      };
    };
  };
}
