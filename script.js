const info = {
  Name: "Geoffrey Belcher",
  Age: "22",
  Location: "Halifax, Canada",
  Langs: "C#, Java, JavaScript, Python",
  Education: "Dalhousie University, Appleby College",
  Interests: "Climbing, programming, music.",
  Resume: "View or Download",
  Links: {
    Email: "geoffreybelcher@icloud.com",
    Blog: "Link to my blog.",
    Socials: "Github, Linkedin",
    Media: "Soundcloud, YouTube",
  }
};

const shell = {
    User: "geoff",
    Computer: "rey", 
    postFix: ":~$"
}

let shellPrint = document.getElementById("shell");
let infoPrint = document.getElementById("info");

for (let x in info) {
    infoPrint.innerHTML +=
    '<span class="label">' + x + ":</span> " + info[x] + "<br>";
}

shellPrint.innerHTML = "<span>" + shell["User"] + "</span>@" + shell["Computer"] + shell["postFix"] + " neofetch";