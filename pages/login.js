import Button from "../src/components/button/button";
import Input from "../src/components/input/input";
import LoginCard from "../src/components/loginCard/loginCard";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import styles from "../styles/Login.module.css";
import Link from "next/link";
import { useState } from "react";
export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();

  const handleFormEdit = (event, name) => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  const handleForm = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch(`/api/user/login`, {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const json = await response.json();
      if (response.status !== 200) throw new Error(json);
      setCookie("authorization", json);
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.background}>
      <LoginCard title="Entre em sua conta">
        <form onSubmit={handleForm} className={styles.form}>
          <Input
            type="text"
            placeholder="Seu e-mail"
            value={formData.email}
            required
            onChange={(e) => handleFormEdit(e, "email")}
          />
          <Input
            type="password"
            placeholder="Sua senha"
            value={formData.password}
            required
            onChange={(e) => handleFormEdit(e, "password")}
          />
          <Button>Entrar</Button>
          <Link href="/cadastro">Não tem uma conta? Crie uma!</Link>
        </form>
      </LoginCard>
    </div>
  );
}
