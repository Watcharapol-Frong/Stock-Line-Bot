function doPost(e) {
  // JSON payload from LINE Webhook.
  const json = JSON.parse(e.postData.contents);

  // Handle only text messages
  if (!json.events[0].message || json.events[0].message.type !== "text") {
    return ContentService.createTextOutput("Ignore non-text message");
  }

  // Retrieves the message content and the token needed to send a reply.
  const userMessage = json.events[0].message.text.toLowerCase(); //LowerCase()
  const replyToken = json.events[0].replyToken;

  // Open Google Sheet (replace with your own Sheet ID and Sheet name)
  const ss = SpreadsheetApp.openById("YOUR_SHEET_ID_HERE"); //www.docs...d/<ID sheet>/edit
  const sheet = ss.getSheetByName("API"); //Name Page on Google Sheet
  const data = sheet.getDataRange().getValues();
  
  // Removes special characters and creates a flexible keyword pattern using RegEx.
  const cleaned = userMessage.replace(/[^\w\sก-๙]/gi, "").toLowerCase();
  const words = cleaned.split(/\s+/);
  const keywordPattern = words.map(w => `(?=.*${w})`).join("");

  let result = "";

  // Loops through the spreadsheet to find products matching all keywords.
  try {
    const regex = new RegExp(keywordPattern, "i");

    for (let i = 1; i < data.length; i++) {
      const productName = data[i][0];   // column A = productName
      const stock = data[i][1];         // column B = stock

      // If a match is found, creates a stock reply message.
      if (regex.test(productName)) {
        result += `📦 ${productName}\nจำนวนคงเหลือ: ${stock}\n`; //Customize the message the bot will reply to.
      }
    }
  } catch (err) {
    Logger.log("❗ Regex error: " + err);
    result = "";
  }

  //If no match is found, shows a friendly fallback message.
  if (!result) {
    result = "😕 ไม่พบสินค้าที่คุณค้นหา\nลองพิมพ์ชื่อหรือรุ่นให้ชัดเจน เช่น 'iPhone 13', 'iPad Air 11'";
  }

  // Send Response to LINE User
  const replyPayload = {
    replyToken: replyToken,
    messages: [{ type: "text", text: result }]
  };

  const headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_CHANNEL_ACCESS_TOKEN"
  }; //Token of Line Developers

  // Send Reply via LINE API
  UrlFetchApp.fetch("https://api.line.me/v2/bot/message/reply", {
    method: "post",
    headers: headers,
    payload: JSON.stringify(replyPayload)
  });

  return ContentService.createTextOutput("OK");
}
