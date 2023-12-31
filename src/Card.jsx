import './Card.css';
import React, { Component } from 'react';

class Card extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const sales = this.props.sale
        return(
            <div className='card' style={{boxShadow: sales ? '10px 10px 30px -10px red' : '15px 15px 9px 0px rgba(0,0,0,0.1)'}}>
                <h4 className='card__h4' style={{display: sales ?'block' :'none'}}>Со скидкой 20%</h4>
                <svg className='card__svg1' width="40" height="34" viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.2 28.812L20 28.9973L19.78 28.812C10.28 20.8262 4 15.5455 4 10.1907C4 6.48501 7 3.70572 11 3.70572C14.08 3.70572 17.08 5.55858 18.14 8.07847H21.86C22.92 5.55858 25.92 3.70572 29 3.70572C33 3.70572 36 6.48501 36 10.1907C36 15.5455 29.72 20.8262 20.2 28.812ZM29 0C25.52 0 22.18 1.50082 20 3.85395C17.82 1.50082 14.48 0 11 0C4.84 0 0 4.4654 0 10.1907C0 17.176 6.8 22.9014 17.1 31.5542L20 34L22.9 31.5542C33.2 22.9014 40 17.176 40 10.1907C40 4.4654 35.16 0 29 0Z" fill="#0086ED"/>
                </svg>

                <img className='card__img' src={this.props.src} alt="" />
                <p className='card__name'>{this.props.name}</p>
                <h2 className='card__pay'>{this.props.pay} Р</h2>

                
                <svg className='card__svg2' width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="60" height="60" rx="15" fill="#D9D9D9"/>
                    <path d="M30.1053 5C33.6229 5 36.9964 6.36409 39.4837 8.7922C41.9711 11.2203 43.3684 14.5135 43.3684 17.9474V20.1053H52.2105V24.4211H49.6308L47.9575 44.0212C47.9115 44.5604 47.6596 45.0631 47.2518 45.4296C46.844 45.7961 46.3101 45.9997 45.7558 46H14.4547C13.9004 45.9997 13.3665 45.7961 12.9587 45.4296C12.5509 45.0631 12.2991 44.5604 12.2531 44.0212L10.5775 24.4211H8V20.1053H16.8421V17.9474C16.8421 14.5135 18.2395 11.2203 20.7268 8.7922C23.2141 6.36409 26.5877 5 30.1053 5ZM45.1943 24.4211H15.014L16.4884 41.6842H43.7199L45.1943 24.4211ZM32.3158 28.7368V37.3684H27.8947V28.7368H32.3158ZM23.4737 28.7368V37.3684H19.0526V28.7368H23.4737ZM41.1579 28.7368V37.3684H36.7368V28.7368H41.1579ZM30.1053 9.31579C27.8367 9.31579 25.655 10.1669 24.0113 11.6932C22.3675 13.2194 21.3876 15.304 21.2742 17.5158L21.2632 17.9474V20.1053H38.9474V17.9474C38.9474 15.7328 38.0755 13.603 36.512 11.9985C34.9485 10.3939 32.8131 9.43731 30.5474 9.32658L30.1053 9.31579Z" fill="#0086ED"/>
                </svg>

            </div>
        );
    };

};
export default Card