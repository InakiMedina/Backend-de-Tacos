class List{
    constructor(){
      this.list = []
    }
  
    insert(obj) {
      this.list.push(obj)
    }
  
    remove(id) {
      this.list = this.list.filter(obj => obj.id !== id)
    }
  
    print() {
      this.list.forEach(obj => console.log(obj))
    }
  }
  
  class Category{
    constructor(id, name){
      this.id = id
      this.name = name
    }
  }
  
  categories = new List()
  categories.insert(new Category(0, "Drinks"))
  categories.insert(new Category(1, "Entrees"))
  categories.remove(0)
  categories.print()