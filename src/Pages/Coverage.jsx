import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';
import { useRef } from 'react';

const Coverage = () => {
  const wareHouses = useLoaderData();
  console.log(wareHouses);
  const position = [23.685, 90.3565];
  const mapRef = useRef(null);

  const handleDistrict = (e) => {
    e.preventDefault();
    const location = e.target.location.value.toLowerCase();

    const district = wareHouses.find(
      (c) => c.district.toLowerCase() === location
    );

    if (district) {
      const coord = [district.latitude, district.longitude];
      console.log('District found:', district, coord);

      // go to the location
      mapRef.current.flyTo(coord, 14);
    } else {
      console.log('District not found');
    }
  };

  return (
    <div className="pt-12">
      <h2 className="text-center py-6 text-3xl font-semibold text-sky-600">
        We are available 64 districts
      </h2>
      <div className="mb-5">
        <form onSubmit={handleDistrict}>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              className="grow"
              placeholder="Search"
              name="location"
            />
          </label>
        </form>
      </div>

      <div className="border h-[800px]">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-[800px]"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {wareHouses.map((center, ind) => (
            <Marker key={ind} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.city}</strong>
                <br />
                Service Area: {center.covered_area.join(', ')}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
