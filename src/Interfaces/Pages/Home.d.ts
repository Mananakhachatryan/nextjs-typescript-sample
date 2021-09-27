import { WithTranslation } from "next-i18next";

interface MovieItemProps {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: integer[];
  id: integer;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: integer;
  video: boolean;
  vote_average: number;
}

declare namespace IHomePage {
  export interface IProps extends WithTranslation {}

  export interface InitialProps {
    namespacesRequired: string[];
  }

  export interface MoviesProps {
    data: {
      page: integer;
      results: MovieItemProps[];
      total_pages: integer;
      total_results: integer;
    };
    status: number;
    statusText: string;
  }

  export interface HomeContainerProps {
    getMovies: (page: number) => void;
    sortMovies: (dir: string) => void;
    films: IStateProps["data"]["results"];
    totalPages: integer;
    activePage: integer;
  }

  export interface IStateProps {
    pending: boolean;
    success: boolean;
    error: boolean;
    data: {
      page: integer;
      results: MovieItemProps[];
      total_pages: integer;
    };
  }

  export interface FilmProps {
    data: MovieItemProps;
  }

  namespace Actions {
    export interface IMapPayload {
      dir: "desc" | "asc";
    }

    export interface IMapResponse {}
  }
}

export { IHomePage };
