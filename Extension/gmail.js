// // // node 1_Dealing_With_modules.js --url=https://nados.pepcoding.com/ --url2=gmail.com
// // // "java script\code along\activity_2"
// // // npm intall minimist
// // // npm install puppeteer

// let minimist = require("minimist");
// let puppeteer = require("puppeteer-extra");
// const pluginStealth = require("puppeteer-extra-plugin-stealth");
// const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker');
// let args = minimist(process.argv);/
// (async () => {
//   puppeteer.use(pluginStealth());
//   const browser = await puppeteer.launch({
//     executablePath:
//       "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
//     headless: false,
//     defaultViewport: null,
//     args: ["--incognito", "--start-maximized"],
//   });

//   const pages = await browser.pages();
//    const page=pages[0];
//   await page.goto(
//     "https://accounts.google.com/AccountChooser?service=mail&continue=https://mail.google.com/mail/"
//   );
//   await page.waitForSelector(`input[type='email']`);

//   //your mail here
//   await page.type(`input[type='email']`, "yogeshdavel005@gmail.com", {
//     delay: 10,
//   });

//   await page.keyboard.press("Enter");
//   await page.waitForNavigation([
//     "networkidle0",
//     "load",
//     "domcontentloaded",
//   ]);
//   await page.waitForTimeout(3550);
//   await page.waitForSelector(`input[type='password']`);

//   //your pass here
//   await page.type(`input[type='password']`, "9711462586", { delay: 15 });

//   await page.keyboard.press("Enter");
//   await page.waitForTimeout(3000);
//   await page.waitForSelector("div#gs_lc50 > input.gb_8e");
//   await page.type("div#gs_lc50 > input.gb_8e","nados",{ delay: 10 });
//   await page.keyboard.press("Enter") 
//   await page.waitForTimeout(3000);
//   await page.keyboard.press("ArrowDown")
//   await page.waitForSelector("tr.zA.zE.btb");
//   await page.click("tr.zA.zE.btb");
//   let data =await page.evaluate(()=>{
//     // div.ii.gt div.a3s.aiL
//      let doc = document.querySelector("h2[style='background:#00466a;margin:0 auto;width:max-content;padding:0 10px;color:#fff;border-radius:4px']").innerText;
//      console.log(doc);
//      return {
//        doc
//      }
//    })
//    let code = data.doc;
//    console.log(code);

// })((err) => {
//   console.log("Something went wrong");
// });

// async function getOTP() {
//   puppeteer.use(pluginStealth());
//   const browser = await puppeteer.launch({ executablePath:"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" ,headless: false, defaultViewport: null, args: [
//       '--incognito']});

//   const pages = await browser.pages();
//   await page.goto(
//     "https://accounts.google.com/AccountChooser?service=mail&continue=https://mail.google.com/mail/"
//   );
//   await page.waitForSelector(`input[type='email']`);

//   //your mail here
//     await page.type(`input[type='email']`, "yogeshdavel005@gmail.com", { delay: 75 });

//     await page.keyboard.press("Enter");

//     await page.waitForNavigation(["networkidle0", "load", "domcontentloaded"]);
//     await page.waitForTimeout(3550);
//     await page.waitForSelector(`input[type='password']`);

//     //your pass here
//     await page.type(`input[type='password']`, "9711462586", { delay: 15 });

//     await page.keyboard.press("Enter");
//     await page.waitForTimeout(15000);

//    
//     await page.waitForTimeout(6000);
//   await page.keyboard.press('ArrowDown');
//   await page.keyboard.press('ArrowDown');
//     await page.keyboard.press('Enter');
//     await page.waitForTimeout(7000);
//    let data =await page.evaluate(()=>{
//     // div.ii.gt div.a3s.aiL
//      let doc = document.querySelector("h2[style='background:#00466a;margin:0 auto;width:max-content;padding:0 10px;color:#fff;border-radius:4px']").innerText;
//      console.log(doc);
//      return {
//        doc
//      }
//    })
//    let code = data.doc;
//    await browser.close();
//     return code;

//     // await page.keyboard.press('ArrowDown');
//     // await page.keyboard.press('ArrowDown');

//   // await page1.click('div.VfPpkd-dgl2Hf-ppHlrf-sM5MNb > button')
// }
 function fun (){
  console.log("inside gmail")
}
export {fun};