import chalk from "chalk";

class ApiError {
  readonly code: number;
  readonly isOperational: boolean;
  readonly message: string;
  constructor(
    code: number = 500,
    message: string = "An error occured",
    isOperational: boolean = true
  ) {
    this.code = code;
    this.message = message;
    this.isOperational = isOperational || this.code === 500;
    console.log(chalk.red.bold(`❌ (${code}) - ${this.message}`));
  }
}

export default ApiError;
