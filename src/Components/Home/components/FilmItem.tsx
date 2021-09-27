import React from "react";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IHomePage } from "@Interfaces";
import moment from "moment";
import {
  FilmItemBox,
  FilmItemImage,
  FilmItemTitle,
  FilmItemText,
  FilmItemIcon,
  FilmItemFav,
} from "@Styled/Home";

const FilmItem: React.FC<IHomePage.FilmProps> = ({ data }) => {
  const [fav, setFav] = React.useState(false);

  React.useEffect(() => {
    const localStorageData = localStorage.getItem("favFilms");
    if (localStorageData?.includes(data.id)) {
      setFav(true);
    }
  }, [data.id]);

  const onClickFav = (e: React.MouseEvent<HTMLElement>, id: string) => {
    const localStorageData = localStorage.getItem("favFilms");
    e.stopPropagation();
    const favorites: string[] = localStorageData
      ? (JSON.parse(localStorageData) as string[])
      : [];

    if (!fav) {
      favorites.push(id);
    } else {
      const idIdx = favorites.findIndex(filmId => filmId === id);
      favorites.splice(idIdx, 1);
    }

    setFav(!fav);
    localStorage.setItem("favFilms", JSON.stringify(favorites));
  };

  const handleFilmView = (id: string, originalTitle: string) => {
    window.location.href = `https://www.themoviedb.org/movie/${id}-${originalTitle}`;
  };

  return (
    <FilmItemBox
      className={fav ? "fav" : ""}
      onClick={() => handleFilmView(data.id, data.original_title)}
      key={data.id}
    >
      <FilmItemImage
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path}`}
        alt=""
      />
      <FilmItemFav onClick={e => onClickFav(e, data.id)}>
        {fav ? (
          <FavoriteIcon style={{ color: "#fff", fontSize: 14 }} />
        ) : (
          <FavoriteBorderIcon style={{ color: "#fff", fontSize: 14 }} />
        )}
      </FilmItemFav>
      <FilmItemTitle>{data.title}</FilmItemTitle>
      <FilmItemText>
        {moment(data.release_date).format("MMM DD, YYYY")}
      </FilmItemText>
      <FilmItemIcon>
        <StarIcon style={{ color: "#ffda34", fontSize: 24, marginRight: 7 }} />
        {data.vote_average}
      </FilmItemIcon>
    </FilmItemBox>
  );
};

export default FilmItem;
