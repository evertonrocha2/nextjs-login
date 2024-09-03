import { getCookie } from "cookies-next";
import { verifica } from "../services/user";
import { redirect } from "next/dist/server/api-utils";
export default function Home() {
  return <div>Página segura - Perfil do usuário</div>;
}

export const getServerSideProps = async ({ req, res }) => {
  try {
    const token = getCookie("authorization", { req, res });
    console.log(token);
    if (!token) throw new Error("Token não encontrado");
    verifica(token);
    return {
      props: {},
    };
  } catch (err) {
    return {
      redirect:{
        permanent: false,
        destination: '/login',
    },
      props: {},
    };
  }
};
