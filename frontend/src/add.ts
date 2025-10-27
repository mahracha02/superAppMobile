export function add(a: number, b: number): number {
  return a + b;
} 

export function isPalandrome(str: string): boolean {
  return str === str.split("").reverse().join("");
}
