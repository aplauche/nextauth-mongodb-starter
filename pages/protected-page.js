import { hasToken } from '../utils/checkUser'

const ProtectedPage = () => {
  return (
    <div>
      This page is protected.
    </div>
  )
}

export default ProtectedPage


export async function getServerSideProps(context) {

  const token = await hasToken(context.req)

  if(!token){
      return {
          redirect: {
              destination: '/',
              permanent: false
          }
      }
  }

  return { props: {}}
}
