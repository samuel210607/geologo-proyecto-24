class h  {
    constructor (x, y){
        var options = {
            'restitution': 0.8, 
            'frisction': 3, 
            'density': 30
        };
        this.body = Bodies.rectangle (x, y, 100, 100, options);
        this.width = 100;
        this.height = 100;
        World.add (world, this.body);
    };
    display (){
        var pos = this.body.position;
        var angle = this.body.angle;

        push ();
        translate (pos.x, pos.y);
        rotate(angle);
        strokeWeight(2);
        stroke('grey')
fill ("grey");
rectMode (CENTER);
rect (0, 0, this.width, this.height);
pop ();
    };
};
	