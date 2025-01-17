import Card from './Card';
function Cards(){
    let num={a:"A204",b:"A205"};
    return(
        <>
        <Card name="12th fail" price={200} features={num.a} textcolor="pink"/>
        <Card name="yodha" price={300} features={num.b} textcolor="pink"/>
        </>
    )
}
export default Cards