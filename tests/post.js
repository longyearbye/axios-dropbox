import axios from "axios";
import { expect } from "chai";
import { token } from "../data/token.js";

const url = "https://content.dropboxapi.com/2/files/upload";

describe("method POST - upload a file", () => {
  it("upload a file", async () => {
    const filePath = "th.jpg";
    const fileStream = fs.createReadStream(filePath);

    const formData = new FormData();
    formData.append("file", fileStream);

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
      "Dropbox-API-Arg": { path: "/wallpapers/th.jpg" },
    };
    try {
      const response = await axios.post(url, formData, {
        ...headers,
        ...formData.getHeaders(),
      });
      expect(response.status).to.equal(200);
      expect(response.name).to.eql("th.jpg"); // ?
      expect(response.headers["content-type"]).to.include(
        "application/octet-stream"
      );
      console.log("Successfully got file metadata:", response.data);
    } catch (error) {
      console.error("Error geting file data:", error.message);
    }
  });
});

// mocha tests/**/*.js
