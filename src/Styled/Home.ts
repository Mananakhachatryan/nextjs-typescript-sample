// #region Global Imports
import styled from "styled-components";
// #endregion Global Imports

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
`;

export const FilmsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 864px;
  max-width: 100%;
`;

export const FilmItemBox = styled.div`
  width: 30%;
  text-decoration: none !important;
  max-width: 180px;
  min-height: 100px;
  position: relative;
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  border: 1px solid rgba(var(--lightGrey), 1);
  background-color: #f4f4f4;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 200px;
  }
  &.fav {
    background-color: #cccccc;
  }
`;

export const FilmItemImage = styled.img`
  width: 100%;
  height: 273px;
  object-fit: cover;
`;

export const FilmItemFav = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: #042541;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

export const FilmItemTitle = styled.p`
  font-size: 16px;
  color: #000;
  margin: 5px 5px;
`;

export const FilmItemText = styled.p`
  font-size: 12px;
  color: #000;
  margin: 5px 5px;
`;

export const FilmItemIcon = styled.p`
  font-size: 16px;
  color: #000;
  vertical-align: bottom;
`;

export const FilmItemSelect = styled.select`
  border: 1px solid #ccc;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  margin: 20px 0;
`;

export const Top = styled.div`
  margin: 100px;
`;

export const Middle = styled.div`
  text-align: center;
  display: flex;
  flex: 1 1 100%;
  width: 100%;
  justify-content: flex-start;
`;

export const MiddleLeft = styled.div`
  display: flex;
  flex: 1 1 1%;
`;

export const MiddleLeftButtons = styled.div`
  background: #f9da2e;
  border-radius: 8px;
  font-family: Arial;
  font-weight: 700;
  font-size: 25px;
  color: #4b6c8d;
  letter-spacing: 0;
  width: 55px;
  height: 236px;
  margin-left: 15px;
  padding: 10px 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #4b6c8d;

  .button {
    cursor: pointer;
  }

  .active {
    color: #2c3e50;
  }
`;

export const MiddleRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
`;

export const Apod = styled.div`
  display: flex;
  flex: 1 1 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const ApodButton = styled.div`
  background: #f9da2e;
  border-radius: 5px;
  padding: 5px 10px;
  font-family: Arial;
  font-weight: 700;
  font-size: 25px;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 0;
  cursor: pointer;
`;

export const TopText = styled.div`
  font-size: 110px;
  font-family: Arial, Helvetica, sans-serif;
  color: #ffffff;
  margin-bottom: 10px;
`;
