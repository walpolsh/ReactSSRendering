import React from 'react'; //es6 module syntax

const Home = () => {
return (
    <div>
      <div>I'm the BESTEST component</div>
      <button onClick = {() => console.log('HI!THERE!')}>Press Me!</button>
    </div>
  );
};

export default Home;