// Розрахувати площу та периметр прямокутника.
export class Rectangle {
    a: number = 4;
    b: number = 5;
    s!:number;
    p!:number;

    constructor (a:number, b:number) {
        this.a = a;
        this.b = b;
    }

    P(){
        this.p = 2*this.a + 2* this.b;
    }

    S(){
        this.s = this.a* this.b;
    }
}