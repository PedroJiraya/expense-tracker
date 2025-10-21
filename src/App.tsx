import { useEffect, useState } from "react";
import * as C from "./App.style";
import { Item } from "./types/Item";
import { items } from "./data/items";
import { categories } from './data/categories'
import { filterListByMonth, formatCurrentMonth, getCurrentMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";



const App = () => {
  const [list, setList] = useState(items);
  const [filtredList, setFiltredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(() => {
    setFiltredList(filterListByMonth(list, currentMonth));
  }, [currentMonth, list]);
  useEffect(()=>{formatCurrentMonth(currentMonth)},[])
  const handleMonthChange = (newMonth: string) =>{
      setCurrentMonth(newMonth)
      console.log(newMonth, currentMonth)
  }
  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;
    for(let i in filtredList){
      if(categories[filtredList[i].category].expense === true){
        expenseCount += filtredList[i].value
        
      }else{
        incomeCount += filtredList[i].value
      }
      setIncome(incomeCount)
      setExpense(expenseCount)
    }
  },[filtredList])
  return (
    <C.Container>
      <C.Header>
        <C.HaderText>Sistema Financeiro</C.HaderText>
      </C.Header>
      <C.body>
        <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        
        />        
        
        <TableArea list={filtredList} />
      </C.body>
    </C.Container>
  );
};

export default App;
