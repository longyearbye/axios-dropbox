import axios from "axios";
import { expect } from "chai";
import { token } from "../data/token.js";

const url = "https://api.dropboxapi.com/2/files/delete_v2";

describe("method POST - delete a file", () => {
  it("delete a file", async () => {
    const headers = {
      Authorization: `Bearer ${token}`,
      "User-Agent": "api-explorer-client",
      "Content-Type": "application/json",
    };
    const response = await axios.post(
      url,
      {
        path: "/wallpapers/winter.jpg",
      },
      {
        headers: headers,
      }
    );
    expect(response.status).to.equal(200);
    expect(response.headers["content-type"]).to.include("application/json");
    expect(response.data.name).to.eql("winter.jpg"); // response
    console.log("File deleted successfully:", response.data);
  });
});
