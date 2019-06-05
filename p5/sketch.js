let asteroids = []
let maxAsteroids = 10
let ship

function setup(){
    createCanvas(600, 600)
    rectMode(CENTER)
    ship = new Ship(random(width), random(height))
}

function draw(){
    background(0)

    
    ship.render()
    ship.update()

    if(asteroids.length < maxAsteroids){
        let asteroid = new Asteroid(random(width), random(height))
        asteroids.push(asteroid)
    }

    for(let i = 0; i < asteroids.length; i++){
        asteroids[i].render()
        asteroids[i].update()
        if(asteroids[i].isOut()){
            asteroids.splice(i, 1)
        }
    }
}