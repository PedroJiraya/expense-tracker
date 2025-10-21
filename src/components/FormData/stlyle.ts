import styled from 'styled-components'

export const Container = styled.form`
    margin-top:20px;
    display:flex;
    justify-content:space-around;
    align-items:flex-end; /* alinhar pela base para que o submit fique alinhado com os campos */
    padding:20px;
    box-shadow: 0 0 5px #ccc;
    border-radius:10px;

    label{
        display:flex;
        flex-direction:column;
        gap:6px;
    }
    input, select {
        border:1px solid #ccc;
        border-radius:5px;
        padding:8px 10px;
        flex:1;
        margin:0; /* controlamos espaçamento com gap */
        margin-right:5px;
        height:40px; /* altura consistente */
        box-sizing:border-box;
    }

    /* botão de submit com mesma altura e aparência coerente */
    input[type="submit"]{
        height:40px;
        padding:8px 16px;
        border-radius:5px;
        border:1px solid #ccc;
        background:#4caf50;
        color:#fff;
        cursor:pointer;
        align-self:flex-end; /* mantém alinhamento na base */
        margin-left:8px;
    }
`