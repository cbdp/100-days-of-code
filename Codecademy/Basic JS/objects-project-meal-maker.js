const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appSet) {
    this._courses.appetizers = appSet;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mainSet) {
    this._courses.mains = mainSet;
  },
  get dessert() {
    return this._courses.desserts;
  },
  set dessert(desSet) {
    this._courses.desserts = desSet;
  },
  get courses() { //maybe faulty?
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    }
  },
  addDishToCourse(courseName, name, price) {
    const dish = { name, price, };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName]
    const i = Math.floor(Math.random() * dishes.length);
    return dishes[i];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const price = appetizer.price + main.price + dessert.price; // use of getter
    return 'Meal made is: ' + appetizer.name + ', ' + main.name + ' and ' + dessert.name + '. Price is: ' + price + ' vikings';
  },
};

// adding dishes
menu.addDishToCourse('appetizers', 'Eggs', 1);
menu.addDishToCourse('appetizers', 'Spam', 10);
menu.addDishToCourse('appetizers', 'Bacon', 1);
menu.addDishToCourse('mains', 'Eggs', 1);
menu.addDishToCourse('mains', 'Spam', 10);
menu.addDishToCourse('mains', 'Bacon', 1);
menu.addDishToCourse('desserts', 'Eggs', 1);
menu.addDishToCourse('desserts', 'Spam', 10);
menu.addDishToCourse('desserts', 'Bacon', 1);

// generate meal and log
let meal = menu.generateRandomMeal();
console.log(meal);