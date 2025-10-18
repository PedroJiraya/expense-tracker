import { useState } from 'react'
import { formatCurrentMonth } from '../../helpers/dateFilter'
import * as C from './styles'


export const InfoArea = ({currentMonth}:{currentMonth:string}) => {

  const[monthFilter, setMonthFilter ] = useState(currentMonth)

  const handlePreviusMonth = () =>{
    let [year, month] = currentMonth.split('-')
    let currentDate = new Date(parseInt(year), parseInt(month) -1, 1)
    currentDate.setMonth(currentDate.getMonth() -1)
    
  }              
  const handleNextMonth = () => {

  }      

  return (
    <C.Container>
      <C.MouthArea>
        <C.MonthArrow onClick={handlePreviusMonth}>⬅️</C.MonthArrow>
        <C.MonthTitle >{formatCurrentMonth(monthFilter)}</C.MonthTitle>
        <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
      </C.MouthArea>
      <C.ResumeArea>

      </C.ResumeArea>
    </C.Container>
  )
}
