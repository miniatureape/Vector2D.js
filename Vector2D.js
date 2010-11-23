/*
Copyright (c) 2010 Justin Donato <justin.donato@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

var Vector2D = new Class({
    
    Implements: [Options, Events],

    x: 0,
    y: 0,
    
    initialize: function(x, y){
        this.x = x;
        this.y = y;
    },
    
    set: function(other){
        this.x = other.x;
        this.y = other.y;
    },
    
    setArray: function(arr){
        this.x = arr[0];
        this.y = arr[1];
    },

    setCoords: function(x, y){
        this.x = x;
        this.y = y;
    },
    
    get: function(){
        return new Vector2D({x:this.x, y:this.y});
    },
    
    mag: function(){
        return Math.sqrt(this.x*this.x + this.y*this.y);
    },

    add: function(other){
        this.x += other.x;
        this.y += other.y;
    },
    
    addArray: function(arr){
        this.x += arr[0];
        this.y += arr[1];
    },
    
    addCoords: function(x, y){
        this.x += x;
        this.y += y;
    },
    
    sub: function(other){
        this.x -= other.x;
        this.y -= other.y;
    },
    
    subArray: function(arr){
        this.x -= arr[0];
        this.y -= arr[1];
    },
    
    subCoords: function(x, y){
        this.x -= x;
        this.y -= y;
    },
    
    mult: function(n){
        this.x *= n;
        this.y *= n;
    },
    
    multVec: function(other){
        this.x *= other.x;
        this.y *= other.y;
    },
    
    div: function(n){
        this.x /= n;
        this.y /= n;
    },
    
    divVec: function(other){
        this.x /= other.x;
        this.y /= other.y;
    },
    
    dist: function(other){
        var dx = this.x - other.x;
        var dy = this.y - other.y;
        return Math.sqrt(dx * dx + dy * dy);
    },    

    dot: function(other){
        return this.x * other.x + this.y * other.y;    
    },
    
    dotCoords: function(x, y){
        return this.x * x + this.y + y
    },
    
    normalize: function(){
        var m = this.mag();
        if (m != 0 && m != 1){
            this.div(m);
        }
    },
    
    limit: function(max){      
        if (this.mag() > max){
            this.normalize();
            this.mult(max);
        }
    },
    
    heading2D: function(){
      var angle = Math.atan2(-y, x);
      return -1 * angle;
    },

    rotate: function(rads){
        var s = Math.sin(rads);
        var c = Math.cos(rads);
        this.x = (c * this.x) - (s * this.y);
        this.y = (s * this.x) + (c * this.y);
    },
    
    toString: function(){
        return "[" + this.x + "," + this.y + "y" + "]";
    }
    
})

/* "Class methods" */

var _add = function(one, other){
    var vec = new Vector2D();
    vec.setCoords(one.x + other.x, one.y + other.y);
    return vec;
}

var _sub = function(one, other){
    var vec = new Vector2D();
    vec.setCoords(one.x - other.x, one.y - other.y);
    return vec;
}

var _dist = function(one, other){
    var dx = one.x - other.x;
    var dy = one.y - other.y;
    return Math.sqrt(dx*dx + dy*dy);
}

Vector2D._add = _add;
Vector2D._sub = _sub;
Vector2D._dist = _dist;
