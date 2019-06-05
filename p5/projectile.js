class Projectile {

    constructor(x, y, velX, velY){
        this.x = x
        this.y = y
        this.velX = velX
        this.velY = velY
    }

    update(){
        this.x += this.velX
        this.y += this.velY
    }

    render(){
        push()
        fill(0, 255, 0)
        ellipse(this.x, this.y, 5)
        pop()
    }
}