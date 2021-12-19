// este Import me permite usar los URL PARAM enviados desde la Route.
import { useParams } from "react-router-dom";

function Invoice(){
    let params = useParams();
    // el param "invoiceId" me esta llegando desde la Route en el archivo src/index.js
    return <h2>Invoice {params.invoiceId}</h2>;
}

export {Invoice};