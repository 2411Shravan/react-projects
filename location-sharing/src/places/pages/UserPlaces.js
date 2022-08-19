import React from 'react';
import PlaceList from '../components/PlaceList';

const UserPlaces=props=>{
    const DUMMY_PLACES=[
        {
            id:'p1',
            title:'Varanasi',
            imageUrl:'https://images.unsplash.com/photo-1599831069477-b2acdc0bcb91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            address:'Uttar Pradesh',
            location:{
                lat: 40.565,
                long: -43.546,
            },
            ceator:'u1'
        },
        {
            id:'p2',
            title:'Taj Mahal',
            imageUrl:'https://images.unsplash.com/photo-1587135941948-670b381f08ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            address:'Uttar Pradesh',
            location:{
                lat: 20.565,
                long: -413.546,
            },
            ceator:'u2'
        }
    ];
    return (
        <PlaceList items={DUMMY_PLACES}/>
    );
};

export default UserPlaces;