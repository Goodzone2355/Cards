import './App.css';
import Card from './Card';

function App() {
  return (
    <div className='container'>
      <h2 className='container__h2'>Хиты продаж</h2>
      
      <div className='cards'>
        <Card 
          name = ' FOREVER X880 29" (2022) Grey-Red'
          pay = {194135} 
          src = '/img/Rectangle.png'
          sale = {false}
        />

        <Card 
          name = ' GRIZZILY MOUNTAINE BIKE 29" (2022) White'
          pay = {41000} 
          src = '/img/Rectangle1.png'
          sale = {true}  
        />

        <Card 
          name = 'FORWARD DORTMUND 28 1.0 (2022) черный/бронзовый'
          pay = {50000}   
          src = '/img/Rectangle2.png'
          sale = {false}
        />

        <Card 
          name = 'STINGER ELEMENT 24" (2022) зеленый'
          pay = {25000}   
          src = '/img/Rectangle3.png'
          sale = {true}
        />

        <Card 
          name = ' FOREVER X880 29" (2022) Grey-Red'
          pay = {194135}  
          src = '/img/Rectangle.png' 
          sale = {false}
        />

        <Card 
          name = ' GRIZZILY MOUNTAINE BIKE 29" (2022) White'
          pay = {41000}   
          src = '/img/Rectangle1.png'  
          sale = {false}
        />

        <Card 
          name = 'FORWARD DORTMUND 28 1.0 (2022) черный/бронзовый'
          pay = {50000}   
          src = '/img/Rectangle2.png'
          sale = {false}
        />

        <Card 
          name = 'STINGER ELEMENT 24" (2022) зеленый'
          pay = {25000}   
          src = '/img/Rectangle3.png'
          sale = {true}
        />
      </div>
    </div>
  );
}

export default App;
