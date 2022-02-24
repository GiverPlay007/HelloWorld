// Receive hello and world words and join with a comma
const joinHelloAndWorldWithComma = (hello, world) => {
  const comma = ',' // This is a comma
  const helloWithComma = hello + comma // This join the hello with the comma
  const helloWithCommandAndSpace = helloWithComma + ' ' // This join the comma and hello with a white space
  const helloWithWorld = helloWithCommandAndSpace + world // this join the previous message with the world word
  return helloWithWorld // Returns the complete message
}

// At this point, we receive the hello world and add a exclamation
const exclamationfy = (helloWorld) => {
  const exclamation = '!' // This is a exclamation
  const withExclamation = helloWorld + exclamation // This join the hello world message with the exclamation
  return withExclamation // Returns the message and the exclamation together
}

// This creates the hello world message
const createHelloWorld = () => {
  const helloMessage = 'Hello' // This is the hello word
  const worldMessage = 'World' // This is the world word
  const messages = [ helloMessage, worldMessage ] // Add message to a array
  const helloWorld = joinHelloAndWorldWithComma(...messages) // Spread array in parameters
  const helloWorldWithExclamation = exclamationfy(helloWorld) // Make the hello world message a exclamation
  
  return helloWorldWithExclamation // Returns the full message
}

const helloWorld = createHelloWorld() // Create hello world with the HelloWorld framework

// Check if the hello world is not empty
if(helloWorld) {
  console.log(helloWorld) // Print the hello world
}
// The follow empty line prevents EOF
