import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Join from '../pages/Join';
import Waiting from '../pages/Waiting';
import BoardWithPlayers from '../pages/BoardWithPlayers';
import Menu from '../pages/Menu';

export default function Layout() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/joingame" element={<Join />} />
                <Route path="/waiting" element={<Waiting />} />
                <Route path="/boardwithplayers" element={<BoardWithPlayers />} />
            </Routes>
        </Router>
    );
}
