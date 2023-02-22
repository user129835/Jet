import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" style={{textAlign: "center"}}>
      <h1>Oops!</h1>
      <div style={{fontSize: 22}}>
        <p>Atvainojamies, kaut kas nogāja greizi.</p>
        <p>Pārbaudiet vai esat pareizi ievadījuši URL saiti, vai pārbaudiet interneta savienojumu.</p>
      </div> 
      <p>
        <i>ERROR: <i style={{color: 'red'}}>{error.statusText || error.message}</i></i>
      </p><br/>
      <img src="https://www.meraksystems.com/assets/img/blog/recent/2019/platespinning.gif"/><br/>
      
    </div>
  );
}