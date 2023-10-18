let embeddings = []; // Initialize an empty array to store the processed inputs.

while (inputs.length) {
  // Start a while loop that runs as long as there are inputs in the 'inputs' array.
  let tokenCount = 0; // Initialize a variable 'tokenCount' to keep track of the total number of tokens in the current batch.
  let batchedInputs = []; // Initialize an empty array 'batchedInputs' to store the inputs in the current batch.

  while (inputs.length && tokenCount < 4096) {
    // Start another while loop that runs as long as there are inputs in the 'inputs' array
    // and the total 'tokenCount' in the current batch is less than 4096.

    let input = inputs.shift(); // Remove and retrieve the first input from the 'inputs' array.
    batchedInputs.push(input); // Add the input to the 'batchedInputs' array.
    tokenCount += input.split(" ").length; // Count the number of tokens in the input and update 'tokenCount'.
  }

  // At this point, the inner while loop has gathered a batch of inputs, and the 'tokenCount' is below 4096.
  // The 'batchedInputs' array contains these inputs.

  // It's common in NLP tasks to process inputs in batches due to memory and efficiency constraints.

  // You would typically do some processing or analysis on 'batchedInputs' here.
  // After processing, you can add the results to the 'embeddings' array or perform other actions.

  // After processing the batch, the outer while loop will continue to gather the next batch of inputs,
  // repeating this process until there are no more inputs in the 'inputs' array.
}

// After the while loop, the 'embeddings' array will contain the processed results of all the input batches.
