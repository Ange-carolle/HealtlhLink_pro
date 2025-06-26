import React, { useContext, useState } from "react";
import { FaApple, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../assets/images/background.png";
import logo from "../assets/images/logo.png";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const { login, loading } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login(email, password);
      alert("Connexion réussie !");
      navigate("/");
    } catch (err) {
      setError(err.message || "Échec de la connexion");
    }
  };
  return (
    <div
      className="bg-cover bg-center w-full h-screen "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex items-center">
        <img src={logo} className="h-20 w-50" />
        <h1 className="text-[50px] font-bold bg-gradient-to-r from-[#3A6158] to-[#3B947F] bg-clip-text text-transparent">
          HealthLink
        </h1>
      </div>
      <div className="h-[80vh] flex flex-col justify-center items-center">
        <form
          action=""
          className="w-[490px] p-10 flex flex-col rounded-[10px] shadow-[2px_2px_#426c62] bg-[#3a6158]/70 backdrop-blur-md box-border"
        >
          <div className="flex flex-col gap-2.5 mb-[10px]">
            <label className="text-[20px] text-white font-bold" htmlFor="">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[52px] rounded-[20px] border-none bg-[#d9d9d9] box-border p-4 outline-none"
              type="email"
            />
          </div>
          <div className="flex flex-col gap-2.5 mb-[10px]">
            <label className="text-[20px] text-white font-bold" htmlFor="">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-[52px] rounded-[20px] border-none bg-[#d9d9d9] box-border p-4 outline-none"
              type="password"
            />
            <Link to="/welcome" className="form_submit">
              J’ai oublié mon mot de passe
            </Link>
          </div>
          <div className="flex justify-center m-2 items-center">
            <button
              type="button"
              onClick={handleLogin}
              disabled={loading}
              className="bg-[#d9d9d9] rounded-full w-[50%] font-bold text-[#3a6158] p-4 mb-4"
            >
              {loading ? "Connexion..." : "Se connecter"}
            </button>
          </div>
          {error && (
            <div className="bg-red-100 boder boder-red-400 test-red-700 px-4 py-3 rounded">
              <p>{error}</p>
            </div>
          )}

          <div className="flex w-full justify-center items-center h-[5px] gap-5">
            <hr className="w-[50%] bg-[#142420] border-none h-[3px]" />
            <p className="">ou</p>
            <hr className="w-[50%] bg-[#142420] border-none h-[3px]" />
          </div>
          <p className="text-white text-center mt-2">Se connecter avec</p>
          <div className="flex justify-between items-center">
            <button className="flex items-center gap-2 text-white font-bold">
              <div className="bg-[#d9d9d9] p-2 rounded-md flex items-center justify-center">
                <FaApple className="text-[#3a6158] text-xl" />{" "}
                
              </div>
              <span>Apple </span>
            </button>
            <button className="flex items-center gap-2 text-white font-bold">
              <div className="bg-[#d9d9d9] p-2 rounded-md flex items-center justify-center">
                <FaGoogle className="text-[#3a6158] text-xl" />
              </div>
              <span>Google</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
