// TODO: create a component that displays a single bakery item


export default function BakeryItem(props) {
    const handleClick = () => {
        {props.updateCart((prevCount) => prevCount + props.price)}
        {props.items.push([props.price, props.name])}
    }


    return (
      <div class = "BakeryItem">
        <img src = {props.image}/>
        <h>{props.name}</h>
        <p>{props.description}</p>
        <p>{props.price}</p>
        <button onClick = {handleClick} class = "button"> Add to Cart </button>
      </div>  
    );
}