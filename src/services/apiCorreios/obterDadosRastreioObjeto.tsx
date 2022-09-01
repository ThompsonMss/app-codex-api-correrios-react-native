import { AxiosInstance } from 'axios';

interface ServerResponse<T> {
  objetos: Array<T>
}

interface DataResponseSuccess {
  codObjeto: string;
  eventos: Array<{
    codigo: string;
    descricao: string;
    dtHrCriado: string;
    tipo: string;
    unidade: {
      endereco: {
        cidade: string;
        uf: string;
      }
      tipo: string;
    };
    unidadeDestino?: {
      endereco: {
        cidade: string;
        uf: string;
      }
      tipo: string;
    };
    urlIcone: string;
  }>;
  tipoPostal: {
    categoria: string;
  },
}

interface DataResponseError {
  codObjeto: string;
  mensagem: string;
}

export interface InterfaceDadosObjeto {
  codigoObjeto: string;
  eventos: Array<InterfaceEventosObjeto>;
  typeOfDelivery: string;
}

export interface InterfaceEventosObjeto {
  codigoStatus: string;
  descricao: string;
  dataStatus: string;
  unidadeOrigem: {
    endereco: string;
    tipo: string;
  };
  unidadeDestino?: {
    endereco: string;
    tipo: string;
  };
  urlIcone: string;
}

export async function obterDadosRastreioObjeto (client: AxiosInstance, codRastreio: string): Promise<InterfaceDadosObjeto> {

  const dataResponse: ServerResponse<DataResponseSuccess | DataResponseError>
    = await client.get(`/sro-rastro/${codRastreio}`);

  const objeto = dataResponse.objetos.shift();

  if ('mensagem' in objeto)
    throw new Error(objeto.mensagem);

  const eventos: Array<InterfaceEventosObjeto> = objeto.eventos.map(item => {
    const evento: InterfaceEventosObjeto = {
      codigoStatus: item.codigo,
      descricao: item.descricao,
      dataStatus: item.dtHrCriado,
      urlIcone: item.urlIcone,
      unidadeOrigem: {
        endereco: `${item.unidade.endereco.cidade} - ${item.unidade.endereco.uf}`,
        tipo: item.unidade.tipo
      }
    }

    if (item.unidadeDestino) {
      evento.unidadeDestino = {
        endereco: `${item.unidadeDestino.endereco.cidade} - ${item.unidadeDestino.endereco.uf}`,
        tipo: item.unidadeDestino.tipo
      };
    }

    return evento;
  });

  return {
    codigoObjeto: objeto.codObjeto,
    eventos: eventos,
    typeOfDelivery: objeto.tipoPostal.categoria
  }

}