import { parseISO } from "date-fns";
import { colors } from "../../styles";
import { BsFillCartFill } from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";

const ICONS = {
  cart: BsFillCartFill,
  bill: FaMoneyBill,
  car: AiFillCar,
};

const COLORS = {
  blue: "blue",
};

export const getMonthlyData = (categories, date, type) =>
  categories
    .filter((cat) => cat["transaction_type"] === type)
    .map((cat) => {
      return {
        id: cat.id,
        name: cat.name,
        Icon: ICONS[cat.icon] || BsFillCartFill,
        color: COLORS[cat.color] || colors.pink[600],
        amount: cat.transactions.reduce((acc, cur) => {
          const trxDate = parseISO(cur.date);
          const trxYear = trxDate.getFullYear();
          const trxMonth = trxDate.getMonth();
          if (trxYear === date.year && trxMonth === date.month) {
            return acc + cur.amount;
          }
          return acc;
        }, 0),
      };
    });
