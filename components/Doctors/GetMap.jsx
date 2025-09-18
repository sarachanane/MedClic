'use client';

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button, user } from '@nextui-org/react';
import { UpdateUserDataKey } from '@/actions/user.action';
import { useSession } from 'next-auth/react';

mapboxgl.accessToken = 'pk.eyJ1IjoiaHotYnJhbmQiLCJhIjoiY2xtZXI5d3huMWxhazNxbzVveXd4OXU2ZCJ9.gQPnEBolayYVGFpWZvnEMg';

function GetMap({ userId, user , init_coordinates }) {
    const { data: session, update } = useSession();

    console.log("init_coordinates : ",init_coordinates);
    const mapContainer = useRef(null);
    const [map, setMap] = useState(null);
    const [mapType, setMapType] = useState("streets-v11");
    const [coordinates, setCoordinates] = useState(init_coordinates);
    const markerRef = useRef(null); // Reference to the marker

    // Coordinates for Medea, Algeria
    const [locationCoordinates, setLocationCoordinates] = useState(init_coordinates ? init_coordinates : [2.7562, 36.2748]);

    useEffect(() => {
        const newMap = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/' + mapType,
            center: locationCoordinates,
            zoom: 12, // Initial zoom level
        });

        // Create the marker and store its reference
        markerRef.current = new mapboxgl.Marker({ color: 'red', rotation: 45 })
            .setLngLat(locationCoordinates)
            .addTo(newMap);

        setMap(newMap);

        return () => {
            newMap.remove(); // Cleanup map on unmount
        };
    }, [mapType]);

    useEffect(() => {
        if (map) {
            // Add click event listener
            map.on('click', (e) => {
                const { lng, lat } = e.lngLat;
                setCoordinates({ lng, lat });

                // Move the marker to the new location
                markerRef.current.setLngLat([lng, lat]);
                console.log('Marker moved to:', lng, lat);
            });
        }
    }, [map]);

    const [postloader, setPostloader] = useState(false);

    const Edit = async () => {
        setPostloader(true);
        try {
            const result = await UpdateUserDataKey(userId, { [`data.long_lat`]: [coordinates?.lng, coordinates?.lat] });
            update({data:{...user?.data,long_lat:[coordinates?.lng, coordinates?.lat]}})
            console.log("result2 : ", result);
        } catch (error) {
            console.error('Error updating branch:', error);
        } finally {
            setPostloader(false);
        }
        setPostloader(false);
    }

    const getLonLatGPS = async () => {
        const { latitude, longitude } = await GET_USER_COORDINATES();
        console.log(latitude, longitude);
        setLocationCoordinates([longitude, latitude])
    }

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log("Latitude:", position.coords.latitude);
                    console.log("Longitude:", position.coords.longitude);
                    setCoordinates({lng:position.coords.longitude, lat:position.coords.latitude})
                },
                (error) => {
                    console.error("Error getting location:", error.message);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    };

    return (
        <div className="content-main mt-6  ">
            <div ref={mapContainer} style={{ width: '100%', height: '25vh' }} />
            {coordinates && (
                <>
                    <div className='mt-4 text-xs lg:text-md  flex justify-between items-center  gap-6'>
                        {/* <p className='border p-2 rounded-xl font-semibold text-slate-500'>Longitude: <span className='font-light text-black'>{coordinates.lng}</span></p>
                    <p className='border p-2 rounded-xl font-semibold text-slate-500'>Latitude: <span className='font-light text-black'>{coordinates.lat}</span></p> */}
                        <Button onPress={getLocation} isIconOnly aria-label="Map" variant='flat' color="warning" className=''>
                            <i className="ri-map-pin-line text-xl "></i>
                        </Button>
                        <Button color="primary" onPress={Edit} className='' isLoading={postloader}>
                            {/* <CircleTextToggle postloader={postloader} text={"Submit"} color={"default"} size={"sm"} /> */}
                            confirmer
                        </Button>
                    </div>
                    <div className=''>
                        <div className='w-full   flex flex-col  mt-2 text-[14px] '>
                            <label htmlFor={"longitude"} className='text-md font-normal text-[#2D3748] '>Longitude</label>
                            <input type="text" value={coordinates.lng} onChange={(e)=>setCoordinates({...coordinates,lng:e.target.value})} name="longitude" id={"longitude"} placeholder={"longitude"} className='w-full h-[50px]  mt-1 px-4 py-3 outline-none border border-[#E2E8F0] rounded-[15px] placeholder:font-light'  />
                        </div>
                        <div className='w-full   flex flex-col  mt-2 text-[14px] '>
                            <label htmlFor={"latitude"} className='text-md font-normal text-[#2D3748] '>Latitude</label>
                            <input type="text" name="latitude" value={coordinates.lat} onChange={(e)=>setCoordinates({...coordinates,lat:e.target.value})}  id={"latitude"} placeholder={"latitude"} className='w-full h-[50px]  mt-1 px-4 py-3 outline-none border border-[#E2E8F0] rounded-[15px] placeholder:font-light'  />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default GetMap;


const GET_USER_COORDINATES = () => {
    return new Promise((resolve, reject) => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    resolve({ latitude, longitude });
                },
                (error) => {
                    console.error('Error getting user coordinates:', error);
                    reject(error);
                },
                { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 } // Add options for better accuracy
            );
        } else {
            console.error('Geolocation is not supported by your browser');
            reject(new Error('Geolocation is not supported'));
        }
    });
};