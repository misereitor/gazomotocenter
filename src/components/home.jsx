import React from 'react';

function Home(){
    let currentSlide = 0
    let toPrev = () => {
        currentSlide --
        if (currentSlide < 0) {
            currentSlide = 2
        }
        updateMargin()
    }

    let toNext = () => {
        currentSlide ++
        if (currentSlide > 2) {
            currentSlide = 0
        }
        updateMargin()
    }

    let updateMargin = () => {
        let slideWidth = document.querySelector(".slide-home").clientWidth
        let newMargin = (currentSlide * slideWidth)
        document.querySelector(".photos").style.marginLeft = `-${newMargin}px`
    }
    setInterval(toNext, 3000)
    return (
        <div className="container">
            <div className="sombra"></div>
            <div className="slide-controlls">
                <div className="slide-control" onClick={toPrev}>{`<`}</div>
                <div className="slide-control" onClick={toNext}>{`>`}</div>
            </div>
            <div className="photos" style={{width: "calc(100vw * 3)"}}>
                <div className="slide-home" style={{backgroundImage: "url(./img/home/gazo_cliente.jpeg)", backgroundRepeat:"no-repeat"}}></div>
                <div className="slide-home" style={{backgroundImage: "url(./img/home/loja.jpeg)", backgroundRepeat:"no-repeat"}}></div>
                <div className="slide-home" style={{backgroundImage: "url(./img/home/oficina.jpeg)", backgroundRepeat:"no-repeat"}}></div>
            </div>
        </div>
    );
}


export default Home