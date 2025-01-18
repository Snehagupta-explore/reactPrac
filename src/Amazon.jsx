import "./Amazon.css"
// import Price from "./price";
export default function Amazon({title,idx}) {
   let offer={
    backgroundColor:"#A08FA6",
    height:"25px"
   }
    let description=[
        ["All things Casual","MIN.60% OFF"],["Coolest Picks","MIN.70% OFF"],
        ["Everyday Pairs","MIN.70% OFF"],["Stylish Sneakers","MIN.40% OFF"]
    ]
    return (
      <div className="main">
        <h2><i>{title}</i></h2>
        <p >{description[idx][0]}</p>
        <h3 style={offer}> {description[idx][1]}</h3>
      </div>
    );
  }
  
