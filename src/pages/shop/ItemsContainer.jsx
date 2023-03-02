import React from "react";
import { ITEMS }  from "../../items";
import Jacket from "./Jacket";
import '../../styles/ItemContainer.css'
import Shorts from "./Shorts";
import Gadgets from "./Gadgets";
import Laptops from "./Laptops";



export default function ItemsContainer() {

   
    
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <h1 className="mainItemText">Shop Here</h1>

        <div className="productContainer">
            <h2 className="productHeader">Jackets</h2>
            <div className="item">
                { ITEMS.map((item) => {
                    return  item.isJacket && <Jacket data={item} key={item.id} />
                })}
            </div>
        </div>

        <div className="productContainer">
            <h2 className="productHeader">Shorts</h2>
            <div className="item">
                { ITEMS.map((item) => {
                    return item.isShort && <Shorts data={item} key={item.id} />
                })}
            </div>
        </div>

        <div className="productContainer">
            <h2  className="productHeader">Gadgets</h2>
            <div className="item">
                { ITEMS.map((item) => {
                    return item.isgadget && <Gadgets data={item} key={item.id} />
                })}
            </div>
        </div>

        <div className="productContainer">
            <h2  className="productHeader">Laptops</h2>
            <div className="item">
                { ITEMS.map((item => {
                    return item.isLaptop && <Laptops data={item} key={item.id} />
                })) }
            </div>
        </div>
        <br />
        <br />

        </>
        
    )
}