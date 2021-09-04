import client from "graphql/client"
import { GET_PAGES } from "graphql/queries"
import AboutTemplate from "templates/About"

const AboutPage = () => {
  return <AboutTemplate />
}

// getStaticPaths => serve para gerar as urls em build time /about, /trip/petropolis
// getStaticProps => serve para buscar dados da página (props) - build time - estático
// getServerSideProps => serve para buscar dados da página (props) - runtime - toda requisição (bundle fica no server)
// getInitialProps => serve para buscar dados da página (props) - runtime - toda requisição (bundle também vem para o client) - hydrate
export const getStaticProps = async () => {
  const data = await client.request(GET_PAGES)

  console.log(data)

  return {
    props: {},
  }
}

export default AboutPage
