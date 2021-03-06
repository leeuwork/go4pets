import {Link } from "react-router-dom";

function Items(props) {
    return (
        <div>
            <div className="searchRow">
                <div className="searchLeft" ></div>
                <div>
                    <h1  id="itemsWord" >Items for Sale</h1>
                    <div className="searchMiddleItems" >
                    {props.items.map((item) => {
                        return (

                            <div className="showItems" >
                                <Link to={`/item/${item.id}`}>
                                    <div> <img id="searchImage" src={item.fields.image} /></div>
                                </Link>
                                {/* <div><p>-------------------------------------------</p> </div> */}
                                <div id="searchTitle" >{item.fields.title} </div>
                                <div>Rating: {item.fields.rating}</div>
                                <div>Price: ${item.fields.price}</div>
                            </div>

                        )
                    })}
                    </div>

                </div>

                <div className="searchRight" >  </div>


            </div>
        </div>
    )
}

export default Items