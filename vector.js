class Vec2d {
  constructor(x,y){
    this.x = x
    this.y = y
    this.length = Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2))
  }
  
  normalize(){
    let norm = {}
    norm.x = this.x / this.length
    norm.y = this.y / this.length
    return norm
  }
}

/*
Use:
const vec1 = new Vec2d(1,1);
vec1.length -> calculates vector module
vec1.normalize() -> normalizes vector
*/
