import { useEffect, useState } from "react";
import * as C from "./App.style";
import { Item } from "./types/Item";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { filterListByMonth, formatCurrentMonth, getCurrentMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";

const App = () => {
  const [list, setList] = useState(items);
  const [filtredList, setFiltredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFiltredList(filterListByMonth(list, currentMonth));
  }, [currentMonth, list]);
  useEffect(()=>{formatCurrentMonth(currentMonth)},[])
  return (
    <C.Container>
      <C.Header>
        <C.HaderText>Sistema Financeiro</C.HaderText>
      </C.Header>
      <C.body>
        <InfoArea currentMonth={currentMonth}/>
        {/* Area de insersao */}
        <TableArea list={filtredList} />
      </C.body>
    </C.Container>
  );
};

export default App;
