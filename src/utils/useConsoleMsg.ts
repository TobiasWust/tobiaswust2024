import { useEffect } from "react";

export default function useConsoleMsg() {
  useEffect(() => {
    console.log("%cWell hello there. Looks like you're interested in what I do. Feel free to contact me. Just run contact() or do want to see how I built this website? check github()", "background-color: black; color: lime; padding: 5px 50px 5px 20px; font-family: 'Courier New'");

    (window as any).contact = function contact() {
      console.log("%cNice. The best way to contact me is my contact form.", "background-color: black; color: lime; padding: 5px 50px 5px 20px; font-family: 'Courier New'");
      window.location.href = '/#contact'
    };

    (window as any).github = function github() {
      console.log("%cThank you for being interested in my code. Check it out on github https://github.com/TobiasWust/tobiaswust2024", "background-color: black; color: lime; padding: 5px 50px 5px 20px; font-family: 'Courier New'");
      window.location.href = '/#contact'
    };
  }, []);
}
