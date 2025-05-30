# -bs-assignment-1

Blog 1: What are some differences between interfaces and types in TypeScript?
Blog about Interface vs Type
Interface is used to define the shape of an object and how the object properties and property type should be.
Example:
interface Car {
title: string;
year: number;
}

const car: Car = {
title: "Toyota",
year: 1990,
};

We can also extends the interface :

interface MyCar extends Car {
model: string;
}

const myCar: MyCar = {
title: "Toyota",
year: 1990,
model: "Corolla",
};

Type is also used to define the shape of an object,
type Car = {
title: string;
year: number;
};

const car: Car = {
title: "Honda",
year: 2020,
};
We can also extends the type :
type Car = {
title: string;
year: number;
};

type MyCar = Car & {
model: string;
};

const myCar: MyCar = {
title: "Honda",
year: 2020,
model: "Civic",
};

So what is the key difference? We extended the interface using extends keyword and we used union for extended type.

But there is
Powerful Use Cases of type:

1. Union Types
   type Role = "admin" | "moderator" | "member";
   const currentRole: Role = "admin";
   There are only these 3 values allowed

2. Primitive Aliases
   type ID = string | number;
   const userId: ID = 123;

userId can be string or number

3. Intersection Types
   type Year= { year: number };
   type Car = { name: string } & Year;
   const car: Car = { title: "Honda", year: 2024, };

4. Function Signatures
   type Greet = (name: string) => string;
   const greet: Greet = (name) => `Hello, ${name}`;
   We can use Function Signatures in type.

Blog 2: What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

Blog about enums . types
TypeScript, Enums stands for Enumerations; it's a special typed that allows us to define a set of named constants. It helped to keep the code more clean and reusable .

Why do we use enums?
When we have the same category type of element we can use enum to make our code cleaner . lets understand with an example: suppose we have to manage different type of role : Admin, Moderator ,Member, Guest

function checkAccess(role: string) {
if (role === "admin") {
console.log("Access: Full");
} else if (role === "moderator") {
console.log("Access: Moderate");
} else if (role === "member") {
console.log("Access: Limited");
} else if (role === "guest") {
console.log("Access: Read-only");
} else {
console.log("Access denied: Unknown role");
}
}

checkAccess("moderator");

So it already look like mass . and if we also use a different type for example
checkAccess("owner"); it will compile but no error until runtime.

Ok Let see how the enum help us :
String enum:
enum UserRole {
Admin = "admin",
Moderator = "moderator",
Member = "member",
Guest = "guest"
}

function checkAccess(role: UserRole) {
switch (role) {
case UserRole.Admin:
console.log("Access: Full");
break;
case UserRole.Moderator:
console.log("Access: Moderate");
break;
case UserRole.Member:
console.log("Access: Limited");
break;
case UserRole.Guest:
console.log("Access: Read-only");
break;
default:
console.log("Access denied: Unknown role");
}
}

checkAccess(UserRole.Moderator);

It will work perfectly but if you try to use

checkAccess(UserRole.Owner); type script will instantly give us an error. Before compile
We can also use Numeric enums. The values start from 0 unless specified otherwise.
enum UserRole {
Admin, // 0
Moderator , // 1
Member , // 2
Guest //3
}

const role: UserRole = UserRole.Admin;
console.log(role); the output will: 0 It index like array .
We can also assign vale will it
enum StatusCode {
Success = 200,
NotFound = 404,
ServerError = 500
}
console.log(StatusCode.Success); the output will : 200
It is a very useful type in typescript And the code also looks cleaner and readable.