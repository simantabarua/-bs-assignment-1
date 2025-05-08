// Problem 1:
function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === undefined) {
    return input.toUpperCase();
  }
  return toUpper ? input.toLocaleUpperCase() : input.toLowerCase();
}

// Problem 2:
function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((items) => items.rating >= 4);
}


// Problem 3:
function concatenateArrays<T>(...arrays: T[][]): T[] {
  let result: T[] = [];
  for (let i = 0; i < arrays.length; i++) {
    result = [...result, ...arrays[i]];
  }
  return result;
}


// Problem 4:
class Vehicle {
  private make: string;
  private year: number;
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  public getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}
class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  public getModel() {
    return `Model: ${this.model}`;
  }
}


//Problem 5:
function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}


// Problem 6:
interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  } else {
    let expensiveProduct = products[0];
    for (const product of products) {
      if (product.price > expensiveProduct.price) expensiveProduct = product;
    }
    return expensiveProduct;
  }
}
const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];


// Problem 7:
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
function getDayType(day: Day): string {
  return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}

// Problem 8:
async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (n < 0) {
      reject("Negative number not allowed");
    } else {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    }
  });
}

