import { BsFillCartFill } from "react-icons/bs";
import { parseISO } from "date-fns";
import { colors } from "../../styles";

export const getMonthlyData = (categories, date, type) =>
  categories
    .filter((cat) => cat["transaction_type"] === type)
    .map((cat) => {
      return {
        id: cat.id,
        name: cat.name,
        Icon: BsFillCartFill,
        color: colors.pink[600],
        amount: cat.transactions.reduce((acc, cur) => {
          const trxDate = parseISO(cur.date);
          const trxYear = trxDate.getFullYear();
          const trxMonth = trxDate.getMonth();
          if (trxYear === date.year && trxMonth === date.month) {
            return acc + cur.amount;
          } else {
            return acc;
          }
        }, 0),
      };
    });
