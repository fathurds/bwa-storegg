import { useCallback, useEffect, useState } from "react";
import { GameItemTypes } from "../../../services/data-types";
import { getFeaturedGame } from "../../../services/player";
import GameItem from "../../molecules/GameItem";

export default function FeaturedGame() {
  const [gameList, setGameList] = useState<any>([]);

  const getFeaturedGameList = useCallback(async () => {
    const data = await getFeaturedGame();
    setGameList(data.data);
  }, [getFeaturedGame]);

  useEffect(() => {
    getFeaturedGameList();
  }, []);

  const API_IMG = process.env.NEXT_PUBLIC_IMAGE;

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {gameList.map((el: GameItemTypes) => (
            <GameItem
              key={el._id}
              title={el.name}
              category={el.category.name}
              thumbnail={`${API_IMG}/${el.thumbnail}`}
              id={el._id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
