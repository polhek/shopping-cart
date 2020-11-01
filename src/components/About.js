import React, { useState, useEffect } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';

const About = () => {
  const [coordinateX, setCoordinateX] = useState('');
  const [coordinateY, setcoordinateY] = useState('');

  useEffect(() => {
    setCoordinates();
  }, []);
  //generates coordinates only on first load
  const setCoordinates = () => {
    let x = Math.random() * 40;
    let y = Math.random() * (50 - 20) + 20;
    console.log(y);
    setCoordinateX(y);
    setcoordinateY(x);
  };

  return (
    <div className="aboutus">
      <div className="about">
        <h2>About Us</h2>
        <p>
          We are a locally owned and operated hardware and building supply
          store. Our goal is to serve our customers and the greater Random
          Valley, Random City, community. Shopping cart and Shopping Supply
          offers a huge selection of interior and exterior paints, power tools,
          lawn and garden products, plumbing, heating, and electrical supplies.
          Whether you're a homeowner, DIYer, contractor, builder, or landscaper,
          we have exactly what you need. Our staff has the experience and
          knowledge to answer any questions you may have about our products and
          your home improvement projects. Keep checking back for updates!
        </p>
        <h3>Contact us</h3>
        <p>
          Phone number: <a href="tel:004321943214">+ (432) 194 3214</a>
        </p>
        <p>
          Random mail: <a href="mailto: abc@example.com">dfsdfsd@sdfdsf.com</a>
        </p>
      </div>
      <div className="google-map">
        <h3>Location</h3>
        <Map center={[coordinateX, coordinateY]} zoom={5}>
          <Marker position={[coordinateX, coordinateY]} />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </Map>
      </div>
    </div>
  );
};

export default About;
