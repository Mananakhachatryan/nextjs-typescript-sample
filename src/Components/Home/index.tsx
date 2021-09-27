import React from "react";
import { connect } from "react-redux";
import { HomeActions } from "@Actions";
import { IHomePage } from "@Interfaces";
import { FilmsBox, FilmItemSelect } from "@Styled/Home";
import Pagination from "@mui/material/Pagination";
import FilmItem from "./components/FilmItem";

const HomeContainer: React.FC<IHomePage.HomeContainerProps> = ({
  getMovies,
  sortMovies,
  films,
  activePage,
  totalPages,
}) => {
  const [dir, setDir] = React.useState("");

  React.useEffect(() => {
    getMovies(1);
  }, [getMovies]);

  const handleChange:
    | ((event: React.ChangeEvent<unknown>, page: number) => void)
    | undefined = (event, value) => {
    getMovies(value);
  };

  const sortFilms:
    | ((event: React.ChangeEvent<HTMLSelectElement>) => void)
    | undefined = event => {
    const { value } = event.target;
    setDir(value);
    sortMovies(value);
  };

  return (
    <>
      <FilmItemSelect onChange={sortFilms} value={dir}>
        <option disabled value="">
          Sort By
        </option>
        <option>asc</option>
        <option>desc</option>
      </FilmItemSelect>
      <FilmsBox>
        {films.map(item => (
          <FilmItem key={item.id} data={item} />
        ))}
        <Pagination
          onChange={handleChange}
          page={activePage}
          count={totalPages}
          color="primary"
        />
      </FilmsBox>
    </>
  );
};

interface ReduxProps {
  home: IHomePage.IStateProps;
}

const mapStateToProps = ({ home }: ReduxProps) => ({
  films: home.data.results,
  totalPages: home.data.total_pages,
  activePage: home.data.page,
});

const mapDispatchToProps = (dispatch: any) => ({
  getMovies: (page: number) => dispatch(HomeActions.getMovies(page)),
  sortMovies: (dir: string) => dispatch(HomeActions.sortMovies(dir)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
