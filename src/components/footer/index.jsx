import { swLinks } from "../header";

export const Footer = () => {
   return (
      <>
         <footer>
            <p className="fP">follow star wars:</p>
            <div className="fLinks">
               {swLinks.map((link) => (
               <a
                  key = {link.name}
                  className="link"
                  href={link.url}
                  target="_blank"
                  alt={link.name}
                  rel="noreferrer"
               >
                  {link.component}
               </a>))} 
            </div>
            <div className="fText">
               &copy; Powered by nFactorial
            </div>
         </footer>
      </>

)};