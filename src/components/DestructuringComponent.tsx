export interface Props {
    title: string
    content: string
    comentsQty: number
    tags: string[]
    category: Category
}

/**
 * Aplicando enum no componente
 */

export enum Category {
  JS = "JavaScript",
  TS = "TypeScript",
  P = "Python"
}

export default function DestructuringComponent ({title, content, comentsQty, tags, category}: Props) {
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Quantidade de comentários: {comentsQty}</p>
        <div>
          {tags.map((tag) => (
            <span>#{tag}</span>
          ))}
        </div>
        <h4>{category}</h4>
    </div>
  );
}
