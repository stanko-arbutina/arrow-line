class ArgumentError extends Error {
  constructor(message){
    super();
    this.message = message;
  }

  toString(){
    return `ArgumentError: ${this.message}`;
  }
}
module.exports = ArgumentError;

