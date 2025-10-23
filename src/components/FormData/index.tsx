import { useState, FormEvent } from "react";
import { Item } from "../../types/Item";
import * as C from "./stlyle";

type Props ={
    addItem:(item:Item) => void
}

export const FormItems = ({addItem}:Props) => {

    const [data, setData] = useState('')
    const [categoria, setCategoria] = useState('')
    const [titulo, setTitulo ] = useState('')
    const [despesa, setDespesa] = useState('')

    const handleAddEvent = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        
        let newDate = new Date(data)
        let dateNew = `${newDate.getFullYear()}-${newDate.getMonth() +2}-${newDate.getDate()}`
        if(data && categoria && titulo && despesa){

            let newItem:Item = ({
            date: new Date(dateNew + 'T00:00:00') ,
            category: categoria,
            title:titulo,
            value: parseInt(despesa)
        })
        addItem(newItem)
        console.log(newItem)
        }else{
          alert('Insira os dados corretamente')
        }
        setData('')
        setCategoria('')
        setTitulo('')
        setDespesa('')     

    }
    

  return (
    <C.Container onSubmit={handleAddEvent}>
      <label>
        Data
        <input type="date" 
            value={data}
            onChange={(e) => setData(e.target.value)}    
        />
      </label>
      <label>
        Categoria
        <select name="" id="" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          <option value="">Selecione...</option>
          <option value="food">Alimentação</option>
          <option value="rent">Aluguel</option>
          <option value="salary">Salario</option>
        </select>
      </label>
      <label>
        Titulo
        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
      </label>
      <label>
        Despesa
        <input type="number" value={despesa} onChange={(e) => setDespesa(e.target.value)} />
      </label>
      <input type="submit" value={"Adicionar"} />
    </C.Container>
  );
};
