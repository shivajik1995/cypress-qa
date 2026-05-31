require('dotenv').config();

const OpenAI = require('openai');

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function run() {

  const response =
    await client.chat.completions.create({

      model: 'gpt-4.1-mini',

      messages: [
        {
          role: 'user',
          content: 'hello'
        }
      ]
    });

  console.log(response.choices[0].message.content);
}

run();