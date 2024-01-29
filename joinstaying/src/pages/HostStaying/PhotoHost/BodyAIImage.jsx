import { useState } from "react";
import Image from "../../../components/Image/Image";
import TextInput from "../../../components/TextInput/TextInput";
import Button from "../../../components/Buttons/Button";
import { post } from "../../../utils/request";

//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

const BodyAIImage = () => {
  const [imageURL, setImageURL] = useState("");

  const [value, setValue] = useState("");

  const handleGenerator = async () => {
    if (value === "") return;

    try {
      const response = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer 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",
          "User-Agent": "Chrome",
        },
        body: JSON.stringify({
          prompt: `${value}`,
          n: 1,
          size: "512x512",
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error during fetch:", error);
      // Handle the error here, for example, set an error state or display a message to the user
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="">
      <div>Ai Image generator</div>

      <div>
        <Image src={imageURL} className="w-full h-full object-cover" />
      </div>

      <div className="flex items-center">
        <TextInput onChange={handleChange} />

        <Button onClick={() => handleGenerator()} title="Generator" background />
      </div>
    </div>
  );
};

export default BodyAIImage;
