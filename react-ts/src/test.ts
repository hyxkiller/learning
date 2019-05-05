import { type } from "os";

const compare: (a: number, b: number) => boolean = (a, b) => a > b;

type compare2 = (a: number, b: number) => boolean;
const a: compare2 = (a, b) => a > b;