class Ship {

    constructor(x, y){
        this.x = x
        this.y = y
        this.timeBetweenShoot = 100
        this.timer = 0
        this.projectiles = []
        this.angle = 0.0
    }

    update(){
        if(this.timer < this.timeBetweenShoot){
            this.timer++
        } else if(this.timer >= this.timeBetweenShoot){
            this.shoot()
            console.log("Shoooot")
            this.timer = 0
        }

        for(let i = 0; i < this.projectiles.length; i++){
            this.projectiles[i].render()
            this.projectiles[i].update()
        }
        this.angle += 0.1
    }

    render(){
        push()
        fill(255)
        translate(width/2, height/2)
        rotate(degrees(this.angle))
        rect(this.x, this.y, 30, 30)
        pop()
    }

    shoot(){
        let projectile = new Projectile(this.x, this.y, 10, 10)
        this.projectiles.push(projectile)
    }
}