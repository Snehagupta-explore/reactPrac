import Amazon from "./Amazon";
function AmazonCard(){
    let box={
        display:"flex",
        flexWrap:"wrap",
        alignItems:"center",
        justifyContent:"center",
    }
    return(
        <div style={box}>
        <Amazon title="The roadster life" idx={0} />
      <Amazon title="HighLander" idx={1} />
      <Amazon title="Levis" idx={2} />
      <Amazon title="WoodLand" idx={3} />
        </div>
    )
}
export default AmazonCard;