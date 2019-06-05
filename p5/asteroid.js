class Asteroid {

    constructor(x, y){
        this.x = x
        this.y = y
        this.size = random(10, 30)
    }

    update(){
        this.x += 1
        this.y += 1
    }

    render(){
        stroke(255)
        noFill()
        ellipse(this.x, this.y, this.size)
    }

    isOut(){
        if(this.x > width || this.y > height){
            return true
        } else {
            return false
        }
    }
}