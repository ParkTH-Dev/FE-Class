const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let text = document.querySelector("#tweetTextArea").value;
  text += ` #david #sns #js`;

  const encodedText = encodeURIComponent(text);
  console.log(encodedText);

  const tweetURL = `https://twitter.com/intent/tweet?text=${text}`;
  window.open(tweetURL);
});
