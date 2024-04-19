import {OpenAIApi,Configuration} from 'openai'

const configuration = new Configuration({
    apiKey: import.meta.env.VITE_APP_OPENAI_API_KEY,
  });

const openai = new OpenAIApi(configuration);

const generatedImage = async () => {
    const aiResponse = await openai.createImage({
        prompt: 'Ho Chi Minh',
        n: 1,
        size: '512x512',
        response_format: 'b64_json',
    })
    console.log(aiResponse);
    const image = aiResponse.data.data[0].b64_json;
    return image;
}

export {generatedImage}

