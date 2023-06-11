import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CompA = () => {

    const [num, setNum] = useState(1);
    const [myname, setMyname] = useState();
    const [moves, setMoves] = useState();

    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            //console.log(res.data);
            setMyname(res.data.name);
            setMoves(res.data.moves.length);
        }
        getData();
    });

    return (
        <>
            <h1>You have select {num}</h1>
            <h2>My Name is {myname}</h2>
            <h3>I have {moves} moves</h3>
            <select value={num} onChange={(event) => {
                setNum(event.target.value);
            }}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="6">6</option>
            </select>
        </>
    )
}

export default CompA