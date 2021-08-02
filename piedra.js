class p  {
    constructor (x, y){
        var options = {
            'restitution': 0.8, 
            'frisction': 0.9, 
            'density': 12
        };
        this.body = Bodies.rectangle (x, y, 40, 50, options);
        this.width = 40;
        this.height = 50;
        World.add (world, this.body);
    };
    display (){
        var pos = this.body.position;
        var angle = this.body.angle;

        push ();
        translate (pos.x, pos.y);
        rotate(angle);
        strokeWeight(1);
        stroke('black')
fill ("black");
rectMode (CENTER);
rect (0, 0, this.width, this.height);
pop ();
    };
};
	