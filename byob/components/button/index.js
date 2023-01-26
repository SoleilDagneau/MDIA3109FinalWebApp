import styled from "styled-components";

const ButtonCont = styled.div`
display:flex;
justify-content: center;
margin-top: 25px;
margin-bottom: 10px;
margin:${props=>props.mg};
`

const FormButton = styled.button`
background-color: ${props=>props.background};
width: ${props=>props.width};
height: auto;
border-radius:16px;
color: #FFFFFF;
font-family: 'Quicksand', sans-serif;
font-weight: ${props=>props.weight};
font-size: ${props=>props.sz};
filter: ${props=>props.shadow};
border: 0px;
padding:  ${props=>props.pd};
`
const ATag = styled.a`
color: #FFFFFF;
font-family: 'Lato', sans-serif;
font-size: 20px;
`

export default function Button({
    labeltxt= 'Next',
    bg='#5CB8F7',    
    wt='normal',
    s="0px",
    wd="100%",
    onClick=()=>{},
    marg="",
    pad="",
    size="20px",
    

}){
    function MouseOver(event) {
        event.target.style.background = '#FF617C';
    }

    function MouseOut(event) {
        event.target.style.background="";
    }

    return <ButtonCont mg={marg}>
        <FormButton onMouseOver={MouseOver} onMouseOut={MouseOut} onClick={onClick}
        background={bg} shadow={s} weight={wt} width={wd} pd={pad} sz={size}>{labeltxt}</FormButton>
    </ButtonCont>
}