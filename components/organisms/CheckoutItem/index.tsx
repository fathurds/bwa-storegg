import { useEffect, useState } from "react";

export default function CheckoutItem() {
  const ROOT_IMG = process.env.NEXT_PUBLIC_IMAGE;

  const [item, setItem] = useState({
    thumbnail: "",
    name: "",
    category: {
      name: "",
    },
  });

  useEffect(() => {
    const dataLocal = localStorage.getItem("data-item");
    const dataItem = JSON.parse(dataLocal!);
    setItem(dataItem);
  }, []);

  return (
    <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
      <div className="pe-4">
        <div className="cropped">
          <img
            src={`${ROOT_IMG}/${item.thumbnail}`}
            className="img-fluid"
            alt=""
          />
        </div>
      </div>
      <div>
        <p className="fw-bold text-xl color-palette-1 mb-10">{item.name}</p>
        <p className="color-palette-2 m-0">Category: {item.category.name}</p>
      </div>
    </div>
  );
}
