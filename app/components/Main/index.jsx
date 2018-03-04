import React from 'react';
import { NavLink } from 'react-router-dom'

import "./main.scss";

import GraphicsContainer from "../GraphicsContainer";
import { 
    INDEX_ROUTE_PATH,
    CURVES_ROUTE_PATH,
    FRACTALS_ROUTE_PATH,
    THREE_DIMENTIONAL_FIGURE_ROUTE_PATH,
    SURFACE_ROUTE_PATH 
} from '../../routes';

const Main = () => (
    <div className="container main-block">
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <NavLink to={INDEX_ROUTE_PATH} exact activeClassName="active" className="nav-link">
                    Figure
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={CURVES_ROUTE_PATH} activeClassName="active" className="nav-link">
                    Curve
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={FRACTALS_ROUTE_PATH} activeClassName="active" className="nav-link">
                    Fractal
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={THREE_DIMENTIONAL_FIGURE_ROUTE_PATH} activeClassName="active" className="nav-link">
                    3D figure
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to={SURFACE_ROUTE_PATH} activeClassName="active" className="nav-link">
                    Surface
                </NavLink>
            </li>
        </ul>
        <div className="main-block__content">
            <GraphicsContainer />
        </div>
    </div>
);

export default Main