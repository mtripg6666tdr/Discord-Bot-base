const discord = require("discord.js");
require("http").createServer((_, res)=>{
  res.end("Discord bot is ready now");
}).listen(8080);
const prefix = "!";
const client = new discord.Client();
client.on("ready",()=>{
  console.log("Logged in as " + client.user.tag);
  client.user.setActivity(client.guilds.cache.size + "サーバーで稼働中", {type: "PLAYING"}).catch(console.error);
}).on("message", async(message)=>{
  if(message.author.bot) return;
  if(message.content === "にゃーん") message.channel.send("ฅ(○•ω•○)ฅﾆｬ～ﾝ❣").catch(console.error);
  if(message.content.startsWith(prefix)){
    const _spl = message.content.trim().split(' ');
    const command = _spl[0].slice(1);
    const args = _spl.slice(1);
    switch(command){
      case "ping":{
        message.channel.send("pingは" + client.ws.ping + "ミリ秒です").catch(console.error);
      }break;
    }
  }
}).login(process.env.TOKEN);