import Shape from "./Shape.js";

export default class Square extends Shape {
    constructor(_side,_sizeX,_sizeY,_bcColor){
        // goi lai constructor cua lop Shape
        super('square',_sizeX,_sizeY,_bcColor);
        this.side = _side;
    }
    //tính diện tích
    calcArea(){
        this.area =Math.pow(this.side,2);
    }
    //ghi đề phương thức của lớp cha
    draw(){
        const content = `
        <div class="text-alight:center" style="width:${this.sizeX}; height:${this.sizeY};background-color:${this.bcColor}">
                    <p>
                            Name:${this.name} <br>
                            Area : ${this.area}
                    </p>
        </div>
    
        `
        document.getElementById('main').innerHTML=content;
    }
}