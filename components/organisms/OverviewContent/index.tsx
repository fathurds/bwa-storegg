import { useCallback, useEffect, useState } from "react";
import {
  HistoryTransactionTypes,
  TopUpCategoryTypes,
} from "../../../services/data-types";
import { getMemberOverview } from "../../../services/member";
import Category from "./Category";
import TableRow from "./TableRow";

export default function OverviewContent() {
  const [count, setCount] = useState([]);
  const [data, setData] = useState([]);

  const getMemberOverviewList = useCallback(async () => {
    const dataMember = await getMemberOverview();
    setCount(dataMember.data.count);
    setData(dataMember.data.data);
  }, [getMemberOverview]);

  useEffect(() => {
    getMemberOverviewList();
  }, []);

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              {count.map((el: TopUpCategoryTypes) => (
                <Category
                  key={el._id}
                  nominal={el.value}
                  icon={
                    el.name.toLowerCase() === "mobile"
                      ? `ic-mobile`
                      : "ic-desktop"
                  }
                >
                  Game
                  <br />
                  {el.name}
                </Category>
              ))}
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((el: HistoryTransactionTypes) => (
                  <TableRow
                    key={el._id}
                    title={el.historyVoucherTopup.gameName}
                    category={el.category.name}
                    item={`${el.historyVoucherTopup.coinQuantity} ${el.historyVoucherTopup.coinName}`}
                    price={el.value}
                    status={el.status}
                    image={`${process.env.NEXT_PUBLIC_IMAGE}/${el.historyVoucherTopup.thumbnail}`}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
