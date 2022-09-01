import { useEffect, useState } from "react";
import { InterfaceDadosObjeto } from "src/services/apiCorreios/obterDadosRastreioObjeto";
import { apiCorreios } from "../services/apiCorreios";

export function useSearchObject(codeObject: string) {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [object, setObject] = useState<InterfaceDadosObjeto | null>(null);

  useEffect(() => {
    apiCorreios.obterDadosRastreioObjeto(codeObject).then(data => {
      setObject(data);
    }).catch(error => {
      setError(error.message);
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  return { loading, error, object }

}