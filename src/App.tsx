import React from "react";
import "./global.css";
import { TVShowAPI } from "./API/ts-show";
import { TV_show_type } from "./types/tv-show";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import Logo from "./components/Logo/Logo";
import { TVShowList } from "./components/TVShowList/TVShowList";
import { SearchBar } from "./components/SearchBar/SearchBar";

export function App() {
  const [currentTvShow, setCurrentTvShow] = React.useState<TV_show_type>();
  const [recommendationList, setRecommendationList] = React.useState<
    Array<TV_show_type>
  >([]);

  const fetchPopulars = async () => {
    const populars = await TVShowAPI.fetchPopulars();
    if (populars.length > 0) {
      setCurrentTvShow(populars[0]);
    }
  };

  const fetchRecommendations = async (tvShowId: string) => {
    const recommendations = await TVShowAPI.fetchRecommendations(tvShowId);
    if (recommendations.length > 0) {
      setRecommendationList(recommendations);
    }
  };

  const searchTvShow = async (tvShowName: string) => {
    const searchResponse = await TVShowAPI.fetchByTitle(tvShowName);
    setCurrentTvShow(searchResponse[0]);
  };

  React.useEffect(() => {
    fetchPopulars();
  }, []);

  React.useEffect(() => {
    if (currentTvShow) {
      fetchRecommendations(currentTvShow.id);
    }
  }, [currentTvShow]);

  if (currentTvShow === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="main_container"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTvShow.backdrop_path}") no-repeat center / cover`,
      }}
    >
      <div className="header">
        <div className="row">
          <div className="col-4">
            <Logo
              title="QueRegarder"
              subtitle="Trouve la serie tv que tu aimes"
            />
          </div>
          <div className="col-sm-12 col-md-4">
            <SearchBar onSubmit={searchTvShow} />
          </div>
        </div>
      </div>
      <div className="tv_show_details">
        <TVShowDetail tvShow={currentTvShow} />
      </div>
      <div className="recommendations">
        <TVShowList
          tvShowList={recommendationList}
          onClickItem={setCurrentTvShow}
        />
      </div>
    </div>
  );
}
function fetchByTitle(tvShowName: string) {
  throw new Error("Function not implemented.");
}
