import React from 'react';
import PropTypes from 'prop-types';
import {CartaHover,Overflow,CardBody,CardText,Imagen} from '../elementos/styled-componet'

function Card({image,titles,hrefs,text}) {
    return (
        <CartaHover className="card text-center bg-dark animate__animated animate__fadeInUp"> 
            <Overflow>
                <Imagen src={image} className="card-img-top"/>
            </Overflow>
            <CardBody className="card-body text-light">
                <h4 className="card-tittle">{titles}</h4>
                <CardText className="card-text">{text ? text : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum aspernatur ducimus maxime ea optio iste error nam corrupti, eveniet molestiae maiores autem mollitia sed velit laboriosam, vero neque aperiam placeat?'}</CardText>
                <a href={hrefs} className="btn btn-outline-light rounded-0" target="_blank">
                      Go to this website
                </a>
            </CardBody>
        </CartaHover>
    )
}

Card.propTypes = {
    title:PropTypes.string.isRequired,
    hrefs:PropTypes.string,
    image:PropTypes.string
}

export default Card;
