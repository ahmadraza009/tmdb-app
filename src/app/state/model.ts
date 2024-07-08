export interface Movie {
  id?: number;
  title?: string | null | undefined;
  original_title?: string | null | undefined;
  release_date?: Date | null | undefined;
  poster_path?: string | null | undefined;
  genres?: Genre[];
  homepage?: string;
  overview?: string;
  status?: string;
  vote_count?: number;
  vote_average?: number;
  runtime?: number;
  original_language?: string;
  credits?: Credits;
}

export interface Credits {
  cast: Credit[];
  crew: Credit[];
}

export interface Credit {
  id: number;
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string;
  character: string;
  order: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ApiResponse {
  page: number;
  results: Movie[];
}
