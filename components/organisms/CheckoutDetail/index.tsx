import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";

export default function CheckoutDetail() {
  const [topup, setTopup] = useState({
    verifyID: "",
    bankAccountName: "",
    nominalItem: {
      coinName: "",
      coinQuantity: 0,
      price: 0,
      _id: "",
    },
    paymentItem: {
      payment: {
        type: "",
        _id: "",
      },
      bank: {
        bankName: "",
        name: "",
        noRekening: "",
        _id: "",
      },
    },
  });

  useEffect(() => {
    const dataLocal = localStorage.getItem("data-topup");
    const dataTopUp = JSON.parse(dataLocal!);
    setTopup(dataTopUp);
  }, []);

  return (
    <>
      <div className="purchase pt-md-50 pt-30">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Purchase Details
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Game ID{" "}
          <span className="purchase-details">{topup.verifyID}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Order ID <span className="purchase-details">#GG001</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Item{" "}
          <span className="purchase-details">
            {topup.nominalItem.coinQuantity} {topup.nominalItem.coinName}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Price{" "}
          <span className="purchase-details">
            <NumericFormat
              value={topup.nominalItem.price}
              prefix={"Rp"}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Tax (10%){" "}
          <span className="purchase-details">
            <NumericFormat
              value={topup.nominalItem.price * 0.1}
              prefix={"Rp"}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Total{" "}
          <span className="purchase-details color-palette-4">
            <NumericFormat
              value={topup.nominalItem.price * 0.1 + topup.nominalItem.price}
              prefix={"Rp"}
              displayType="text"
              thousandSeparator="."
              decimalSeparator=","
            />
          </span>
        </p>
      </div>
      <div className="payment pt-md-50 pb-md-50 pt-10 pb-10">
        <h2 className="fw-bold text-xl color-palette-1 mb-20">
          Payment Informations
        </h2>
        <p className="text-lg color-palette-1 mb-20">
          Your Account Name{" "}
          <span className="purchase-details">{topup.bankAccountName}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Type{" "}
          <span className="payment-details">
            {topup.paymentItem.payment.type}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Name{" "}
          <span className="payment-details">
            {topup.paymentItem.bank.bankName}
          </span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Account Name{" "}
          <span className="payment-details">{topup.paymentItem.bank.name}</span>
        </p>
        <p className="text-lg color-palette-1 mb-20">
          Bank Number{" "}
          <span className="payment-details">
            {topup.paymentItem.bank.noRekening}
          </span>
        </p>
      </div>
    </>
  );
}
