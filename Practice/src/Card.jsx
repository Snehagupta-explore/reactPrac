function Card({name,price,features,textcolor}){
   let isdis=price>=300 ? <i>disscount of 5%</i> : ""
//    let styles={backgroundColor:"pink"};
    let styles={backgroundColor:textcolor}
    let styless={color: price>=300 ? "red" : ""}
    return(
       
        // <div style={styles}>
        <div>
        <h1 style={styles}>{name}</h1>
        <h3 style={styless}>{price}</h3>
        <h2>{isdis}</h2>
        
        <p>{features}</p>
        </div>
    )
}

export default Card