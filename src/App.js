import "./js/app.js";

function App() {
  return (
    <>
      <Splash />
      <Main />
      <Footer />
    </>
  );
}

function Splash() {
  return (
    <div className="splash active">
      <div className="splash-icon"></div>
    </div>
  );
}

function Header() {
  return (
    <div className="text-center mt-4">
      <h1 className="h2">Crie sua conta</h1>
      <p className="lead">
        Comece a usar o getFast agora mesmo. Crie sua conta e gerencie seus
        usuários e integrações.
      </p>
    </div>
  );
}

function Main() {
  return (
    <main className="main h-100 w-100">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <Header />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Card() {
  return (
    <div className="col-md-12">
      <div className="card">
        <div className="card-header"></div>
        <div className="card-body">
          <Form />
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <form>
      <div className="row">
        <Input
          options={{
            id: "name",
            label: "Nome",
            type: "text",
            placeholder: "Seu nome ou da sua empresa",
          }}
        />
      </div>
      <div className="row">
        <Input
          options={{
            id: "email",
            label: "Email",
            type: "email",
            placeholder: "email@exemplo.com.br",
            md: "col-md-6",
          }}
        />
        <Input
          options={{
            id: "password",
            label: "Senha",
            type: "password",
            placeholder: "Senha",
            md: "col-md-6",
          }}
        />
      </div>
      <div className="row">
        <Input
          options={{
            id: "cpf",
            label: "CPF",
            type: "text",
            placeholder: "000.000.000-00",
            md: "col-md-6",
            dataMask: "000.000.000-00",
          }}
        />
        <Input
          options={{
            id: "cnpj",
            label: "CNPJ",
            type: "text",
            placeholder: "00.000.000/0000-00",
            md: "col-md-6",
            dataMask: "00.000.000/0000-00",
          }}
        />
      </div>
      <div className="row">
        <Input
          options={{
            id: "telephone",
            label: "Celular",
            type: "text",
            placeholder: "(00) 00000-0000",
            md: "col-md-5",
            dataMask: "(00) 00000-0000",
          }}
        />

        <Input
          options={{
            id: "cep",
            label: "CPF",
            type: "text",
            placeholder: "00000-000",
            md: "col-md-4",
            dataMask: "00000-000",
          }}
        />

        <Input
          options={{
            id: "number",
            label: "Número",
            type: "text",
            placeholder: "15",
            md: "col-md-3",
          }}
        />
      </div>
      <div className="row">
        <div className="mb-3 col-md-8">
          <label htmlFor="address">Endereço</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            placeholder="Rua Mariano Procópio"
          />
        </div>
        <div className="mb-3 col-md-4">
          <label htmlFor="neighborhood">Bairro</label>
          <input
            type="text"
            className="form-control"
            id="neighborhood"
            name="neighborhood"
            placeholder="Jardim Ângela"
          />
        </div>
      </div>
      <div className="row">
        <div className="mb-3 col-md-6">
          <label htmlFor="city">Cidade</label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            placeholder="Juíz de Fora"
          />
        </div>
        <div className="mb-3 col-md-3">
          <label htmlFor="state">Estado</label>
          <select id="state" name="state" className="form-control">
            <option defaultValue={"SP"}>Escolha...</option>
            <option>...</option>
          </select>
        </div>
        <div className="mb-3 col-md-3">
          <label htmlFor="complement">Complemento</label>
          <input
            type="text"
            className="form-control"
            id="complement"
            name="complement"
            placeholder="Bloco 2, apto 101"
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Criar conta
      </button>
    </form>
  );
}

function Input({ options }) {
  return (
    <div className={`mb-3 ${options.md ? options.md : ""}`}>
      <label htmlFor={options.id}>{options.label}</label>
      <input
        type={options.type}
        className="form-control"
        id={options.id}
        name={options.id}
        placeholder={options.placeholder}
        data-mask={options.dataMask ? options.dataMask : ""}
      />
    </div>
  );
}

function Footer() {
  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <symbol viewBox="0 0 512 512" id="ion-ios-pulse-strong">
            <path d="M448 273.001c-21.27 0-39.296 13.999-45.596 32.999h-38.857l-28.361-85.417a15.999 15.999 0 0 0-15.183-10.956c-.112 0-.224 0-.335.004a15.997 15.997 0 0 0-15.049 11.588l-44.484 155.262-52.353-314.108C206.535 54.893 200.333 48 192 48s-13.693 5.776-15.525 13.135L115.496 306H16v31.999h112c7.348 0 13.75-5.003 15.525-12.134l45.368-182.177 51.324 307.94c1.229 7.377 7.397 11.92 14.864 12.344.308.018.614.028.919.028 7.097 0 13.406-3.701 15.381-10.594l49.744-173.617 15.689 47.252A16.001 16.001 0 0 0 352 337.999h51.108C409.973 355.999 427.477 369 448 369c26.511 0 48-22.492 48-49 0-26.509-21.489-46.999-48-46.999z"></path>
          </symbol>
        </defs>
      </svg>
      <script src="./js/app.js"></script>
    </>
  );
}

export default App;
