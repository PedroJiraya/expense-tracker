import { FormatDate } from "../../helpers/dateFilter";
import { Item } from "../../types/Item";
import * as C from "./styles";
import { categories } from "../../data/categories";

export const TableItem = ({ item }: { item: Item }) => {
  return (
    <C.TableLine>
      <C.TableColumn>{FormatDate(item.date)}</C.TableColumn>
      <C.TableColumn>
        <C.Category color={categories[item.category].color}>
          {categories[item.category].title}
        </C.Category>
      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>
        <C.Value expense={categories[item.category].expense}>
          {item.value.toLocaleString("pt-BT", {
            style: "currency",
            currency: "brl",
          })}
        </C.Value>
      </C.TableColumn>
    </C.TableLine>
  );
};
