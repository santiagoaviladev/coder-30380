
const luxonDateTime = luxon.DateTime;
init();

function init()
{
  crearDateTimeLocal();
  crearDateTimeConArgumentos();
  crearDateAPartirDeUnObjeto();

}

function crearDateTimeLocal()
{
  const dt = luxonDateTime.local();
  console.log(dt);
}

function crearDateTimeConArgumentos()
{
  const dt = luxonDateTime.local(2022,1,25,12,10);
  console.log(dt);
}

function crearDateAPartirDeUnObjeto()
{
  const dt = luxonDateTime.fromObject(
    {day: 12, month:3, year:2022},
    {zone: 'America/Bogota'}
  );
  console.log(dt);
}