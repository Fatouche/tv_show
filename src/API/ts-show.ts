import axios from "axios";
import { PopularResult } from "../types/tv-show";
import { API_KEY_PARAM, BASE_URL, LANG_PARAM } from "../config";

export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get<PopularResult>(
      `${BASE_URL}tv/popular${API_KEY_PARAM}${LANG_PARAM}`
    );
    return response.data.results;
  }

  static async fetchRecommendations(tvShowId: string) {
    const response = await axios.get<PopularResult>(
      `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}${LANG_PARAM}`
    );
    return response.data.results;
  }

  static async fetchByTitle(title: string) {
    const response = await axios.get<PopularResult>(
      `${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}${LANG_PARAM}`
    );
    return response.data.results;
  }
}
