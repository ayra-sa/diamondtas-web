import React from "react";
import DocumentTitle from "../DocumentTitle";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Kontak = () => {
  DocumentTitle("Kontak")
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: -6.200000, lng: 106.816666 },
      zoom: 10,
    });

    new window.google.maps.Marker({
      position: { lat: -6.200000, lng: 106.816666 },
      map: map,
    });
  }, []);

  return (
    <section>
      <div className="container">
        <h2 className="section-title">Kontak Kami</h2>

        <div className="my-10">
          <p>Jln. Perniagaan Timur no. 43</p>
          <p>Jakarta Barat 11230</p>
          <br />
          <p>Telp: (021) 6929068 , 6929710</p>
          <p>Fax : (021) 69833289</p>
          <p>HP/WA: 0858 8060 8060 , 0858 9050 9050</p>
          <p>Email: jakarta@diamondtas.co.id</p>
        </div>
        <div ref={mapRef} style={{ width: '100%', height: '400px' }} />
      </div>
    </section>
  );
};

export default Kontak;
