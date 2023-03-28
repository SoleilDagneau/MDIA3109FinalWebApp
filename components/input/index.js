import styled from "styled-components";

const InputCont = styled.div`
display: flex;   
margin-top: 8%;
`

const Field = styled.input`
padding: 12px 15px;
font-size: 0.9rem;
border-radius: 15px 0px 0px 15px;
box-shadow: none;
border: none;
background-color: #D9D9D9;
font-family: 'Quicksand', sans-serif;
`

const Arrow = styled.button`
background-color: #D9D9D9;
-webkit-border-top-right-radius: 25px;
-webkit-border-bottom-right-radius: 25px;
-moz-border-radius-topright: 25px;
-moz-border-radius-bottomright: 25px;
border-top-right-radius: 25px;
border-bottom-right-radius: 25px;
border: none;
cursor: pointer; 
cursor: hand;
`

const Span = styled.span`
padding: 14px 15px;
font-size: 0.9rem;
text-transform: uppercase;
font-weight: 300 ;
color: #FCD581;
background-color: #F54E59;
border-radius: 0px 15px 15px 15px;
`

export default function Input({
txt='text',
}){
    return <InputCont>
        <Field type="text" placeholder={txt} />
        <Arrow><Span>➜</Span></Arrow>
    </InputCont>
}
