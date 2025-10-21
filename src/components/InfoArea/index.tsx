import { formatCurrentMonth } from '../../helpers/dateFilter'
import * as C from './styles'
import { ResumeItem } from '../ResumeItem'



type Props = {
  currentMonth:string,
  onMonthChange:(date:string) => void,
  income:number,
  expense:number
}

export const InfoArea = ({currentMonth,onMonthChange, income, expense}:Props) => {


  const handlePreviusMonth = () =>{
    let [year, month] = currentMonth.split('-')
    let currentDate = new Date(parseInt(year), parseInt(month) -1, 1)
    currentDate.setMonth(currentDate.getMonth() -1)
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() +1}`)
  }              
  const handleNextMonth = () => {
    const [year, month] = currentMonth.split('-')
    const currentDate = new Date(parseInt(year), parseInt(month) -1,1)
    currentDate.setMonth(currentDate.getMonth() +1)
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() +1}`)
  }      

  return (
    <C.Container>
      <C.MouthArea>
        <C.MonthArrow onClick={handlePreviusMonth}>⬅️</C.MonthArrow>
        <C.MonthTitle >{formatCurrentMonth(currentMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
      </C.MouthArea>
      <C.ResumeArea>
        <ResumeItem title='Receita' value={income}  />
        <ResumeItem title='Despesas' value={expense}/>
        <ResumeItem title='Balanço' value={income - expense} color={income - expense < 0? 'red':'green'} ></ResumeItem>
        
      </C.ResumeArea>
    </C.Container>
  )
}
