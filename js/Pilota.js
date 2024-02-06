export class Pilota{
	constructor(x, y, velX, velY, color, mida) {
		this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.mida = mida;
	}
dibuixa(ctx) {
	ctx.beginPath(); // Per començar a dibuixar formes al canvas
	ctx.fillStyle = this.color; //Color amb que dibuixarem
  	ctx.arc(this.x, this.y, this.mida, 0, 2 * Math.PI); //Dibuix d’un arc
  	ctx.fill(); // Finalitza el dibuix i l’omple amb el color ja esmenat
}
mou(width,height){
	// Sumar posicion x mas la velocitat x
	this.x += this.velX;
	// Sumar posicion y mas la velocitat y

	this.y += this.velY;

	if (this.x + this.mida > width || this.x - this.mida < 0 ) {
		this.velX = -this.velX;
	}
	else(this.y + this.mida > height || this.y - this.mida <0 )
	this.velY = -this.velY;

	}
}

