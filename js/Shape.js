export default class Shape {
    constructor(_name,_sizeX,_sizeY,_bcColor){
        this.name = _name;
        this.sizeX = _sizeX;
        this.sizeY = _sizeY;
        this.bcColor = _bcColor;
    }
    draw(){
        const content = '<div class="alert alert-primary">chua co dien tich</div>';
        document.getElementById('main').innerHTML =content;
    }
}