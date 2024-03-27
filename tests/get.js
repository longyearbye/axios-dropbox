import axios from "axios";
import { expect } from "chai";
import { token } from "../data/token.js";

const url = "https://api.dropboxapi.com/2/sharing/get_file_metadata";

describe("method POST - get a file metadata", () => {
  it("get a file data", async () => {
    const headers = {
      Authorization: `Bearer ${token}`,
      "User-Agent": "api-explorer-client",
      "Content-Type": "application/json",
    };
    const response = await axios.post(
      url,
      {
        file: "/wallpapers/sopace.jpg",
      },
      {
        headers: headers,
      }
    );
    expect(response.status).to.equal(200);
    expect(response.data.name).to.eql("sopace.jpg");
    expect(response.headers["content-type"]).to.include("application/json");
    console.log("Successfully got file metadata:", response.data);
  });
});

// npm test tests/**/get.js
