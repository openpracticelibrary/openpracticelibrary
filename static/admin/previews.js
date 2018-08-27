const Jumbotron = ({ data }) => (
  <div class="jumbotron">
    <img class="jumbotron-img" src={data.jumbotron} alt={data.jumbotronAlt}/>
  </div>
)

const Header = ({ data }) => (
  <header class="post-header">
    <section class="article-heading">
      <div class="inline-block">
        <h2 class="practice-title">{data.title}</h2>
        {data.subtitle ? <p class="practice-subtitle fix-width">{data.subtitle}</p> : null}
      </div>
      <div class="inline-block mobius-loop-position">
        <img
          class="loop-img"
          src={`/images/loop-positions/${data.area}.svg`}
          alt={`${data.area} loop position`}
        />
      </div>
    </section>
    {data.jumbotron ? <Jumbotron data={data}/> : null}
  </header>
)

const HowToItem = ({ icon, label, value }) => (
  <div class="how-to-box-item">
    <div class={`icon-${icon} how-to-box-icon`}></div>
    <p class="how-to-box-text">
      <i>{label}</i>
    </p>
    <p class="how-to-box-text">{value}</p>
  </div>
)

const HowTo = ({ data }) => (
  <div class="how-to-box">
    <HowToItem icon="people" label="No. People" value={data.people}/>
    <HowToItem icon="time" label="Time" value={data.time}/>
    <HowToItem icon="stats" label="Difficulty" value={data.difficulty}/>
    {data.participants
      ? <HowToItem icon="speach" label="Participants" value={data.participants.join(', ')}/>
      : null
    }
  </div>
)


const PracticePreview = ({ entry, widgetFor }) => {
  const data = entry.get('data').toJS()
  return (
    <div>
      <article class="post practice">
        <Header data={data}/>
        {data.people && data.time && data.difficulty ? <HowTo data={data}/> : null}
        {widgetFor('body')}
      </article>
      <a class="tile">
        <img class="tile-img" src={data.icon || '/images/stock-tiles/1.jpeg'} alt="hello!"/>
        <h2 class="tile-heading">{data.title}</h2>
      </a>
    </div>
  )
}

CMS.registerPreviewTemplate('practice', PracticePreview)
