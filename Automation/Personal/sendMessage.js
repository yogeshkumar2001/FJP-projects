const puppeteer = require("puppeteer");
// const id = "_kajalLover18_";
// const pw = "123456789@@";
const id = "yogeshdavel005@gmail.com"
const passowrd = "9711462586";

// const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: ["--start-maximized"],
    });
    //   console.log("code run");
    const pages = await browser.pages();
    let tab = pages[0];
    await tab.goto("https://mail.google.com/mail/u/0/#inbox");
    await tab.waitForSelector('input[name="email"]', { visible: true });
    await tab.type('input[name="email"]', id);
    // await tab.waitForSelector('input[name="password"]', { visible: true });
    // await tab.type('input[name="password"]', pw);
    // await tab.click('button[type="submit"]');
    // await tab.waitForSelector("a[class='xWeGp']", { visible: true });
    // await tab.click("a[class='xWeGp']");
    // await tab.waitForSelector("button[class='aOOlW   HoLwm ']", {
    //   visible: true,
    // });
    // await tab.click("button[class='aOOlW   HoLwm ']");
    // await tab.waitForSelector("button[class='sqdOP  L3NKy   y3zKF     ']", {
    //   visible: true,
    // });
    // await tab.click("button[class='sqdOP  L3NKy   y3zKF     ']");
    // await tab.waitForSelector('input[name="queryBox"]', { visible: true });
    // // aryakajal2001
    // await tab.type('input[name="queryBox"]', "aryakajal2001");
    // await tab.waitForSelector(".-qQT3", { visible: true });
    // await tab.click(".-qQT3");
    // await tab.waitForSelector(
    //   'button[class="sqdOP yWX7d    y3zKF   cB_4K  "]',
    //   { visible: true }
    // );
    // await tab.click('button[class="sqdOP yWX7d    y3zKF   cB_4K  "]');
    // await tab.waitForSelector('textarea[placeholder="Message..."]', {
    //   visible: true,
    // });
    // for (let i = 0; i <= 71; i++) {
    //   await tab.type('textarea[placeholder="Message..."]', `IloveYou🙈${i}❤️`);
    // }
    // await tab.waitForSelector(
    //   "div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm.JI_ht > button",
    //   { visible: true }
    // );
    // await tab.click("div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm.JI_ht > button");
    // for (let i = 72; i <= 139; i++) {
    //   await tab.type('textarea[placeholder="Message..."]', `IloveYou🙈${i}❤️`);
    // }
    // await tab.waitForSelector(
    //   "div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm.JI_ht > button",
    //   { visible: true }
    // );
    // await tab.click("div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm.JI_ht > button");
    // for (let i = 140; i <= 208; i++) {
    //   await tab.type('textarea[placeholder="Message..."]', `IloveYou🙈${i}❤️`);
    // }
    // await tab.waitForSelector(
    //   "div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm.JI_ht > button",
    //   { visible: true }
    // );
    // await tab.click("div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm.JI_ht > button");

    // for (let i = 208; i <= 278; i++) {
    //   await tab.type('textarea[placeholder="Message..."]', `IloveYou🙈${i}❤️`);
    // }
    // await tab.waitForSelector(
    //   "div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm.JI_ht > button",
    //   { visible: true }
    // );
    // await tab.click("div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm.JI_ht > button");
    // for (let i = 279; i <= 348; i++) {
    //   await tab.type('textarea[placeholder="Message..."]', `IloveYou🙈${i}❤️`);
    // }
    // await tab.waitForSelector(
    //   "div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm.JI_ht > button",
    //   { visible: true }
    // );
    // await tab.click("div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm.JI_ht > button");
    // for (let i = 349; i <= 418; i++) {
    //   await tab.type('textarea[placeholder="Message..."]', `IloveYou🙈${i}❤️`);
    // }
    // await tab.waitForSelector(
    //   "div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm.JI_ht > button",
    //   { visible: true }
    // );
    // await tab.click("div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm.JI_ht > button");
    // for (let i = 419; i <= 488; i++) {
    //   await tab.type('textarea[placeholder="Message..."]', `IloveYou🙈${i}❤️`);
    // }
    // await tab.waitForSelector(
    //   "div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm.JI_ht > button",
    //   { visible: true }
    // );
    // await tab.click("div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm.JI_ht > button");
    // for (let i = 489; i <= 500; i++) {
    //   await tab.type('textarea[placeholder="Message..."]', `IloveYou🙈${i}❤️`);
    // }
    // await tab.waitForSelector(
    //   "div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm.JI_ht > button",
    //   { visible: true }
    // );
    // await tab.click("div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm.JI_ht > button");
  } 
  catch (error) {
    console.log(error);
  }
})();
