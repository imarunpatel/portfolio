
export interface Experience {
    company: string;
    designation: string;
    isCurrent: boolean;
    url: string;
    duration: {
      start: string;
      end: string;
    };
    description: string;
    points: Array<string | string[]>;
    skills: string[];
    images: { title: string; src: string; }[];
  }