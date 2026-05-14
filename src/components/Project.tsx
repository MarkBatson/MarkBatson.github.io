interface Props {
    screenshot: string,
    name: string,
    bullets: Array<string>,
    imageRight?: boolean
}

function Project({ screenshot, name, bullets, imageRight = false }: Props) {
  return (
  <div className="p-5">
    <h2 className={`text-3xl mb-2.5 pb-1 border-b-2 border-light-blue ${imageRight ? 'text-right' : ''}`}>{name}</h2>
    <div className={`flex gap-5 flex-wrap lg:flex-nowrap ${imageRight ? 'flex-row-reverse' : ''}`}>
      <img src={screenshot} className=" w-100 object-scale-down"/>
      <ul className="font-body font-extralight text-sm pl-4 marker:text-light-blue">
        {
          bullets.map((bullet) => (
            <li key={name} className="list-disc pb-3">
              {bullet}
            </li>
          ))
        }
      </ul>
    </div>
  </div>
  );

}

export default Project;
