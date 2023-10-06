const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

async function start(){
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: " simlpe c language",
  temperature: 0,
  max_tokens: 1000,
})
console.log(response.data.choices[0]);
}
start()