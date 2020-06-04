class Queue { 
    constructor() { 
        this.items = []; 
    } 
                  
    push(element) {     
        this.items.push(element); 
    }
    
    pop() { 
        if(this.isEmpty()) 
            return "Underflow"; 
        return this.items.shift(); 
    }
    
    front() { 
        if(this.isEmpty()) 
            return "No elements in Queue"; 
        return this.items[0]; 
    } 
    
    isEmpty() { 
        return this.items.length == 0; 
    } 
} 