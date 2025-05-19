// ================================================
// TypeScript Complete Tutorial for VS Code
// ================================================
// محتویات این فایل:
// 1. مقدمه و مقایسه دقیق بین JavaScript و TypeScript
// 2. راهنمای گام‌به‌گام نصب و پیکربندی محیط TypeScript
// 3. جلسه اول (1.5 ساعت): مبانی TypeScript با مثال
// 4. جلسه دوم (1.5 ساعت): مفاهیم پیشرفته TypeScript
// 5. جلسه سوم (1.5 ساعت): پروژه عملی + ابزارها + نکات مهم
// 6. منابع و نکات تکمیلی برای یادگیری بیشتر

///////////////////////////////////////////////////////
// 1) JavaScript vs TypeScript: Code & Runtime       //
///////////////////////////////////////////////////////

/**
 * ✅ JavaScript:
 * - زبان داینامیک با تایپ انعطاف‌پذیر
 * - اجرا روی مرورگر یا Node.js
 * - مناسب برای توسعه سریع اما مستعد خطا در مقیاس بالا
 *
 * ✅ TypeScript:
 * - سوپرسِت JavaScript با تایپ استاتیک
 * - دارای قابلیت‌های OOP (کلاس، اینترفیس، جنریک)
 * - کامپایل می‌شود به JS
 * - خطاهای تایپی را قبل از اجرا شناسایی می‌کند
 */

// مثال تفاوت تایپ:
let jsVar = "hello"; // JS: نوع به صورت ضمنی (inferred) string است
// jsVar = 10; // ممکن است در زمان اجرا خطا بدهد

let tsVar: string = "hello"; // TS: نوع مشخص
// tsVar = 10; // ❌ کامپایل نمی‌شود

// Compile-Time vs Runtime:
function addJS(a, b) {
  return a + b;
}
console.log(addJS(5, "3")); // JS: خروجی "53" بدون خطا!

function addTS(a: number, b: number): number {
  return a + b;
}
// addTS(5, "3"); // ❌ خطای کامپایل در TypeScript

///////////////////////////////////////////////////////
// 2) نصب و پیکربندی کامل محیط TypeScript            //
///////////////////////////////////////////////////////

// ✅ پیش‌نیازها:
// - نصب Node.js: https://nodejs.org/
// - نصب VS Code: https://code.visualstudio.com/

// ✅ گام‌های نصب:

// 1. بررسی نصب Node و npm
// $ node -v      ✅ خروجی: v16.x.x یا بالاتر
// $ npm -v       ✅ خروجی: 8.x.x یا بالاتر

// 2. نصب TypeScript به صورت global
// $ npm install -g typescript
// $ tsc -v       ✅ بررسی نسخه

// 3. ایجاد پروژه TypeScript
// $ mkdir ts-app && cd ts-app
// $ npm init -y
// $ tsc --init     ✅ ایجاد فایل tsconfig.json

// 4. ساختار اولیه پروژه:
/**
 * ts-app/
 * ├── src/
 * │   └── index.ts
 * ├── dist/
 * ├── package.json
 * └── tsconfig.json
 */

// 5. پیکربندی tsconfig.json اولیه:
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}

// 6. نصب افزونه‌های VS Code:
// - ESLint
// - Prettier
// - TypeScript Hero (یا قابلیت پیش‌فرض VS Code)

///////////////////////////////////////////////////////
// 3) جلسه اول (1.5 ساعت): مبانی TypeScript         //
///////////////////////////////////////////////////////
// 👨‍🏫 موضوعات:
// ✅ معرفی و راه‌اندازی محیط (15 دقیقه)
// ✅ انواع پایه: number, string, boolean, any, unknown (20 دقیقه)
// ✅ آرایه‌ها، Tuple‌ها، Enum‌ها (20 دقیقه)
// ✅ توابع، پارامتر اختیاری، توابع تایپ‌شده (30 دقیقه)
// ✅ تمرین و پرسش‌و‌پاسخ (5 دقیقه)

