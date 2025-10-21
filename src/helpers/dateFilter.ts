import { Item } from "../types/Item"

export const getCurrentMonth = () => {
    let now = new Date()//.toLocaleDateString('pt-BR',{year:'numeric', month:'2-digit'})

    return `${now.getFullYear()}-${now.getMonth() + 1}`
}

export const filterListByMonth = (list:Item[], date:string):Item[] => {

    let newList:Item[] =[]

    let [year, mounth] = date.split('-')

    for(let i in list){
        if(
            list[i].date.getFullYear() === parseInt(year) &&
            list[i].date.getMonth() === parseInt(mounth)
        ){
            newList.push(list[i])
        }
    }



    return newList;
} 

export const FormatDate = (date:Date) => {
    let year = date.getFullYear()
    let mouth = date.getMonth() 
    let day = date.getDate()

    return `${day <= 9 ? '0' + day : day}/${mouth <= 9 ? '0' + mouth : mouth}/${year}`
}

export const formatCurrentMonth = (currentMonth: string) =>  {
    let [year, month] = currentMonth.split('-')

    let months = ['janeiro', 'fevereiro', 'março','abril', 'maio', 'junho', 'julho',
        'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

    
       
        
    return `${months[parseInt(month) -1]} de ${year}`
}

export const toBrl = (n:number) => {
    n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
}