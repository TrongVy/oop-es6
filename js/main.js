import Shape from './Shape.js';
import Square from './Square.js';
import Circle from './Circle.js';
import Rectangle from './Rectangle.js';
const shape = new Shape();
// shape.draw();

const getElm = id => document.getElementById(id);

//xử lý hình vuông
const handleSquare = () => {
    // const side =parseInt( getElm('side'));
    const side = +getElm('side').value;
    const sizeX = getElm('squareX').value + 'px';
    const sizeY = getElm('squareY').value + 'px';
    const bcColor = getElm('squareColor').value  ;
    const  square  = new Square(side, sizeX, sizeY, bcColor);
    console.log(square)
    square.calcArea();
    square.draw();
}   
getElm('areaSquare').addEventListener('click',function(){
    handleSquare();
})
const handleCricle = () => {
    const radius = +getElm('radius').value;
    const sizeX = getElm('cirX').value + 'px';
    const sizeY = getElm('cirY').value + 'px';
    const bcColor = getElm('cirColor').value  ;
    const  circle  = new Circle(radius, sizeX, sizeY, bcColor);
    console.log(radius, sizeX, sizeY, bcColor);
    console.log(circle)
    circle.calcArea();
    circle.draw(); 
}
getElm('areaCircle').addEventListener('click',function(){
    handleCricle();
})
const handleRectangle = () => {
    const chieuDai = +getElm('recL').value;
    const chieuRong = +getElm('recW').value;
    const sizeX = getElm('recX').value + 'px';
    const sizeY = getElm('recY').value + 'px';
    const bcColor = getElm('recColor').value  ;
    const  rectangle  = new Rectangle( sizeX, sizeY, bcColor,chieuDai,chieuRong);
    console.log(rectangle)
    rectangle.calcArea();
    rectangle.draw(); 
}
getElm('areaRec').addEventListener('click',function(){
    handleRectangle();
})