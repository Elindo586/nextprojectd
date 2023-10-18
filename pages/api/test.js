const OpenAI = require("openai");
const Pinecone = require("pinecone");

// Initialize your OpenAI and Pinecone clients with the appropriate API keys
const openai = new OpenAI({ apiKey: "YOUR_OPENAI_API_KEY" });
const pinecone = new Pinecone.Client("YOUR_PINECONE_API_KEY");

async function getUserResponse(message) {
  // Step 1: Get the user's message embedding from OpenAI
  const embeddingResult = await openai.embeddings.create({
    input: message,
    model: "text-embedding-ada-002",
  });

  const userVector = embeddingResult.data[0].embedding;

  // Step 2: Search for similar messages in Pinecone
  const index = "your_pinecone_index_name"; // Replace with your Pinecone index name
  const pineconeResult = await pinecone.query(index, {
    query_vector: userVector,
    top_k: 5,
  });

  const similarMessages = pineconeResult.results;

  // Extract the content from similar messages
  const similarMessageContents = similarMessages.map(
    (result) => result.data.content
  );

  // Step 3: Generate a response using GPT-3.5 Turbo
  const messages = [
    { role: "user", content: message },
    { role: "assistant", content: "Hello, how can I assist you today?" }, // System message
  ];

  // Append similar messages to the input
  similarMessageContents.forEach((content) => {
    messages.push({ role: "system", content });
  });

  const gptResponse = await openai.chat.completions.create({
    messages,
    model: "gpt-3.5-turbo",
  });

  const assistantReply = gptResponse.choices[0].message.content;

  return assistantReply;
}

// Example usage
const userMessage = "How can I fix my code?";
getUserResponse(userMessage)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
