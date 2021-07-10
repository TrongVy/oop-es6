import Shape from "./Shape.js";

export default class Rectangle extends Shape {
    constructor(_sizeX,_sizeY,_bcColor,_chieuDai,_chieuRong){
        // goi lai constructor cua lop Shape
        super('Rectangle',_sizeX,_sizeY,_bcColor);
        this.chieuDai = _chieuDai;
        this.chieuRong = _chieuRong;
    }
    //tính diện tích
    calcArea(){
        this.area =(this.chieuDai+this.chieuRong)*2;
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