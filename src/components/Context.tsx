import { useContext } from 'react';
import { AppContext } from '../App';

export default function Context()  {

    const details = useContext(AppContext);

  return <>
  {details && 
    <div>
        <h1>Linguagem {details.language}</h1>
        <h2>Framework {details.framework}</h2>
        <h3>Projetos {details.projects}</h3>
    </div>
  }
  </>
};
