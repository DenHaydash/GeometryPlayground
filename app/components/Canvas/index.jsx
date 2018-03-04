import React, { Component } from 'react';
import Konva from 'konva';
import PropTypes from 'prop-types';

import { toCanvasCoords } from '../../helpers/coords-converter';

function toProjectedCanvasCoords(point, projector) {
    return toCanvasCoords(projector(point));
}

class Canvas extends Component {
    get maxCoords() {
        return {
            x: this.props.width / 2,
            y: this.props.height / 2
        };
    }

    get minCoords() {
        const maxCoords = this.maxCoords;
        return {
            x: -maxCoords.x,
            y: -maxCoords.y
        };
    }

    drawAxles(layer, projector) {
        let fromPoint = toProjectedCanvasCoords({x: this.minCoords.x, y: 0, z: 0}, projector),
            toPoint = toProjectedCanvasCoords({x: this.maxCoords.x, y: 0, z: 0}, projector);

        const xAxis = new Konva.Arrow({
            points: [
                fromPoint.x, fromPoint.y,
                toPoint.x, toPoint.y
            ],
            stroke: 'black',
            fill: 'black',
            strokeWidth: 2
        });

        fromPoint = toProjectedCanvasCoords({x: 0, y: this.minCoords.y, z: 0}, projector);
        toPoint = toProjectedCanvasCoords({x: 0, y: this.maxCoords.y, z: 0}, projector);

        const yAxis = new Konva.Arrow({
            points: [
                fromPoint.x, fromPoint.y,
                toPoint.x, toPoint.y
            ],
            stroke: 'black',
            fill: 'black',
            strokeWidth: 2
        });

        layer.add(xAxis, yAxis);

        if (this.props.is3dMode) {
            fromPoint = toProjectedCanvasCoords({x: 0, y: 0, z: this.minCoords.y}, projector);
            toPoint = toProjectedCanvasCoords({x: 0, y: 0, z: this.maxCoords.y}, projector);

            const zAxis = new Konva.Arrow({
                points: [
                    fromPoint.x, fromPoint.y,
                    toPoint.x, toPoint.y
                ],
                stroke: 'black',
                fill: 'black',
                strokeWidth: 2
            });

            layer.add(zAxis);            
        }

        if (!this.props.is3dMode) {
            this.drawGrid(layer, this.stage.width(), this.stage.height(), projector);
        }

        this.markUpAxles(layer, this.stage.width(), this.stage.height(), projector);
    }

    drawGrid(layer, width, height, projector) {
        const { stepX, stepY } = this.getAxlesMarkupSteps(width, height);

        for (let i = 1; i < width / stepX; i++) {
            const fromPoint = toProjectedCanvasCoords({x: this.minCoords.x + stepX*i, y: this.minCoords.y, z: 0}, projector);
            const toPoint = toProjectedCanvasCoords({x: this.minCoords.x + stepX*i, y: this.maxCoords.y, z: 0}, projector);

            const xMark = new Konva.Line({
                points: [
                    fromPoint.x, fromPoint.y,
                    toPoint.x, toPoint.y
                ],
                stroke: 'black',
                strokeWidth: 1,
                dash: [20, 10]
            });

            layer.add(xMark);
        }

        for (let i = 1; i < height / stepY; i++) {
            const fromPoint = toProjectedCanvasCoords({x: this.minCoords.x, y: this.minCoords.y + stepY * i, z: 0}, projector);
            const toPoint = toProjectedCanvasCoords({x: this.maxCoords.x, y: this.minCoords.y + stepY * i, z: 0}, projector);

            const yMark = new Konva.Line({
                points: [
                    fromPoint.x, fromPoint.y,
                    toPoint.x, toPoint.y
                ],
                stroke: 'black',
                strokeWidth: 1,
                dash: [20, 10]
            });

            layer.add(yMark);
        }
    }

