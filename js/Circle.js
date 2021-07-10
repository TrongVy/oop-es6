import Shape from "./Shape.js";

export default class Circle extends Shape {
    constructor(_radius,_sizeX,_sizeY,_bcColor){
        // goi lai constructor cua lop Shape
        super('cricle',_sizeX,_sizeY,_bcColor);
        this.radius = _radius;
    }
    //tính diện tích
    calcArea(){
        this.area =3.14*Math.pow(this.radius,2);
    }
    //ghi đề phương thức của lớp cha
    draw(){
        const content = `
        <div class="text-center rounded-circle" style="width:${this.sizeX}; height:${this.sizeY};background-color:${this.bcColor}">
                    <p>
                            Name:${this.name} <br>
                            Area : ${this.area}
                    </p>
        </div>
    
        `
        document.getElementById('main').innerHTML=content;
    }
}