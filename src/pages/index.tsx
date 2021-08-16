import dynamic from "next/dynamic"

const Map = dynamic(() => import("components/map"), { ssr: false })

const Home = () => {
  return (
    <Map
      places={[
        {
          id: "2",
          name: "São Vicente",
          slug: "sãovicente",
          location: {
            latitude: 18,
            longitude: -4,
          },
        },
      ]}
    />
  )
}

export default Home