    getAxlesMarkupSteps(width, height) {
        const numberOfMarksX = 8,
              numberOfMarksY = 8;

        const stepX = width / numberOfMarksX,
              stepY = height / numberOfMarksY;

        return { stepX, stepY };
    }

    markUpAxles(layer, width, height, projector) {
        const { stepX, stepY } = this.getAxlesMarkupSteps(width, height);

        for (let i = 1; i < width / stepX; i++) {
            const point = toProjectedCanvasCoords({x: this.minCoords.x + stepX * i + 5, y: -5, z: 5}, projector);

            layer.add(new Konva.Text({
                x: point.x,
                y: point.y,
                text: this.minCoords.x + stepX * i,
                fontSize: 12,
                fontFamily: 'Arial',
                fill: 'black'
            }));
        }

        let point = toProjectedCanvasCoords({x: this.maxCoords.x - 10, y: -10, z: 5}, projector);

        layer.add(new Konva.Text({
            x: point.x,
            y: point.y,
            text: 'x',
            fontSize: 12,
            fontFamily: 'Arial',
            fill: 'black'
        }));

        for (let i = 1; i < height / stepY; i++) {
            const point = toProjectedCanvasCoords({x: 5, y: this.minCoords.y + stepY * i, z: -5}, projector);

            layer.add(new Konva.Text({
                x: point.x,
                y: point.y,
                text: this.minCoords.y + stepY * i,
                fontSize: 12,
                fontFamily: 'Arial',
                fill: 'black'
            }));
        }

        point = toProjectedCanvasCoords({x: 10, y: this.maxCoords.y - 10, z: -5}, projector);

        layer.add(new Konva.Text({
            x: point.x,
            y: point.y,
            text: 'y',
            fontSize: 12,
            fontFamily: 'Arial',
            fill: 'black'
        }));

        if (this.props.is3dMode) {
            let point = toProjectedCanvasCoords({x:  10, y: 10, z: this.maxCoords.y}, projector);

            layer.add(new Konva.Text({
                x: point.x,
                y: point.y,
                text: 'z',
                fontSize: 12,
                fontFamily: 'Arial',
                fill: 'black'
            }));
    
            for (let i = 1; i < height / stepY; i++) {
                const point = toProjectedCanvasCoords({x: 5, y: 5, z: this.minCoords.y + stepX * i + 5}, projector);
    
                layer.add(new Konva.Text({
                    x: point.x,
                    y: point.y,
                    text: this.minCoords.y + stepX * i,
                    fontSize: 12,
                    fontFamily: 'Arial',
                    fill: 'black'
                }));
            }
        }

        point = toProjectedCanvasCoords({x: 5, y: -5, z: 5}, projector);

        layer.add(new Konva.Text({
            x: point.x,
            y: point.y,
            text: '0',
            fontSize: 12,
            fontFamily: 'Arial',
            fill: 'black'
        }));
    }

    componentDidMount() {
        this.stage = new Konva.Stage({
            container: 'container',
            width: this.props.width,
            height: this.props.height
        });

        this.axlesLayer = new Konva.Layer();
        this.figureLayer = new Konva.Layer();

        this.stage.add(this.axlesLayer, this.figureLayer);

        this.renderAxles(this.axlesLayer, this.props.projector);
        this.renderPlot(this.figureLayer);
    }

    componentDidUpdate() {
        this.renderAxles(this.axlesLayer, this.props.projector);
        this.renderPlot(this.figureLayer);
    }

    renderAxles(layer, projector) {
        layer.destroyChildren();
        this.drawAxles(layer, projector);
        layer.draw();
    }

    renderPlot(layer){
        layer.destroyChildren();
        this.props.figure.render(layer, this.props.debug);
        layer.draw();
    }

    render() {
        return (
            <div id="container"></div>
        );
    }
}

Canvas.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    projector: PropTypes.func.isRequired,
    debug: PropTypes.bool.isRequired,
    figure: PropTypes.shape({
        render: PropTypes.func.isRequired
    }).isRequired,
    is3dMode: PropTypes.bool.isRequired
};

export default Canvas