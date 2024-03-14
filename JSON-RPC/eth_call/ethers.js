const ethers = require("ethers");
(async () => {
  const provider = new ethers.providers.JsonRpcProvider("https://docs-demo.quiknode.pro/");
  const response = await provider.send("eth_call", [
    {
      "from": null,
      "to": "0xD86012ab052706C2929068D4176ec2D525Db687a",
      "data":
        "0xb4949c718b5dee60114454dad880121791a7a3d55de7dd63524e7c08d22bf7fc",
    },
    "latest",
  ]);
  console.log(response);
})();
