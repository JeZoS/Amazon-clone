import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.z8ienb_ZjqL6SOk4aitpFQHaCl%26pid%3DApi&f=1" alt=""  />
            <div className="home__row">
                <Product 
                    id="12341"
                    title="Harry potter"
                    image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1QVjjFQSWBuNjSszdq6zeSpXas%2FCustom-Canvas-Wall-Decal-Harry-Potter-Poster-Harry-Potter-Stickers-Mural-The-Sorcerer-s-Stone-Wallpaper.jpg&f=1&nofb=1"
                    price="1111"
                    rating="4"
                />
                 <Product 
                    id="12342"
                    title="Pokeball"
                    image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-pZ8ZZx7yT7yiObFMuy76wHaIl%26pid%3DApi&f=1"
                    price="211"
                    rating="5"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="12346"
                    title="Harry potter 2"
                    image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1QVjjFQSWBuNjSszdq6zeSpXas%2FCustom-Canvas-Wall-Decal-Harry-Potter-Poster-Harry-Potter-Stickers-Mural-The-Sorcerer-s-Stone-Wallpaper.jpg&f=1&nofb=1"
                    price="21.12"
                    rating="3"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="12343"
                    title="Bong "
                    image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Mljw9Njb9bHNaBWxu_oavwHaHa%26pid%3DApi&f=1"
                    price="212"
                    rating="6"
                />
                 <Product 
                    id="12344"
                    title="Taylor Swift Dezire"
                    image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.OYVaPC9SWEWCKibVPgpG2QHaKM%26pid%3DApi&f=1"
                    price="99"
                    rating="1"
                />
            </div>
        </div>
    )
}

export default Home
