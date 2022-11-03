interface HomeProps
{
  count: number;
}

export const getServerSideProps = async () =>
{
  const response = await fetch('http://192.168.0.100:3333/pools/count')
  const data = await response.json()

  return { 
    props: 
    {
      count: data.count
    } 
  }
}

export default function Home(props: HomeProps) 
{  
  return (
    <h1>Contagem: {props.count}</h1>
  )
}