// === مثال‌های کامنت‌گذاری‌شده ===

// 3.1: انواع پایه
let age: number = 30;
let userName: string = "Alice";
let isAdmin: boolean = false;

let something: any = "initial value"; // هر چیزی قابل انتساب است
something = 42;
something = [1, 2, 3];

let maybeValue: unknown = "check before use";
if (typeof maybeValue === "string") {
  console.log("Length:", maybeValue.length);
}

// 3.2: آرایه‌ها و Tupleها
let numbers: number[] = [10, 20, 30];
let names: Array<string> = ["Ali", "Sara"];

let user: [string, number] = ["Ali", 25]; // tuple with fixed types

enum Role {
  User = "USER",
  Admin = "ADMIN",
  Guest = "GUEST"
}
let userRole: Role = Role.Admin;

// 3.3: توابع
function multiply(x: number, y: number): number {
  return x * y;
}

// پارامتر پیش‌فرض و اختیاری
function greet(name: string, salutation: string = "سلام"): string {
  return `${salutation} ${name}`;
}

function logMessage(message: string, prefix?: string) {
  console.log(`${prefix ?? "Log"}: ${message}`);
}

// تعریف نوع تابع
let divide: (a: number, b: number) => number;
divide = (a, b) => a / b;

///////////////////////////////////////////////////////
// 4) جلسه دوم: مفاهیم پیشرفته TypeScript           //
///////////////////////////////////////////////////////
// 🧠 موضوعات:
// ✅ اینترفیس‌ها و تایپ‌ها (20 دقیقه)
// ✅ جنریک‌ها (25 دقیقه)
// ✅ ماژول‌ها و Namespace‌ها (20 دقیقه)
// ✅ دکوراتورها و الگوهای پیشرفته (20 دقیقه)
// ✅ تمرین و رفع اشکال (5 دقیقه)

// 4.1: Interface vs Type
interface Car {
  brand: string;
  year: number;
  model?: string; // optional
}

type Position = {
  x: number;
  y: number;
};

function logCar(car: Car): void {
  console.log(`Brand: ${car.brand}, Year: ${car.year}`);
}

// 4.2: جنریک‌ها
function identity<T>(arg: T): T {
  return arg;
}
let strVal = identity<string>("Test");
let numVal = identity<number>(123);

// جنریک با آرایه
function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

// 4.3: ماژول‌ها (ES6)
// src/math.ts
export function square(n: number): number {
  return n * n;
}

// src/index.ts
import { square } from "./math";
console.log("5 squared =", square(5));

// 4.4: دکوراتورها (experimental)
function logMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with`, args);
    return originalMethod.apply(this, args);
  };
}

class MathOps {
  @logMethod
  multiply(a: number, b: number): number {
    return a * b;
  }
}

const math = new MathOps();
math.multiply(4, 5);

///////////////////////////////////////////////////////
// 5) جلسه سوم: پروژه عملی + ابزارها                 //
///////////////////////////////////////////////////////

// موضوع: ساخت اپ ساده "مدیریت کاربران"
// ویژگی‌ها:
// ✅ ایجاد اینترفیس کاربر
// ✅ تعریف توابع CRUD
// ✅ استفاده از جنریک‌ها برای لیست
// ✅ تعریف نوع برای API Response
// ✅ استفاده از ESLint و Prettier

// src/models/User.ts
export interface User {
  id: number;
  name: string;
  email: string;
}

// src/utils/api.ts
export type ApiResponse<T> = {
  success: boolean;
  data: T;
  error?: string;
};

// src/services/UserService.ts
import { User } from "../models/User";
import { ApiResponse } from "../utils/api";

const users: User[] = [];

export function createUser(user: User): ApiResponse<User> {
  users.push(user);
  return { success: true, data: user };
}