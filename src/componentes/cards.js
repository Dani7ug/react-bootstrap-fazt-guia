import React from 'react'
import Card from './card';
import Image1 from '../assets/image1.jpg';
import ImageTwo from '../assets/image2.jpg';
import Image3 from '../assets/image3.jpg';

const Cards = [
    {
        id:1,
        title: 'Dani web' ,
        image: Image1,
        url:"https://github.com/Dani7ug",
    },
    {
        id:2,
        title: 'Dani Blog' ,
        image: ImageTwo,
        url:"https://www.instagram.com/dani7u"
    },
    {
        id:3,
        title: 'Dani Youtube' ,
        image: Image3,
        url:"https://www.youtube.com/channel/UCgaASvtUZITqED8sVAXaaSA"
    }
]

function cards() {
    return (
            <div className="container vh-100  d-flex align-items-center justify-contentet-center">
                <div className="row ">
                {Cards.map(cars => (
                <div className="col-md-4" key={cars.id}>
                <Card image={cars.image} titles={cars.title} hrefs={cars.url}/>
                </div>
                ))}
                </div>
            </div>
    )
}

export default cards
