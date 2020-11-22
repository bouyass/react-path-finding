import React from 'react'
import './NavBar.css'

function NavBar() {
    return (
        <nav className="navbarContainer">
            <ul className="navbarList">
                <li id="logo">React Path Finding Visualizer</li>
                <li id="algoChoice"> 
                    <select class="form-control" id="algo">
                        <option>Dijkstra's algorithm</option>
                        <option>A* algorithm</option>
                        <option> Bellman-Ford algorithm </option>
                    </select>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
