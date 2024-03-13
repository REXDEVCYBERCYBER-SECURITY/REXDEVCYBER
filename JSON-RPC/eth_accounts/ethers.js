const ethers = require("ethers");
(async () => {
  const provider = new ethers.providers.JsonRpcProvider("https://dashboard.quicknode.com/quick-alerts/create-expression?name=REXDEVCYBER&chain=ETHEREUM&network=ETHEREUM_MAINNET&expression=KHR4X2xvZ3NfYWRkcmVzcyA9PSAnMHhiNDdlM2NkODM3ZGRmOGU0YzU3ZjA1ZDcwYWI4NjVkZTZlMTkzYmJiJykgJiYgKHR4X2xvZ3NfdG9waWMwID09ICcweDA1YWY2MzZiNzBkYTY4MTkwMDBjNDlmODViMjFmYTgyMDgxYzYzMjA2OWJiNjI2ZjMwOTMyMDM0MDk5MTA3ZDgnKQ%3D%3D/");
  const estimate = await provider.listAccounts();
  console.log(estimate);
})();
