import { useEffect } from "react";

export default function useConsoleMsg() {
  useEffect(() => {
    console.log("%cWell hello there. Looks like you're interested in what I do. Feel free to contact me. Just run contact()", "background-color: black; color: lime; padding: 5px 50px 5px 20px; font-family: 'Courier New'");

    (window as any).contact = function contact() {
      window.location.href = '/#contact'
    }
  }, []);
}