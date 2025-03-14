const axios = require("axios");

console.log('Testing Perplexity API...');

async function testPerplexity() {
  try {
    const apiKey = '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';
    
    const response = await axios.post(
      'https://api.perplexity.ai/chat/completions',
      {
        model: 'sonar-small-chat',
        messages: [
          {
            role: 'user',
            content: 'Hello, this is a test message. Please respond with OK if you receive this.'
          }
        ],
        max_tokens: 10
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );
    
    console.log('Response status:', response.status);
    console.log('Response data:', JSON.stringify(response.data, null, 2));
    console.log('API is working properly!');
    
  } catch (error) {
    console.error('Error:', error.message);
    
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', JSON.stringify(error.response.data, null, 2));
    }
  }
}

// Run the test
testPerplexity();
