import Nav from "./Nav";
import {Link } from "react-router-dom";

function Fish(props) {
    return (
        <div>
            <Nav />

            <div className="searchRow">
                <div className="searchLeft" >  </div>
                <div className="searchMiddle" >

                    {props.items.map((item) => {
                        if (item.fields.animal === "fish") {
                            return (

                                <div className="showSearchItem" >
                                    <Link to={`/item/${item.id}`}>
                                        <div> <img id="searchImage" src={item.fields.image} /></div>
                                    </Link>
                                    {/* <div><p>-------------------------------------------</p> </div> */}
                                    <div id="searchTitle" >{item.fields.title} </div>
                                    <div><h4>Rating: {item.fields.rating}</h4></div>
                                    <div><h4>Price: ${item.fields.price}</h4></div>
                                </div>

                            )
                        }
                    })}
                </div>
                <div className="searchRight" >  </div>
            </div>

        </div>
    )
}

export default Fish;